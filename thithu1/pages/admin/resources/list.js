import { deleteResources, getResources } from "./../../../api/resources";
import { useEffect, useState } from "./../../../lib"

const Adminresources = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getResources().then((data) => setData(data));
    })
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                deleteResources(id).then(() => {
                    const newData = data.filter((resource) => resource.id != id);
                    setData(newData); // set lại data
                });
            });
        }
    })
    return `
    <a href="/admin/resources/add">Thêm mới</a>
    <table>
        <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Description</th>
            <th>image</th>
            <th>regularprice</th>
            <th></th>
        </tr>
        ${data.map((resources, index) => {
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${resources.name}</td>
            <td>${resources.categories}</td>
            <td>${resources.description}</td>
            <td><img style="width: 100px;" src="${resources.image}" alt=""></td>
            <td>${resources.regularprice}</td>
            <td>
            <buton data-id = "${resources.id}" class="btn-remove">Xóa</buton>
            <a href="/admin/resources/${resources.id}/edit">Sửa</a>
            </td>
        </tr>
        `;
    }).join("")}
        
    </table>
    `;
}

export default Adminresources;