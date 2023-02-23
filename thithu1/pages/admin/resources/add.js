import { addResources, getResource, updateResources } from "../../../api/resources";
import { router, useEffect, useState } from "../../../lib";
import uploadFiles from "../../../compronents/UploadImg";
import { number, object, string } from "yup";
const resourceSchema = object({
  name: string().required().matches(),
  description: string().required().matches(),
  image: string().required(),
  regularprice: number().positive().required(),
  categories: string().required()
})
const add = () => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const name = document.getElementById("name");
    const img = document.getElementById("img");
    const description = document.getElementById("description");
    const price = document.getElementById("price");
    const cate = document.getElementById("cate");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await uploadFiles(img.files);


      const formData = {
        name: name.value,
        description: description.value,
        regularprice: price.value,
        categories: cate.value,
        image: urls
      };
      resourceSchema.validate(formData, { abortEarly: false }).then(() => {
        addResources(formData).then(() => router.navigate("/admin/resources"))
      }).catch((error) => {
        const errorMessages = {};
        error.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        Object.keys(errorMessages).forEach(key => {
          const errorElement = document.querySelector(`#${key}Error`);
          errorElement.textContent = errorMessages[key];
        });
      })


    })
  })
  return `
    <form action="" id="form-add">
    <div>
      <label for="">Tên sản phẩm</label>
      <input type="text" name="name" id="name" ">
      <div class="error" id="nameError"></div>
    </div>
    <div>
      <label for="">Ảnh</label>
      <input type="file" id="img" name="img">
      <div id="imageError"></div>
    </div>
    <div>
      <label for="">Description</label> <br>
      <input type="text" name="name" id="description">
      <div id="descriptionError"></div>
    </div>
    <div>
      <label for="">Regularprice</label>
      <input type="text" name="price" id="price" >
      <div class="error" id="regularpriceError"></div>
    </div>
    <div>
      <label for="">categories</label>
      <input type="text" name="categories"id="cate">
      <div class="error" id="categoriesError"></div>
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Thêm</button>
    </div>
  </form>
    `;
}
export default add;