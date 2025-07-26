import { Button } from "./ui/button";

interface PortfolioFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function PortfolioFilter({
  activeFilter,
  onFilterChange,
}: PortfolioFilterProps) {
  const filters = [
    { value: "all", label: "All Work" },
    { value: "2d", label: "2D Design" },
    { value: "3d", label: "3D Design" },
    { value: "photography", label: "Photography" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={
            activeFilter === filter.value
              ? "default"
              : "outline"
          }
          size="sm"
          onClick={() => onFilterChange(filter.value)}
          className="text-sm"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}