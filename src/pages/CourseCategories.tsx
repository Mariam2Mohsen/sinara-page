import { Book, Code, Palette, Music, Brain, PenTool, Crown, BookOpen, Image, Bot, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: Globe,
    title: "Languages",
    description: "Master multiple languages with expert guidance",
    courses: ["English for Beginners", "German Adventure", "French Fun", "Italian Basics", "Spanish Journey", "Chinese Explorer"]
  },
  {
    icon: Code,
    title: "Programming",
    description: "From basic coding to advanced development",
    courses: ["Scratch Basics", "Python for Kids", "Web Design", "App Development", "Game Programming", "Robotics Coding"]
  },
  {
    icon: Music,
    title: "Music",
    description: "Discover the joy of music and instruments",
    courses: ["Piano Basics", "Guitar for Kids", "Music Theory", "Violin Lessons", "Digital Music Creation", "Singing Fundamentals"]
  },
  {
    icon: Palette,
    title: "Art & Drawing",
    description: "Express creativity through various art forms",
    courses: ["Drawing Basics", "Watercolor Art", "Digital Painting", "Character Design", "Comic Art", "Animation Fundamentals"]
  },
  {
    icon: Crown,
    title: "Chess",
    description: "Learn strategy and critical thinking through chess",
    courses: ["Chess Basics", "Advanced Tactics", "Strategic Thinking", "Tournament Preparation", "Chess Openings", "Endgame Mastery"]
  },
  {
    icon: PenTool,
    title: "Writing",
    description: "Develop strong writing and storytelling skills",
    courses: ["Creative Writing", "Story Development", "Essay Writing", "Poetry Workshop", "Journaling", "Script Writing"]
  },
  {
    icon: BookOpen,
    title: "Reading",
    description: "Enhance reading comprehension and analysis",
    courses: ["Reading Comprehension", "Speed Reading", "Literature Analysis", "Book Club", "Critical Reading", "Reading Adventures"]
  },
  {
    icon: Image,
    title: "Graphic Design",
    description: "Create stunning visual designs and artwork",
    courses: ["Design Basics", "Digital Graphics", "Logo Design", "UI/UX for Kids", "Photo Editing", "Brand Design"]
  },
  {
    icon: Bot,
    title: "AI Tools",
    description: "Introduction to artificial intelligence and modern tools",
    courses: ["AI Basics", "Machine Learning for Kids", "ChatGPT Guide", "AI Art Creation", "Voice AI", "Robotics"]
  },
  {
    icon: Brain,
    title: "Soft Skills",
    description: "Build essential life and social skills",
    courses: ["Public Speaking", "Leadership Skills", "Time Management", "Communication", "Team Collaboration", "Problem Solving"]
  }
];

const CourseCategories = () => {
  return (
    <section className="py-20 px-4 border-t border-mint/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Explore Our Courses</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover a world of learning possibilities with our diverse range of courses
            designed specifically for young minds
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="bg-forest-light border-mint/10 hover:border-mint/30 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-6">
                  {<category.icon className="w-6 h-6 text-mint" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-white/80 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.courses.map((course, idx) => (
                    <li key={idx} className="text-mint/70">{course}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;