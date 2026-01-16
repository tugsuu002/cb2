import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import IntroductionFacebook from "./components/IntroductionFacebook.jsx";
import IntroductionInstagram from "./components/IntroductionInstagram.jsx";
import Pricing from "./components/Pricing";
import Terms from "./components/Terms.jsx";
import Privacy from "./components/Privacy.jsx";
import Restore from "./components/Restore.jsx";

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
      </Wrapper>
    </Router>
  );
}

export default App;
