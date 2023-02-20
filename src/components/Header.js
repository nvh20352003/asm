import Nav from "./Nav";

const Header = () => {
    return `
    <div class= "bg-black">
    <div class="container md:mx-auto flex items-center justify-between px-12 ">
        <img class="w-16 md:w-36" src="https://res.cloudinary.com/dqqfnp0hk/image/upload/v1676869038/logo_x8frpt.png" alt="">
        ${Nav()}
        <div id="menu-icon" class="z-10 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
</div>`
};
export default Header;