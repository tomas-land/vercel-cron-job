import styles from "./page.module.css";
import prisma from "../lib/prisma";

const getVisits = async () => {
  const visits = await prisma.visits.findMany();
  return JSON.stringify(visits);
};

export default function Home() {
  const visits = getVisits();
  console.log(visits);
  return (
    <main className={styles.main}>
      {visits.map((visit) => (
        <div key={visit.id}>
          <h1>{visit.name}</h1>
        </div>
      ))}
    </main>
  );
}
