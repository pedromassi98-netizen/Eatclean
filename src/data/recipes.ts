export interface NutritionalInfo {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

export interface Recipe {
  id: string;
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  nutritionalInfo: NutritionalInfo;
  prepTime: number;
  category: "Todas" | "Café da Manhã" | "Almoço/Jantar" | "Lanches" | "Sopas e Caldos" | "Sobremesas" | "Bebidas" | "Pães e Massas" | "Molhos";
}

export const allRecipes: Recipe[] = [
  {
    id: "1",
    name: "Salada de Quinoa com Vegetais",
    image: "/salada-quinoa.png",
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
    instructions: [
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
    prepTime: 20,
    category: "Almoço/Jantar",
  },
  {
    id: "2",
    name: "Smoothie Verde Detox",
    image: "/Smoothie Verde Detox.png",
    description: "Um smoothie energizante e desintoxicante, ideal para começar o dia ou como um lanche rápido.",
    ingredients: [
      "1 xícara de espinafre fresco",
      "1/2 banana congelada",
      "1/2 maçã verde",
      "1/2 xícara de água de coco",
      "1 colher de chá de gengibre ralado",
      "Suco de 1/2 limão",
      "1 colher de chá de sementes de chia (opcional)",
    ],
    instructions: [
      "Lave bem o espinafre e a maçã.",
      "Corte a maçã em pedaços e rale o gengibre.",
      "Adicione todos os ingredientes no liquidificador.",
      "Bata até obter uma mistura homogênea. Sirva imediatamente.",
    ],
    nutritionalInfo: {
      calories: 200,
      protein: "3g",
      carbs: "40g",
      fat: "1g",
    },
    prepTime: 5,
    category: "Bebidas",
  },
  {
    id: "3",
    name: "Frango Grelhado com Batata Doce",
    image: "/frango grelhada-batata doce.png",
    description: "Uma refeição completa e balanceada, perfeita para o pós-treino ou para marmitas.",
    ingredients: [
      "1 filé de peito de frango (150g)",
      "1 batata doce média",
      "Temperos a gosto (sal, pimenta, páprica, alho em pó)",
      "1 colher de sopa de azeite de oliva",
      "Vegetais cozidos no vapor (brócolis, cenoura)",
    ],
    instructions: [
      "Tempere o filé de frango com sal, pimenta, páprica e alho em pó.",
      "Grelhe o frango em uma frigideira com azeite até dourar e cozinhar por completo.",
      "Cozinhe a batata doce no vapor ou asse até ficar macia.",
      "Sirva o frango grelhado com a batata doce e os vegetais cozidos.",
    ],
    nutritionalInfo: {
      calories: 480,
      protein: "40g",
      carbs: "35g",
      fat: "15g",
    },
    prepTime: 30,
    category: "Almoço/Jantar",
  },
];