import { motion } from 'motion/react';
import { ArtworkCarousel } from './ArtworkCarousel';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

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

interface LandingPageProps {
  artworks: Artwork[];
  onViewPortfolio: () => void;
  onViewDetails: (artwork: Artwork) => void;
}

export function LandingPage({ artworks, onViewPortfolio, onViewDetails }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <motion.header 
        className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl tracking-tight">Rishith Chintala</h1>
              <p className="text-muted-foreground">Visual Artist & Designer</p>
            </div>
            
            <Button 
              onClick={onViewPortfolio} 
              variant="outline"
              className="hover:bg-white/90 transition-all duration-200"
            >
              View Complete Portfolio
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div 
          className="text-center space-y-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="space-y-4">
            <h2 className="text-5xl tracking-tight">Featured Artwork</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my creative journey through a curated selection of recent works spanning 
              digital art, traditional media, and experimental techniques.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {['2D Design', '3D Design', 'Photography'].map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.2 + index * 0.05 }}
              >
                <Badge variant="outline" className="transition-all duration-200 hover:bg-primary hover:text-primary-foreground">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <ArtworkCarousel artworks={artworks} onViewDetails={onViewDetails} />
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-4xl">About My Work</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                My artistic practice explores the intersection of traditional techniques and 
                contemporary digital media. Through experimentation with various materials 
                and technologies, I seek to create works that challenge perception and invite 
                deeper contemplation.
              </p>
              <p>
                Each piece represents a dialogue between intention and discovery, where 
                technical skill meets creative intuition. My portfolio spans multiple 
                disciplines, from intimate charcoal studies to large-scale digital compositions.
              </p>
            </div>
            <Button 
              onClick={onViewPortfolio} 
              size="lg"
              className="transition-all duration-200 hover:shadow-md"
            >
              Explore Full Portfolio
            </Button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.div
                className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="text-3xl mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Featured Works</div>
              </motion.div>
              
              <motion.div
                className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="text-3xl mb-2">5</div>
                <div className="text-sm text-muted-foreground">Media Types</div>
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <motion.div
                className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="text-3xl mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Latest Work</div>
              </motion.div>
              
              <motion.div
                className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="text-3xl mb-2">Mixed</div>
                <div className="text-sm text-muted-foreground">Techniques</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="border-t bg-white/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              © 2025 Rishith Chintala.
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              {['Email', 'Instagram', 'Behance', 'LinkedIn'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="hover:text-foreground transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}