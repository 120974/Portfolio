import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LandingPage } from "./components/LandingPage";
import { PortfolioPage } from "./components/PortfolioPage";
import { ArtworkDetail } from "./components/ArtworkDetail";

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

const artworksData: Artwork[] = [
  {
    id: 1,
    title: "Urban Echoes",
    imageUrl:
      "https://lh3.googleusercontent.com/d/1ceV_FZcj7p2hklBrnVktfNex5RBuQNO0?w=800&h=800&fit=crop",
    size: 'Digital 2 x 3"',
    medium: "Canon EOS 6D",
    isClassAssignment: false,
    description:
      "An exploration of urban architecture and its emotional resonance, capturing the interplay between light and shadow in Old Quebec.",
    year: "2025",
    category: "Photography",
  },
  {
    id: 2,
    title: "Morning Solitude",
    imageUrl:
      "https://lh3.googleusercontent.com/d/1STf7QNiTasnAuTXkGuO0VnyoxLhXDAoC?w=800&h=800&fit=crop",
    size: "Digital 2 x 3",
    medium: "Canon EOS RP",
    isClassAssignment: false,
    description:
      "Captured during golden hour, this piece examines the relationship between natural landscapes and human architecture through intimate framing.",
    year: "2025",
    category: "Photography",
  },
  {
    id: 3,
    title: "Ascension",
    imageUrl:
      "https://lh3.googleusercontent.com/d/18MrUINP8G34qKG6iR_4HBCmSvCkhnnQ9?w=800&h=800&fit=crop",
    size: '4" × 5"',
    medium: "Adobe Illustrator / Adobe Lightroom",
    isClassAssignment: false,
    description:
      "Designed with mythic and cinematic undertones, this piece reimagines ancient ambition through modern form. ",
    year: "2025",
    category: "2d",
  },
  {
    id: 4,
    title: "Neptune",
    imageUrl:
      "https://lh3.googleusercontent.com/d/1YezSSLf_8wwo7uACSNLFs5YI495NfaZG?w=800&h=800&fit=crop",
    size: '28in" × 28in"',
    medium: "Mechanical Engineering / Marketing",
    isClassAssignment: true,
    description:
      "Combining Mechanical gears with digital marketing LAMBDA shattered expectations by creating our very own bot Neptune",
    year: "2024",
    category: "3d / 2d",
  },
  {
    id: 5,
    title: "The Getty",
    imageUrl:
      "https://lh3.googleusercontent.com/d/1UQj-b55ZeVroux0pIDaFfpqdpn-vR6oZ?w=800&h=800&fit=crop",
    size: "2 x 3",
    medium: "Nikon D3300",
    isClassAssignment: false,
    description:
      "The Getty holds more than masterpieces — it cradles the quiet ache of nostalgia coupled with the charm of an older happier time",
    year: "2024",
    category: "Photography",
  },
  {
    id: 6,
    title: "Hidden Art",
    imageUrl:
      "https://lh3.googleusercontent.com/d/1b6bfVw8q0KOPwckRDAiFZAN1z7YkZKV1?w=800&h=800&fit=crop",
    size: '2" × 3"',
    medium: "Canon EOS 6D",
    isClassAssignment: false,
    description:
      "Part of a series exploring human expression and emotion through ancient and contemporary composition.",
    year: "2025",
    category: "Photography",
  },
  {
    id: 7,
    title: "Abstract Geometry",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop",
    size: "Digital 6K",
    medium: "Cinema 4D, Octane",
    isClassAssignment: false,
    description:
      "An exploration of mathematical beauty through 3D geometric forms, investigating the relationship between precision and organic flow.",
    year: "2024",
    category: "3d",
  },
  {
    id: 8,
    title: "Street Photography Series",
    imageUrl:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=800&fit=crop",
    size: '12" × 18"',
    medium: "Film Photography - 35mm",
    isClassAssignment: true,
    description:
      "Documentary-style street photography capturing authentic moments of human interaction in urban environments.",
    year: "2024",
    category: "photography",
  },
  {
    id: 9,
    title: "Organic Synthesis",
    imageUrl:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=800&fit=crop",
    size: '36" × 28"',
    medium: "Watercolor, Digital Collage",
    isClassAssignment: false,
    description:
      "Merging traditional watercolor techniques with digital collage to create a dialogue between natural forms and technological intervention.",
    year: "2023",
    category: "mixed",
  },
  {
    id: 10,
    title: "Minimalist Landscapes",
    imageUrl:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=800&fit=crop",
    size: '24" × 32"',
    medium: "Digital Photography",
    isClassAssignment: true,
    description:
      "A minimalist approach to landscape photography, focusing on negative space and subtle color relationships to evoke tranquility.",
    year: "2024",
    category: "photography",
  },
];

type CurrentPage = "landing" | "portfolio" | "detail";

export default function App() {
  const [currentPage, setCurrentPage] =
    useState<CurrentPage>("landing");
  const [selectedArtwork, setSelectedArtwork] =
    useState<Artwork | null>(null);

  const handleViewPortfolio = () => {
    setCurrentPage("portfolio");
  };

  const handleViewDetails = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setCurrentPage("detail");
  };

  const handleBackToLanding = () => {
    setCurrentPage("landing");
    setSelectedArtwork(null);
  };

  const handleBackToPortfolio = () => {
    setCurrentPage("portfolio");
    setSelectedArtwork(null);
  };

  return (
    <AnimatePresence mode="wait">
      {currentPage === "detail" && selectedArtwork && (
        <motion.div
          key="detail"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ArtworkDetail
            artwork={selectedArtwork}
            onBack={handleBackToPortfolio}
          />
        </motion.div>
      )}

      {currentPage === "portfolio" && (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <PortfolioPage
            artworks={artworksData}
            onBack={handleBackToLanding}
            onViewDetails={handleViewDetails}
          />
        </motion.div>
      )}

      {currentPage === "landing" && (
        <motion.div
          key="landing"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <LandingPage
            artworks={artworksData}
            onViewPortfolio={handleViewPortfolio}
            onViewDetails={handleViewDetails}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}