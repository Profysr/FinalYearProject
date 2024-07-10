import Link from "next/link";

export default function Home() {
  // return <p>Hello World</p>;
  // return <LoginPage />;
  return (
    <>
      <Link href="/login">Login Page</Link>
      <Link href="/home">Sidebar</Link>
      <Link href="/table">Custom Table</Link>
    </>
  );
}
