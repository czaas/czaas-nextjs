import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Test</h1>

      <p>
        Lorem <Link href="/test/something-else/">ipsum dolor</Link> sit amet,
        consectetur adipisicing elit. Non iure tempora ea, ex impedit reiciendis
        adipisci saepe dicta! At provident, aut. Officia quia saepe explicabo
        repudiandae fugiat voluptate!
      </p>
      <p>
        Ipsum, magni, esse. Maiores totam, consectetur deserunt quas quibusdam
        nobis iure. Voluptatibus repudiandae delectus quisquam, at maiores nam,
        vel alias possimus provident libero vero, debitis consequatur aut illum.
      </p>
    </div>
  );
}
