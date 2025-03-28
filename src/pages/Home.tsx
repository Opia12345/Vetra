import Navbar from "../components/Navbar";
import Activity from "../sections/Activity";
import Best from "../sections/Best";
import Categories from "../sections/Categories";
import CTAOne from "../sections/CTAOne";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Categories />
      <CTAOne />
      <Best />
      <Activity />
    </main>
  );
};

export default Home;
