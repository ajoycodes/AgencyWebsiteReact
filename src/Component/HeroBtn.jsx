export default function HeroBtn({ path, link, title }) {
  return (
    <>
      <a
        href={link}
        className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        <img className="size-5 mr-2" src={path} />
        {title}
      </a>
    </>
  );
}
