import { Shield, Target, BarChart, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Expert-Led Content",
    description: "Courses designed and taught by qualified educators and professionals"
  },
  {
    icon: Target,
    title: "Age-Appropriate Learning",
    description: "Content tailored to different age groups from 4 to 18 years"
  },
  {
    icon: BarChart,
    title: "Progress Tracking",
    description: "Regular reports and insights into your child's learning journey"
  },
  {
    icon: Users,
    title: "Interactive Learning",
    description: "Engaging, gamified lessons that make learning fun and effective"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 border-t border-mint/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We provide a comprehensive learning experience that helps children grow and succeed
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-mint/10 rounded-full flex items-center justify-center mx-auto mb-6">
                {<feature.icon className="w-8 h-8 text-mint" />}
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

export default WhyChooseUs;