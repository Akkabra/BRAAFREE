// ... existing code ...
const projects = [
  {
    title: "Plataforma E-commerce",
    description: "Una tienda en línea completa con carrito de compras y pasarela de pagos.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "App de Clima",
    description: "Aplicación que muestra el clima en tiempo real utilizando una API externa.",
    image: "https://images.unsplash.com/photo-1592210633469-a15766827aaa?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "Weather API", "CSS"],
  },
  {
    title: "Dashboard de Finanzas",
    description: "Panel de control para visualizar gastos e ingresos con gráficos interactivos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "D3.js", "Tailwind"],
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mi Portafolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};