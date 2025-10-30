import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return <h3>Деталі продукту: ID = {id}</h3>;
}