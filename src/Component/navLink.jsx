export default function NavLink({ title }) {
  return (
    <>
      <li>
        <a
          href="#"
          class="block py-2 pl-3 pr-4 text-gray-700 bg-purple-700 rounded lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white"
          aria-current="page"
        >
          {title}
        </a>
      </li>
    </>
  );
}
