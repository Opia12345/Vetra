import Navbar from "../components/Navbar";
import Activity from "../sections/Activity";
import Categories from "../sections/Categories";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Categories />
      <Activity />
    </main>
  );
};

export default Home;
