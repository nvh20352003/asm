import HeaderAdmin from "./../../../components/HeaderAdmin";
import { getProject, updateProject } from "./../../../api/project";
import { router, useEffect, useState } from "./../../../lib";
import { getCateProjects } from "../../../api/categoryProjects";
import uploadFiles from "../../../components/UploadImg";

const AdminEditProjectsPage = ({ id }) => {
    const [cate, setcate] = useState([]);
    useEffect(() => {
        getProject(id).then((data) => setData(data));
    }, []);
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng
    const [data, setData] = useState({});

    useEffect(() => {
        getCateProjects(id).then((cate) => setcate(cate));
    }, []);

    // const projects = JSON.parse(localStorage.getItem("projects")) || [];
    // const currentProject = projects.find((project) => project.id == id);
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
            let urls1 = [];
            let urls = [];
            if (projectAlbum.files.length > 0) {
                urls1 = await uploadFiles(projectAlbum.files);
            } else {
                urls1 = data.Album;
            };

            if (projectImg.files.length > 0) {
                urls = await uploadFiles(projectImg.files);
            } else {
                urls = data.feartedImage;
            };
            const formData = {
                id,
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
            updateProject(formData).then(() => router.navigate("/admin/projects"));
        });
    });
    return `
    ${HeaderAdmin()}
            <div class="container">
            <h1>Thêm dự án</h1>
            <form action="" id="form-add">
                <div class="form-group mb-3">
                    <label for="" class="form-label">Tên dự án</label>
                    <input type="text" class="form-control" id="project-name" value="${data.name}"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label">Mô Tả</label>
                    <input type="text" class="form-control" value="${data.describe}" id="project-describe"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label">Content</label>
                    <input type="text" class="form-control" id="project-content" value="${data.content}"/>
                </div>  
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>fearted-Image</label>
                    <img class="w-16" src="${data.feartedImage}">
                    <input type="file" class="form-control"  id="project-img"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Album</label>
                    <input type="file" class="form-control" multiple id="project-album"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Link Github</label>
                    <input type="text" class="form-control" value="${data.linkGithub}" id="project-linkGithub"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Link Preview</label>
                    <input type="text" class="form-control" value="${data.linkPreview}" id="project-linkPreview"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Completion time</label>
                    <input type="text" class="form-control" value="${data.completiontime}" id="project-completiontime"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Feedback</label>
                    <input type="text" class="form-control" value="${data.feedback}" id="project-feedback"/>
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Technology</label>
                    <input type="text" class="form-control" value="${data.technology}" id="project-technology"/>
                </div>
                
                <div class="form-group mb-3">
                    <label for="" class="form-label"></label>Danh mục dự án</label>
                    <select name="" id="project-categoryid">
                    ${cate.map((categoryProjects) => {
        let s = "";
        if (categoryProjects.id == data.categoryid) {
            s = "selected";
        }
        return `<option value="${categoryProjects.id}" ${s}>${categoryProjects.name}</option>`;
    }).join("")}
<option value=""></option>
                    </select >
                </div >
    <div class="form-group">
        <button class="btn btn-primary">Lưu</button>
    </div>
            </form >
        </div >
    `;
};

export default AdminEditProjectsPage;
