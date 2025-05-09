import Tick from "./Icons/tick";

export default function PricingCard({
  title,
  subtitle,
  price,
  d1,
  d2,
  d3,
  d4,
  d5,
}) {
  return (
    <>
      <div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 class="mb-4 text-2xl font-semibold">{title}</h3>
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          {subtitle}
        </p>
        <div class="flex items-baseline justify-center my-8">
          <span class="mr-2 text-5xl font-extrabold">${price}</span>
          <span class="text-gray-500 dark:text-gray-400">/month</span>
        </div>

        <ul role="list" class="mb-8 space-y-4 text-left">
          <li class="flex items-center space-x-3">
            <Tick />
            <span>{d1}</span>
          </li>

          <li class="flex items-center space-x-3">
            <Tick />
            <span>{d2}</span>
          </li>

          <li class="flex items-center space-x-3">
            <Tick />
            <span>{d3}</span>
          </li>

          <li class="flex items-center space-x-3">
            <Tick />
            <span>{d4}</span>
          </li>

          <li class="flex items-center space-x-3">
            <Tick />
            <span>{d5}</span>
          </li>
        </ul>

        <a
          href="#"
          class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
        >
          Get started
        </a>
      </div>
    </>
  );
}
