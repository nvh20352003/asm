import { getContact } from "../api/contact";
import { useEffect, useState } from "../lib";
import { getAbuotMe } from "./../api/abuotMe";
const Footer = () => {
    const [aboutMe, setaboutMe] = useState({});

    useEffect(() => {
        getAbuotMe().then((aboutMe) => setaboutMe(aboutMe));
    }, []);
    const [contact, setContac] = useState({});

    useEffect(() => {
        getContact().then((contact) => setContac(contact));
    }, []);
    return `  
                <div class="bg-[#2B2B2B] ">
        <div
            class="container px-6 md:mx-auto p-2  text-white flex flex-col md:flex-row justify-center items-center md:justify-between">
            <h2 class="text-xl my-3">${aboutMe.name}</h2>
            <div class="flex my-3">
                <div>This site was made with a</div>
                <div class="flex items-center px-9">
                    <div>lot of</div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 text-red-600" className="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>
            </div>
            <div class="flex my-3">
            <a href = "${contact.integram}"><img class="px-1" src="https://res.cloudinary.com/dqqfnp0hk/image/upload/v1676869534/CV/ra6okdhpjlmwmoghhwrq.png" alt=""></a>
            <a href = "${contact.facebook}"><i class="fab fa-facebook"></i></a>
            </div>
        </div>
    </div>
    </div>`
};
export default Footer;