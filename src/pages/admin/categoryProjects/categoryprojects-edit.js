import { getCateProject, updateCateProject } from "../../../api/categoryProjects";
import { updateProject } from "../../../api/project";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { router, useEffect, useState } from "../../../lib";

const AdminEditCategoryProjectsPage = ({ id }) => {
    const [cate, setcate] = useState([]);
    useEffect(() => {
        getCateProject(id).then((cate) => setcate(cate));
    }, []);

    useEffect(() => {
        const form = document.getElementById("form-add");
        const cateProjectname = document.getElementById("cateProject-name");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = {
                id,
                name: cateProjectname.value,

            };
            updateCateProject(formData).then(() => router.navigate("/admin/categoryprojects"));
        });
    });
    return `
    ${HeaderAdmin()}
            <div class="container">
            <h1>Thêm dự án</h1>
            <form action="" id="form-add">
                <div class="form-group mb-3">
                    <label for="" class="form-label">Tên dự án</label>
                    <input type="text" class="form-control" id="cateProject-name" value="${cate.name}"/>
                </div>
                
    <div class="form-group">
        <button class="btn btn-primary">Lưu</button>
    </div>
            </form >
        </div >
    `;
};

export default AdminEditCategoryProjectsPage;
