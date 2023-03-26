import styles from "./page.module.css";
import prisma from "../lib/prisma";

export async function GET(request) {
  const visits = await prisma.visits.findMany();
  return new Response(JSON.stringify({visits}), {
    headers: {
      "Content-Type": "application/json",
      },
      });
}


export default function Home() {

  return (
    <main className={styles.main}>
ff
    </main>
  );
}
