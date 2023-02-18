import { useEffect, useState } from "../lib";
import { getAbuotMe } from "./../api/abuotMe";
const Aboutme = () => {
    const [aboutMe, setaboutMe] = useState({});

    useEffect(() => {
        getAbuotMe().then((aboutMe) => setaboutMe(aboutMe));
    }, []);
    return `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-14 mt-24 items-center">
                <div class="">
                    <div class="text-white text-base">Hello, I'm</div>
                    <h1 class="text-white text-5xl md:text-5xl">${aboutMe.name}</h1>
                    <div class="text-green-500 py-2.5 text-xl">${aboutMe.job}</div>
                    <div class="text-white text-base">${aboutMe.describe}</div>
                    <button
                        class="text-white px-12 py-2 rounded-3xl bg-green-500 my-9 text-base hover:bg-green-800">Contact</button>
                </div>
                <div class="hidden md:block">
                    <div>
                        <img id="anh" class="w-810 h-540 transition-opacity" src="${aboutMe.imgskills}" alt="">
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-14 mt-14 md:text-left">
                <div class="">
                    <div>
                        <h2 class="text-2xl text-white border-b-red-500  border-b-2 inline">About me</h2>
        
                        <div class="py-4 text-lg text-white leading-5 break-words leading-loose">${aboutMe.conten} </div>
                        
                        <div class="text-green-500 text-lg">Here are my main skills:</div>
                    </div>
                    <div class="flex justify-center md:justify-start">

                    </div>
                </div>
                <div class="flex justify-center md:justify-start">
                    <img class="w-200 h-56 md:w-810 md:h-540"
                        src="${aboutMe.img}" alt="">
                </div>
        
            </div>
    `;
};
export default Aboutme;

// ${aboutMe.skills.map((skill) => {
//     return `<img class="px-3" src="${skill.imgskill}" alt="">`
// }).join("")};
