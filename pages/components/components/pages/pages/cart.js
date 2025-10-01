import Header from "../components/Header";

export default function Cart({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Header />
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Carrinho vazio 😢</p>
      ) : (
        <ul style={{ maxWidth: "400px", margin: "0 auto" }}>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - R$ {item.price}
            </li>
          ))}
          <li><strong>Total: R$ {total.toFixed(2)}</strong></li>
        </ul>
      )}
    </div>
  );
}
