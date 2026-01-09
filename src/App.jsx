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
// import Error from "./components/Error";
// import Resources from "./components/Resources";
import Product from "./components/Product.jsx";
import About from "./components/About.jsx";
import Tutorials from "./components/Tutorials.jsx";
import Tutorial from "./components/Tutorial.jsx";
import Restore from "./components/Restore.jsx";
import Contact from "./components/Contact.jsx";
import TopNav from "./components/Resources.jsx";
import SplashCursor from "./components/SplashCursor.jsx";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <Router>
      <SplashCursor />
      <Wrapper>
        {/* <Navbar/> */}
        <Routes>
            <Route path="/" element={<Navbar />}>
            <Route path="" element={<Home />} />
            <Route path="facebook" element={<IntroductionFacebook />} />
            <Route path="instagram" element={<IntroductionInstagram />} />
            <Route path="pricing" element={<Pricing />} />
            {/* <Route path="tutorials" element={<Tutorials />} /> */}
            {/* <Route path="tutorials/:id" element={<Tutorial />} /> */}
            {/* <Route path="resources" element={<Resources />} /> */}
            {/* <Route path="about" element={<About />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<Error />} /> */}
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
            </Route>

          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="restore" element={<Restore />} />
          {/* <Route path="caro" element={<VideoDesk />} /> */}
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
