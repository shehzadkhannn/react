import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import Pagenotfound from "./pages/pagenotfound";
import Mens from "./pages/mens";
import Keds from "./pages/keds";
import Women from "./pages/women";
import Courses from "./pages/courses";
import CourseDetails from "./pages/courseDetails";
import Nav2 from "./component/nav2";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="h-screen bg-[#E1DCC9] text-black">
      <Navbar />
      <Nav2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/product" element={<Product />}>
          <Route path="mens" element={<Mens />} />
          <Route path="keds" element={<Keds />} />
          <Route path="womens" element={<Women />} />
        </Route>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
