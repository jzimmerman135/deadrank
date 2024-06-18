import Image from "next/image";
import styles from "./page.module.css";
import Show, { ShowProps } from "./show";
import Link from "next/link";

function fetchShows(): [ShowProps, ShowProps] {
  return [
    {
      venue: "Winterland",
      date: "12/31/1978",
      setlist: [
        ["Sugar Magnolia", "Scarlet Begonias", "Fire on the Mountain"],
        ["Not Fade Away", "St. Stephen", "Morning Dew"],
      ],
      setlistVisible: false,
    },
    {
      venue: "Veneta, OR",
      date: "08/27/1972",
      setlist: [
        ["Bertha", "Me and My Uncle", "Sugaree"],
        ["Mr. Charlie", "Black-Throated Wind", "China Cat Sunflower"],
      ],
      setlistVisible: false,
    },
  ];
}

export default function Home() {
  let [show1, show2] = fetchShows();
  return (
    <main className={styles.main}>
      <nav>
        <Link href="/signin">Sign In</Link>
      </nav>
      <h1>DeadRank</h1>
      <p>Help build a ranking of the best Grateful Dead shows</p>
      <Show {...show1} />
      <Show {...show2} />
      <form>
        <input type="range" min="-1" max="1" step="0.01" />
        <button type="submit">Vote</button>
      </form>
    </main>
  );
}
