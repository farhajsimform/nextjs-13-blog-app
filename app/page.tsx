import Link from "next/link";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Next.js 13!</a>
        </h1>

        <p className={styles.description}>
          <Link
            href={"/blog"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5"
          >
            Blog
          </Link>
          <Link
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            href={"/products"}
          >
            Products
          </Link>
        </p>
      </main>
    </div>
  );
}
