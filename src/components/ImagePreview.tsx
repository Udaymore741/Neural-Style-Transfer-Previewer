import React from 'react';
import { Download, Eye, Palette } from 'lucide-react';
import { ArtStyle } from '../types';

interface ImagePreviewProps {
  originalImage: string;
  styledImage: string | null;
  selectedStyle: ArtStyle | null;
  isDark: boolean;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  originalImage,
  styledImage,
  selectedStyle,
  isDark
}) => {
  const [showComparison, setShowComparison] = React.useState(false);

  const handleDownload = () => {
    if (!styledImage) return;

    const link = document.createElement('a');
    link.href = styledImage;
    link.download = `styled-image-${selectedStyle?.name?.toLowerCase() || 'art'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`rounded-xl border-2 transition-all duration-300 ${
      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } shadow-lg`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Eye className="w-5 h-5 mr-2" />
            Preview
          </h3>
          
          <div className="flex items-center space-x-2">
            {styledImage && (
              <>
                <button
                  onClick={() => setShowComparison(!showComparison)}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 ${
                    showComparison
                      ? isDark
                        ? 'bg-purple-600 text-white'
                        : 'bg-purple-500 text-white'
                      : isDark
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {showComparison ? 'Hide Original' : 'Compare'}
                </button>
                
                <button
                  onClick={handleDownload}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    isDark
                      ? 'bg-green-600 hover:bg-green-500 text-white'
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                  aria-label="Download styled image"
                >
                  <Download className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {showComparison && styledImage ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Original
                </p>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={originalImage}
                    alt="Original"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {selectedStyle?.name} Style
                </p>
                <div className="aspect-square rounded-lg overflow-hidden relative">
                  <img
                    src={styledImage}
                    alt="Styled"
                    className="w-full h-full object-cover"
                    style={{ filter: 'contrast(1.1) saturate(1.2)' }}
                  />
                  <div className="absolute top-2 left-2">
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      isDark ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white'
                    }`}>
                      <Palette className="w-3 h-3 inline mr-1" />
                      {selectedStyle?.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <img
                src={styledImage || originalImage}
                alt={styledImage ? "Styled image" : "Original image"}
                className="w-full h-full object-cover transition-all duration-500"
                style={styledImage ? { filter: 'contrast(1.1) saturate(1.2)' } : {}}
              />
              
              {!styledImage && selectedStyle && (
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className={`px-4 py-2 rounded-lg ${
                    isDark ? 'bg-gray-900/80 text-white' : 'bg-white/80 text-gray-900'
                  } backdrop-blur-sm`}>
                    <p className="text-sm font-medium">Processing with {selectedStyle.name} style...</p>
                  </div>
                </div>
              )}

              {styledImage && selectedStyle && (
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1.5 rounded-lg ${
                    isDark ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white'
                  } shadow-lg`}>
                    <Palette className="w-4 h-4 inline mr-2" />
                    <span className="font-medium">{selectedStyle.name} Applied</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {styledImage && selectedStyle && (
            <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Style Transfer Complete!</p>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Your image has been transformed using {selectedStyle.name} style
                  </p>
                </div>
                <div className={`text-2xl ${isDark ? 'text-green-400' : 'text-green-500'}`}>
                  ✨
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;