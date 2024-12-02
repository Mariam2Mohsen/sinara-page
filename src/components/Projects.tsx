import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Development"
    },
    {
      title: "Project Two",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Design"
    },
    {
      title: "Project Three",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      category: "Development"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Projects</h2>
          <p className="text-white/80">Check out some of our recent work</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-forest-light border-mint/10">
              <CardContent className="p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <p className="text-mint text-sm mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;