import { Badge } from "./ui/badge";

export function PortfolioHeader() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl tracking-tight">
              Rishith Chintala
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visual artist and designer exploring the
              intersection of traditional media and digital
              technology. Specializing in mixed media,
              photography, and interactive design.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">2D Design</Badge>
            <Badge variant="outline">3D Design</Badge>
            <Badge variant="outline">Photography</Badge>
          </div>
        </div>
      </div>
    </header>
  );
}