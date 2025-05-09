export default function FAQCard({
  Question,
  Answer,
  a,
  b,
  c,
  link = "#",
  visibility,
}) {
  return (
    <>
      <h3 id="accordion-flush-heading-1">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span>{Question}</span>
          <svg
            data-accordion-icon=""
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h3>
      <div
        id="accordion-flush-body-1"
        class={visibility}
        aria-labelledby="accordion-flush-heading-1"
      >
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">{Answer}</p>
          <p class="text-gray-500 dark:text-gray-400">
            {a}{" "}
            <a
              href={link}
              class="text-purple-600 dark:text-purple-500 hover:underline"
            >
              {b}
            </a>{" "}
            {c}
          </p>
        </div>
      </div>
    </>
  );
}
