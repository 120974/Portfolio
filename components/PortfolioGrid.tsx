import { useState } from "react";
import { PortfolioCard } from "./PortfolioCard";
import { PortfolioFilter } from "./PortfolioFilter";

const portfolioData = [
  {
    id: 1,
    title: "Urban Echoes",
    imageUrl:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=800&fit=crop",
    size: '24" × 18"',
    medium: "Acrylic on Canvas",
    isClassAssignment: false,
    description:
      "An exploration of urban architecture and its emotional resonance, capturing the interplay between light and shadow in metropolitan spaces.",
    year: "2024",
    category: "2d",
  },
  {
    id: 2,
    title: "Digital Metamorphosis",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
    size: "Digital 4K",
    medium: "Blender, Photoshop",
    isClassAssignment: true,
    description:
      "A 3D visualization exploring transformation and identity in the digital age, rendered with procedural textures and dynamic lighting.",
    year: "2024",
    category: "3d",
  },
  {
    id: 3,
    title: "Morning Solitude",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
    size: '16" × 20"',
    medium: "Digital Photography",
    isClassAssignment: false,
    description:
      "Captured during golden hour, this piece examines the relationship between natural landscapes and human emotion through intimate framing.",
    year: "2024",
    category: "photography",
  },
  {
    id: 4,
    title: "Fractured Reality",
    imageUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop",
    size: '30" × 24"',
    medium: "Mixed Media - Oil, Digital",
    isClassAssignment: true,
    description:
      "Combining traditional oil painting with digital manipulation to explore themes of perception and reality in contemporary society.",
    year: "2023",
    category: "mixed",
  },
  {
    id: 5,
    title: "Neon Dreams",
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=800&fit=crop",
    size: "Digital 8K",
    medium: "Procreate, After Effects",
    isClassAssignment: false,
    description:
      "A cyberpunk-inspired digital artwork exploring the aesthetic possibilities of neon lighting and futuristic architecture.",
    year: "2024",
    category: "digital",
  },
  {
    id: 6,
    title: "Portrait Study #7",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop",
    size: '20" × 16"',
    medium: "Charcoal on Paper",
    isClassAssignment: true,
    description:
      "Part of a series exploring human expression and emotion through traditional charcoal techniques and contemporary composition.",
    year: "2023",
    category: "2d",
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
  {
    id: 11,
    title: "Vector Illustrations",
    imageUrl:
      "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&h=800&fit=crop",
    size: "Digital Vector",
    medium: "Adobe Illustrator",
    isClassAssignment: false,
    description:
      "A series of vector illustrations exploring contemporary graphic design principles with bold color palettes and geometric compositions.",
    year: "2024",
    category: "digital",
  },
  {
    id: 12,
    title: "Sculptural Forms",
    imageUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
    size: "Digital 4K",
    medium: "ZBrush, KeyShot",
    isClassAssignment: true,
    description:
      "Digital sculpture exploring organic forms and surface textures, pushing the boundaries between digital and physical artistic expression.",
    year: "2023",
    category: "3d",
  },
];

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = portfolioData.filter(
    (item) =>
      activeFilter === "all" || item.category === activeFilter,
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <PortfolioFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No artwork found for the selected category.
          </p>
        </div>
      )}
    </div>
  );
}