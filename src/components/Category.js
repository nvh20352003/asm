import { useEffect } from "../lib";

const Category = ({ categories, onClick }) => {
    useEffect(() => {
        const btns = document.querySelectorAll(".btn");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = btn.dataset.id;
                onClick(id);
            });
        }
    });
    return `
    ${categories.map((cate) => `
    <button class="btn text-white hover:text-red-400" data-id="${cate.id}"><p class = "text-white">${cate.name}</p></button>
`
    )
            .join("")}
    `;
};
export default Category;
