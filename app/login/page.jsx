import styles from "@/app/ui/login/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <label>Your email</label>
        <input type="username" placeholder="username" />
        <label>Password</label>
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
