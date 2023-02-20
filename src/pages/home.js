import Aboutme from "../components/Aboutme";
import Category from "../components/category";
import ContacMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Header from "./../components/Header";
import ProjectList from "./../components/ProjectList";
import { getCateProjectProjects, getCateProjects } from "./../api/categoryProjects";
import { useEffect, useState } from "../lib";

const HomePage = () => {

    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getCateProjects().then((categories) => setCategories(categories));
    }, []);

    const onClick = (id) => {
        getCateProjectProjects(id)
            .then((data) => setProjects(data.projects));

    };

    //  
    return ` 
    ${Header()}
    <div class="container px-12 md:mx-auto">
    ${Aboutme()}
    <h1 class="text-white my-16 text-center text-4xl">My portfolio</h1>
    <div class= "container text-center " >${Category({ categories, onClick: onClick })}</div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
    ${ProjectList({ projects })}
    </div>
    ${ContacMe()};
</div>
    <footer>
    ${Footer()};
    </footer>
    
    `;

};
export default HomePage;
