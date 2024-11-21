import "../App.css";
import Header from "../components/header.jsx";
import MainContainer from "../components/mainContainer.jsx";
import Galery from "../components/galery.jsx";
import ClothingSection from "../components/clothingSection.jsx";
import React, { useState, useEffect } from "react";

function Home() {
    const [clothes, setClothes] = useState([]); // Estado para armazenar as roupas
    const [error, setError] = useState(null); // Estado para armazenar erros

    useEffect(() => {
        // Função para buscar roupas
        const fetchClothes = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5500/getClothes/`
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


    const groupedClothes = clothes.reduce((acc, clothe) => {
        // Verifica se a categoria (gênero) já existe no agrupamento
        if (!acc[clothe.gender]) {
            acc[clothe.gender] = []; // Cria o array para a categoria, se ainda não existir
        }
        acc[clothe.gender].push(clothe); // Adiciona a roupa ao grupo correto
        return acc;
    }, {});

    return (
        <div className="w-full flex flex-col gap-14">
            <Header></Header>
            <MainContainer></MainContainer>
            <Galery></Galery>
            {Object.entries(groupedClothes).map(([gender, genderClothes]) => (
                <ClothingSection
                    key={gender}
                    gender={gender}
                    clothes={genderClothes}
                />
            ))}
        </div>
    );
}

export default Home;
