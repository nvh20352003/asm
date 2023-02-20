import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { router, useEffect, useState } from "../lib";

const RegisterPage = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const email = document.getElementById("email");
        const pass = document.getElementById("password");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            axios
                .post("http://localhost:3000/login", {
                    email: email.value,
                    password: pass.value,
                })
                .then(({ data }) => console.log(data));
        });
    });
    return `
    ${Header()}
    <div class="container mt-20 mb-44">
        <h1>Login</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label">email</label>
                <input type="text" class="form-control" id="email"/>
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Pass</label>
                <input type="text" class="form-control" id="password"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Đăng nhập</button>
            </div>
        </form>
    </div>
    ${Footer()}
    `;
};

export default RegisterPage;

// POST /register | /users
// POST /signin