import AboutUs from "./AboutUs";
import AllCrafts from "./AllCrafts";
import Banner from "./Banner";
import Categories from "./Categories";
import Contact from "./Contact";

const Home = () => {
    return (
        <div>
           <Banner /> 
           <AboutUs />
           <AllCrafts />
           <Categories />
           <Contact />
        </div>
    );
};

export default Home;