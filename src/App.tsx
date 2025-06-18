import React, { useState } from 'react';
import { Palette, Moon, Sun } from 'lucide-react';
import ImageUploader from './components/ImageUploader';
import ImagePreview from './components/ImagePreview';
import StyleGallery from './components/StyleGallery';
import LoadingSpinner from './components/LoadingSpinner';
import { ArtStyle } from './types';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<ArtStyle | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [styledImage, setStyledImage] = useState<string | null>(null);

  const handleImageUpload = (imageDataUrl: string) => {
    setUploadedImage(imageDataUrl);
    setStyledImage(null);
    setSelectedStyle(null);
  };

  const handleImageRemove = () => {
    setUploadedImage(null);
    setStyledImage(null);
    setSelectedStyle(null);
  };

  const handleStyleSelect = async (style: ArtStyle) => {
    if (!uploadedImage) return;
    
    setSelectedStyle(style);
    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      // Mock styled image - in real app this would be from API
      setStyledImage(uploadedImage);
      setIsProcessing(false);
    }, 3000);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDark ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${isDark ? 'bg-purple-600' : 'bg-purple-500'}`}>
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Neural Style Transfer</h1>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Transform your images with artistic styles
                </p>
              </div>
            </div>
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Upload & Styles */}
          <div className="space-y-6">
            <ImageUploader
              onImageUpload={handleImageUpload}
              onImageRemove={handleImageRemove}
              uploadedImage={uploadedImage}
              isDark={isDark}
            />
            
            {uploadedImage && (
              <StyleGallery
                selectedStyle={selectedStyle}
                onStyleSelect={handleStyleSelect}
                isProcessing={isProcessing}
                isDark={isDark}
              />
            )}
          </div>

          {/* Right Column - Preview */}
          <div className="space-y-6">
            {uploadedImage && (
              <>
                <ImagePreview
                  originalImage={uploadedImage}
                  styledImage={styledImage}
                  selectedStyle={selectedStyle}
                  isDark={isDark}
                />
                
                {isProcessing && (
                  <LoadingSpinner isDark={isDark} />
                )}
              </>
            )}
          </div>
        </div>

        {/* Welcome State */}
        {!uploadedImage && (
          <div className="text-center py-16">
            <div className={`inline-flex p-4 rounded-full mb-6 ${
              isDark ? 'bg-purple-600/20' : 'bg-purple-100'
            }`}>
              <Palette className={`w-12 h-12 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Transform Your Images with AI Art</h2>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Upload an image and watch as our neural style transfer technology applies the distinctive 
              brushstrokes and techniques of famous artists to create stunning, unique artwork.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {['Van Gogh', 'Picasso', 'Monet', 'Abstract'].map((style) => (
                <div
                  key={style}
                  className={`p-4 rounded-lg border-2 border-dashed transition-colors duration-200 ${
                    isDark 
                      ? 'border-gray-600 bg-gray-800/50' 
                      : 'border-gray-300 bg-white/50'
                  }`}
                >
                  <div className={`w-full h-20 rounded-lg mb-3 ${
                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                  <p className="font-medium text-sm">{style}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;