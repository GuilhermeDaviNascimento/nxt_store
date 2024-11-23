import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import ProductPage from "../components/product_page";

export default function Pages() {
  const { id } = useParams();
  const [shirt, setShirt] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}clothes/${id}`)
      .then((response) => response.json())
      .then((data) => setShirt(data));
    //   .catch((error) => console.error("Erro ao buscar roupas:", error));
  }, [id]);

  return (
    <div className="w-full h-full flex flex-col gap-14">
      <Header></Header>
      <ProductPage shirt={shirt}></ProductPage>
    </div>
  );
}
