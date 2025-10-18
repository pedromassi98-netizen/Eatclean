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
    "Café da Manhã",
    "Almoço/Jantar", // Categoria combinada
    "Lanches",
    "Sopas e Caldos", // Nova categoria
    "Pães e Massas", // Nova categoria
    "Bebidas", // Nova categoria
    // "Sobremesas", // Adicione se tiver receitas de sobremesa
    // "Molhos", // Adicione se tiver receitas de molhos
  ];

  return (
    <Tabs value={activeCategory} onValueChange={(value) => onCategoryChange(value as Recipe["category"] | "Todas")} className="w-full mb-8">
      <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 h-auto"> {/* Ajustado para 5 colunas, pode ser ajustado para mais se necessário */}
        {categories.map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            className="py-2 px-2 text-sm sm:text-base data-[state=active]:bg-green-600 data-[state=active]:text-white dark:data-[state=active]:bg-green-500"
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default RecipeCategoriesTabs;