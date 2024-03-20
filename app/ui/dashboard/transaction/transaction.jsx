import styles from "./transaction.module.css";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oil Palm Plantation</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Location</td>
            <td>Area</td>
            <td>Coverage Area</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ladang FCB Aring</td>
            <td>5°42'34.3"N, 101°50'41.9"E</td>
            <td>Bandar Jeli</td>
            <td>0.0227 km²</td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
