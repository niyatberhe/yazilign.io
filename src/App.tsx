import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ExploreNavbar } from "./components/ExploreNavbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ServiceDirectory } from "./components/ServiceDirectory";
import { ReviewWall } from "./components/ReviewWall";
import { Footer } from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { AuthPage } from "./pages/Auth";
import { DiscoveryPage } from "./pages/Discovery";
import { ProviderDashboardPage } from "./pages/ProviderDashboard";
import { ExplorePage } from "./pages/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#1B4332]/10 selection:text-[#1B4332]">
        <Navbar />
        <Hero />
        <Features />
        <ServiceDirectory />
        <ReviewWall />
        <Footer />
        <Toaster />
      </div>
    ),
  },
  {
    path: "/auth",
    element: (
      <div className="min-h-screen bg-[#FDFBF7] font-sans">
        <Navbar />
        <AuthPage />
        <Footer />
        <Toaster />
      </div>
    ),
  },
  {
    path: "/discovery",
    element: (
      <div className="min-h-screen bg-[#FDFBF7] font-sans">
        <Navbar />
        <DiscoveryPage />
        <Footer />
        <Toaster />
      </div>
    ),
  },
  {
    path: "/provider-dashboard",
    element: (
      <div className="min-h-screen bg-[#FDFBF7] font-sans">
        <Navbar />
        <ProviderDashboardPage />
        <Footer />
        <Toaster />
      </div>
    ),
  },
  {
    path: "/explore",
    element: (
      <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#1B4332]/10 selection:text-[#1B4332]">
        <ExploreNavbar />
        <ExplorePage />
        <Footer />
        <Toaster />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
