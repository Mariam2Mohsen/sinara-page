import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MainHero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Empower Your Child's Future Through Interactive Learning
          </h1>
          <p className="text-lg text-white/80">
            Personalized online courses for ages 4-18. From creative arts to STEM skills, 
            we help children discover their talents and develop essential life skills.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button className="bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg">
              Start Learning <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;