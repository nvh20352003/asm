import { deleteCateProject, getCateProjects } from "../../../api/categoryProjects";
import HeaderAdmin from "../../../components/HeaderAdmin"
import { useEffect, useState } from "./../../../lib";

const AdminCategoryProjectsPage = () => {
    const [cate, setcate] = useState([]);
    useEffect(() => {
        getCateProjects().then((cate) => setcate(cate));
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                deleteCateProject(id).then(() => {
                    const newcate = cate.filter((cateProject) => cateProject.id != id);
                    setcate(newcate); // set lại data
                });
            });
        }
    });

    return `
        ${HeaderAdmin()}
    <div class="container"> 
                <h1>Quản lý dự án</h1>
                <button class= "btn btn-danger mb-3"><a class="no-underline text-white" href="/admin/categoryprojects/add">Thêm mới</a></button>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên danh mục</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cate
            .map((cateProject, index) => {
                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${cateProject.name}</td>
                                    <td width="150">
                                        <button data-id="${cateProject.id
                    }" class="btn btn-danger btn-remove">
                                            Xóa
                                        </button>
                                        <a href="/admin/categoryprojects/${cateProject.id}/edit">Sửa</a>
                                    </td>
                                </tr>
                            `;
            })
            .join("")}
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminCategoryProjectsPage;