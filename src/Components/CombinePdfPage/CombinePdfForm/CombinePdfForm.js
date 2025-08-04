"use client";
import React, { useState, useRef, useEffect } from "react";
import { PDFDocument } from "pdf-lib"; // Make sure pdf-lib is installed

const CombinePdfForm = ({dict}) => {
  const [files, setFiles] = useState([]);
  const [processedFiles, setProcessedFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const fileInputRef = useRef(null);

  // Placeholder for processing single files (handle encryption etc.)
  // You should implement your actual processSingleFile logic here
  const processSingleFile = async (file, index) => {
    try {
      // Read file as ArrayBuffer
      const buffer = await file.arrayBuffer();

      // For demo: Assume file is not encrypted and return info
      // Your encryption check & password handling logic goes here
      const pdfDoc = await PDFDocument.load(buffer);
      const pageCount = pdfDoc.getPageCount();

      return {
        buffer,
        originalFile: file,
        wasEncrypted: false,
        pageCount,
      };
    } catch (e) {
      // If encrypted or error, handle accordingly (e.g. ask password)
      setError(`Error processing file "${file.name}": ${e.message}`);
      return null;
    }
  };

  const mergePDFsWithPDFLib = async () => {
    try {
      setIsProcessing(true);
      setError(null);
      setProgress(0);

      if (typeof PDFDocument === "undefined") {
        throw new Error("PDF-lib not available");
      }

      const processedFilesArray = [];

      for (let i = 0; i < files.length; i++) {
        setProgress((i / files.length) * 40);

        if (processedFiles[i]) {
          processedFilesArray.push(processedFiles[i]);
          continue;
        }

        const processedFile = await processSingleFile(files[i], i);

        if (!processedFile) {
          setIsProcessing(false);
          setProgress(0);
          return;
        }

        processedFilesArray.push(processedFile);
      }

      setProcessedFiles(processedFilesArray);

      setProgress(50);

      const mergedPdf = await PDFDocument.create();

      setProgress(60);

      for (let i = 0; i < processedFilesArray.length; i++) {
        setProgress(60 + (i / processedFilesArray.length) * 35);

        const processedFile = processedFilesArray[i];
        try {
          const sourcePdf = await PDFDocument.load(processedFile.buffer);
          const pageCount = sourcePdf.getPageCount();
          const pageIndices = Array.from(
            { length: pageCount },
            (_, idx) => idx
          );
          const copiedPages = await mergedPdf.copyPages(sourcePdf, pageIndices);

          copiedPages.forEach((page) => mergedPdf.addPage(page));
        } catch (fileError) {
          console.error(
            `Error merging ${processedFile.originalFile.name}:`,
            fileError
          );
          throw new Error(
            `Cannot merge ${processedFile.originalFile.name}. It may be corrupted.`
          );
        }
      }

      setProgress(95);

      const mergedPdfBuffer = await mergedPdf.save();

      setProgress(100);

      const blob = new Blob([mergedPdfBuffer], { type: "application/pdf" });
      const downloadUrl = URL.createObjectURL(blob);

      const timestamp = new Date()
        .toISOString()
        .slice(0, 19)
        .replace(/[:\-]/g, "")
        .replace("T", "_");
      const filename = `merged_${timestamp}.pdf`;

      const encryptedCount = processedFilesArray.filter(
        (f) => f.wasEncrypted
      ).length;
      const totalPages = processedFilesArray.reduce(
        (sum, f) => sum + f.pageCount,
        0
      );

      setResult({
        filename,
        downloadUrl,
        fileCount: files.length,
        size: mergedPdfBuffer.byteLength,
        encryptedFilesProcessed: encryptedCount,
        totalPages,
      });
    } catch (err) {
      console.error("PDF merge error:", err);

      let errorMessage = err.message;
      if (err.message.includes("PDF-lib not available")) {
        errorMessage =
          "PDF processing library not available. Please refresh the page and try again.";
      } else if (
        err.message.includes("memory") ||
        err.message.includes("size")
      ) {
        errorMessage =
          "Files too large to process in browser. Try smaller files or fewer files at once.";
      } else if (err.message.includes("Invalid PDF")) {
        errorMessage = "One or more files are not valid PDF documents.";
      } else if (err.message.includes("corrupted")) {
        errorMessage = "One or more PDF files appear to be corrupted.";
      } else if (!errorMessage || errorMessage.includes("undefined")) {
        errorMessage =
          "Failed to merge PDFs. Please ensure all files are valid PDFs and try again.";
      }

      setError(errorMessage);
    } finally {
      setIsProcessing(false);
      setProgress(0);
    }
  };

  // File validation and adding
  const addFiles = (selectedFiles) => {
    setError(null);
    const validFiles = selectedFiles.filter((file) => {
      if (file.type !== "application/pdf") {
        setError("Only PDF files are allowed");
        return false;
      }
      if (file.size > 50 * 1024 * 1024) {
        setError("File size must be less than 50MB");
        return false;
      }
      return true;
    });
    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
      setResult(null);
    }
  };

  const handleFileSelect = (e) => {
    addFiles(Array.from(e.target.files));
    e.target.value = null; // reset input
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addFiles(Array.from(e.dataTransfer.files));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setProcessedFiles((prev) => prev.filter((_, i) => i !== index));
    setResult(null);
  };

  const moveFileUp = (index) => {
    if (index === 0) return;
    setFiles((prev) => {
      const newFiles = [...prev];
      [newFiles[index - 1], newFiles[index]] = [
        newFiles[index],
        newFiles[index - 1],
      ];
      return newFiles;
    });
    setProcessedFiles((prev) => {
      const newProcessed = [...prev];
      [newProcessed[index - 1], newProcessed[index]] = [
        newProcessed[index],
        newProcessed[index - 1],
      ];
      return newProcessed;
    });
    setResult(null);
  };

  const moveFileDown = (index) => {
    if (index === files.length - 1) return;
    setFiles((prev) => {
      const newFiles = [...prev];
      [newFiles[index], newFiles[index + 1]] = [
        newFiles[index + 1],
        newFiles[index],
      ];
      return newFiles;
    });
    setProcessedFiles((prev) => {
      const newProcessed = [...prev];
      [newProcessed[index], newProcessed[index + 1]] = [
        newProcessed[index + 1],
        newProcessed[index],
      ];
      return newProcessed;
    });
    setResult(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length < 2) {
      setError("Please select at least 2 PDF files to merge");
      return;
    }
    await mergePDFsWithPDFLib();
  };

  const handleDownload = () => {
    if (result?.downloadUrl) {
      const link = document.createElement("a");
      link.href = result.downloadUrl;
      link.download = result.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        URL.revokeObjectURL(result.downloadUrl);
      }, 1000);
    }
  };

  const clearFiles = () => {
    setFiles([]);
    setProcessedFiles([]);
    setResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (result?.downloadUrl) URL.revokeObjectURL(result.downloadUrl);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // Cleanup blob URLs on unmount
  useEffect(() => {
    return () => {
      if (result?.downloadUrl) {
        URL.revokeObjectURL(result.downloadUrl);
      }
    };
  }, [result]);

  return (
    <>
      <section
        id="merge-tool"
        className="px-4 pt-8 mx-auto max-w-4xl sm:px-6 lg:px-8"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="p-6 mb-6 outerbox bg-white rounded-lg border border-gray-200 shadow-md transition-colors dark:bg-gray-800 dark:border-gray-700">
          <div className="flex  justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {dict.combinePdf.title}
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div
              className="p-8 innerbox mb-6 text-center bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed transition-colors dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 dark:bg-gray-700/50 cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <svg
                className="mx-auto mb-4 w-12 h-12 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="mb-2 text-lg text-gray-600 dark:text-gray-300">
                {dict.combinePdf.dragDrop}
              </p>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                {dict.combinePdf.clickBrowse}
              </p>
              <input
                type="file"
                multiple
                accept="application/pdf"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileSelect}
              />
              <label
                htmlFor="file-upload"
                className="inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded-md transition-colors cursor-pointer dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600"
              >
                {dict.combinePdf.selectFiles}
              </label>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                {dict.combinePdf.maxSize}
              </p>
            </div>

            {files.length > 0 && (
              <div className="mb-6 ">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Selected Files ({files.length})
                  </h3>
                  <button
                    onClick={clearFiles}
                    disabled={isProcessing}
                    type="button"
                    className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                  >
                    Clear All
                  </button>
                </div>
                <div className="overflow-y-auto  space-y-2 max-h-60">
                  {files.map((file, i) => {
                    return (
                      <div
                        key={i}
                        className="flex justify-between innerbox items-center p-3 bg-gray-50 rounded-md border border-gray-200 dark:bg-gray-700 dark:border-gray-600"
                      >
                        <div className="flex flex-1 items-center">
                          <div className="flex flex-col mr-2">
                            <button
                              type="button"
                              onClick={() => moveFileUp(i)}
                              disabled={isProcessing || i === 0}
                              className="p-1 text-black dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50"
                            >
                              <p>
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </p>
                            </button>
                            <button
                              onClick={() => moveFileDown(i)}
                              disabled={isProcessing || i === files.length - 1}
                              type="button"
                              className="p-1  text-black dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50"
                            >
                              <p>
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </p>
                            </button>
                          </div>
                          <div className="flex items-center mr-3">
                            <svg
                              className="w-5 h-5 text-red-500 dark:text-red-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                {file.name}
                              </p>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          disabled={isProcessing}
                          className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 disabled:opacity-50 cursor-pointer"
                          title="Delete"
                        >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                              ></path>
                            </svg>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {error && (
              <p className="mb-4 text-red-600 dark:text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={isProcessing || files.length < 2}
              className={`px-4 py-3 w-full font-semibold text-white rounded-md transition-colors submitbutton  
    ${
      isProcessing || files.length < 2
        ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 cursor-pointer"
    }`}
            >
              {isProcessing
                ? `Processing... ${Math.round(progress)}%`
                : `${dict.combinePdf.combineButton} (${files.length} ${dict.combinePdf.filesCount}${
                    files.length !== 1 ? "s" : ""
                  })`}
            </button>
          </form>
        </div>
      </section>

      {/* AFTER SUBMISSION MODAL   */}
      <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
        {result && (
          <div className="p-6 mb-6 bg-green-50 rounded-lg border border-green-200 dark:bg-green-900/20 dark:border-green-800">
            <div className="flex items-center mb-4">
              <svg
                className="mr-2 w-6 h-6 text-green-500 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-lg font-semibold !text-green-800 dark:text-green-300">
                PDFs Combined Successfully!
              </h3>
            </div>
            <div className="mb-4 space-y-2 text-sm !text-green-700 dark:text-green-300">
              <p className="!text-green-700">
                <strong className="!text-green-700">Files merged:</strong>{" "}
                {result.fileCount}
              </p>
              <p className="!text-green-700">
                <strong className="!text-green-700">Total pages:</strong>{" "}
                {result.totalPages}
              </p>
              {result.encryptedFilesProcessed > 0 && (
                <p className="!text-green-700">
                  <strong className="!text-green-700">
                    Encrypted files processed:
                  </strong>{" "}
                  {result.encryptedFilesProcessed}
                </p>
              )}

              <p className="!text-green-700">
                <strong className="!text-green-700">Filename:</strong>{" "}
                {result.filename}
              </p>
              <p className="!text-green-700">
                <strong className="!text-green-700">Size:</strong> (
                {formatFileSize(result.size)})
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-4 py-2 text-white bg-green-600 rounded-md transition-colors dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-600 cursor-pointer"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-4-4m4 4l4-4m-4-4V3"
                ></path>
              </svg>
              Download Merged PDF
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CombinePdfForm;
