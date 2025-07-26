import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Calendar, Palette, Ruler } from 'lucide-react';

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

interface ArtworkDetailProps {
  artwork: Artwork;
  onBack: () => void;
}

export function ArtworkDetail({ artwork, onBack }: ArtworkDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 hover:bg-white/60 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg bg-white/60 backdrop-blur-sm">
              <ImageWithFallback
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-4xl">{artwork.title}</h1>
                <Badge variant={artwork.isClassAssignment ? "secondary" : "default"}>
                  {artwork.isClassAssignment ? "Class Assignment" : "Personal Work"}
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Ruler className="w-4 h-4" />
                  <span>{artwork.size}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Palette className="w-4 h-4" />
                  <span>{artwork.medium}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{artwork.year}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3>Artist Statement</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {artwork.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3>Technical Details</h3>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 space-y-3 shadow-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dimensions:</span>
                  <span>{artwork.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Medium:</span>
                  <span>{artwork.medium}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Year:</span>
                  <span>{artwork.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="capitalize">{artwork.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span>{artwork.isClassAssignment ? "Class Assignment" : "Personal Work"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}