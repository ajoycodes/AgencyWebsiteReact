export default function FooterLink({ title, link = "#" }) {
  return (
    <>
      <li class="mb-4">
        <a href={link} class=" hover:underline">
          {title}
        </a>
      </li>
    </>
  );
}
