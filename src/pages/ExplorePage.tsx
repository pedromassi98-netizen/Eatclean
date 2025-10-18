"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Flame, Clock } from "lucide-react";
import { allRecipes, Recipe } from "@/data/recipes"; // Importando a lista de receitas centralizada e o tipo Recipe
import RecipeCategoriesTabs from "@/components/RecipeCategoriesTabs"; // Importando o novo componente de abas

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<Recipe["category"] | "Todas">("Todas");

  const filteredRecipes = allRecipes.filter((recipe) => {
    const matchesSearchTerm = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Todas" || recipe.category === activeCategory;
    return matchesSearchTerm && matchesCategory;
  });

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

      <RecipeCategoriesTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

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
                  <Flame size={16} className="text-orange-500 mr-1" /> {recipe.nutritionalInfo.calories} kcal
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