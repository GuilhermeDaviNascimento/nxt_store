import React, { useState, useEffect } from "react";
import Clothe from "./clothe";

export default function Components({ gender }) {
  const [clothes, setClothes] = useState([]); // Estado para armazenar as roupas
  const [error, setError] = useState(null); // Estado para armazenar erros

  useEffect(() => {
    // Função para buscar roupas
    const fetchClothes = async () => {
      try {
        const response = await fetch(
          `http://localhost:5500/getClothes/${gender}`
        );
        if (!response.ok) {
          throw new Error("Rede falhou");
        }
        const data = await response.json(); // Converte a resposta para JSON
        setClothes(data); // Armazena as roupas no estado
      } catch (error) {
        setError(error.message); // Armazena o erro no estado
        console.error("Erro:", error);
      }
    };

    fetchClothes(); // Chama a função para buscar roupas
  }, []); // O array vazio significa que o efeito será executado apenas uma vez após a montagem do componente

  return (
    <div id="men mt-5">
      <div className="flex overflow-x-auto space-x-6">
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* Exibe o erro, se houver */}
        {clothes.map((clothe) => (
          <Clothe name={clothe.name} price={clothe.price} />
        ))}
      </div>
    </div>
  );
}
