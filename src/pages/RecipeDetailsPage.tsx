"use client";

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft } from "lucide-react"; // Importando ArrowLeft para o ícone de voltar
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { allRecipes } from "@/data/recipes"; // Importando a lista de receitas centralizada

const RecipeDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const recipe = allRecipes.find((r) => r.id === id); // Usando a lista centralizada

  if (!recipe) {
    return (
      <div className="container mx-auto p-4 text-center mt-8">
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">Receita não encontrada!</h2>
        <Button onClick={() => navigate("/explore")} className="mt-4 bg-green-600 hover:bg-green-700 text-white">
          Voltar para Explorar
        </Button>
      </div>
    );
  }

  const handleFavorite = () => {
    toast.success(`"${recipe.name}" adicionado aos favoritos! (Funcionalidade real requer backend)`);
    // Lógica para adicionar aos favoritos (será implementada com Supabase)
    console.log(`Receita ${recipe.name} favoritada!`);
  };

  return (
    <ScrollArea className="h-screen pb-20">
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)} // Navega para a página anterior
            className="mr-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-green-700 dark:text-green-300">Detalhes da Receita</h1>
        </div>

        <Card className="overflow-hidden rounded-lg shadow-lg">
          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-64 object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/70 hover:bg-white text-red-500 hover:text-red-600 rounded-full p-2"
              onClick={handleFavorite}
            >
              <Heart className="h-6 w-6 fill-current" />
            </Button>
          </div>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-300">
              {recipe.name}
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{recipe.description}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-3">Ingredientes</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-3">Modo de Preparo</h3>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-3">Informações Nutricionais</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
                <p><strong>Calorias:</strong> {recipe.nutritionalInfo.calories} kcal</p>
                <p><strong>Proteínas:</strong> {recipe.nutritionalInfo.protein}</p>
                <p><strong>Carboidratos:</strong> {recipe.nutritionalInfo.carbs}</p>
                <p><strong>Gorduras:</strong> {recipe.nutritionalInfo.fat}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
};

export default RecipeDetailsPage;