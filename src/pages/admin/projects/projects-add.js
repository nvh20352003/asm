import { addProject } from "../../../api/project";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { router, useEffect, useState } from "../../../lib";

const AdminAddProjectsPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/categoryProjects")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const formData = {
                name: projectName.value,
                content: projectconten,

            };
            // call api va tham phan tu
            addProject(formData).then(() => router.navigate("/admin/projects"));
        });
    });
    return `
    ${HeaderAdmin()}
        <div class="con1">
            <div class="container">
            <h1>Thêm dự án</h1>
            <form action="" id="form-add">
                <div class="form-group mb-3">
                    <label for="" class="form-label">Tên dự án</label>
                    <input type="text" class="form-control" id="project-name" />
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label">Content</label>
                    <input type="text" class="form-control" id="projectcontent"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>fearted-Image</label>
                    <input type="file" class="form-control" id="projectfearted-Image"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Fallogy</label>
                    <input type="text" class="form-control" id="projectfallogy"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Except</label>
                    <input type="text" class="form-control" id="projectexcept"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Skill</label>
                    <input type="text" class="form-control" id="projectSkill"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Teams</label>
                    <input type="text" class="form-control" id="projectteams"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Teams</label>
                    <input type="text" class="form-control" id="projectLink"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Danh mục dự án</label>
                    <select name="" id="project-cateid">
                    ${data.map((categoryProjects) => {
        return `<option value="${categoryProjects.id}">${categoryProjects.name}</option>`;
    }).join("")}
                    <option value=""></option>
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary">Thêm dự án</button>
                </div>
            </form>
        </div>
    </div>
    `;
};

export default AdminAddProjectsPage;