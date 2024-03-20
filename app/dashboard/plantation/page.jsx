import styles from "@/app/ui/dashboard/plantation/plantation.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const PlantationPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search..." />
        <Link href="/dashboard/plantation/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Location</td>
            <td>Coordinate</td>
            <td>Area</td>
            <td>Coverage</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>Ladang FCB Aring</div>
            </td>
            <td>kelantan</td>
            <td>5°42'34.3"N 101°50'41.9"E</td>
            <td>Bandar Jeli</td>
            <td>0.0227 km²</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href="/">
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default PlantationPage;
