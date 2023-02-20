import { getAbuotMe } from "../../../api/abuotMe";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { useEffect, useState } from "../../../lib";

const AdminAboutPage = () => {
    const [abuotMe, setAbuotMe] = useState([]);

    useEffect(() => {
        getAbuotMe().then((abuotMe) => setAbuotMe(abuotMe));
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
                <h1>Quản lý thông tin </h1>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Họ và tên</th>
                            <th>Ngày sinh</th>
                            <th>Job</th>
                            <th>Describe</th>
                            <th>Ảnh</th>
                            <th>Sở thích</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                                <tr>
                                    <td>${abuotMe.name}</td>
                                    <td>${abuotMe.date}</td>
                                    <td>${abuotMe.job}</td>
                                    <td>${abuotMe.describe}</td>
                                    <td class = "block"><img style="width:100px;display: grid; align-items: center;" class = "" src="${abuotMe.img}" alt=""></td>
                                    <td>${abuotMe.interest}</td>
                                    <td width="150">
                                        <a href="/admin/aboutMe/${abuotMe.id}/edit">Sửa</a>
                                    </td>
                                </tr>
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminAboutPage;