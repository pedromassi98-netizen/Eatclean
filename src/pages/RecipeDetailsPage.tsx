"use client";

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

// Placeholder para dados de receitas (deve ser substituído por dados reais de um backend)
const dummyRecipesDetails = [
  {
    id: "1",
    name: "Salada de Quinoa com Vegetais",
    image: "https://images.unsplash.com/photo-1512621776951-a579fd9f8ed8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Uma salada refrescante e nutritiva, perfeita para um almoço leve ou acompanhamento. Rica em proteínas e fibras.",
    ingredients: [
      "1 xícara de quinoa cozida",
      "1 pepino picado",
      "1 tomate picado",
      "1/2 cebola roxa fatiada",
      "1/4 xícara de salsinha picada",
      "Suco de 1 limão",
      "2 colheres de sopa de azeite de oliva extra virgem",
      "Sal e pimenta do reino a gosto",
    ],
    preparation: [
      "Cozinhe a quinoa conforme as instruções da embalagem e deixe esfriar.",
      "Em uma tigela grande, combine a quinoa cozida, pepino, tomate, cebola roxa e salsinha.",
      "Em um recipiente pequeno, misture o suco de limão, azeite, sal e pimenta.",
      "Despeje o molho sobre a salada e misture bem. Sirva fria.",
    ],
    nutritionalInfo: {
      calories: 350,
      protein: "12g",
      carbs: "45g",
      fat: "15g",
    },
  },
  {
    id: "2",
    name: "Smoothie Verde Detox",
    image: "https://images.unsplash.com/photo-1505253716333-1d5369c12519?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Um smoothie energizante e desintoxicante, ideal para começar o dia ou como um lanche rápido.",
    ingredients: [
      "1 xícara de espinafre fresco",
      "1/2 banana congelada",
      "1/2 maçã verde",
      "1/2 xícara de água de coco",
      "1 colher de chá de gengibre ralado",
      "Suco de 1/2 limão",
    ],
    preparation: [
      "Lave bem o espinafre e a maçã.",
      "Corte a maçã em pedaços e rale o gengibre.",
      "Adicione todos os ingredientes no liquidificador.",
      "Bata até obter uma mistura homogênea. Sirva imediatamente.",
    ],
    nutritionalInfo: {
      calories: 180,
      protein: "3g",
      carbs: "40g",
      fat: "1g",
    },
  },
  {
    id: "3",
    name: "Frango Grelhado com Batata Doce",
    image: "https://images.unsplash.com/photo-1590940149700-31329b21117b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Uma refeição completa e balanceada, perfeita para o pós-treino ou para marmitas.",
    ingredients: [
      "1 filé de peito de frango (150g)",
      "1 batata doce média",
      "Temperos a gosto (sal, pimenta, páprica, alho em pó)",
      "1 colher de sopa de azeite de oliva",
      "Vegetais cozidos no vapor (brócolis, cenoura)",
    ],
    preparation: [
      "Tempere o filé de frango com sal, pimenta, páprica e alho em pó.",
      "Grelhe o frango em uma frigideira com azeite até dourar e cozinhar por completo.",
      "Cozinhe a batata doce no vapor ou asse até ficar macia.",
      "Sirva o frango grelhado com a batata doce e os vegetais cozidos.",
    ],
    nutritionalInfo: {
      calories: 420,
      protein: "40g",
      carbs: "35g",
      fat: "15g",
    },
  },
  {
    id: "4",
    name: "Omelete de Legumes",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Um café da manhã ou lanche rápido e rico em proteínas, com a adição de legumes frescos.",
    ingredients: [
      "2 ovos grandes",
      "1/4 xícara de legumes picados (pimentão, cebola, espinafre)",
      "Sal e pimenta a gosto",
      "1 colher de chá de azeite de oliva",
    ],
    preparation: [
      "Em uma tigela, bata os ovos com sal e pimenta.",
      "Aqueça o azeite em uma frigideira antiaderente em fogo médio.",
      "Adicione os legumes picados e refogue por 2-3 minutos até ficarem macios.",
      "Despeje os ovos batidos sobre os legumes. Cozinhe até as bordas firmarem.",
      "Dobre a omelete ao meio e cozinhe por mais 1 minuto. Sirva quente.",
    ],
    nutritionalInfo: {
      calories: 250,
      protein: "15g",
      carbs: "10g",
      fat: "18g",
    },
  },
  {
    id: "5",
    name: "Sopa de Abóbora com Gengibre",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Uma sopa cremosa e reconfortante, perfeita para dias frios, com um toque picante de gengibre.",
    ingredients: [
      "500g de abóbora cabotiá picada",
      "1 cebola média picada",
      "2 dentes de alho picados",
      "1 pedaço de gengibre (2cm) ralado",
      "4 xícaras de caldo de legumes",
      "1 colher de sopa de azeite de oliva",
      "Sal e pimenta do reino a gosto",
      "Salsinha fresca para decorar",
    ],
    preparation: [
      "Em uma panela grande, aqueça o azeite e refogue a cebola, alho e gengibre até ficarem macios.",
      "Adicione a abóbora picada e o caldo de legumes. Cozinhe até a abóbora ficar bem macia.",
      "Retire do fogo e bata a sopa no liquidificador até ficar homogênea e cremosa.",
      "Volte a sopa para a panela, tempere com sal e pimenta. Aqueça novamente e sirva decorada com salsinha.",
    ],
    nutritionalInfo: {
      calories: 200,
      protein: "5g",
      carbs: "30g",
      fat: "8g",
    },
  },
  {
    id: "6",
    name: "Pão de Queijo Fit",
    image: "https://images.unsplash.com/photo-1583338918696-211122221210?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Uma versão mais saudável e leve do clássico pão de queijo, ideal para lanches.",
    ingredients: [
      "1 xícara de polvilho doce",
      "1/2 xícara de queijo cottage ou ricota amassada",
      "1 ovo",
      "2 colheres de sopa de azeite de oliva",
      "Sal a gosto",
      "2 colheres de sopa de leite (opcional, para dar ponto)",
    ],
    preparation: [
      "Em uma tigela, misture o polvilho doce, queijo cottage, ovo, azeite e sal.",
      "Amasse bem com as mãos até obter uma massa homogênea. Se necessário, adicione um pouco de leite para dar o ponto.",
      "Faça bolinhas com a massa e coloque em uma assadeira untada.",
      "Leve ao forno pré-aquecido a 180°C por cerca de 20-25 minutos, ou até dourar.",
      "Sirva quente.",
    ],
    nutritionalInfo: {
      calories: 150,
      protein: "8g",
      carbs: "20g",
      fat: "5g",
    },
  },
];

const RecipeDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const recipe = dummyRecipesDetails.find((r) => r.id === id);

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
    <ScrollArea className="h-screen pb-20"> {/* Adicionado pb-20 para o footer */}
      <div className="container mx-auto p-4">
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
                {recipe.preparation.map((step, index) => (
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