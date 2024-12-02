import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AgeGroups from './pages/AgeGroups';

import Navbar from './components/Navbar';
import ParentDashboard from './pages/ParentDashboard';
import CourseCategories from "./pages/CourseCategories";
import Footer from "./components/Footer";
import FeaturedCourses from "./components/FeaturedCourses";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Navbar />
  

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/age-groups" element={<AgeGroups />} />
            <Route path="/parents" element={<ParentDashboard />} />
            <Route path="/courses" element={<CourseCategories />} />
            <Route path="/features" element={<FeaturedCourses />} />
            <Route path="/question" element={<FAQ />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        
        </Router>
  
      </TooltipProvider>
      
    </QueryClientProvider>
  );
}

export default App;