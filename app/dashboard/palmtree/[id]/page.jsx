import styles from "@/app/ui/dashboard/palmtree/singlePalmtree/singlePalmtree.module.css";
import Image from "next/image";

const SinglePalmtreePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}></div>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>TaggingID</label>
          <input type="text" name="taggingID" placeholder="Tagging ID" />
          <label>Coordinate</label>
          <input type="email" name="email" placeholder="coordinate" />
          <label>Location</label>
          <input type="password" name="location" placeholder="location" />
          <label>Ripeness</label>
          <select name="ripeness" id="ripeness">
            <option value={true}>Ripe</option>
            <option value={false}>Unripe</option>
          </select>
          <label>Ripeness Score</label>
          <input type="text" name="ripenessscore" placeholder="score" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="New York" />

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglePalmtreePage;
