import { Button } from "@/components/ui/button";
import { LineChart, BarChart } from "lucide-react";

const ParentDashboard = () => {
  return (
    <section className="py-20 px-4 border-t border-mint/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Stay Connected to Your Child's Progress</h2>
            <p className="text-white/80">
              Our comprehensive parent dashboard gives you real-time insights into your child's learning journey.
              Track progress, view achievements, and receive detailed reports.
            </p>
            <div className="flex gap-4">
              <Button className="bg-mint hover:bg-mint/90 text-forest">
                View Demo
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-forest-light p-6 rounded-lg border border-mint/10">
              <LineChart className="w-8 h-8 text-mint mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Progress Tracking</h3>
              <p className="text-white/80">Monitor learning milestones and achievements</p>
            </div>
            <div className="bg-forest-light p-6 rounded-lg border border-mint/10">
              <BarChart className="w-8 h-8 text-mint mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Performance Analytics</h3>
              <p className="text-white/80">Detailed insights into learning patterns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentDashboard;