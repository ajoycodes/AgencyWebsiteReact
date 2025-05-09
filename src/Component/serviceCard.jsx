export default function ServiceCard({ path, link, title, description }) {
  return (
    <div>
      <svg
        class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns={link}
      >
        <path fill-rule="evenodd" d={path} clip-rule="evenodd"></path>
      </svg>
      <h3 class="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
      <p class="font-light text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}
