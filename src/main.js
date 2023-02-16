import "bootstrap/dist/css/bootstrap.min.css";

import { render, router } from "./lib";

import AdminCategoryProjectsPage from "./pages/admin/categoryprojects/categoryprojects";
import AdminAddCategoryProjectsPage from "./pages/admin/categoryprojects/categoryprojects-add";
import AdminEditCategoryProjectsPage from "./pages/admin/categoryProjects/categoryprojects-edit";
import AdminProjectsPage from "./pages/admin/projects/projects";
import AdminAddProjectsPage from "./pages/admin/projects/projects-add";
import AdminEditProjectsPage from "./pages/admin/projects/projects-edit";
import HomePage from "./pages/home";


// alt + shift + o
// option + shift +
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));

router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminAddProjectsPage, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminEditProjectsPage(data), app));

router.on("/admin/categoryprojects", () => render(AdminCategoryProjectsPage, app));
router.on("/admin/categoryprojects/add", () => render(AdminAddCategoryProjectsPage, app));
router.on("/admin/categoryprojects/:id/edit", ({ data }) => render(() => AdminEditCategoryProjectsPage(data), app));
router.notFound(() => render(NotFoundPage, app));

router.on("/admin/aboutMe", () => render(AdminProjectsPage, app));
router.on("/admin/aboutMe/:id/edit", ({ data }) => render(() => AdminEditProjectsPage(data), app));
//npm i navigo --save
router.resolve();

// render(HomePage, app);