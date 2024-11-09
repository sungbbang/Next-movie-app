"use client";

import Link from "next/link";
import styles from "../styles/movie-info-nav.module.css";
import { usePathname } from "next/navigation";

export default function MovieInfoNav({ id }: { id: string }) {
  const path = usePathname();
  const BASE_URL = `/movies/${id}`;

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={BASE_URL}>Trailers</Link>
          {path === BASE_URL ? "✅" : ""}
        </li>
        <li>
          <Link href={`${BASE_URL}/credits`}>Credits</Link>
          {path === `${BASE_URL}/credits` ? "✅" : ""}
        </li>
        <li>
          <Link href={`${BASE_URL}/providers`}>Providers</Link>
          {path === `${BASE_URL}/providers` ? "✅" : ""}
        </li>
        <li>
          <Link href={`${BASE_URL}/similar`}>Similar</Link>
          {path === `${BASE_URL}/similar` ? "✅" : ""}
        </li>
      </ul>
    </nav>
  );
}
