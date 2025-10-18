"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Flame, Clock } from "lucide-react"; // Importar os ícones Flame e Clock

const recipes = [
  {
    id: "1",
    name: "Salada de Quinoa com Vegetais",
    image: "/salada-quinoa.jpg",
    calories: 350,
    prepTime: 20,
    description: "Uma salada leve e nutritiva, perfeita para um almoço saudável.",
    ingredients: [
      "1 xícara de quinoa cozida",
      "1 pepino picado",
      "1 tomate picado",
      "1/2 cebola roxa picada",
      "Folhas de hortelã fresca",
      "Suco de 1 limão",
      "Azeite de oliva, sal e pimenta a gosto",
    ],
    instructions: [
      "Cozinhe a quinoa conforme as instruções da embalagem e deixe esfriar.",
      "Em uma tigela grande, misture a quinoa cozida, pepino, tomate, cebola roxa e hortelã.",
      "Tempere com suco de limão, azeite, sal e pimenta.",
      "Misture bem e sirva.",
    ],
  },
  {
    id: "2",
    name: "Frango Grelhado com Batata Doce",
    image: "/frango-batata-doce.jpg",
    calories: 480,
    prepTime: 30,
    description: "Uma refeição completa e rica em proteínas para o seu pós-treino.",
    ingredients: [
      "2 filés de peito de frango",
      "1 batata doce média",
      "Brócolis cozido no vapor",
      "Azeite de oliva, alho, alecrim, sal e pimenta a gosto",
    ],
    instructions: [
      "Tempere o frango com alho, sal, pimenta e alecrim. Grelhe até dourar.",
      "Corte a batata doce em rodelas, tempere com azeite, sal e pimenta. Asse ou cozinhe no vapor.",
      "Sirva o frango com a batata doce e brócolis.",
    ],
  },
  {
    id: "3",
    name: "Smoothie Verde Detox",
    image: "/Smoothie Verde Detox.png", // Caminho da imagem atualizado aqui
    calories: 200,
    prepTime: 5,
    description: "Um smoothie refrescante e cheio de nutrientes para começar o dia.",
    ingredients: [
      "1 folha de couve",
      "1/2 maçã verde",
      "1/2 pepino",
      "Suco de 1/2 limão",
      "200ml de água de coco",
      "Gelo a gosto",
    ],
    instructions: [
      "Lave bem todos os ingredientes.",
      "Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.",
      "Sirva imediatamente.",
    ],
  },
  {
    id: "4",
    name: "Omelete de Legumes",
    image: "/omelete-legumes.jpg",
    calories: 280,
    prepTime: 15,
    description: "Uma opção rápida e saudável para o café da manhã ou lanche.",
    ingredients: [
      "2 ovos",
      "1/4 pimentão picado",
      "1/4 cebola picada",
      "Espinafre a gosto",
      "Sal e pimenta a gosto",
      "Azeite para untar",
    ],
    instructions: [
      "Bata os ovos com sal e pimenta.",
      "Em uma frigideira antiaderente, refogue o pimentão, a cebola e o espinafre com um fio de azeite.",
      "Despeje os ovos batidos sobre os legumes e cozinhe até firmar.",
      "Dobre ao meio e sirva.",
    ],
  },
  {
    id: "5",
    name: "Wrap de Atum com Alface",
    image: "/wrap-atum.jpg",
    calories: 320,
    prepTime: 10,
    description: "Um lanche prático e saboroso, ideal para levar para o trabalho.",
    ingredients: [
      "1 lata de atum em água (escorrido)",
      "2 folhas grandes de alface",
      "1 colher de sopa de maionese light",
      "1/4 cenoura ralada",
      "Sal e pimenta a gosto",
    ],
    instructions: [
      "Em uma tigela, misture o atum, maionese, cenoura ralada, sal e pimenta.",
      "Espalhe a mistura sobre as folhas de alface e enrole cuidadosamente.",
      "Sirva imediatamente ou leve para viagem.",
    ],
  },
  {
    id: "6",
    name: "Sopa de Lentilha com Vegetais",
    image: "/sopa-lentilha.jpg",
    calories: 250,
    prepTime: 40,
    description: "Uma sopa reconfortante e nutritiva, perfeita para dias frios.",
    ingredients: [
      "1 xícara de lentilha",
      "1 cebola picada",
      "2 dentes de alho picados",
      "2 cenouras picadas",
      "2 talos de aipo picados",
      "1 litro de caldo de legumes",
      "Azeite de oliva, sal e pimenta a gosto",
    ],
    instructions: [
      "Refogue a cebola e o alho no azeite.",
      "Adicione a lentilha, cenoura, aipo e caldo de legumes. Cozinhe até a lentilha ficar macia.",
      "Tempere com sal e pimenta. Sirva quente.",
    ],
  },
];

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 pb-20">
      <h1 className="text-4xl font-bold text-center text-green-700 dark:text-green-300 mb-8">
        Explore Receitas Saudáveis
      </h1>

      <div className="mb-8">
        <Input
          type="text"
          placeholder="Buscar receitas..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <Card key={recipe.id} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{recipe.name}</h3>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center">
                  <Flame size={16} className="text-orange-500 mr-1" /> {recipe.calories} kcal
                </span>
                <span className="flex items-center">
                  <Clock size={16} className="text-orange-500 mr-1" /> {recipe.prepTime} min
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm">{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`}>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600">
                  Ver Receita
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default ExplorePage;