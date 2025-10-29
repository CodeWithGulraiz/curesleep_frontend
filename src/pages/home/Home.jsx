import Banner from "../components/Banner";
import Partners from "../components/Partners";
import Evaluation from "../components/Evalaution";
import Experts from "../components/Experts";
import Support from "../components/Support";
import Find from "../components/Find";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
import Device from "../components/Device";
import HNavbar from "../components/HNavbar";
import DeviceT from "../components/DeviceT";
const Home = () => {
  return (
    <>
      <HNavbar />
      <Banner />
      <Partners />
      <Evaluation />
      <Device />
      <DeviceT />
      <Experts />
      <Support />
      <Find />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
