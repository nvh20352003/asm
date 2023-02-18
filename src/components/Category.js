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
    <button class="btn " data-id="${cate.id}">${cate.name}</button>
`
    )
            .join("")}
    `;
};
export default Category;
