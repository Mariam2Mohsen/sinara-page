import React, { useState } from "react";
import "./FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is this platform, and how does it help children?",
      answer: "Our platform helps children aged 4–18 discover and develop skills through interactive, age-appropriate courses.",
    },
    {
      question: "How does the personal test work?",
      answer: "The personal test evaluates a child’s interests, strengths, and learning style to recommend courses that best suit their needs.",
    },
    {
      question: "Why is the personal test important?",
      answer: "The test ensures each child’s learning journey is tailored to their unique abilities and passions, maximizing their growth and engagement.",
    },
    {
      question: "What happens after the personal test?",
      answer: "Based on the results, a customized learning path is created, guiding children to explore courses that match their skills and interests.",
    },
    {
      question: "What types of courses are available for different age groups?",
      answer: "Courses range from creative arts and STEM skills to strategic thinking and soft skills, tailored by age and interest.",
    },
    {
      question: "How do I track my child’s progress on the platform?",
      answer: "Parents receive detailed progress reports every two months, highlighting achievements and areas for improvement.",
    },
    {
      question: "What makes this platform different from others?",
      answer: "We combine gamified learning, expert-led content, personalized learning paths, and a personal test to create a unique experience for children.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <h3 onClick={() => toggleFAQ(index)}>{faq.question}</h3>
            {activeIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
