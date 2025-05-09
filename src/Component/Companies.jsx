import AirBnb from "./Icons/airbnb";
import Google from "./Icons/Google";
import Mailchimp from "./Icons/Mailchimp";
import Mashable from "./Icons/Mesh";
import Microsoft from "./Icons/Microsoft";
import Spotify from "./Icons/Spotify";

export default function Companies() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
          <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <AirBnb />
            <Google />
            <Microsoft />
            <Spotify />
            <Mailchimp />
            <Mashable />
          </div>
        </div>
      </section>
    </>
  );
}
