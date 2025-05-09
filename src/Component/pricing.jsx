import PricingCard from "./pricingCard";

export default function Pricing() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Landwind we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <PricingCard
              title="Starter"
              subtitle="Best option for personal use & for your next project."
              price="29"
              d1="Individual configuration"
              d2="No setup, or hidden fees"
              d3="Team size: 1 developer"
              d4="Premium support: 6 months"
              d5="Free updates: 6 months"
            />
            <PricingCard
              title="Company"
              subtitle="Relevant for multiple users, extended & premium support."
              price="99"
              d1="Individual configuration"
              d2="No setup, or hidden fees"
              d3="Team size: 10 developer"
              d4="Premium support: 24 months"
              d5="Free updates: 24 months"
            />
            <PricingCard
              title="Enterprise"
              subtitle="Best for large scale uses and extended redistribution rights."
              price="499"
              d1="Individual configuration"
              d2="No setup, or hidden fees"
              d3="Team size: 100+ developer"
              d4="Premium support: 36 months"
              d5="Free updates: 36 months"
            />
          </div>
        </div>
      </section>
    </>
  );
}
