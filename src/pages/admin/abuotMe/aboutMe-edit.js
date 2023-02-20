import HeaderAdmin from "../../../components/HeaderAdmin";
import { getProject, updateProject } from "../../../api/project";
import { router, useEffect, useState } from "../../../lib";
import { getCateProjects } from "../../../api/categoryProjects";
import uploadFiles from "../../../components/UploadImg";
import { getAbuotMe } from "../../../api/abuotMe";

const AdminAboutMeEditPage = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        getAbuotMe().then((data) => setData(data));
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
            let urls = data.feartedImage;
            if (projectAlbum.files) {
                let urls1 = await uploadFiles(projectAlbum.files);
            }
            if (projectImg.files) {
                let urls = await uploadFiles(projectImg.files);
            }
            const formData = {
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
                categoryid: projectCategoryid.value
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
    <div class="form-group">
        <button class="btn btn-primary">Lưu</button>
    </div>
            </form >
        </div >
    `;
};

export default AdminAboutMeEditPage;
