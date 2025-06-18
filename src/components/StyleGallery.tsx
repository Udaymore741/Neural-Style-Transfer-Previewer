import React from 'react';
import { Brush } from 'lucide-react';
import { ArtStyle } from '../types';

interface StyleGalleryProps {
  selectedStyle: ArtStyle | null;
  onStyleSelect: (style: ArtStyle) => void;
  isProcessing: boolean;
  isDark: boolean;
}

const artStyles: ArtStyle[] = [
  {
    id: 'van-gogh',
    name: 'Van Gogh',
    description: 'Bold brushstrokes and vibrant swirling patterns inspired by the Dutch post-impressionist master.',
    thumbnail: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
    artist: 'Vincent van Gogh',
    period: 'Post-Impressionism'
  },
  {
    id: 'picasso',
    name: 'Picasso',
    description: 'Geometric shapes and abstract forms characteristic of cubist revolutionary artwork.',
    thumbnail: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=400',
    artist: 'Pablo Picasso',
    period: 'Cubism'
  },
  {
    id: 'monet',
    name: 'Monet',
    description: 'Soft, dreamy impressions with delicate light and color techniques from French impressionism.',
    thumbnail: 'https://images.pexels.com/photos/1187105/pexels-photo-1187105.jpeg?auto=compress&cs=tinysrgb&w=400',
    artist: 'Claude Monet',
    period: 'Impressionism'
  },
  {
    id: 'abstract',
    name: 'Abstract',
    description: 'Bold colors and dynamic compositions creating contemporary non-representational art.',
    thumbnail: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400',
    artist: 'Various Artists',
    period: 'Abstract Expressionism'
  },
  {
    id: 'kandinsky',
    name: 'Kandinsky',
    description: 'Spiritual abstractions with geometric forms and vivid color harmonies.',
    thumbnail: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400',
    artist: 'Wassily Kandinsky',
    period: 'Abstract Art'
  },
  {
    id: 'hokusai',
    name: 'Hokusai',
    description: 'Traditional Japanese woodblock printing with flowing lines and natural motifs.',
    thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
    artist: 'Katsushika Hokusai',
    period: 'Edo Period'
  }
];

const StyleGallery: React.FC<StyleGalleryProps> = ({
  selectedStyle,
  onStyleSelect,
  isProcessing,
  isDark
}) => {
  return (
    <div className={`rounded-xl border-2 transition-all duration-300 ${
      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } shadow-lg`}>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Brush className="w-5 h-5 mr-2" />
          Choose Art Style
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {artStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => onStyleSelect(style)}
              disabled={isProcessing}
              className={`group relative overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                selectedStyle?.id === style.id
                  ? isDark
                    ? 'ring-2 ring-purple-400 shadow-lg shadow-purple-500/25'
                    : 'ring-2 ring-purple-500 shadow-lg shadow-purple-500/25'
                  : 'hover:shadow-lg'
              }`}
              aria-label={`Apply ${style.name} style`}
            >
              <div className="aspect-square relative">
                <img
                  src={style.thumbnail}
                  alt={`${style.name} art style example`}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                  selectedStyle?.id === style.id
                    ? 'from-purple-900/80 via-purple-900/20 to-transparent'
                    : 'from-black/60 via-black/20 to-transparent group-hover:from-black/70'
                }`} />
                
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h4 className="font-bold text-sm mb-1">{style.name}</h4>
                  <p className="text-xs opacity-90 line-clamp-2">{style.description}</p>
                </div>

                {selectedStyle?.id === style.id && (
                  <div className="absolute top-2 right-2">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {selectedStyle && (
          <div className={`mt-6 p-4 rounded-lg ${
            isDark ? 'bg-gray-700/50' : 'bg-gray-50'
          }`}>
            <h4 className="font-semibold mb-2">{selectedStyle.name} Style</h4>
            <p className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {selectedStyle.description}
            </p>
            <div className="flex text-xs gap-4">
              <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                <strong>Artist:</strong> {selectedStyle.artist}
              </span>
              <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                <strong>Period:</strong> {selectedStyle.period}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyleGallery;