import React, { useRef, useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (imageDataUrl: string) => void;
  onImageRemove: () => void;
  uploadedImage: string | null;
  isDark: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageUpload,
  onImageRemove,
  uploadedImage,
  isDark
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileSelect = (file: File) => {
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onImageUpload(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`rounded-xl border-2 transition-all duration-300 ${
      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } shadow-lg`}>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <ImageIcon className="w-5 h-5 mr-2" />
          Upload Image
        </h3>
        
        {!uploadedImage ? (
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 cursor-pointer ${
              isDragOver
                ? isDark 
                  ? 'border-purple-400 bg-purple-500/10' 
                  : 'border-purple-500 bg-purple-50'
                : isDark
                  ? 'border-gray-600 hover:border-gray-500 bg-gray-700/50'
                  : 'border-gray-300 hover:border-gray-400 bg-gray-50'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleClick();
              }
            }}
            aria-label="Upload image"
          >
            <Upload className={`w-12 h-12 mx-auto mb-4 ${
              isDragOver 
                ? 'text-purple-500' 
                : isDark ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <p className={`text-lg font-medium mb-2 ${
              isDragOver 
                ? 'text-purple-500' 
                : isDark ? 'text-gray-200' : 'text-gray-700'
            }`}>
              {isDragOver ? 'Drop your image here' : 'Drop image here or click to browse'}
            </p>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Supports JPG and PNG files up to 10MB
            </p>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png"
              onChange={handleFileInputChange}
              className="hidden"
              aria-label="Select image file"
            />
          </div>
        ) : (
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={onImageRemove}
              className={`absolute top-2 right-2 p-2 rounded-full transition-colors duration-200 ${
                isDark 
                  ? 'bg-gray-900/80 hover:bg-gray-900 text-white' 
                  : 'bg-white/80 hover:bg-white text-gray-700'
              } backdrop-blur-sm`}
              aria-label="Remove image"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleClick}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isDark
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                Upload Different Image
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;