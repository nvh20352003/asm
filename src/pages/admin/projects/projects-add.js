import { getCateProjects } from "../../../api/categoryProjects";
import { router, useEffect, useState } from "../../../lib";
import { addProject } from "./../../../api/project";
import HeaderAdmin from "./../../../components/HeaderAdmin";
import uploadFiles from "./../../../components/UploadImg";

const AdminAddProjectsPage = () => {
    const [cate, setcate] = useState([]);
    useEffect(() => {
        getCateProjects().then((cate) => setcate(cate));
    }, []);


    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const projectDescribe = document.getElementById("project-describe");
        const projectContent = document.getElementById("project-content");
        const projectLinkGithub = document.getElementById("project-linkGithub");
        const projectLinkPreview = document.getElementById("project-linkPreview");
        const projectCompletiontime = document.getElementById("project-completiontime");
        const projectFeedback = document.getElementById("project-feedback");
        const projectTechnology = document.getElementById("project-technology");
        const projectCategoryid = document.getElementById("project-categoryid");
        const projectAlbum = document.getElementById("project-album");
        const projectImg = document.getElementById("project-img");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const urls = await uploadFiles(projectImg.files);
            const urls1 = await uploadFiles(projectAlbum.files);
            // tạo ra 1 object mới lấy dữ liệu từ form
            const formData2 = {
                name: projectName.value,
                describe: projectDescribe.value,
                content: projectContent.value,
                linkGithub: projectLinkGithub.value,
                linkPreview: projectLinkPreview.value,
                completiontime: projectCompletiontime.value,
                feedback: projectFeedback.value,
                technology: projectTechnology.value,
                feartedImage: urls,
                Album: urls1,
                categoryProjectId: projectCategoryid.value
            };
            // call api va tham phan tu
            addProject(formData2).then(() => router.navigate("/admin/projects"));
        });
    });

    return `
    ${HeaderAdmin()}
            <div class="container">
            <h1>Thêm dự án</h1>
            <form action="" id="form-add">
                <div class="form-group mb-3">
                    <label for="" class="form-label">Tên dự án</label>
                    <input type="text" class="form-control" id="project-name" />
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label">Mô Tả</label>
                    <input type="text" class="form-control" id="project-describe"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label">Content</label>
                    <input type="text" class="form-control" id="project-content"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>fearted-Image</label>
                    <input type="file" class="form-control"  id="project-img"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Album</label>
                    <input type="file" class="form-control" multiple id="project-album"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Link Github</label>
                    <input type="text" class="form-control" id="project-linkGithub"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Link Preview</label>
                    <input type="text" class="form-control" id="project-linkPreview"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Completion time</label>
                    <input type="text" class="form-control" id="project-completiontime"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Feedback</label>
                    <input type="text" class="form-control" id="project-feedback"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Technology</label>
                    <input type="text" class="form-control" id="project-technology"/>
                </div>
                
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Danh mục dự án</label>
                    <select name="" id="project-categoryid">
                    ${cate.map((categoryProjects) => {
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
    `;
};

export default AdminAddProjectsPage;