import { getProjects } from "./../api/project";
import { useEffect, useState } from "./../lib";
const ProjectList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProjects().then((data) => setData(data));
    }, []);
    return `
    ${data
            .map((project) => {
                return `
            <div class="text-white border border-[$] rounded-lg block bg-[#2B2B2B] flex flex-col px-4">
            <div class="flex justify-between pt-4">
                <div>
                    <img src="./../img/122.png" alt="">
                </div>
                <div>
                    <img src="../img/111232.png" alt="">
                </div>
        
            </div>
            <div class=" w-full h-full pt-10">
                <div>${project.name}</div>
                <div class="pt-4">${project.describe}</div>
            </div>
            <div class="flex  mt-4 mb-4">
                <div class="pr-4 text-sm">Node</div>
                <div class="pr-4 text-sm">Express</div>
                <div class="pr-4 text-sm">MySql</div>
                <div class="pr-4 text-sm">Ejs</div>
            </div>
        </div>
            `})
            .join("")}
    `;
};
export default ProjectList;
