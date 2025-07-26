import { motion } from 'motion/react';
import { PortfolioCard } from './PortfolioCard';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

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

interface PortfolioPageProps {
  artworks: Artwork[];
  onBack: () => void;
  onViewDetails: (artwork: Artwork) => void;
}

export function PortfolioPage({ artworks, onBack, onViewDetails }: PortfolioPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6 py-8">
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="hover:bg-white/60 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl">Complete Portfolio</h1>
          <div className="w-[120px]"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {artworks.map((artwork, index) => (
            <div 
              key={artwork.id} 
              onClick={() => onViewDetails(artwork)} 
              className="cursor-pointer"
            >
              <PortfolioCard item={artwork} index={index} />
            </div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <p className="text-muted-foreground">
            {artworks.length} artworks • Mixed media collection spanning 2023-2024
          </p>
        </motion.div>
      </div>
    </div>
  );
}