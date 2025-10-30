import { Link, useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const products = [1, 2, 3];

  return (
    <div>
      <h3>Список продуктів</h3>
      <ul>
        {products.map(id => (
          <li key={id}>
            <Link to={`/products/${id}`}>Переглянути продукт #{id}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>Повернутись на головну</button>
    </div>
  );
}