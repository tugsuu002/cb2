import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./components/Home.jsx"));
const Signin = lazy(() => import("./components/Signin.jsx"));
const Signup = lazy(() => import("./components/Signup.jsx"));
const IntroductionFacebook = lazy(() => import("./components/IntroductionFacebook.jsx"));
const IntroductionInstagram = lazy(() => import("./components/IntroductionInstagram.jsx"));
const Pricing = lazy(() => import("./components/Pricing"));
const Terms = lazy(() => import("./components/Terms.jsx"));
const Privacy = lazy(() => import("./components/Privacy.jsx"));
const Restore = lazy(() => import("./components/Restore.jsx"));

/* ✅ Scroll wrapper */
const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: media.matches ? "auto" : "smooth",
    });
  }, [location.pathname]);

  return children;
};


function App() {
  return (
    <Router>
      <Wrapper>
        <Suspense fallback={<div className="flex items-center justify-center h-screen bg-black"><div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" /></div>}>
          <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="facebook" element={<IntroductionFacebook />} />
            <Route path="instagram" element={<IntroductionInstagram />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>

          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="restore" element={<Restore />} />
        </Routes>
        </Suspense>
      </Wrapper>
    </Router>
  );
}

export default App;
