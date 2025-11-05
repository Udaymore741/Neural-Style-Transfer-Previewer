import React from 'react';
import { Palette, Moon, Sun, Upload, Wand2, Download, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LandingPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

function LandingPage({ isDark, toggleTheme }: LandingPageProps) {
  const navigate = useNavigate();

  const handleTryNow = () => {
    navigate('/app');
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

            <div className="flex items-center space-x-4">
              <button
                onClick={handleTryNow}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  isDark
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                }`}
              >
                Try Now
              </button>

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
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`inline-flex p-6 rounded-full mb-8 ${
            isDark ? 'bg-purple-600/20' : 'bg-purple-100'
          }`}>
            <Palette className={`w-16 h-16 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your Images with AI Art
          </h2>

          <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Upload your photos and watch as neural networks apply the styles of famous artists like Van Gogh, Picasso, and Monet to create stunning, unique artwork.
          </p>

          <button
            onClick={handleTryNow}
            className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
              isDark
                ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25'
                : 'bg-purple-500 hover:bg-purple-600 text-white shadow-lg hover:shadow-purple-400/25'
            }`}
          >
            Start Creating Art
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-16">Why Choose Neural Style Transfer?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className={`p-8 rounded-xl border-2 transition-colors duration-200 ${
              isDark
                ? 'bg-gray-800 border-gray-700 hover:border-purple-500'
                : 'bg-white border-gray-200 hover:border-purple-400'
            }`}>
              <div className={`p-3 rounded-lg w-fit mb-6 ${
                isDark ? 'bg-purple-600/20' : 'bg-purple-100'
              }`}>
                <Palette className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
              <h4 className="text-xl font-bold mb-4">Multiple Art Styles</h4>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Choose from various artistic styles inspired by famous artists. From impressionist masterpieces to abstract expressions, find the perfect style for your image.
              </p>
            </div>

            {/* Feature 2 */}
            <div className={`p-8 rounded-xl border-2 transition-colors duration-200 ${
              isDark
                ? 'bg-gray-800 border-gray-700 hover:border-purple-500'
                : 'bg-white border-gray-200 hover:border-purple-400'
            }`}>
              <div className={`p-3 rounded-lg w-fit mb-6 ${
                isDark ? 'bg-purple-600/20' : 'bg-purple-100'
              }`}>
                <Zap className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
              <h4 className="text-xl font-bold mb-4">Instant Processing</h4>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Experience real-time transformation powered by advanced neural networks. Watch your images transform before your eyes with our optimized processing pipeline.
              </p>
            </div>

            {/* Feature 3 */}
            <div className={`p-8 rounded-xl border-2 transition-colors duration-200 ${
              isDark
                ? 'bg-gray-800 border-gray-700 hover:border-purple-500'
                : 'bg-white border-gray-200 hover:border-purple-400'
            }`}>
              <div className={`p-3 rounded-lg w-fit mb-6 ${
                isDark ? 'bg-purple-600/20' : 'bg-purple-100'
              }`}>
                <Download className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
              <h4 className="text-xl font-bold mb-4">High Quality Output</h4>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Download your creations in high resolution. Perfect for printing, sharing on social media, or adding to your digital art collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-16">How It Works</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className={`p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center ${
                isDark ? 'bg-purple-600/20' : 'bg-purple-100'
              }`}>
                <Upload className={`w-10 h-10 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
              <div className={`text-2xl font-bold mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                1
              </div>
              <h4 className="text-xl font-bold mb-3">Upload Image</h4>
              <p className={`text-lg ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Start by uploading your photo in any common format
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className={`p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center ${
                isDark ? 'bg-purple-600/20' : 'bg-purple-100'
              }`}>
                <Palette className={`w-10 h-10 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
              <div className={`text-2xl font-bold mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                2
              </div>
              <h4 className="text-xl font-bold mb-3">Select Style</h4>
              <p className={`text-lg ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Choose from our curated collection of artistic styles
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className={`p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center ${
                isDark ? 'bg-purple-600/20' : 'bg-purple-100'
              }`}>
                <Wand2 className={`w-10 h-10 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
              <div className={`text-2xl font-bold mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                3
              </div>
              <h4 className="text-xl font-bold mb-3">AI Magic</h4>
              <p className={`text-lg ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Our neural network applies the artistic style to your image
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className={`p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center ${
                isDark ? 'bg-purple-600/20' : 'bg-purple-100'
              }`}>
                <Download className={`w-10 h-10 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
              <div className={`text-2xl font-bold mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                4
              </div>
              <h4 className="text-xl font-bold mb-3">Download</h4>
              <p className={`text-lg ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Save your masterpiece in high resolution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h3>
          <p className={`text-xl mb-8 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join thousands of users who have transformed their photos into stunning works of art.
          </p>
          <button
            onClick={handleTryNow}
            className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
              isDark
                ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25'
                : 'bg-purple-500 hover:bg-purple-600 text-white shadow-lg hover:shadow-purple-400/25'
            }`}
          >
            Start Creating Art Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t transition-colors duration-300 ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © 2024 Neural Style Transfer. Powered by artificial intelligence and artistic inspiration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;