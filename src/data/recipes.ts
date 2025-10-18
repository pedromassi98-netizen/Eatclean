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
  category: "Todas" | "Café da Manhã" | "Almoço/Jantar" | "Lanches" | "Sopas e Caldos" | "Sobremesas" | "Bebidas" | "Pães e Massas" | "Molhos"; // Categoria corrigida
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
    image: "/frango grelhada-batata doce.png", // Caminho da imagem corrigido para o nome exato
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
  {
    id: "4",
    name: "Omelete de Legumes",
    image: "/omelete-legumes.jpg",
    description: "Um café da manhã ou lanche rápido e rico em proteínas, com a adição de legumes frescos.",
    ingredients: [
      "2 ovos grandes",
      "1/4 xícara de legumes picados (pimentão, cebola, espinafre)",
      "Sal e pimenta a gosto",
      "1 colher de chá de azeite de oliva",
    ],
    instructions: [
      "Em uma tigela, bata os ovos com sal e pimenta.",
      "Aqueça o azeite em uma frigideira antiaderente em fogo médio.",
      "Adicione os legumes picados e refogue por 2-3 minutos até ficarem macios.",
      "Despeje os ovos batidos sobre os legumes. Cozinhe até as bordas firmarem.",
      "Dobre a omelete ao meio e cozinhe por mais 1 minuto. Sirva quente.",
    ],
    nutritionalInfo: {
      calories: 280,
      protein: "15g",
      carbs: "10g",
      fat: "18g",
    },
    prepTime: 15,
    category: "Café da Manhã",
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
    instructions: [
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
    prepTime: 30,
    category: "Sopas e Caldos",
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
    instructions: [
      "Em uma tigela, misture o polvilho doce, queijo cottage, ovo, azeite e sal.",
      "Amasse bem com as mãos até obter uma massa homogênea. Se necessário, adicione um pouco de leite para dar o ponto.",
      "Faça bolinhas com a massa e coloque em uma assadeira untada.",
      "Leve ao forno pré-aquecido a 180°C por cerca de 20-25 minutos, ou até dourar.",
      "Serve quente.",
    ],
    nutritionalInfo: {
      calories: 150,
      protein: "8g",
      carbs: "20g",
      fat: "5g",
    },
    prepTime: 25,
    category: "Pães e Massas",
  },
  {
    id: "7",
    name: "Wrap de Atum com Alface",
    image: "/wrap-atum.jpg",
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
    nutritionalInfo: {
      calories: 320,
      protein: "25g",
      carbs: "10g",
      fat: "15g",
    },
    prepTime: 10,
    category: "Lanches",
  },
  {
    id: "8",
    name: "Sopa de Lentilha com Vegetais",
    image: "/sopa-lentilha.jpg",
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
    nutritionalInfo: {
      calories: 250,
      protein: "18g",
      carbs: "30g",
      fat: "8g",
    },
    prepTime: 40,
    category: "Sopas e Caldos",
  },
  {
    id: "9",
    name: "Mousse de Abacate com Cacau",
    image: "https://images.unsplash.com/photo-1590005365085-f04329f6500d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Uma sobremesa saudável e deliciosa, rica em gorduras boas e antioxidantes.",
    ingredients: [
      "1 abacate maduro",
      "2 colheres de sopa de cacau em pó 100%",
      "2 colheres de sopa de mel ou adoçante natural",
      "1/4 xícara de leite vegetal (amêndoa, coco)",
      "Essência de baunilha a gosto",
    ],
    instructions: [
      "Retire a polpa do abacate e coloque no liquidificador.",
      "Adicione o cacau em pó, mel (ou adoçante), leite vegetal e essência de baunilha.",
      "Bata até obter uma mistura homogênea e cremosa.",
      "Leve à geladeira por pelo menos 30 minutos antes de servir.",
      "Decore com raspas de chocolate amargo ou frutas vermelhas, se desejar.",
    ],
    nutritionalInfo: {
      calories: 280,
      protein: "5g",
      carbs: "25g",
      fat: "20g",
    },
    prepTime: 10,
    category: "Sobremesas",
  },
  {
    id: "10",
    name: "Molho Pesto Caseiro",
    image: "https://images.unsplash.com/photo-1621996384209-62191221f07f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Um molho fresco e aromático, perfeito para massas, saladas ou como acompanhamento.",
    ingredients: [
      "2 xícaras de folhas de manjericão fresco",
      "1/2 xícara de queijo parmesão ralado",
      "1/2 xícara de azeite de oliva extra virgem",
      "1/3 xícara de pinhões (ou castanha de caju)",
      "2 dentes de alho",
      "Sal e pimenta do reino a gosto",
    ],
    instructions: [
      "Em um processador de alimentos, adicione o manjericão, parmesão, pinhões e alho.",
      "Pulse algumas vezes até que os ingredientes estejam bem picados.",
      "Com o processador ligado, adicione o azeite de oliva em fio até obter uma consistência homogênea.",
      "Tempere com sal e pimenta a gosto. Sirva imediatamente ou armazene em um pote hermético na geladeira.",
    ],
    nutritionalInfo: {
      calories: 150,
      protein: "5g",
      carbs: "3g",
      fat: "14g",
    },
    prepTime: 10,
    category: "Molhos",
  },
];