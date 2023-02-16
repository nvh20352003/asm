import Aboutme from "../components/Aboutme";
import ContacMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Header from "./../components/Header";
import ProjectList from "./../components/ProjectList";

const HomePage = () => {
    return `
    <div class= "bg-black">
    <header class="bg-black">
    ${Header()}
    </header>
    <div class="container px-12 md:mx-auto">
    ${Aboutme()}
    <h1 class="text-white my-16 text-center text-4xl">My portfolio</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        ${ProjectList()}
    </div>
    ${ContacMe()}
</div>
    <footer>
    ${Footer()}
    </footer>
    </div>
    `;

};
export default HomePage;
