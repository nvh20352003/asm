import "bootstrap/dist/css/bootstrap.min.css";

import { render, router } from "./lib";

import AdminEditProjectsPage from "./pages/admin/projects/projects";
import AdminProjectsPage from "./pages/admin/projects/projects";
import AdminAddProjectsPage from "./pages/admin/projects/projects-add";
import HomePage from "./pages/home";


// alt + shift + o
// option + shift +
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/posts", () => render(PostsPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", (params) => render(() => ProjectDetailPage(params), app));
router.on("/posts", () => render(PostsPage, app));
router.on("/post/:id", () => render(PostDetailPage, app));

router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminAddProjectsPage, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminEditProjectsPage(data), app));
router.notFound(() => render(NotFoundPage, app));
//npm i navigo --save
router.resolve();

// render(HomePage, app);