import styles from "@/app/ui/dashboard/palmtree/palmtree.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { searchParams } from "next/navigation";

const PalmTreePage = async () => {
  /* const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, palmtrees } = await fetchPalmtrees(q, page); */

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search..." />
        <Link href="/dashboard/palmtree/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>TaggingID</td>
            <td>Tree Coordinate</td>
            <td>Images</td>
            <td>Ripeness</td>
            <td>Ripeness Score</td>
            <td>Date</td>
            <td>Remarks</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PT0001</td>
            <td>5°42'34.3"N 101°50'41.9"E</td>
            <td>
              <div className={styles.tree}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.treeImage}
                />
              </div>
            </td>
            <td>ripe</td>
            <td>76</td>
            <td>50 ft</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/palmtree/test">
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

export default PalmTreePage;
