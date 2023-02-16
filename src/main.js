import "bootstrap/dist/css/bootstrap.min.css";

import { render, router } from "./lib";

import AdminEditProjectsPage from "./pages/admin/projects/projects-edit";
import AdminProjectsPage from "./pages/admin/projects/projects";
import AdminAddProjectsPage from "./pages/admin/projects/projects-add";
import HomePage from "./pages/home";


// alt + shift + o
// option + shift +
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));

router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminAddProjectsPage, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminEditProjectsPage(data), app));
router.notFound(() => render(NotFoundPage, app));
//npm i navigo --save
router.resolve();

// render(HomePage, app);