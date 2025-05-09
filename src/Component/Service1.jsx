import feature1 from "../assets/features/feature-1.png";
import feature2 from "../assets/features/feature-2.png";
import H2andPara from "./H2andPara";
import Points from "./points";
export default function Service1() {
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
              <H2andPara
                title="We invest in the worlds potential"
                p="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
              />

              <ul
                role="list"
                class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                <Points title="Continuous integration and deployment" />
                <Points title="Development workflow" />
                <Points title="Knowledge Management" />
              </ul>

              <p class="mb-8 font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.
              </p>
            </div>
            <img
              class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={feature1}
              alt="dashboard feature image"
            />
          </div>

          <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={feature2}
              alt="feature image 2"
            />
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
              <H2andPara
                title="We invest in the worlds potential"
                p="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
              />

              <ul
                role="list"
                class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                <Points title="Dynamic reports and Dashboards" />
                <Points title="Templates for everyone" />
                <Points title="Development workflow" />
                <Points title="Limitless Business Automation" />
                <Points title="Knowledge Management" />
              </ul>
              <p class="font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
