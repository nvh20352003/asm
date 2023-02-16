const Nav = () => {
  return `
    <ul id="menu"
    class="hidden fixed top-0 left-0  flex flex-col justify-center items-center  bg-green-500 w-full h-screen md:bg-transparent md:relative md:h-auto md:flex-row md:justify-end md:flex">
    <li class="hover:text-red-400" ><a class="no-underline block p-4 text-white " href="#">HOME</a></li>
    <li class="hover: no-underline" ><a class="no-underline block p-4 text-white  hover:text-red-400" href="#">ABOUT</a></li>
    <li class=" no-underline" ><a class="no-underline block p-4 text-white " href="#">PORTFOLIO</a></li>
    <li class=" no-underline" ><a class="no-underline block p-4 text-white hover:text-red-900" href="#">CONTACT</a></li>
    <li><button class="block text-white bg-gray-700 px-12 py-2 rounded-3xl ">CV</button></li>
  </ul>
    `
};
export default Nav;