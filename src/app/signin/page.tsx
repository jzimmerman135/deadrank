import CreateAccount from "./createacc";
import Login from "./login";
import styles from "../page.module.css";
import Link from "next/link";
export default function SignIn() {
  return (
    <main className={styles.main}>
      <div>
        <Link href="/">Home</Link>
        <h1>Sign In</h1>
        <CreateAccount />
        <Login />
      </div>
    </main>
  );
}
