import React from 'react';

const AgeGroups = () => {
  const ageGroups = [
    {
      range: "4-7 years",
      title: "Early Learners",
      description: "Foundation building through play-based learning",
      subjects: ["Basic Language Skills", "Numbers & Counting", "Creative Expression", "Interactive Stories"]
    },
    {
      range: "8-12 years",
      title: "Junior Explorers",
      description: "Developing core academic and creative skills",
      subjects: ["Language Arts", "Basic Programming", "Art & Music", "Math Adventures"]
    },
    {
      range: "13-15 years",
      title: "Teen Achievers",
      description: "Advanced learning and skill development",
      subjects: ["Advanced Languages", "Coding Projects", "Digital Arts", "Leadership Skills"]
    },
    {
      range: "16-18 years",
      title: "Young Professionals",
      description: "Career preparation and advanced studies",
      subjects: ["Professional Writing", "Advanced Programming", "Digital Portfolio", "Public Speaking"]
    }
  ];

  return (
    <main className="min-h-screen bg-forest pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Age-Appropriate Learning Paths</h1>
        <p className="text-white/80 text-center max-w-2xl mx-auto mb-16">
          Our courses are carefully designed to match each age group's developmental needs and interests
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {ageGroups.map((group, index) => (
            <div key={index} className="bg-forest-light p-8 rounded-xl border border-mint/10 hover:border-mint/30 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-mint font-bold text-lg">{group.range}</span>
                <div className="h-px flex-grow bg-mint/20"></div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{group.title}</h2>
              <p className="text-white/80 mb-6">{group.description}</p>
              <ul className="space-y-2">
                {group.subjects.map((subject, idx) => (
                  <li key={idx} className="text-mint/70 flex items-center gap-2">
                    <span className="w-2 h-2 bg-mint rounded-full"></span>
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AgeGroups;