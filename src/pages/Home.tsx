import Navbar from "../components/Navbar";
import Activity from "../sections/Activity";
import Best from "../sections/Best";
import Categories from "../sections/Categories";
import CTAOne from "../sections/CTAOne";
import CTATwo from "../sections/CTATwo";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Categories />
      <CTAOne />
      <Best />
      <Activity />
      <CTATwo />
      <Footer />
    </main>
  );
};

export default Home;
