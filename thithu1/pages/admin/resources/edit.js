import { getResource, updateResources } from "../../../api/resources";
import { router, useEffect, useState } from "../../../lib";
import uploadFiles from "../../../compronents/UploadImg";
const update = ({ id }) => {
    const [data, setData] = useState({});
    useEffect(() => {
        getResource(id).then((data) => setData(data));
    }, []);
    useEffect(() => {
        const form = document.getElementById("form-add");
        const name = document.getElementById("name");
        const img = document.getElementById("img");
        const description = document.getElementById("description");
        const price = document.getElementById("price");
        const cate = document.getElementById("cate");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            let urls = [];
            if (img.files.length > 0) {
                urls = await uploadFiles(img.files);
            } else {
                urls = data.image;
            };

            const formData = {
                id,
                name: name.value,
                description: description.value,
                regularprice: price.value,
                categories: cate.value,
                image: urls
            };
            updateResources(formData).then(() => router.navigate("/admin/resources"))
        })
    })
    return `
    <form action="" id="form-add">
    <div>
      <label for="">Tên sản phẩm</label>
      <input type="text" name="name" id="name" value="${data.name}">
    </div>
    <div>
    <img style="width: 100px;" src="${data.image}" alt="">
      <label for="">Ảnh</label>
      <input type="file" id="img" name="img">
    </div>
    <div>
      <label for="">Description</label> <br>
      <input type="text" name="name" id="description" value="${data.description}">
    </div>
    <div>
      <label for="">Regularprice</label>
      <input type="text" name="price" id="price" value="${data.regularprice}">
    </div>
    <div>
      <label for="">categories</label>
      <input type="text" name="categories"id="cate" value="${data.categories}">
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Lưu</button>
    </div>
  </form>
    `;
}
export default update;