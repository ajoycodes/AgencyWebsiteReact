import logo from "../assets/logo.svg";
import FooterLink from "./footerLink";
import Dribbble from "./Icons/Dribbble";
import Fb from "./Icons/Fb";
import Github from "./Icons/Github";
import Insta from "./Icons/Insta";
import Twitter from "./Icons/twitter";
export default function Footer() {
  return (
    <>
      <footer class="bg-white dark:bg-gray-800">
        <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h3>
              <ul class="text-gray-500 dark:text-gray-400">
                <FooterLink title="About" />
                <FooterLink title="Careers" />
                <FooterLink title="Brand Center" />
                <FooterLink title="Blog" />
              </ul>
            </div>
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h3>
              <ul class="text-gray-500 dark:text-gray-400">
                <FooterLink title="Discord" />
                <FooterLink title="Twitter" />
                <FooterLink title="Facebook" />
                <FooterLink title="Contact Us" />
              </ul>
            </div>
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h3>
              <ul class="text-gray-500 dark:text-gray-400">
                <FooterLink title="Privacy Policy" />
                <FooterLink title="Licensing" />
                <FooterLink title="Terms" />
              </ul>
            </div>
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h3>
              <ul class="text-gray-500 dark:text-gray-400">
                <FooterLink title="About" />
                <FooterLink title="Careers" />
                <FooterLink title="Brand Center" />
                <FooterLink title="Blog" />
              </ul>
            </div>
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Download
              </h3>
              <ul class="text-gray-500 dark:text-gray-400">
                <FooterLink title="iOS" />
                <FooterLink title="Android" />
                <FooterLink title="Windows" />
                <FooterLink title="MacOS" />
              </ul>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div class="text-center">
            <a
              href="#"
              class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                src={logo}
                class="h-6 mr-3 sm:h-9"
                alt="Learn with Sumit Logo"
              />
              Learn with Sumit{" "}
            </a>
            <span class="block text-sm text-center text-gray-500 dark:text-gray-400">
              © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
              <a
                href="#"
                target="_blank"
                class="text-purple-600 hover:underline dark:text-purple-500"
              >
                Flowbite
              </a>{" "}
              and{" "}
              <a
                href="#"
                class="text-purple-600 hover:underline dark:text-purple-500"
              >
                Tailwind CSS
              </a>
              .
            </span>
            <ul class="flex justify-center mt-5 space-x-5">
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <Fb />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <Insta />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <Github />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <Dribbble />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
