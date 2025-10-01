import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "20px", textAlign: "center", background: "#222", color: "#fff" }}>
      <h1>Roupas Seminovas</h1>
      <nav>
        <Link href="/">Home</Link> | <Link href="/cart">Carrinho</Link>
      </nav>
    </header>
  );
}
