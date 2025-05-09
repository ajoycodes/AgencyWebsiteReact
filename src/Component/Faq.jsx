import FAQCard from "./FaqCard";

export default function Faq() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
          <h2 class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
            Frequently asked questions
          </h2>
          <div class="max-w-screen-md mx-auto">
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <FAQCard
                Question="Can I use Landwind in open-source projects?"
                Answer="Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more."
                a="Check out this guide to learn how to "
                b="get started"
                c=" and start developing websites even faster with components on top of Tailwind CSS."
                link="#"
                visibility=""
              />

              <FAQCard
                Question="Is there a Figma file available?"
                visibility="hidden"
              />

              <FAQCard
                Question="What are the differences between Landwind and Tailwind UI?"
                visibility="hidden"
              />

              <FAQCard
                Question="What about browser support?"
                visibility="hidden"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
