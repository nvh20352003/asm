
const NavAdmin = () => {
    return `
    <div class="conten flex ga">
        <ul class="flex flex-col bg-[#212529] h-screen w-[15%] text-[25px] fon">
            <li class="pl-[25px] pt-[30px] inline-block">
                <a href="/" class="text-white no-underline font-semibold">
                    <i class="fa-solid fa-house"></i>
                    Trang chủ
                </a>
            </li>
            <li class="pl-[25px] pt-[30px] inline-block">
                <a href="/admin/projects" class="text-white no-underline font-semibold">
                    <i class="fa-solid fa-house"></i>
                    Projects
                </a>
            </li>
            <li class="pl-[25px] pt-[30px] inline-block">
                <a href="/admin/categoryprojects" class="text-white no-underline font-semibold">
                    <i class="fa-solid fa-house"></i>
                    Danh mục
                </a>
                
            </li>
            <li class="pl-[25px] pt-[30px] inline-block">
                <a href="/admin/aboutMe" class="text-white no-underline font-semibold">
                    <i class="fa-solid fa-house"></i>
                    About
                </a>
                
            </li>
            <li class="pl-[25px] pt-[30px] inline-block">
                <a href="/admin/categoryprojects" class="text-white no-underline font-semibold">
                    <i class="fa-solid fa-house"></i>
                    Contact
                </a>
                
            </li>
        </ul>`
};
export default NavAdmin;