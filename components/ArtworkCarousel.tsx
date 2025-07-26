import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  imageUrl: string;
  size: string;
  medium: string;
  isClassAssignment: boolean;
  description: string;
  year: string;
  category: string;
}

interface ArtworkCarouselProps {
  artworks: Artwork[];
  onViewDetails: (artwork: Artwork) => void;
}

export function ArtworkCarousel({ artworks, onViewDetails }: ArtworkCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % artworks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [artworks.length, isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? artworks.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artworks.length);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentArtwork = artworks[currentIndex];

  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
          
          <ImageWithFallback
            src={currentArtwork.imageUrl}
            alt={currentArtwork.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-6 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="bg-black/20 hover:bg-black/30 text-white backdrop-blur-sm transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="bg-black/20 hover:bg-black/30 text-white backdrop-blur-sm transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl">{currentArtwork.title}</h2>
            <p className="text-lg opacity-90">
              {currentArtwork.size} • {currentArtwork.medium} • {currentArtwork.year}
            </p>
          </div>
          
          <p className="text-base opacity-80 max-w-2xl">
            {currentArtwork.description}
          </p>
          
          <div className="flex gap-3 pt-2">
            <Button 
              onClick={() => onViewDetails(currentArtwork)}
              className="bg-white text-black hover:bg-white/90 transition-colors duration-200"
            >
              View Details
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleAutoPlay}
              className="bg-black/20 hover:bg-black/30 text-white backdrop-blur-sm transition-all duration-200"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 right-6 flex space-x-2 z-20">
        {artworks.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 4, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
}