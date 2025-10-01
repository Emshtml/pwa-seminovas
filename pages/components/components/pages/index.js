import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Camisa Masculina", price: 49.90, image: "/images/camisa-m.jpg" },
  { id: 2, name: "Calça Feminina", price: 79.90, image: "/images/calca-f.jpg" },
  { id: 3, name: "Jaqueta Unissex", price: 99.90, image: "/images/jaqueta.jpg" }
];

export default function Home({ addToCart }) {
  return (
    <div>
      <Header />
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Catálogo de Roupas Seminovas</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
