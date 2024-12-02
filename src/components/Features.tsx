import { Code, Palette, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Development",
      description: "Build anything you can imagine with our powerful tools"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Create beautiful interfaces with our design system"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimize your workflow with lightning-fast tools"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-xl border border-mint/10 bg-forest-light">
              <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-6">
                {<feature.icon className="w-6 h-6 text-mint" />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;