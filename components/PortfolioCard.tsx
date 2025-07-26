import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  size: string;
  medium: string;
  isClassAssignment: boolean;
  description: string;
  year: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
  index?: number;
}

export function PortfolioCard({ item, index = 0 }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
    >
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm">
        <div className="aspect-square overflow-hidden">
          <ImageWithFallback
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <CardContent className="p-4 space-y-3">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="line-clamp-2 group-hover:text-primary transition-colors duration-200">
                {item.title}
              </h3>
              <Badge 
                variant={item.isClassAssignment ? "secondary" : "default"} 
                className="shrink-0"
              >
                {item.isClassAssignment ? "Class" : "Personal"}
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm">
              {item.size} • {item.medium} • {item.year}
            </p>
          </div>
          
          <p className="text-sm leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}