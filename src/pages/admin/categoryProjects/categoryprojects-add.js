import * as yup from 'yup';
import { addCateProject } from "../../../api/categoryProjects";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { router, useEffect } from "../../../lib";
const AdminAddCategoryProjectsPage = () => {
    const schema = yup.object().shape(
        {
            name: yup.string().required('Name is required')
        }
    );
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("CateProjects_name");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const formData = {
                name: projectName.value,
            };
            try {
                await schema.validate(formData).then(() => {
                    addCateProject(formData).then(() => router.navigate("/admin/categoryprojects"));
                });
            } catch (errors) {
                const errorMessages = {};
                errors.inner.forEach((error) => {
                    errorMessages[error.path] = error.message;
                });
                setErrors(errorMessages);
            }

        }
        )
        // call api va tham phan tu

    });

    return `
    ${HeaderAdmin()}
            <div class="container">
            <h1>Thêm danh mục</h1>
            <form action="" id="form-add">
                <div class="form-group mb-3">
                    <label for="" class="form-label">Tên danh mục</label>
                    <input type="text" onChange={handleChange} class="form-control" id="CateProjects_name" />
                    {errors.name && <div>{errors.name}</div>}
                </div>
                <div class="form-group">
                    <button class="btn btn-primary">Thêm danh mục</button>
                </div>
            </form>
        </div>
    `;
};

export default AdminAddCategoryProjectsPage;            