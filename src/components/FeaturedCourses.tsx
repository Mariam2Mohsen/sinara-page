import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Star } from "lucide-react";

const featuredCourses = [
  {
    title: "Chess Masters",
    description: "Strategic thinking and problem-solving through chess",
    level: "Beginner to Advanced",
    rating: 4.9,
    students: 1200
  },
  {
    title: "Art Explorer",
    description: "Comprehensive art program covering multiple mediums",
    level: "All Levels",
    rating: 4.8,
    students: 850
  },
  {
    title: "Music Journey",
    description: "Complete music education from theory to performance",
    level: "Progressive Levels",
    rating: 4.9,
    students: 950
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 px-4 border-t border-mint/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-8 h-8 text-mint mr-2" />
            <h2 className="text-4xl font-bold text-white">Featured Courses</h2>
          </div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Our most popular comprehensive programs designed to develop well-rounded skills
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <Card key={index} className="bg-forest-light border-mint/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                <p className="text-white/80 mb-4">{course.description}</p>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-mint mr-1" />
                  <span className="text-white/90">{course.rating}</span>
                  <span className="text-white/60 ml-2">({course.students} students)</span>
                </div>
                <p className="text-mint/70 mb-6">{course.level}</p>
                <Button className="w-full bg-mint hover:bg-mint/90 text-forest">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;