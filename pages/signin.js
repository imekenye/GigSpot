import Link from "next/link";
import { Layout } from "../components";
export default function Signin() {
  return (
    <Layout title={`Signin`}>
      <h1>Sign In</h1>
      <Link href="/">Back</Link>
    </Layout>
  );
}
