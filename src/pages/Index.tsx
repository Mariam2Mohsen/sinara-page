import Navbar from "@/components/Navbar";
import MainHero from "@/components/MainHero";
import CourseCategories from "@/pages/CourseCategories";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import ParentDashboard from "@/pages/ParentDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-forest">
      <Navbar />
      <MainHero />
      <CourseCategories />
      <FeaturedCourses />
      <WhyChooseUs />
      <ParentDashboard />
      <Footer />
    </main>
  );
};

export default Index;