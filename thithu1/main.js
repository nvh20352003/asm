import { render, router } from "./lib";
import add from "./pages/admin/resources/add";
import update from "./pages/admin/resources/edit";
import Adminresources from "./pages/admin/resources/list";

const app = document.querySelector('#app');

router.on("/admin/resources", () => render(Adminresources, app));
router.on("/admin/resources/add", () => render(add, app));
router.on("/admin/resources/:id/edit", ({ data }) => render(() => update(data), app));

router.resolve();