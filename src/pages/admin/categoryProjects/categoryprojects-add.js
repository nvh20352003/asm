import { addCateProject, getCateProjects } from "../../../api/categoryProjects";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { router, useEffect, useState } from "../../../lib";

const AdminAddCategoryProjectsPage = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("CateProjects-name");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const formData = {
                name: projectName.value,
            };
            // call api va tham phan tu
            addCateProject(formData).then(() => router.navigate("/admin/categoryprojects"));
        });
    });

    return `
    ${HeaderAdmin()}
            <div class="container">
            <h1>Thêm danh mục</h1>
            <form action="" id="form-add">
                <div class="form-group mb-3">
                    <label for="" class="form-label">Tên danh mục</label>
                    <input type="text" class="form-control" id="CateProjects-name" />
                </div>
                <div class="form-group">
                    <button class="btn btn-primary">Thêm danh mục</button>
                </div>
            </form>
        </div>
    `;
};

export default AdminAddCategoryProjectsPage;