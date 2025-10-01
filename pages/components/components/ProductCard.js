export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", margin: "10px", padding: "10px", width: "200px" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
}
