export default function H2andPara({ title, p }) {
  return (
    <>
      <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p class="mb-8 font-light lg:text-xl">{p}</p>
    </>
  );
}
