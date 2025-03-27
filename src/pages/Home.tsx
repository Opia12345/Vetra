import Navbar from "../components/Navbar";
import Activity from "../sections/Activity";
import Categories from "../sections/Categories";
import CTAOne from "../sections/CTAOne";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Categories />
      <CTAOne />
      <Activity />
    </main>
  );
};

export default Home;
