import NavAdmin from "./NavAdmin";

const HeaderAdmin = () => {
    return `
    <header class="flex al-it">
    <div class="flex al-it gap">
        <div class="fs"><img class="w6" src="3.png" alt=""></div>
    </div>
    <div class="flex al-it gap">
        <div class="flex al-it tt g1">
            <img class="w6" src="ad.png" alt="">
            <div>ADMIN</div>
            <div><i class="fa-solid fa-bars"></i></div>
            <div><i class="fa-solid fa-bell"></i></div>
        </div>
    </div>
</header>
${NavAdmin()}`
};
export default HeaderAdmin;