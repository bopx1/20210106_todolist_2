import { useParams } from "react-router-dom";

export function TodoDetail() {
  let { slug } = useParams();
  return <h1>Detail: {slug}</h1>;
}
