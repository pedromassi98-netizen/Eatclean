"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

// Placeholder para dados de receitas
const dummyRecipes = [
  {
    id: "1",
    name: "Salada de Quinoa com Vegetais",
    image: "https://images.unsplash.com/photo-1512621776951-a579fd9f8ed8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    calories: 350,
    prepTime: 20,
    category: "Almoço/Janta",
  },
  {
    id: "2",
    name: "Smoothie Verde Detox",
    image: "https://images.unsplash.com/photo-1505253716333-1d5369c12519?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    calories: 180,
    prepTime: 5,
    category: "Bebidas",
  },
  {
    id: "3",
    name: "Frango Grelhado com Batata Doce",
    image: "https://images.unsplash.com/photo-1590940149700-31329b21117b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    calories: 420,
    prepTime: 30,
    category: "Marmitas Completas",
  },
  {
    id: "4",
    name: "Omelete de Legumes",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    calories: 250,
    prepTime: 10,
    category: "Café da Manhã",
  },
  {
    id: "5",
    name: "Sopa de Abóbora com Gengibre",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    calories: 200,
    prepTime: 25,
    category: "Sopas e Caldos",
  },
  {
    id: "6",
    name: "Pão de Queijo Fit",
    image: "https://images.unsplash.com/photo-1583338918696-211122221210?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    calories: 150,
    prepTime: 15,
    category: "Pães e Massas",
  },
];

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("todas");
  const navigate = useNavigate(); // Inicializar useNavigate

  const categories = [
    { value: "todas", label: "Todas" },
    { value: "cafe-da-manha", label: "Café da Manã" },
    { value: "almoco-janta", label: "Almoço/Janta" },
    { value: "snacks-lanches", label: "Snacks/Lanches" },
    { value: "sopas-caldos", label: "Sopas e Caldos" },
    { value: "marmitas-completas", label: "Marmitas Completas" },
    { value: "paes-massas", label: "Pães e Massas" },
    { value: "molhos", label: "Molhos" },
    { value: "sobremesas", label: "Sobremesas" },
    { value: "bebidas", label: "Bebidas" },
  ];

  const filteredRecipes = dummyRecipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeTab === "todas" ||
      recipe.category.toLowerCase().replace(/ /g, "-").replace(/\//g, "-") === activeTab;
    return matchesSearch && matchesCategory;
  });

  const handleRecipeClick = (id: string) => {
    navigate(`/recipe/${id}`); // Navega para a página de detalhes da receita
  };

  return (
    <div className="container mx-auto p-4 pb-20"> {/* Adicionado pb-20 para o footer */}
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Pesquisar receitas..."
          className="w-full p-3 rounded-lg border-2 border-green-300 dark:border-green-700 focus:ring-green-500 focus:border-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="flex flex-wrap justify-center h-auto bg-green-50 dark:bg-green-900 p-1 rounded-lg">
          {categories.map((category) => (
            <TabsTrigger
              key={category.value}
              value={category.value}
              className="px-3 py-1.5 text-sm data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-colors duration-200 m-0.5"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.value} value={category.value} className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRecipes.map((recipe) => (
                <Card
                  key={recipe.id}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleRecipeClick(recipe.id)} // Adiciona o evento de clique
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{recipe.name}</h3>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>{recipe.calories} kcal</span>
                      <span>{recipe.prepTime} min</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            {filteredRecipes.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400 mt-8">Nenhuma receita encontrada para esta categoria ou pesquisa.</p>
            )}
          </TabsContent>
        ))}
      </Tabs>
      <MadeWithDyad />
    </div>
  );
};

export default ExplorePage;