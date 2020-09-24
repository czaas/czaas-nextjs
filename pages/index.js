import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>CZAAS</h1>

      <div className={styles.blocks}>
        <Link href="/about/">
          <a>About Me</a>
        </Link>
        <Link href="/projects/">
          <a>Projects</a>
        </Link>
        <Link href="/blog/">
          <a>Blog</a>
        </Link>
      </div>
    </div>
  );
}
Home.layout = "fullpage";
