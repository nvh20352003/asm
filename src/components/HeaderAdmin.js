import NavAdmin from "./NavAdmin";

const HeaderAdmin = () => {
    return `
    <header class="flex items-center justify-between text-[25px] text-white bg-[#212529] px-[100px] py-[20px]">
    <div class="flex items-center gap-[100px]">
        <div class="text-[30px]"><img class="w-[60%]" src="3.png" alt=""></div>
    </div>
    <div class="flex items-center gap-[100px]">
        <div class="flex items-center  gap-[40px]">
            <img class="w-[60%]" src="ad.png" alt="">
            <div>ADMIN</div>
            <div><i class="fa-solid fa-bars"></i></div>
            <div><i class="fa-solid fa-bell"></i></div>
        </div>
    </div>
</header>
${NavAdmin()}`
};
export default HeaderAdmin;