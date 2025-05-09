import Pointa from "./Icons/point";

export default function Points({ title }) {
  return (
    <>
      <li class="flex space-x-3">
        <Pointa />
        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
          {title}
        </span>
      </li>
    </>
  );
}
