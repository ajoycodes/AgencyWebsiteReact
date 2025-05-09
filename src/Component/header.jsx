import logo from "../assets/logo.svg";
import NavLink from "./navLink";
export default function Header() {
  return (
    <>
      <header class="fixed w-full">
        <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
          <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="#" class="flex items-center">
              <img src={logo} class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Learn with Sumit
              </span>
            </a>
            <div class="flex items-center lg:order-2">
              <a
                href="#"
                target="_blank"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
              >
                Download
              </a>
            </div>
            <div
              class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <NavLink title="Company" />
                <NavLink title="Marketplace" />
                <NavLink title="Features" />
                <NavLink title="Team" />
                <NavLink title="Contact" />
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
