"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Recipe } from "@/data/recipes";

interface RecipeCategoriesTabsProps {
  activeCategory: Recipe["category"] | "Todas";
  onCategoryChange: (category: Recipe["category"] | "Todas") => void;
}

const RecipeCategoriesTabs: React.FC<RecipeCategoriesTabsProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const categories: (Recipe["category"] | "Todas")[] = [
    "Todas",
    "Café da Manã",
    "Almoço/Jantar",
    "Lanches",
    "Sopas e Caldos",
    "Pães e Massas",
    "Bebidas",
    "Sobremesas", // Adicionada
    "Molhos", // Adicionada
  ];

  return (
    <Tabs value={activeCategory} onValueChange={(value) => onCategoryChange(value as Recipe["category"] | "Todas")} className="w-full mb-8">
      <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 h-auto"> {/* Ajustado para mais colunas */}
        {categories.map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            className="py-2 px-2 text-xs sm:text-sm md:text-base data-[state=active]:bg-green-600 data-[state=active]:text-white dark:data-[state=active]:bg-green-500"
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default RecipeCategoriesTabs;