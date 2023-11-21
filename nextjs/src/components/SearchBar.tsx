import { useState } from "react";
import styles from "@/styles/SearchBar.module.css";
export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.search_bar}>
      <div>
        <img src="/images/icons/lupa.svg" className={styles.icon} />
      </div>
      <div>
        {/* <label htmlFor="" className={styles.label}>Pesquisar:</label> */}
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nome, Autor, Categoria..."
          className={styles.search_box}
        />
      </div>
    </div>
  );
}
