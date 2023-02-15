import HeaderAdmin from "./../../../components/HeaderAdmin"
import { deleteProject, getProjects } from "../../../api/project";
import { useEffect, useState } from "../../../lib";

const AdminProjectsPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProjects().then((data) => setData(data));
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                deleteProject(id).then(() => {
                    const newData = data.filter((project) => project.id != id);
                    setData(newData); // set lại data
                });
            });
        }
    });

    return `
        ${HeaderAdmin()}
    <div class="container"> 
                <h1>Quản lý dự án</h1>
                <button><a ></a></button>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên dự án</th>
                            <th>Hình ảnh</th>
                            <th>conten</th>
                            <th>Technology</th>
                            <th>team</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data
            .map((project, index) => {
                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td>${project.feartedImage}</td>
                                    <td>${project.conten}</td>
                                    <td>${project.technology}</td>
                                    <td>${project.teams}</td>
                                    <td width="150">
                                        <button data-id="${project.id
                    }" class="btn btn-danger btn-remove">
                                            Xóa
                                        </button>
                                        <a href="/admin/projects/${project.id}/edit">Sửa</a>
                                    </td>
                                </tr>
                            `;
            })
            .join("")}
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminProjectsPage;