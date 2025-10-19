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
  category: "Todas" | "Café da Manhã" | "Almoço/Jantar" | "Lanches" | "Sopas e Caldos" | "Sobremesas" | "Bebidas" | "Pães e Massas" | "Molhos" | "Acompanhamentos" | "Lanches/Snacks";
  portions?: number;
  difficulty?: "Muito Fácil" | "Fácil" | "Médio" | "Difícil" | "Muito Difícil";
  tags?: string[];
  substitutions?: { [key: string]: string };
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
    image: "/smoothie-verde-detox.png",
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
    image: "/frango-grelhado-batata-doce.png",
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
    name: "Panqueca Proteica de Banana",
    image: "/panqueca-banana.png",
    description: "Uma panqueca deliciosa e nutritiva, perfeita para um café da manhã energético.",
    ingredients: [
      "2 ovos inteiros",
      "1 banana madura",
      "3 colheres de aveia",
      "1 scoop de whey (opcional)"
    ],
    instructions: [
      "Amasse a banana em um bowl",
      "Adicione os ovos e misture bem",
      "Acrescente a aveia e o whey",
      "Aqueça frigideira antiaderente",
      "Despeje a massa e deixe dourar 2 min de cada lado"
    ],
    nutritionalInfo: {
      calories: 285,
      protein: "24g",
      carbs: "35g",
      fat: "6g"
    },
    prepTime: 10,
    category: "Café da Manhã",
  },
  {
    "id": "5",
    "name": "Omelete Turbinado de Claras",
    "image": "/omelete-claras.png",
    "description": "Uma omelete leve e proteica, ideal para um café da manhã ou lanche rápido.",
    "ingredients": [
      "4 claras de ovo",
      "1 ovo inteiro",
      "1/2 xícara de espinafre picado",
      "2 colheres de tomate picado",
      "1 colher de queijo cottage",
      "Sal e pimenta a gosto"
    ],
    "instructions": [
      "Bata levemente as claras com o ovo inteiro",
      "Tempere com sal e pimenta",
      "Aqueça frigideira antiaderente em fogo médio",
      "Despeje a mistura e espalhe uniformemente",
      "Adicione espinafre, tomate e cottage",
      "Dobre ao meio quando as bordas estiverem firmes",
      "Deixe cozinhar por mais 1 minuto"
    ],
    "nutritionalInfo": {
      "calories": 195,
      "protein": "28g",
      "carbs": "8g",
      "fat": "5g"
    },
    "prepTime": 8,
    "category": "Café da Manhã"
  },
  {
    "id": "6",
    "name": "Wrap de Frango com Cream Cheese",
    "image": "/wrap-frango.png",
    "description": "Um wrap prático e saboroso, perfeito para almoço ou jantar leve.",
    "ingredients": [
      "200g de peito de frango desfiado",
      "2 tortilhas integrais",
      "2 colheres de cream cheese light",
      "1 xícara de alface americana",
      "1/2 tomate fatiado",
      "Tempero a gosto (alho, cebola, páprica)"
    ],
    "instructions": [
      "Tempere e cozinhe o frango até desfiar",
      "Aqueça as tortilhas por 20 segundos no microondas",
      "Espalhe cream cheese nas tortilhas",
      "Distribua alface, tomate e frango",
      "Enrole bem apertado",
      "Corte ao meio e sirva"
    ],
    "nutritionalInfo": {
      "calories": 340,
      "protein": "35g",
      "carbs": "28g",
      "fat": "9g"
    },
    "prepTime": 15,
    "category": "Almoço/Jantar"
  },
  {
    "id": "7",
    "name": "Brownie de Caneca Proteico",
    "image": "/brownie-caneca.png",
    "description": "Uma sobremesa rápida e proteica para matar a vontade de doce sem culpa.",
    "ingredients": [
      "1 scoop de whey chocolate",
      "1 ovo",
      "2 colheres de aveia em flocos finos",
      "1 colher de cacau em pó 100%",
      "1 colher de chá de fermento",
      "3 colheres de leite desnatado",
      "Adoçante a gosto"
    ],
    "instructions": [
      "Misture todos os ingredientes em uma caneca",
      "Mexa bem até ficar homogêneo",
      "Leve ao microondas por 1min30 a 2min",
      "Deixe esfriar por 1 minuto",
      "Desenforme ou coma direto na caneca"
    ],
    "nutritionalInfo": {
      "calories": 165,
      "protein": "18g",
      "carbs": "16g",
      "fat": "4g"
    },
    "prepTime": 3,
    "category": "Sobremesas"
  },
  {
    "id": "8",
    "name": "Salmão Grelhado com Aspargos",
    "image": "/salmao-aspargos.png",
    "description": "Um prato elegante e saudável, rico em ômega 3 e proteínas.",
    "ingredients": [
      "2 filés de salmão (300g total)",
      "1 maço de aspargos",
      "1 limão siciliano",
      "2 dentes de alho picados",
      "Azeite em spray",
      "Sal rosa e pimenta do reino",
      "Ervas frescas (tomilho ou endro)"
    ],
    "instructions": [
      "Tempere o salmão com sal, pimenta e alho",
      "Regue com suco de limão e deixe marinar 10min",
      "Corte as pontas dos aspargos",
      "Aqueça grill ou frigideira em fogo médio-alto",
      "Grelhe o salmão 4min de cada lado",
      "Grelhe os aspargos por 5-6 minutos",
      "Finalize com ervas frescas e limão"
    ],
    "nutritionalInfo": {
      "calories": 385,
      "protein": "42g",
      "carbs": "8g",
      "fat": "20g"
    },
    "prepTime": 20,
    "category": "Almoço/Jantar"
  },
  {
    "id": "9",
    "name": "Tapioca Recheada Fit",
    "image": "/tapioca-frango.png",
    "description": "Uma opção leve e sem glúten para café da manhã ou lanche.",
    "ingredients": [
      "3 colheres de goma de tapioca",
      "100g de frango desfiado",
      "2 colheres de queijo cottage",
      "1 colher de tomate picado",
      "Orégano e sal a gosto"
    ],
    "instructions": [
      "Aqueça frigideira antiaderente em fogo médio",
      "Espalhe a tapioca formando um círculo",
      "Aguarde 2 minutos até firmar",
      "Adicione o frango, cottage e tomate em metade",
      "Dobre ao meio",
      "Deixe dourar mais 1 minuto de cada lado",
      "Polvilhe orégano antes de servir"
    ],
    "nutritionalInfo": {
      "calories": 245,
      "protein": "22g",
      "carbs": "32g",
      "fat": "4g"
    },
    "prepTime": 10,
    "category": "Café da Manhã"
  },
  {
    "id": "10",
    "name": "Batata Doce Recheada Fitness",
    "image": "/batata-doce-recheada-updated.jpg",
    "description": "Uma refeição completa e nutritiva, perfeita para marmitas.",
    "ingredients": [
      "2 batatas doces médias",
      "150g de carne moída patinho",
      "1/2 cebola picada",
      "1/2 pimentão vermelho",
      "2 colheres de milho",
      "Temperos: alho, cominho, páprica",
      "Cebolinha para finalizar"
    ],
    "instructions": [
      "Lave as batatas e fure com garfo",
      "Leve ao microondas por 8-10 minutos ou até ficarem macias",
      "Refogue a carne com cebola, alho e temperos",
      "Adicione pimentão e milho, cozinhe por 5min",
      "Corte as batatas ao meio no sentido do comprimento",
      "Faça um buraco no centro com garfo",
      "Recheie com a carne e finalize com cebolinha"
    ],
    "nutritionalInfo": {
      "calories": 320,
      "protein": "28g",
      "carbs": "42g",
      "fat": "6g"
    },
    "prepTime": 35,
    "category": "Almoço/Jantar"
  },
  {
    "id": "11",
    "name": "Vitamina Pós-Treino Explosiva",
    "image": "/vitamina-pos-treino-updated.jpg",
    "description": "Uma vitamina potente para recuperação muscular e energia pós-treino.",
    "ingredients": [
      "1 banana congelada",
      "1 scoop de whey baunilha",
      "1 colher de pasta de amendoim",
      "200ml de leite desnatado",
      "1 colher de aveia",
      "Canela em pó a gosto",
      "3 pedras de gelo"
    ],
    "instructions": [
      "Coloque todos os ingredientes no liquidificador",
      "Bata por 1-2 minutos até ficar cremoso",
      "Ajuste consistência com mais leite se necessário",
      "Sirva imediatamente"
    ],
    "nutritionalInfo": {
      "calories": 285,
      "protein": "32g",
      "carbs": "36g",
      "fat": "3g"
    },
    "prepTime": 5,
    "category": "Bebidas"
  },
  {
    "id": "12",
    "name": "Hambúrguer de Frango Caseiro",
    "image": "/hamburguer-frango.png",
    "description": "Hambúrguer de frango caseiro, uma alternativa mais saudável e saborosa.",
    "ingredients": [
      "500g de peito de frango moído",
      "1 ovo",
      "3 colheres de aveia em flocos",
      "1 cebola pequena ralada",
      "2 dentes de alho amassados",
      "Sal, pimenta, páprica e salsa",
      "Azeite em spray"
    ],
    "instructions": [
      "Misture todos os ingredientes em um bowl",
      "Amasse bem com as mãos até incorporar",
      "Divida em 4 porções iguais",
      "Modele hambúrgueres de 2cm de espessura",
      "Deixe descansar na geladeira por 10min",
      "Grelhe em fogo médio por 5min de cada lado",
      "Sirva com pão integral ou salada"
    ],
    "nutritionalInfo": {
      "calories": 180,
      "protein": "28g",
      "carbs": "6g",
      "fat": "5g"
    },
    "prepTime": 25,
    "category": "Almoço/Jantar"
  },
  {
    "id": "13",
    "name": "Arroz de Couve-Flor Refogado",
    "image": "/arroz-couve-flor.jpg",
    "description": "Uma opção low carb e deliciosa para substituir o arroz tradicional.",
    "ingredients": [
      "1 couve-flor média",
      "1 cebola pequena picada",
      "2 dentes de alho picados",
      "1 cenoura ralada",
      "Azeite em spray",
      "Sal, cúrcuma e salsinha",
      "1 colher de azeite"
    ],
    "instructions": [
      "Lave a couve-flor e corte em floretes",
      "Processe no liquidificador em pulsos até ficar granulada",
      "Aqueça uma frigideira com azeite",
      "Refogue alho e cebola até dourar",
      "Adicione a cenoura e refogue 2min",
      "Acrescente a couve-flor e temperos",
      "Refogue por 5-7 minutos, mexendo sempre",
      "Finalize com salsinha picada"
    ],
    "nutritionalInfo": {
      "calories": 85,
      "protein": "4g",
      "carbs": "12g",
      "fat": "2g"
    },
    "prepTime": 12,
    "category": "Acompanhamentos"
  },
  {
    "id": "14",
    "name": "Crepioca Proteica",
    "image": "/crepioca-updated.jpg",
    "description": "Uma crepioca versátil e rica em proteínas, ideal para qualquer refeição.",
    "ingredients": [
      "1 ovo",
      "2 colheres de tapioca",
      "1 colher de queijo cottage",
      "Sal e orégano a gosto",
      "Recheio: peito de peru e queijo branco"
    ],
    "instructions": [
      "Bata o ovo em um bowl",
      "Adicione a tapioca e misture bem",
      "Aqueça frigideira antiaderente",
      "Despeje a mistura formando círculo",
      "Aguarde 2 minutos até firmar",
      "Adicione o recheio em metade",
      "Dobre ao meio",
      "Deixe dourar mais 1min"
    ],
    "nutritionalInfo": {
      "calories": 215,
      "protein": "18g",
      "carbs": "24g",
      "fat": "6g"
    },
    "prepTime": 7,
    "category": "Café da Manhã"
  },
  {
    "id": "15",
    "name": "Mousse de Chocolate Proteico",
    "image": "/mousse-chocolate.jpg",
    "description": "Uma mousse de chocolate cremosa e proteica, sem culpa.",
    "ingredients": [
      "1 abacate maduro",
      "2 scoops de whey chocolate",
      "3 colheres de cacau em pó 100%",
      "200ml de leite desnatado",
      "Adoçante a gosto",
      "Essência de baunilha"
    ],
    "instructions": [
      "Descasque o abacate e retire o caroço",
      "Bata todos os ingredientes no liquidificador",
      "Misture até ficar bem cremoso e homogêneo",
      "Prove e ajuste doçura se necessário",
      "Distribua em potinhos individuais",
      "Leve à geladeira por no mínimo 2 horas",
      "Finalize com raspas de chocolate 70%"
    ],
    "nutritionalInfo": {
      "calories": 145,
      "protein": "15g",
      "carbs": "12g",
      "fat": "4g"
    },
    "prepTime": 5,
    "category": "Sobremesas"
  },
  {
    "id": "16",
    "name": "Carne Moída Mexicana Fit",
    "image": "/carne-mexicana.jpg",
    "description": "Uma carne moída saborosa com toque mexicano, ideal para refeições completas.",
    "ingredients": [
      "400g de carne moída magra",
      "1 cebola roxa picada",
      "1 pimentão vermelho",
      "1 lata de milho escorrido",
      "1 lata de feijão preto escorrido",
      "2 tomates picados",
      "Temperos: cominho, páprica, pimenta",
      "Coentro fresco"
    ],
    "instructions": [
      "Em uma panela, refogue a cebola até dourar",
      "Adicione a carne e cozinhe até perder a cor rosada",
      "Acrescente pimentão e tomate, refogue 3min",
      "Adicione milho, feijão e temperos",
      "Cozinhe em fogo baixo por 10 minutos",
      "Ajuste temperos a gosto",
      "Finalize com coentro fresco picado"
    ],
    "nutritionalInfo": {
      "calories": 265,
      "protein": "32g",
      "carbs": "18g",
      "fat": "8g"
    },
    "prepTime": 20,
    "category": "Almoço/Jantar"
  },
  {
    "id": "17",
    "name": "Overnight Oats Proteico",
    "image": "/overnight-oats.jpg",
    "description": "Aveia de um dia para o outro, perfeita para um café da manhã prático e nutritivo.",
    "ingredients": [
      "1/2 xícara de aveia em flocos",
      "1 scoop de whey baunilha",
      "200ml de leite desnatado",
      "1 colher de chia",
      "1/2 banana fatiada",
      "Canela em pó",
      "Frutas vermelhas para topping"
    ],
    "instructions": [
      "Em um pote com tampa, misture aveia, whey e chia",
      "Adicione o leite e mexa bem",
      "Acrescente banana fatiada e canela",
      "Feche bem e leve à geladeira por 8h ou overnight",
      "Pela manhã, mexa levemente",
      "Adicione frutas vermelhas por cima",
      "Está pronto para consumir frio"
    ],
    "nutritionalInfo": {
      "calories": 325,
      "protein": "28g",
      "carbs": "42g",
      "fat": "7g"
    },
    "prepTime": 5,
    "category": "Café da Manhã"
  },
  {
    "id": "18",
    "name": "Peixe ao Forno com Legumes",
    "image": "/peixe-legumes.jpg",
    "description": "Peixe assado com uma variedade de legumes, uma refeição leve e completa.",
    "ingredients": [
      "2 filés de tilápia (300g)",
      "1 abobrinha fatiada",
      "1 berinjela fatiada",
      "1 tomate fatiado",
      "1 limão",
      "Alho, azeite e ervas",
      "Sal e pimenta"
    ],
    "instructions": [
      "Pré-aqueça o forno a 200°C",
      "Tempere o peixe com limão, alho, sal e pimenta",
      "Em uma assadeira, disponha os legumes",
      "Regue os legumes com azeite e temperos",
      "Coloque os filés de peixe sobre os legumes",
      "Cubra com papel alumínio",
      "Asse por 20-25 minutos",
      "Retire o papel nos últimos 5min para dourar"
    ],
    "nutritionalInfo": {
      "calories": 295,
      "protein": "38g",
      "carbs": "22g",
      "fat": "7g"
    },
    "prepTime": 30,
    "category": "Almoço/Jantar"
  },
  {
    "id": "19",
    "name": "Bolinho de Aveia Fit",
    "image": "/bolinho-aveia.jpg",
    "description": "Bolinhos saudáveis de aveia, perfeitos para lanches ou café da manhã.",
    "ingredients": [
      "1 xícara de aveia em flocos",
      "2 ovos",
      "1 banana amassada",
      "1/2 xícara de queijo cottage",
      "1 colher de fermento",
      "Canela e essência de baunilha",
      "Gotas de chocolate 70% (opcional)"
    ],
    "instructions": [
      "Pré-aqueça o forno a 180°C",
      "Misture todos os ingredientes em um bowl",
      "Deixe descansar por 5 minutos",
      "Unte forminhas de silicone ou use forminhas de papel",
      "Distribua a massa nas forminhas",
      "Adicione gotas de chocolate por cima se desejar",
      "Asse por 15-18 minutos até dourar",
      "Deixe esfriar antes de desenformar"
    ],
    "nutritionalInfo": {
      "calories": 125,
      "protein": "8g",
      "carbs": "18g",
      "fat": "3g"
    },
    "prepTime": 20,
    "category": "Lanches"
  },
  {
    "id": "20",
    "name": "Sopa Detox de Legumes",
    "image": "/sopa-detox.jpg",
    "description": "Uma sopa leve e desintoxicante, cheia de nutrientes e sabor.",
    "ingredients": [
      "1 cenoura picada",
      "1 abobrinha picada",
      "1 xícara de brócolis",
      "1 xícara de couve-flor",
      "1 cebola média",
      "2 dentes de alho",
      "1 litro de caldo de legumes",
      "Gengibre ralado",
      "Sal, pimenta e cúrcuma"
    ],
    "instructions": [
      "Em uma panela, refogue cebola e alho",
      "Adicione cenoura e refogue por 3min",
      "Acrescente os demais legumes",
      "Adicione o caldo de legumes",
      "Tempere com gengibre, sal, pimenta e cúrcuma",
      "Cozinhe por 20-25 minutos até os legumes ficarem macios",
      "Se preferir cremosa, bata metade no liquidificador",
      "Sirva quente com ervas frescas"
    ],
    "nutritionalInfo": {
      "calories": 145,
      "protein": "6g",
      "carbs": "24g",
      "fat": "3g"
    },
    "prepTime": 35,
    "category": "Sopas e Caldos"
  },
  {
    "id": "21",
    "name": "Atum Selado com Gergelim",
    "image": "/atum-gergelim.jpg",
    "description": "Atum fresco selado com gergelim, uma opção rápida e sofisticada.",
    "ingredients": [
      "2 bifes de atum fresco (300g)",
      "3 colheres de gergelim (branco e preto)",
      "2 colheres de shoyu",
      "1 colher de mel ou agave",
      "Gengibre ralado",
      "Azeite em spray",
      "Limão siciliano"
    ],
    "instructions": [
      "Misture shoyu, mel e gengibre em um bowl",
      "Marine o atum por 10 minutos",
      "Retire da marinada e seque levemente",
      "Passe os bifes no gergelim, pressionando bem",
      "Aqueça frigideira em fogo alto",
      "Sele o atum 1-2min de cada lado (centro mal passado)",
      "Fatie em tiras grossas",
      "Sirva com limão e molho shoyu"
    ],
    "nutritionalInfo": {
      "calories": 265,
      "protein": "42g",
      "carbs": "4g",
      "fat": "9g"
    },
    "prepTime": 15,
    "category": "Almoço/Jantar"
  },
  {
    "id": "22",
    "name": "Cookies Proteicos de Pasta de Amendoim",
    "image": "/cookies-amendoim.png",
    "description": "Cookies deliciosos e proteicos, perfeitos para um lanche saudável.",
    "ingredients": [
      "1/2 xícara de pasta de amendoim",
      "1 ovo",
      "1/4 xícara de aveia",
      "1 scoop de whey baunilha",
      "1 colher de mel",
      "1/2 colher de fermento",
      "Gotas de chocolate 70%"
    ],
    "instructions": [
      "Pré-aqueça o forno a 180°C",
      "Misture pasta de amendoim, ovo e mel",
      "Adicione aveia, whey e fermento",
      "Mexa até formar uma massa homogênea",
      "Acrescente gotas de chocolate",
      "Faça bolinhas e achate levemente",
      "Disponha em assadeira forrada",
      "Asse por 12-15 minutos",
      "Deixe esfriar completamente antes de guardar"
    ],
    "nutritionalInfo": {
      "calories": 155,
      "protein": "9g",
      "carbs": "14g",
      "fat": "7g"
    },
    "prepTime": 18,
    "category": "Lanches"
  },
  {
    "id": "25",
    "name": "Muffin Salgado de Frango e Brócolis",
    "image": "/muffin-frango.jpg",
    "description": "Muffins salgados proteicos, ideais para lanches ou marmitas.",
    "ingredients": [
      "200g de frango desfiado",
      "1 xícara de brócolis picado",
      "3 ovos",
      "1/2 xícara de aveia",
      "1/4 xícara de queijo cottage",
      "1 colher de fermento",
      "Sal, pimenta e orégano"
    ],
    "instructions": [
      "Pré-aqueça o forno a 180°C",
      "Cozinhe o brócolis no vapor por 5 minutos",
      "Bata os ovos em um bowl",
      "Adicione aveia, cottage, frango e brócolis",
      "Tempere com sal, pimenta e orégano",
      "Acrescente o fermento e misture delicadamente",
      "Distribua em forminhas de muffin",
      "Asse por 18-20 minutos até dourar"
    ],
    "nutritionalInfo": {
      "calories": 145,
      "protein": "16g",
      "carbs": "12g",
      "fat": "4g"
    },
    "prepTime": 25,
    "category": "Lanches"
  },
  {
    "id": "26",
    "name": "Strogonoff Fit de Carne",
    "image": "/strogonoff-fit.jpg",
    "description": "Uma versão saudável e saborosa do clássico strogonoff.",
    "ingredients": [
      "500g de carne magra em tiras",
      "1 cebola grande picada",
      "200g de champignon fatiado",
      "1 lata de tomate pelado",
      "200ml de iogurte grego natural",
      "1 colher de mostarda",
      "Sal, pimenta e páprica",
      "Salsinha picada"
    ],
    "instructions": [
      "Tempere a carne com sal e pimenta",
      "Em uma panela, doure a carne em fogo alto",
      "Retire a carne e reserve",
      "Na mesma panela, refogue a cebola",
      "Adicione o champignon e cozinhe por 5min",
      "Acrescente tomate pelado e mostarda",
      "Retorne a carne, cozinhe por 10min em fogo baixo",
      "Desligue o fogo e adicione o iogurte",
      "Mexa bem e finalize com salsinha"
    ],
    "nutritionalInfo": {
      "calories": 295,
      "protein": "34g",
      "carbs": "18g",
      "fat": "10g"
    },
    "prepTime": 30,
    "category": "Almoço/Jantar"
  },
  {
    "id": "27",
    "name": "Panqueca de Banana Sem Farinha",
    "image": "/panqueca-banana-sem-farinha.jpg",
    "description": "Panqueca sem glúten e sem lactose, ideal para um café da manhã leve.",
    "ingredients": [
      "2 bananas maduras",
      "4 ovos",
      "1 colher de canela",
      "1 colher de essência de baunilha",
      "Pitada de sal",
      "Mel para servir (opcional)"
    ],
    "instructions": [
      "Amasse as bananas em um bowl",
      "Adicione os ovos e bata com garfo",
      "Acrescente canela, baunilha e sal",
      "Misture até ficar homogêneo",
      "Aqueça frigideira antiaderente em fogo médio",
      "Despeje porções pequenas da massa",
      "Cozinhe 2min de cada lado até dourar",
      "Sirva com frutas frescas ou mel"
    ],
    "nutritionalInfo": {
      "calories": 195,
      "protein": "14g",
      "carbs": "28g",
      "fat": "4g"
    },
    "prepTime": 10,
    "category": "Café da Manhã"
  },
  {
    "id": "28",
    "name": "Salada Caesar Fit com Frango",
    "image": "/salad-caesar-fit.jpg",
    "description": "Uma salada clássica em versão fit, com frango grelhado e molho leve.",
    "ingredients": [
      "2 peitos de frango grelhados",
      "1 alface romana grande",
      "3 colheres de iogurte grego",
      "1 colher de mostarda dijon",
      "Suco de 1 limão",
      "1 dente de alho amassado",
      "2 colheres de parmesão ralado",
      "Croutons integrais (opcional)"
    ],
    "instructions": [
      "Grelhe o frango temperado e corte em tiras",
      "Lave e rasgue a alface em pedaços",
      "Para o molho: misture iogurte, mostarda, limão e alho",
      "Adicione metade do parmesão ao molho",
      "Em uma tigela, coloque a alface",
      "Adicione as tiras de frango",
      "Regue com o molho caesar",
      "Finalize com parmesão e croutons"
    ],
    "nutritionalInfo": {
      "calories": 285,
      "protein": "38g",
      "carbs": "14g",
      "fat": "9g"
    },
    "prepTime": 20,
    "category": "Almoço/Jantar"
  },
  {
    "id": "29",
    "name": "Bolo de Cenoura Fit com Cobertura",
    "image": "/bolo-cenoura-fit.jpg",
    "description": "Bolo de cenoura saudável com cobertura de chocolate fit.",
    "ingredients": [
      "3 cenouras médias",
      "3 ovos",
      "1/2 xícara de óleo de coco",
      "1 xícara de aveia em flocos",
      "2 scoops de whey baunilha",
      "1 colher de fermento",
      "Adoçante, canela",
      "Cobertura: 2 col cacau + 3 col leite + adoçante"
    ],
    "instructions": [
      "Pré-aqueça o forno a 180°C",
      "Bata no liquidificador: cenoura, ovos e óleo",
      "Transfira para bowl e adicione aveia e whey",
      "Acrescente canela, adoçante e por último o fermento",
      "Despeje em forma untada",
      "Asse por 30-35 minutos (teste palito)",
      "Para cobertura: misture cacau, leite e adoçante",
      "Leve ao fogo até engrossar",
      "Cubra o bolo ainda morno"
    ],
    "nutritionalInfo": {
      "calories": 155,
      "protein": "8g",
      "carbs": "22g",
      "fat": "4g"
    },
    "prepTime": 40,
    "category": "Sobremesas"
  },
  {
    "id": "30",
    "name": "Risoto de Couve-Flor com Cogumelos",
    "image": "/risoto-couve-flor.jpg",
    "description": "Um risoto low carb e vegetariano, com base de couve-flor.",
    "ingredients": [
      "1 couve-flor grande",
      "200g de cogumelos variados",
      "1 cebola picada",
      "2 dentes de alho",
      "1/2 xícara de vinho branco (opcional)",
      "500ml de caldo de legumes",
      "2 colheres de parmesão ralado",
      "Azeite, tomilho e salsinha"
    ],
    "instructions": [
      "Processe a couve-flor até ficar em grãos pequenos",
      "Fatie os cogumelos",
      "Aqueça azeite e doure alho e cebola",
      "Adicione os cogumelos e refogue 5min",
      "Acrescente a couve-flor e refogue 2min",
      "Adicione vinho e deixe evaporar",
      "Vá adicionando caldo aos poucos, mexendo sempre",
      "Cozinhe por 12-15min até cremoso",
      "Finalize com parmesão, tomilho e salsinha"
    ],
    "nutritionalInfo": {
      "calories": 165,
      "protein": "9g",
      "carbs": "18g",
      "fat": "7g"
    },
    "prepTime": 25,
    "category": "Almoço/Jantar"
  },
  {
    "id": "31",
    "name": "Chips de Batata Doce no Forno",
    "image": "/chips-batata-doce.jpg",
    "description": "Chips crocantes e saudáveis de batata doce, feitos no forno.",
    "ingredients": [
      "2 batatas doces médias",
      "Azeite em spray",
      "Sal rosa",
      "Páprica defumada",
      "Alho em pó",
      "Pimenta do reino"
    ],
    "instructions": [
      "Pré-aqueça o forno a 200°C",
      "Lave bem as batatas (pode deixar casca)",
      "Corte em fatias bem finas com mandolina",
      "Seque completamente com papel toalha",
      "Disponha em assadeira forrada em camada única",
      "Borrife azeite e tempere a gosto",
      "Asse por 15min, vire e asse mais 10-15min",
      "Fique de olho para não queimar",
      "Deixe esfriar para ficarem crocantes"
    ],
    "nutritionalInfo": {
      "calories": 125,
      "protein": "2g",
      "carbs": "26g",
      "fat": "2g"
    },
    "prepTime": 30,
    "category": "Lanches"
  },
  {
    "id": "32",
    "name": "Wrap de Alface com Carne Thai",
    "image": "/wrap-alface-thai.jpg",
    "description": "Wraps de alface com carne moída temperada ao estilo tailandês.",
    "ingredients": [
      "300g de carne moída magra",
      "8 folhas de alface lisa",
      "1 cenoura ralada",
      "1/2 pepino em tiras",
      "2 colheres de shoyu",
      "1 colher de mel",
      "Gengibre e alho picados",
      "Hortelã e coentro frescos",
      "Suco de 1 limão"
    ],
    "instructions": [
      "Refogue alho e gengibre até perfumar",
      "Adicione a carne e cozinhe até dourar",
      "Tempere com shoyu, mel e limão",
      "Cozinhe por mais 3min",
      "Lave e seque bem as folhas de alface",
      "Monte os wraps: alface + carne + cenoura + pepino",
      "Finalize com hortelã e coentro",
      "Sirva com molho de amendoim fit (opcional)"
    ],
    "nutritionalInfo": {
      "calories": 245,
      "protein": "28g",
      "carbs": "16g",
      "fat": "8g"
    },
    "prepTime": 20,
    "category": "Almoço/Jantar"
  },
  {
    "id": "33",
    "name": "Iogurte Bowl Proteico",
    "image": "/iogurte-bowl.jpg",
    "description": "Um bowl de iogurte com whey, granola e frutas, perfeito para o café da manhã.",
    "ingredients": [
      "200g de iogurte grego natural",
      "1 scoop de whey sabor a escolha",
      "3 colheres de granola fit",
      "1/2 xícara de frutas vermelhas",
      "1 colher de pasta de amendoim",
      "1 colher de mel",
      "Sementes de chia"
    ],
    "instructions": [
      "Em um bowl, misture iogurte com whey",
      "Mexa bem até incorporar",
      "Adicione camada de granola",
      "Distribua as frutas vermelhas",
      "Regue com pasta de amendoim",
      "Finalize com mel e chia",
      "Sirva imediatamente"
    ],
    "nutritionalInfo": {
      "calories": 295,
      "protein": "32g",
      "carbs": "34g",
      "fat": "6g"
    },
    "prepTime": 5,
    "category": "Café da Manhã"
  },
  {
    "id": "34",
    "name": "Espetinho de Frango Marinado",
    "image": "/espetinho-frango.jpg",
    "description": "Espetinhos de frango marinados e grelhados, uma opção leve e saborosa.",
    "ingredients": [
      "500g de peito de frango em cubos",
      "Marinada: 3 col de iogurte natural",
      "2 col de suco de limão",
      "2 dentes de alho amassados",
      "Páprica, cominho, cúrcuma",
      "1 pimentão cortado em quadrados",
      "1 cebola em pedaços",
      "Palitos de espeto"
    ],
    "instructions": [
      "Misture todos ingredientes da marinada",
      "Adicione o frango e deixe na geladeira 2h mínimo",
      "Monte os espetinhos alternando frango, pimentão e cebola",
      "Pré-aqueça grill ou churrasqueira",
      "Grelhe os espetinhos por 12-15min",
      "Vire a cada 3-4min para dourar uniformemente",
      "Sirva quente com molho tzatziki fit"
    ],
    "nutritionalInfo": {
      "calories": 215,
      "protein": "36g",
      "carbs": "8g",
      "fat": "5g"
    },
    "prepTime": 30,
    "category": "Almoço/Jantar"
  },
  {
    "id": "35",
    "name": "Sopa Cremosa de Abóbora",
    "image": "/sopa-abobora.jpg",
    "description": "Sopa cremosa e reconfortante de abóbora com leite de coco.",
    "ingredients": [
      "500g de abóbora cabotiá",
      "1 cebola média",
      "2 dentes de alho",
      "500ml de caldo de legumes",
      "200ml de leite de coco light",
      "Gengibre ralado",
      "Noz moscada",
      "Sal e pimenta",
      "Sementes de abóbora torradas"
    ],
    "instructions": [
      "Corte a abóbora em cubos",
      "Refogue alho e cebola até dourar",
      "Adicione a abóbora e refogue 3min",
      "Acrescente o caldo e cozinhe 20min",
      "Adicione gengibre e noz moscada",
      "Bata tudo no liquidificador até cremoso",
      "Retorne à panela e adicione leite de coco",
      "Ajuste temperos",
      "Sirva com sementes de abóbora por cima"
    ],
    "nutritionalInfo": {
      "calories": 135,
      "protein": "5g",
      "carbs": "22g",
      "fat": "3g"
    },
    "prepTime": 35,
    "category": "Sopas e Caldos"
  },
  {
    "id": "36",
    "name": "Barrinhas de Cereal Caseiras",
    "image": "/barrinhas-cereal.jpg",
    "description": "Barrinhas de cereal caseiras, perfeitas para um lanche rápido e energético.",
    "ingredients": [
      "2 xícaras de aveia em flocos",
      "1/2 xícara de pasta de amendoim",
      "1/3 xícara de mel ou agave",
      "1 scoop de whey",
      "1/4 xícara de castanhas picadas",
      "2 colheres de chia",
      "Gotas de chocolate 70%",
      "Essência de baunilha"
    ],
    "instructions": [
      "Em uma panela, aqueça mel e pasta de amendoim",
      "Mexa até derreter e formar creme",
      "Retire do fogo e adicione baunilha",
      "Em um bowl, misture aveia, whey, castanhas e chia",
      "Despeje o creme líquido sobre os secos",
      "Misture bem e adicione gotas de chocolate",
      "Pressione em forma forrada (20x20cm)",
      "Leve à geladeira por 2h",
      "Corte em 10 barras",
      "Guarde na geladeira por até 1 semana"
    ],
    "nutritionalInfo": {
      "calories": 145,
      "protein": "6g",
      "carbs": "20g",
      "fat": "5g"
    },
    "prepTime": 30,
    "category": "Lanches"
  },
  {
    "id": "37",
    "name": "Pizza Fit de Frango",
    "image": "/pizza-frango.jpg",
    "description": "Pizza com massa de frango, uma opção low carb e rica em proteínas.",
    "ingredients": [
      "Massa: 500g frango moído",
      "1 ovo",
      "2 col de requeijão light",
      "Orégano e sal",
      "Cobertura: molho tomate caseiro",
      "Muçarela light",
      "Tomate fatiado",
      "Manjericão fresco"
    ],
    "instructions": [
      "Pré-aqueça forno a 200°C",
      "Misture frango, ovo, requeijão e temperos",
      "Espalhe a massa em forma redonda forrada",
      "Leve ao forno por 20min para firmar",
      "Retire e adicione molho de tomate",
      "Distribua muçarela, tomate e orégano",
      "Retorne ao forno por mais 10min",
      "Finalize com manjericão fresco"
    ],
    "nutritionalInfo": {
      "calories": 285,
      "protein": "38g",
      "carbs": "18g",
      "fat": "8g"
    },
    "prepTime": 35,
    "category": "Almoço/Jantar"
  },
  {
    "id": "38",
    "name": "Pão de Queijo Fit de Frigideira",
    "image": "/pao-queijo-frigideira.jpg",
    "description": "Pão de queijo rápido e sem glúten, feito na frigideira.",
    "ingredients": [
      "1 ovo",
      "3 colheres de polvilho doce",
      "2 colheres de queijo cottage",
      "1 colher de queijo parmesão",
      "Sal e orégano a gosto",
      "Azeite em spray"
    ],
    "instructions": [
      "Bata o ovo em um bowl",
      "Adicione polvilho, cottage, parmesão e temperos",
      "Misture até formar massa homogênea",
      "Aqueça frigideira antiaderente",
      "Despeje a massa formando círculo",
      "Cozinhe 3-4min em fogo médio-baixo",
      "Vire e cozinhe mais 3min",
      "Sirva quente"
    ],
    "nutritionalInfo": {
      "calories": 165,
      "protein": "14g",
      "carbs": "18g",
      "fat": "5g"
    },
    "prepTime": 10,
    "category": "Café da Manhã"
  },
  {
    "id": "39",
    "name": "Escondidinho Fit de Frango",
    "image": "/escondidinho-fit.jpg",
    "description": "Escondidinho de frango com purê de mandioquinha, uma refeição completa e saudável.",
    "ingredients": [
      "500g de frango desfiado",
      "600g de mandioquinha",
      "1 cebola picada",
      "2 tomates picados",
      "1 xícara de milho",
      "200ml de leite desnatado",
      "Queijo light ralado",
      "Temperos: alho, cominho, páprica",
      "Cebolinha"
    ],
    "instructions": [
      "Cozinhe a mandioquinha até ficar macia",
      "Amasse com leite até virar purê cremoso",
      "Refogue cebola e alho",
      "Adicione frango, tomate e temperos",
      "Cozinhe por 10min, adicione milho",
      "Em refratário, faça camada de frango",
      "Cubra com o purê de mandioquinha",
      "Polvilhe queijo por cima",
      "Leve ao forno 200°C por 20min até gratinar",
      "Finalize com cebolinha"
    ],
    "nutritionalInfo": {
      "calories": 245,
      "protein": "28g",
      "carbs": "24g",
      "fat": "6g"
    },
    "prepTime": 45,
    "category": "Almoço/Jantar"
  },
  {
    "id": "40",
    "name": "Nhoque de Batata Doce Fit",
    "image": "/nhoque-batata-doce.jpg",
    "description": "Um nhoque saudável e delicioso, perfeito para um almoço ou jantar nutritivo.",
    "ingredients": [
      "500g de batata doce cozida",
      "1 xícara de farinha de arroz",
      "1 ovo",
      "Sal e noz moscada",
      "Molho: 2 tomates picados",
      "Manjericão fresco",
      "2 dentes de alho",
      "Azeite"
    ],
    "instructions": [
      "Amasse a batata doce ainda quente",
      "Adicione ovo, sal e noz moscada",
      "Acrescente farinha aos poucos até dar liga",
      "Enrole em cilindros e corte em pedaços de 2cm",
      "Marque com garfo para dar formato",
      "Ferva água com sal",
      "Cozinhe os nhoques até subirem à superfície",
      "Para o molho: refogue alho, tomate e manjericão",
      "Misture os nhoques ao molho e sirva"
    ],
    "nutritionalInfo": {
      "calories": 235,
      "protein": "8g",
      "carbs": "42g",
      "fat": "4g",
    },
    "prepTime": 40,
    "category": "Almoço/Jantar",
    "portions": 4,
    "difficulty": "Médio",
    "tags": ["sem glúten", "vegetariano", "italiano"],
    "substitutions": {
      "batata doce": "abóbora ou mandioquinha",
      "farinha arroz": "farinha de aveia",
      "molho tomate": "molho branco fit"
    }
  },
  {
    "id": "41",
    "name": "Mingau de Aveia Proteico",
    "image": "/mingau-aveia.jpg",
    "description": "Um mingau cremoso e rico em proteínas, ideal para um café da manhã completo.",
    "ingredients": [
      "1/2 xícara de aveia em flocos",
      "1 scoop de whey baunilha",
      "1 xícara de leite desnatado",
      "1/2 banana fatiada",
      "1 colher de pasta de amendoim",
      "Canela em pó",
      "Mel para finalizar"
    ],
    "instructions": [
      "Em uma panela, aqueça o leite",
      "Adicione a aveia e mexa constantemente",
      "Cozinhe por 5min até engrossar",
      "Retire do fogo e adicione o whey",
      "Mexa bem até incorporar",
      "Transfira para tigela",
      "Cubra com banana, pasta de amendoim e canela",
      "Regue com mel se desejar"
    ],
    "nutritionalInfo": {
      "calories": 295,
      "protein": "26g",
      "carbs": "38g",
      "fat": "6g",
    },
    "prepTime": 8,
    "category": "Café da Manhã",
    "portions": 1,
    "difficulty": "Muito Fácil",
    "tags": ["proteico", "conforto", "inverno"],
    "substitutions": {
      "aveia": "quinoa em flocos",
      "whey": "albumina",
      "leite": "leite de amêndoas",
      "banana": "maçã ralada"
    }
  },
  {
    "id": "42",
    "name": "Almôndegas de Peru ao Molho",
    "image": "/almondegas-peru.jpg",
    "description": "Almôndegas de peru leves e saborosas, servidas com um molho delicioso.",
    "ingredients": [
      "500g de carne de peru moída",
      "1 ovo",
      "3 colheres de aveia",
      "1 cebola ralada",
      "Sal, pimenta e salsa",
      "Molho: 400g tomate pelado",
      "Manjericão e orégano",
      "1 cenoura ralada"
    ],
    "instructions": [
      "Misture peru, ovo, aveia, metade da cebola e temperos",
      "Modele almôndegas do tamanho de uma noz",
      "Em uma frigideira, doure as almôndegas",
      "Reserve as almôndegas",
      "Na mesma panela, refogue cebola restante",
      "Adicione tomate, cenoura e ervas",
      "Cozinhe por 10min",
      "Retorne as almôndegas ao molho",
      "Cozinhe por mais 10min em fogo baixo"
    ],
    "nutritionalInfo": {
      "calories": 255,
      "protein": "32g",
      "carbs": "14g",
      "fat": "8g",
    },
    "prepTime": 35,
    "category": "Almoço/Jantar",
    "portions": 4,
    "difficulty": "Médio",
    "tags": ["proteico", "marmita", "molho"],
    "substitutions": {
      "peru": "frango ou carne magra",
      "aveia": "farelo de aveia",
      "tomate pelado": "molho de tomate caseiro"
    }
  },
  {
    "id": "43",
    "name": "Sorvete de Banana Nice Cream",
    "image": "/nice-cream.jpg",
    "description": "Um sorvete vegano e sem açúcar, perfeito para refrescar e satisfazer a vontade de doce.",
    "ingredients": [
      "3 bananas congeladas em rodelas",
      "2 colheres de cacau em pó 100%",
      "1/4 xícara de leite de amêndoas",
      "1 colher de pasta de amendoim",
      "Essência de baunilha",
      "Toppings: nibs de cacau, castanhas"
    ],
    "instructions": [
      "Congele as bananas com antecedência (mínimo 4h)",
      "Coloque tudo no processador ou liquidificador potente",
      "Bata por 3-4 minutos, parando para raspar as laterais",
      "Continue até ficar cremoso como sorvete",
      "Sirva imediatamente (textura soft)",
      "Ou congele por 30min para firmar mais",
      "Finalize com toppings de escolha"
    ],
    "nutritionalInfo": {
      "calories": 125,
      "protein": "4g",
      "carbs": "28g",
      "fat": "1g",
    },
    "prepTime": 5,
    "category": "Sobremesas",
    "portions": 2,
    "difficulty": "Muito Fácil",
    "tags": ["vegano", "sem açúcar", "sobremesa", "gelado"],
    "substitutions": {
      "banana": "manga congelada",
      "cacau": "morango (versão frutas)",
      "leite amêndoas": "leite de coco",
      "pasta amendoim": "tahine"
    }
  },
  {
    "id": "44",
    "name": "Quiche Fit sem Massa",
    "image": "/quiche-sem-massa.jpg",
    "description": "Uma quiche leve e proteica, sem massa, ideal para um almoço ou jantar saudável.",
    "ingredients": [
      "6 ovos",
      "200ml de leite desnatado",
      "1 xícara de brócolis picado",
      "100g de peito de peru em cubos",
      "1/2 xícara de queijo cottage",
      "1 tomate picado",
      "Sal, pimenta e noz moscada",
      "Queijo ralado light para gratinar"
    ],
    "instructions": [
      "Pré-aqueça o forno a 180°C",
      "Bata os ovos com leite e temperos",
      "Adicione cottage e misture",
      "Em refratário untado, distribua brócolis e peru",
      "Adicione tomate picado",
      "Despeje a mistura de ovos",
      "Polvilhe queijo ralado",
      "Asse por 30-35min até firmar e dourar",
      "Deixe esfriar 10min antes de cortar"
    ],
    "nutritionalInfo": {
      "calories": 185,
      "protein": "16g",
      "carbs": "8g",
      "fat": "10g",
    },
    "prepTime": 40,
    "category": "Almoço/Jantar",
    "portions": 6,
    "difficulty": "Fácil",
    "tags": ["proteico", "low carb", "marmita"],
    "substitutions": {
      "brócolis": "espinafre ou cogumelos",
      "peru": "frango desfiado ou salmão",
      "cottage": "ricota"
    }
  },
  {
    "id": "45",
    "name": "Caldo Verde Fit",
    "image": "/caldo-verde.jpg",
    "description": "Uma versão saudável e reconfortante do clássico caldo verde, perfeito para dias frios.",
    "ingredients": [
      "500g de batata inglesa",
      "200g de couve-manteiga fatiada fina",
      "150g de linguiça calabresa light",
      "1 cebola picada",
      "2 dentes de alho",
      "1 litro de caldo de legumes",
      "Azeite",
      "Sal e pimenta"
    ],
    "instructions": [
      "Descasque e corte as batatas em cubos",
      "Refogue alho e cebola no azeite",
      "Adicione as batatas e refogue 2min",
      "Acrescente o caldo e cozinhe 15min",
      "Amasse algumas batatas para engrossar",
      "Fatie a linguiça e doure em frigideira",
      "Adicione a couve ao caldo",
      "Cozinhe por 3-4min apenas",
      "Sirva com rodelas de linguiça por cima"
    ],
    "nutritionalInfo": {
      "calories": 165,
      "protein": "12g",
      "carbs": "22g",
      "fat": "4g",
    },
    "prepTime": 30,
    "category": "Sopas e Caldos",
    "portions": 4,
    "difficulty": "Fácil",
    "tags": ["tradicional", "conforto", "português"],
    "substitutions": {
      "batata inglesa": "mandioquinha",
      "linguiça": "bacon de peru ou tofu defumado",
      "couve": "espinafre"
    }
  },
  {
    "id": "46",
    "name": "Panini Fit de Frango",
    "image": "/panini-frango.jpg",
    "description": "Um panini rápido e proteico com frango, ideal para um lanche ou refeição leve.",
    "ingredients": [
      "2 pães sírios integrais",
      "200g de frango grelhado fatiado",
      "2 fatias de queijo branco",
      "Tomate fatiado",
      "Folhas de rúcula",
      "2 colheres de cream cheese light",
      "Orégano e azeite em spray"
    ],
    "instructions": [
      "Abra os pães ao meio",
      "Espalhe cream cheese em ambos os lados",
      "Monte: frango, queijo, tomate e rúcula",
      "Polvilhe orégano",
      "Aqueça sanduicheira ou frigideira",
      "Borrife azeite na superfície externa",
      "Grelhe por 3-4min até dourar e queijo derreter",
      "Corte ao meio e sirva quente"
    ],
    "nutritionalInfo": {
      "calories": 325,
      "protein": "34g",
      "carbs": "32g",
      "fat": "8g",
    },
    "prepTime": 15,
    "category": "Almoço/Jantar",
    "portions": 2,
    "difficulty": "Fácil",
    "tags": ["proteico", "rápido", "lanche"],
    "substitutions": {
      "pão sírio": "pão integral ou wrap",
      "frango": "atum ou rosbife magro",
      "cream cheese": "pasta de grão de bico"
    }
  },
  {
    "id": "47",
    "name": "Farofa Fit de Couve-Flor",
    "image": "/farofa-couve-flor.jpg",
    "description": "Uma farofa low carb e saborosa de couve-flor, perfeita como acompanhamento.",
    "ingredients": [
      "1 couve-flor média",
      "2 ovos cozidos picados",
      "1 cebola picada",
      "2 dentes de alho",
      "1/2 xícara de cenoura ralada",
      "Salsinha e cebolinha",
      "Sal, pimenta e cúrcuma",
      "Azeite"
    ],
    "instructions": [
      "Rale a couve-flor crua no ralo grosso",
      "Ou processe em pulsos até ficar granulada",
      "Aqueça azeite e refogue alho e cebola",
      "Adicione cenoura e refogue 2min",
      "Acrescente a couve-flor ralada",
      "Tempere com sal, pimenta e cúrcuma",
      "Refogue por 5-7min mexendo sempre",
      "Adicione ovos picados",
      "Finalize com salsinha e cebolinha"
    ],
    "nutritionalInfo": {
      "calories": 95,
      "protein": "5g",
      "carbs": "12g",
      "fat": "3g",
    },
    "prepTime": 15,
    "category": "Acompanhamentos",
    "portions": 4,
    "difficulty": "Fácil",
    "tags": ["low carb", "acompanhamento", "vegetariano"],
    "substitutions": {
      "couve-flor": "brócolis ralado",
      "ovos": "tofu em cubinhos",
      "cenoura": "pimentão picado"
    }
  },
  {
    "id": "48",
    "name": "Tilápia ao Molho de Maracujá",
    "image": "/tilapia-maracuja.jpg",
    "description": "Filés de tilápia com um molho agridoce de maracujá, uma opção leve e exótica.",
    "ingredients": [
      "2 filés de tilápia (300g)",
      "Polpa de 2 maracujás",
      "1/2 xícara de caldo de legumes",
      "1 colher de mel",
      "1 cebola roxa fatiada",
      "Gengibre ralado",
      "Sal e pimenta",
      "Coentro fresco"
    ],
    "instructions": [
      "Tempere os filés com sal e pimenta",
      "Em uma frigideira, sele o peixe 2min de cada lado",
      "Retire e reserve",
      "Na mesma frigideira, refogue a cebola",
      "Adicione gengibre, polpa de maracujá e caldo",
      "Acrescente mel e cozinhe 5min",
      "Retorne o peixe ao molho",
      "Cozinhe por mais 3min",
      "Finalize com coentro fresco picado"
    ],
    "nutritionalInfo": {
      "calories": 275,
      "protein": "38g",
      "carbs": "16g",
      "fat": "7g",
    },
    "prepTime": 25,
    "category": "Almoço/Jantar",
    "portions": 2,
    "difficulty": "Médio",
    "tags": ["proteico", "tropical", "gourmet"],
    "substitutions": {
      "tilápia": "salmão ou pescada",
      "maracujá": "laranja ou limão siciliano",
      "mel": "agave"
    }
  },
  {
    "id": "49",
    "name": "Bolo de Caneca de Banana",
    "image": "/bolo-caneca-banana.jpg",
    "description": "Um bolo de caneca rápido e proteico, perfeito para um lanche ou sobremesa individual.",
    "ingredients": [
      "1 banana pequena amassada",
      "1 ovo",
      "2 colheres de aveia",
      "1 scoop de whey baunilha",
      "1/2 colher de fermento",
      "Canela em pó",
      "Gotas de chocolate 70%"
    ],
    "instructions": [
      "Amasse a banana em uma caneca",
      "Adicione o ovo e misture bem",
      "Acrescente aveia, whey e canela",
      "Adicione fermento por último",
      "Mexa até ficar homogêneo",
      "Coloque gotas de chocolate",
      "Microondas por 2-3min (potência alta)",
      "Deixe esfriar 1min antes de comer"
    ],
    "nutritionalInfo": {
      "calories": 175,
      "protein": "12g",
      "carbs": "26g",
      "fat": "4g",
    },
    "prepTime": 5,
    "category": "Sobremesas",
    "portions": 1,
    "difficulty": "Muito Fácil",
    "tags": ["rápido", "proteico", "sobremesa"],
    "substitutions": {
      "banana": "abóbora cozida",
      "whey": "farinha de amêndoas",
      "gotas chocolate": "nozes picadas"
    }
  },
  {
    "id": "50",
    "name": "Salada de Grão de Bico Mediterrânea",
    "image": "/salada-grao-bico.jpg",
    "description": "Uma salada fresca e nutritiva com grão de bico, inspirada nos sabores mediterrâneos.",
    "ingredients": [
      "2 xícaras de grão de bico cozido",
      "1 pepino picado",
      "1 xícara de tomate cereja",
      "1/2 cebola roxa",
      "50g de queijo feta light",
      "Azeitonas pretas",
      "Molho: azeite, limão, orégano",
      "Hortelã fresca"
    ],
    "instructions": [
      "Escorra bem o grão de bico",
      "Corte pepino em cubos pequenos",
      "Corte os tomates ao meio",
      "Pique finamente a cebola roxa",
      "Misture tudo em uma tigela",
      "Prepare molho: 2 col azeite + suco 1 limão + orégano",
      "Regue a salada com o molho",
      "Adicione queijo feta esfarelado e azeitonas",
      "Finalize com hortelã picada",
      "Deixe descansar 10min antes de servir"
    ],
    "nutritionalInfo": {
      "calories": 245,
      "protein": "12g",
      "carbs": "32g",
      "fat": "8g",
    },
    "prepTime": 15,
    "category": "Almoço/Jantar",
    "portions": 3,
    "difficulty": "Fácil",
    "tags": ["vegetariano", "proteico", "mediterrâneo"],
    "substitutions": {
      "grão de bico": "lentilha ou feijão branco",
      "queijo feta": "ricota temperada",
      "hortelã": "manjericão"
    }
  },
  {
    "id": "51",
    "name": "Camarão Grelhado com Alho e Limão",
    "image": "/camarao-alho-limao.jpg",
    "description": "Camarões grelhados com alho e limão, uma opção leve e cheia de sabor.",
    "ingredients": [
      "400g de camarão limpo",
      "4 dentes de alho picados",
      "Suco de 2 limões",
      "Raspas de limão siciliano",
      "2 colheres de azeite",
      "Pimenta calabresa",
      "Sal e pimenta do reino",
      "Salsinha fresca"
    ],
    "instructions": [
      "Tempere os camarões com sal, pimenta e limão",
      "Deixe marinar por 10min",
      "Aqueça frigideira ou grill em fogo alto",
      "Adicione azeite e alho, refogue 1min",
      "Acrescente os camarões",
      "Grelhe 2min de cada lado até ficarem rosados",
      "Regue com suco de limão",
      "Adicione pimenta calabresa",
      "Finalize com raspas de limão e salsinha"
    ],
    "nutritionalInfo": {
      "calories": 185,
      "protein": "32g",
      "carbs": "4g",
      "fat": "5g",
    },
    "prepTime": 15,
    "category": "Almoço/Jantar",
    "portions": 2,
    "difficulty": "Fácil",
    "tags": ["proteico", "low carb", "rápido", "frutos do mar"],
    "substitutions": {
      "camarão": "lulas ou polvo",
      "limão": "laranja",
      "pimenta calabresa": "páprica defumada"
    }
  },
  {
    "id": "52",
    "name": "Tortilha Espanhola Fit",
    "image": "/tortilha-espanhola.jpg",
    "description": "Uma tortilha espanhola saudável, com batatas e cebola, perfeita para qualquer refeição.",
    "ingredients": [
      "4 batatas médias fatiadas finas",
      "1 cebola grande fatiada",
      "6 ovos",
      "Azeite em spray",
      "Sal e pimenta",
      "Salsinha picada"
    ],
    "instructions": [
      "Cozinhe as batatas no vapor até ficarem macias",
      "Em frigideira antiaderente, refogue a cebola",
      "Bata os ovos com sal, pimenta e",
      "Adicione batatas e cebola aos ovos",
      "Misture delicadamente",
      "Aqueça frigideira média com azeite",
      "Despeje a mistura e espalhe uniformemente",
      "Cozinhe em fogo baixo por 10min",
      "Vire com ajuda de prato e cozinhe mais 5min",
      "Sirva em fatias, quente ou fria"
    ],
    "nutritionalInfo": {
      "calories": 205,
      "protein": "14g",
      "carbs": "18g",
      "fat": "9g",
    },
    "prepTime": 30,
    "category": "Almoço/Jantar",
    "portions": 4,
    "difficulty": "Médio",
    "tags": ["vegetariano", "espanhol", "proteico"],
    "substitutions": {
      "batata": "batata doce ou aipim",
      "ovos inteiros": "6 claras + 2 ovos inteiros",
      "cebola": "alho-poró"
    }
  },
  {
    "id": "53",
    "name": "Biscoito de Polvilho Assado Fit",
    "image": "/biscoito-polvilho.jpg",
    "description": "Biscoitos de polvilho assados, crocantes e saudáveis, ideais para um lanche.",
    "ingredients": [
      "2 xícaras de polvilho azedo",
      "1/2 xícara de água",
      "2 colheres de azeite",
      "1 ovo",
      "Sal a gosto",
      "Orégano e alho em pó"
    ],
    "instructions": [
      "Pré-aqueça o forno a 180°C",
      "Ferva a água com azeite e sal",
      "Despeje sobre o polvilho e misture rápido",
      "Deixe esfriar um pouco",
      "Adicione o ovo e amasse até dar liga",
      "Tempere com orégano e alho em pó",
      "Faça bolinhas pequenas",
      "Disponha em assadeira forrada",
      "Asse por 20-25min até dourar e crescer",
      "Deixe esfriar para ficarem crocantes"
    ],
    "nutritionalInfo": {
      "calories": 95,
      "protein": "3g",
      "carbs": "18g",
      "fat": "2g",
    },
    "prepTime": 25,
    "category": "Lanches/Snacks",
    "portions": 8,
    "difficulty": "Fácil",
    "tags": ["sem glúten", "snack", "crocante"],
    "substitutions": {
      "polvilho azedo": "polvilho doce",
      "azeite": "óleo de coco",
      "temperos": "queijo ralado (versão tradicional)"
    }
  },
  {
    "id": "54",
    "name": "Bowl de Açaí Proteico",
    "image": "/bowl-acai.jpg",
    "description": "Um bowl de açaí energizante e rico em proteínas, perfeito para o café da manhã.",
    "ingredients": [
      "1 pacote de polpa de açaí (100g)",
      "1 banana congelada",
      "1 scoop de whey baunilha",
      "100ml de leite de coco light",
      "Toppings: granola fit",
      "Frutas frescas",
      "1 colher de pasta de amendoim",
      "Coco ralado"
    ],
    "instructions": [
      "Quebre o açaí em pedaços",
      "Bata no liquidificador: açaí, banana, whey e leite",
      "Bata até ficar cremoso (não líquido demais)",
      "Despeje em um bowl",
      "Decore com granola em uma metade",
      "Frutas fatiadas na outra metade",
      "Adicione coco ralado",
      "Polvilhe chia",
      "Regue com fio de mel",
      "Sirva imediatamente"
    ],
    "nutritionalInfo": {
      "calories": 345,
      "protein": "22g",
      "carbs": "48g",
      "fat": "10g",
    },
    "prepTime": 10,
    "category": "Café da Manhã",
    "portions": 1,
    "difficulty": "Fácil",
    "tags": ["proteico", "energético", "brasileiro"],
    "substitutions": {
      "açaí": "pitaya ou frutas vermelhas",
      "banana": "manga congelada",
      "leite coco": "leite de amêndoas",
      "granola": "aveia em flocos"
    }
  },
  {
    "id": "55",
    "name": "Frittata de Vegetais ao Forno",
    "image": "/frittata-vegetais.jpg",
    "description": "Uma frittata leve e proteica, ideal para um café da manhã ou lanche saudável.",
    "ingredients": [
      "8 ovos",
      "1 abobrinha fatiada",
      "1 pimentão vermelho picado",
      "1 xícara de espinafre",
      "1/2 cebola roxa",
      "100g de queijo feta light",
      "Sal, pimenta e tomilho",
      "Azeite em spray"
    ],
    "instructions": [
      "Pré-aqueça o forno a 180°C",
      "Refogue levemente abobrinha, pimentão e cebola",
      "Adicione espinafre até murchar",
      "Bata os ovos com sal, pimenta e tomilho",
      "Em forma refratária untada, distribua os vegetais",
      "Despeje os ovos batidos",
      "Esfarele queijo feta por cima",
      "Asse por 20-25min até firmar",
      "Deixe esfriar 5min antes de cortar em fatias"
    ],
    "nutritionalInfo": {
      "calories": 175,
      "protein": "15g",
      "carbs": "10g",
      "fat": "9g",
    },
    "prepTime": 30,
    "category": "Café da Manhã",
    "portions": 4,
    "difficulty": "Fácil",
    "tags": ["vegetariano", "proteico", "assado"],
    "substitutions": {
      "abobrinha": "berinjela ou brócolis",
      "queijo feta": "queijo cottage",
      "espinafre": "couve ou rúcula"
    }
  },
  {
    "id": "56",
    "name": "Wrap de Atum com Abacate",
    "image": "/wrap-atum-abacate.jpg",
    "description": "Um wrap prático e saboroso, perfeito para almoço ou jantar leve.",
    "ingredients": [
      "2 tortilhas integrais",
      "2 latas de atum em água escorrido",
      "1 abacate maduro",
      "1 tomate picado",
      "Folhas de alface",
      "Suco de 1 limão",
      "Sal e pimenta",
      "Coentro ou salsa"
    ],
    "instructions": [
      "Amasse o abacate com limão, sal e pimenta",
      "Escorra bem o atum",
      "Aqueça as tortilhas por 20 segundos",
      "Espalhe o abacate nas tortilhas",
      "Distribua o atum sobre o abacate",
      "Adicione tomate e alface",
      "Finalize com coentro ou salsa",
      "Enrole bem apertado e corte ao meio"
    ],
    "nutritionalInfo": {
      "calories": 295,
      "protein": "28g",
      "carbs": "26g",
      "fat": "10g",
    },
    "prepTime": 10,
    "category": "Almoço/Jantar",
    "portions": 2,
    "difficulty": "Muito Fácil",
    "tags": ["proteico", "ômega 3", "rápido"],
    "substitutions": {
      "atum": "frango desfiado ou salmão",
      "tortilha": "folha de alface (low carb)",
      "abacate": "homus"
    }
  },
  {
    "id": "57",
    "name": "Carne Louca Fit",
    "image": "/carne-louca.jpg",
    "description": "Uma versão saudável e saborosa da tradicional carne louca, ideal para refeições completas.",
    "ingredients": [
      "600g de coxão mole em tiras",
      "2 cebolas grandes fatiadas",
      "3 tomates picados",
      "1 pimentão verde",
      "1 pimentão vermelho",
      "3 dentes de alho",
      "Sal, pimenta e cominho",
      "Cheiro verde",
      "2 colheres de molho de tomate"
    ],
    "instructions": [
      "Tempere a carne com sal, alho e pimenta",
      "Em panela de pressão, refogue a carne até dourar",
      "Adicione cebola e deixe caramelizar",
      "Acrescente tomate, pimentões e molho",
      "Tempere com cominho",
      "Adicione 1 xícara de água",
      "Tampe e cozinhe por 20min após pegar pressão",
      "Deixe sair a pressão naturalmente",
      "Desfie a carne com garfo",
      "Finalize com cheiro verde"
    ],
    "nutritionalInfo": {
      "calories": 245,
      "protein": "32g",
      "carbs": "14g",
      "fat": "8g",
    },
    "prepTime": 40,
    "category": "Almoço/Jantar",
    "portions": 6,
    "difficulty": "Médio",
    "tags": ["proteico", "marmita", "tradicional"],
    "substitutions": {
      "carne vermelha": "peito de frango",
      "pimentões": "cenoura e vagem",
      "panela pressão": "panela comum (cozinhar 1h)"
    }
  },
  {
    "id": "58",
    "name": "Panqueca Americana Proteica",
    "image": "/panqueca-americana.jpg",
    "description": "Panquecas americanas saudáveis e ricas em proteínas, perfeitas para o café da manhã.",
    "ingredients": [
      "1 xícara de aveia em flocos finos",
      "2 scoops de whey baunilha",
      "2 ovos",
      "1/2 xícara de leite desnatado",
      "1 banana madura amassada",
      "1 colher de fermento",
      "Canela e essência de baunilha",
      "Frutas para servir"
    ],
    "instructions": [
      "Bata todos os ingredientes no liquidificador",
      "Deixe a massa descansar 5 minutos",
      "Aqueça frigideira antiaderente em fogo médio",
      "Despeje porções pequenas da massa",
      "Cozinhe até aparecerem bolhas na superfície",
      "Vire e cozinhe mais 1-2min",
      "Empilhe as panquecas",
      "Sirva com frutas frescas e mel"
    ],
    "nutritionalInfo": {
      "calories": 225,
      "protein": "20g",
      "carbs": "28g",
      "fat": "5g",
    },
    "prepTime": 15,
    "category": "Café da Manhã",
    "portions": 4,
    "difficulty": "Fácil",
    "tags": ["proteico", "café da manhã", "americano"],
    "substitutions": {
      "aveia": "farinha de amêndoas",
      "whey": "albumina",
      "banana": "purê de abóbora",
      "leite": "leite vegetal"
    }
  },
  {
    "id": "59",
    "name": "Berinjela à Parmegiana Light",
    "image": "/berinjela-parmegiana.jpg",
    "description": "Uma versão leve e saborosa da berinjela à parmegiana, sem fritura.",
    "ingredients": [
      "2 berinjelas grandes",
      "2 xícaras de molho de tomate caseiro",
      "200g de muçarela light",
      "3 colheres de parmesão ralado",
      "2 ovos batidos",
      "Farinha de aveia para empanar",
      "Manjericão fresco",
      "Sal e orégano"
    ],
    "instructions": [
      "Corte berinjelas em fatias de 1cm",
      "Polvilhe sal e deixe suar por 20min",
      "Enxugue bem com papel toalha",
      "Passe no ovo e depois na farinha de aveia",
      "Asse no forno 180°C por 15min virando no meio",
      "Em refratário, faça camadas: molho + berinjela + queijo",
      "Repita até acabar os ingredientes",
      "Finalize com parmesão",
      "Asse por 20min até gratinar",
      "Decore com manjericão fresco"
    ],
    "nutritionalInfo": {
      "calories": 215,
      "protein": "14g",
      "carbs": "22g",
      "fat": "9g",
    },
    "prepTime": 45,
    "category": "Almoço/Jantar",
    "portions": 4,
    "difficulty": "Médio",
    "tags": ["vegetariano", "gratinado", "italiano"],
    "substitutions": {
      "berinjela": "abobrinha em fatias",
      "muçarela": "queijo vegano",
      "farinha aveia": "farinha de amêndoas"
    }
  },
  {
    "id": "60",
    "name": "Gelatina Proteica de Frutas Vermelhas",
    "image": "/gelatina-proteica.jpg",
    "description": "Uma sobremesa leve e proteica, perfeita para refrescar e satisfazer a vontade de doce.",
    "ingredients": [
      "1 pacote de gelatina diet sabor frutas vermelhas",
      "2 scoops de whey morango ou baunilha",
      "500ml de água fervente",
      "1 xícara de frutas vermelhas frescas",
      "Hortelã para decorar"
    ],
    "instructions": [
      "Dissolva a gelatina em 250ml de água fervente",
      "Mexa bem até dissolver completamente",
      "Adicione 250ml de água fria",
      "Deixe esfriar até temperatura ambiente",
      "Adicione o whey e bata com fouet",
      "Distribua as frutas em tacinhas",
      "Despeje a gelatina sobre as frutas",
      "Leve à geladeira por no mínimo 4 horas",
      "Decore com hortelã antes de servir"
    ],
    "nutritionalInfo": {
      "calories": 85,
      "protein": "15g",
      "carbs": "8g",
      "fat": "1g",
    },
    "prepTime": 10,
    "category": "Sobremesas",
    "portions": 4,
    "difficulty": "Muito Fácil",
    "tags": ["proteico", "low carb", "gelado", "leve"],
    "substitutions": {
      "gelatina diet": "gelatina sem sabor + suco natural",
      "frutas vermelhas": "frutas tropicais",
      "whey": "colágeno hidrolisado"
    }
  },
  {
    "id": "61",
    "name": "Bolinho de Bacalhau Fit",
    "image": "/bolinho-bacalhau.jpg",
    "description": "Bolinhos de bacalhau assados, uma versão mais saudável do clássico petisco português.",
    "ingredients": [
      "300g de bacalhau dessalgado",
      "2 batatas médias cozidas",
      "2 ovos",
      "1 cebola picada",
      "2 dentes de alho",
      "Salsinha e cebolinha",
      "Farinha de aveia",
      "Pimenta do reino"
    ],
    "instructions": [
      "Cozinhe o bacalhau e desfie bem fino",
      "Amasse as batatas ainda quentes",
      "Misture bacalhau, batata, ovos e cebola",
      "Adicione alho, salsinha e pimenta",
      "Acrescente farinha de aveia até dar liga",
      "Modele bolinhos ovais",
      "Disponha em assadeira forrada",
      "Borrife azeite por cima",
      "Asse a 200°C por 20-25min até dourar",
      "Vire na metade do tempo"
    ],
    "nutritionalInfo": {
      "calories": 125,
      "protein": "16g",
      "carbs": "10g",
      "fat": "3g",
    },
    "prepTime": 35,
    "category": "Lanches/Snacks",
    "portions": 8,
    "difficulty": "Médio",
    "tags": ["proteico", "português", "assado"],
    "substitutions": {
      "bacalhau": "atum ou salmão",
      "batata": "mandioquinha ou inhame",
      "fritar": "air fryer 180°C por 15min"
    }
  },
  {
    "id": "62",
    "name": "Risoto de Camarão Light",
    "image": "/risoto-camarao.jpg",
    "description": "Um risoto cremoso e saboroso com camarões, em uma versão mais leve.",
    "ingredients": [
      "1 xícara de arroz arbóreo",
      "300g de camarão limpo",
      "1 cebola picada",
      "2 dentes de alho",
      "1/2 xícara de vinho branco",
      "1 litro de caldo de legumes quente",
      "2 colheres de parmesão ralado",
      "Açafrão, sal e pimenta",
      "Salsinha"
    ],
    "instructions": [
      "Tempere os camarões e reserve",
      "Refogue alho e cebola até transparente",
      "Adicione o arroz e torre por 2min",
      "Adicione vinho e deixe evaporar",
      "Comece a adicionar caldo, uma concha por vez",
      "Mexa constantemente esperando absorver antes de adicionar mais",
      "Após 15min, adicione açafrão",
      "Nos últimos 5min, adicione os camarões",
      "Finalize com parmesão e salsinha",
      "Desligue quando cremoso (al dente)"
    ],
    "nutritionalInfo": {
      "calories": 325,
      "protein": "28g",
      "carbs": "42g",
      "fat": "6g",
    },
    "prepTime": 35,
    "category": "Almoço/Jantar",
    "portions": 3,
    "difficulty": "Médio",
    "tags": ["proteico", "gourmet", "frutos do mar"],
    "substitutions": {
      "arroz arbóreo": "arroz integral (mais tempo)",
      "camarão": "frango em cubos ou cogumelos",
      "vinho branco": "caldo de legumes"
    }
  },
  {
    "id": "63",
    "name": "Pudim de Tapioca com Coco",
    "image": "/pudim-tapioca.jpg",
    "description": "Um pudim cremoso e sem glúten, com sabor tropical de coco e tapioca.",
    "ingredients": [
      "1/2 xícara de tapioca em grãos",
      "2 xícaras de leite de coco light",
      "1 xícara de leite desnatado",
      "3 colheres de adoçante culinário",
      "1 colher de essência de baunilha",
      "2 colheres de coco ralado",
      "Pitada de sal",
      "Canela para polvilhar"
    ],
    "instructions": [
      "Deixe a tapioca de molho em água por 30min",
      "Escorra e reserve",
      "Em panela, misture leites, adoçante e sal",
      "Adicione a tapioca escorrida",
      "Cozinhe em fogo médio mexendo sempre",
      "Cozinhe por 10-12min até engrossar",
      "Adicione baunilha e coco ralado",
      "Distribua em tacinhas",
      "Leve à geladeira por 2 horas",
      "Sirva gelado polvilhado com canela"
    ],
    "nutritionalInfo": {
      "calories": 165,
      "protein": "6g",
      "carbs": "28g",
      "fat": "4g",
    },
    "prepTime": 15,
    "category": "Sobremesas",
    "portions": 4,
    "difficulty": "Fácil",
    "tags": ["sem glúten", "cremoso", "tropical"],
    "substitutions": {
      "leite coco": "leite de amêndoas",
      "tapioca grãos": "chia (preparo diferente)",
      "coco ralado": "raspas de limão"
    }
  },
  {
    "id": "64",
    "name": "Fajitas de Frango Fit",
    "image": "/fajitas-frango.jpg",
    "description": "Fajitas de frango coloridas e saborosas, uma refeição rápida e saudável.",
    "ingredients": [
      "400g de peito de frango em tiras",
      "1 pimentão vermelho",
      "1 pimentão amarelo",
      "1 cebola grande",
      "2 dentes de alho",
      "Temperos: cominho, páprica, pimenta",
      "6 tortilhas integrais pequenas",
      "Guacamole e iogurte grego para servir"
    ],
    "instructions": [
      "Tempere o frango com cominho, páprica e sal",
      "Corte pimentões e cebola em tiras",
      "Aqueça frigideira em fogo alto",
      "Sele o frango por 5-6min até dourar",
      "Retire o frango e reserve",
      "Na mesma frigideira, refogue pimentões e cebola",
      "Retorne o frango e misture tudo",
      "Aqueça as tortilhas rapidamente",
      "Monte as fajitas com frango, vegetais e molhos"
    ],
    "nutritionalInfo": {
      "calories": 295,
      "protein": "36g",
      "carbs": "24g",
      "fat": "8g",
    },
    "prepTime": 25,
    "category": "Almoço/Jantar",
    "portions": 3,
    "difficulty": "Fácil",
    "tags": ["proteico", "mexicano", "colorido"],
    "substitutions": {
      "frango": "carne magra ou camarão",
      "tortilhas": "folhas de alface (low carb)",
      "iogurte grego": "creme azedo light"
    }
  },
  {
    "id": "65",
    "name": "Suco Verde Detox Energético",
    "image": "/suco-verde-detox.jpg",
    "description": "Um suco verde refrescante e cheio de nutrientes, ideal para desintoxicar e energizar.",
    "ingredients": [
      "2 folhas de couve",
      "1 maçã verde",
      "1/2 pepino",
      "Suco de 1 limão",
      "1 pedaço de gengibre",
      "1 colher de chia",
      "300ml de água de coco",
      "Hortelã fresca"
    ],
    "instructions": [
      "Lave bem todos os ingredientes",
      "Corte a maçã em pedaços (pode deixar casca)",
      "Corte o pepino em rodelas",
      "Coloque tudo no liquidificador",
      "Adicione água de coco e gelo",
      "Bata por 1-2 minutos até ficar homogêneo",
      "Coe se preferir (opcional)",
      "Sirva imediatamente para preservar nutrientes"
    ],
    "nutritionalInfo": {
      "calories": 95,
      "protein": "3g",
      "carbs": "20g",
      "fat": "1g",
    },
    "prepTime": 5,
    "category": "Bebidas",
    "portions": 2,
    "difficulty": "Muito Fácil",
    "tags": ["detox", "vegano", "energético", "antioxidante"],
    "substitutions": {
      "couve": "espinafre ou acelga",
      "maçã": "pera ou abacaxi",
      "água coco": "água mineral + limão",
      "gengibre": "cúrcuma fresca"
    }
  },
  {
    "id": "66",
    "name": "Lasanha de Berinjela Low Carb",
    "image": "/lasanha-berinjela.jpg",
    "description": "Uma lasanha deliciosa e sem massa, perfeita para quem busca uma opção low carb.",
    "ingredients": [
      "3 berinjelas grandes",
      "500g de carne moída magra",
      "2 xícaras de molho de tomate caseiro",
      "300g de ricota",
      "150g de muçarela light",
      "1 cebola e 3 dentes de alho",
      "Manjericão, orégano",
      "Parmesão ralado"
    ],
    "instructions": [
      "Corte berinjelas em fatias finas no sentido do comprimento",
      "Grelhe ou asse as fatias por 10min",
      "Refogue carne com cebola, alho e temperos",
      "Adicione molho de tomate e cozinhe 10min",
      "Misture ricota com metade da muçarela",
      "Em refratário, alterne camadas: berinjela + carne + ricota",
      "Termine com camada de berinjela",
      "Cubra com muçarela e parmesão",
      "Asse a 180°C por 25-30min até gratinar"
    ],
    "nutritionalInfo": {
      "calories": 235,
      "protein": "22g",
      "carbs": "16g",
      "fat": "11g",
    },
    "prepTime": 50,
    "category": "Almoço/Jantar",
    "portions": 6,
    "difficulty": "Médio",
    "tags": ["low carb", "proteico", "gratinado"],
    "substitutions": {
      "berinjela": "abobrinha em fatias",
      "carne moída": "frango moído ou lentilha",
      "ricota": "cottage batido"
    }
  },
  {
    "id": "67",
    "name": "Pão de Aveia Integral no Liquidificador",
    "image": "/pao-aveia-liquidificador.jpg",
    "description": "Um pão caseiro, integral e sem glúten, fácil de fazer no liquidificador.",
    "ingredients": [
      "2 xícaras de aveia em flocos",
      "3 ovos",
      "1/2 xícara de iogurte natural",
      "1/4 xícara de azeite",
      "1 colher de fermento em pó",
      "1 colher de sal",
      "Sementes de gergelim ou chia para polvilhar"
    ],
    "instructions": [
      "Pré-aqueça o forno a 180°C",
      "Bata no liquidificador aveia, ovos, iogurte e azeite",
      "Bata até virar uma massa homogênea",
      "Adicione sal e pulse rapidamente",
      "Transfira para bowl e adicione fermento",
      "Misture delicadamente com espátula",
      "Despeje em forma de pão untada",
      "Polvilhe sementes por cima",
      "Asse por 35-40min até dourar",
      "Deixe esfriar antes de fatiar"
    ],
    "nutritionalInfo": {
      "calories": 145,
      "protein": "6g",
      "carbs": "24g",
      "fat": "3g",
    },
    "prepTime": 40,
    "category": "Café da Manhã",
    "portions": 10,
    "difficulty": "Fácil",
    "tags": ["sem glúten", "integral", "caseiro"],
    "substitutions": {
      "iogurte": "leite fermentado ou kefir",
      "azeite": "óleo de coco",
      "aveia": "quinoa em flocos"
    }
  },
  {
    "id": "68",
    "name": "Picadinho de Carne com Legumes",
    "image": "/picadinho-carne.jpg",
    "description": "Um picadinho de carne com legumes, uma refeição completa e nutritiva para o dia a dia.",
    "ingredients": [
      "500g de coxão mole em cubos",
      "2 batatas em cubos",
      "2 cenouras em cubos",
      "1 xícara de vagem",
      "1 cebola grande",
      "3 dentes de alho",
      "2 tomates picados",
      "Sal, pimenta, cominho",
      "Salsinha"
    ],
    "instructions": [
      "Tempere a carne com sal, alho e pimenta",
      "Em panela de pressão, doure a carne",
      "Adicione cebola e refogue até murchar",
      "Acrescente tomate e refogue 3min",
      "Adicione batata, cenoura e 1 xícara de água",
      "Tempere com cominho",
      "Tampe e cozinhe por 15min após pegar pressão",
      "Deixe sair a pressão, adicione vagem",
      "Cozinhe mais 5min sem tampa",
      "Finalize com salsinha picada"
    ],
    "nutritionalInfo": {
      "calories": 275,
      "protein": "32g",
      "carbs": "18g",
      "fat": "9g",
    },
    "prepTime": 35,
    "category": "Almoço/Jantar",
    "portions": 4,
    "difficulty": "Fácil",
    "tags": ["proteico", "tradicional", "completo"],
    "substitutions": {
      "carne vermelha": "peito de frango em cubos",
      "batata": "mandioca ou inhame",
      "vagem": "brócolis ou couve-flor"
    }
  },
  {
    "id": "69",
    "name": "Trufa Proteica de Chocolate",
    "image": "/trufa-proteica.jpg",
    "description": "Trufas de chocolate saudáveis e ricas em proteínas, perfeitas para um doce sem culpa.",
    "ingredients": [
      "1 lata de grão de bico escorrido",
      "3 colheres de cacau 100%",
      "2 scoops de whey chocolate",
      "3 colheres de pasta de amendoim",
      "2 colheres de mel",
      "Essência de baunilha",
      "Cacau em pó para cobrir"
    ],
    "instructions": [
      "Lave bem o grão de bico e seque",
      "Bata tudo no processador até virar pasta",
      "Prove e ajuste doçura se necessário",
      "Leve à geladeira por 30min para firmar",
      "Modele bolinhas do tamanho de uma noz",
      "Passe no cacau em pó",
      "Leve à geladeira por mais 30min",
      "Guarde em pote fechado na geladeira por até 1 semana"
    ],
    "nutritionalInfo": {
      "calories": 85,
      "protein": "6g",
      "carbs": "10g",
      "fat": "3g",
    },
    "prepTime": 20,
    "category": "Sobremesas",
    "portions": 12,
    "difficulty": "Fácil",
    "tags": ["proteico", "sobremesa", "sem glúten"],
    "substitutions": {
      "grão de bico": "tâmaras hidratadas",
      "pasta amendoim": "tahine ou pasta de castanha",
      "mel": "xarope de bordo ou agave",
      "cobertura": "coco ralado ou nibs de cacau"
    }
  },
  {
    "id": "70",
    "name": "Shakshuka Fit (Ovos ao Molho de Tomate)",
    "image": "/shakshuka.jpg",
    "description": "Uma shakshuka leve e proteica, ideal para um café da manhã ou brunch saudável.",
    "ingredients": [
      "4 ovos",
      "400g de tomate pelado",
      "1 pimentão vermelho picado",
      "1 cebola média",
      "3 dentes de alho",
      "1 colher de páprica defumada",
      "Cominho em pó",
      "Sal, pimenta e coentro fresco",
      "Azeite"
    ],
    "instructions": [
      "Em frigideira funda, refogue cebola e alho no azeite",
      "Adicione pimentão e refogue por 5min",
      "Acrescente tomate pelado e amasse com colher",
      "Tempere com páprica, cominho, sal e pimenta",
      "Cozinhe em fogo médio por 10min até engrossar",
      "Faça 4 buraquinhos no molho",
      "Quebre os ovos cuidadosamente nos buraquinhos",
      "Tampe e cozinhe por 5-7min até clara firmar",
      "Gema deve ficar mole",
      "Finalize com coentro fresco picado"
    ],
    "nutritionalInfo": {
      "calories": 215,
      "protein": "16g",
      "carbs": "18g",
      "fat": "10g",
    },
    "prepTime": 25,
    "category": "Café da Manhã",
    "portions": 2,
    "difficulty": "Fácil",
    "tags": ["proteico", "mediterrâneo", "árabe"],
    "substitutions": {
      "tomate pelado": "tomates frescos picados",
      "pimentão": "berinjela em cubos",
      "coentro": "salsinha"
    }
  },
  {
    "id": "71",
    "name": "Bolinho de Chuva Fit",
    "image": "/bolinho-chuva-fit.jpg",
    "description": "Bolinhos de chuva saudáveis, feitos com aveia e banana, perfeitos para um lanche sem culpa.",
    "ingredients": [
      "1 xícara de aveia em flocos finos",
      "2 ovos",
      "1 banana madura amassada",
      "1/4 xícara de leite desnatado",
      "1 colher de fermento",
      "Canela em pó",
      "Essência de baunilha",
      "Canela com eritritol para polvilhar"
    ],
    "instructions": [
      "Bata a banana com os ovos",
      "Adicione leite e essência de baunilha",
      "Misture aveia e canela",
      "Acrescente fermento por último",
      "Deixe a massa descansar 5min",
      "Aqueça frigideira antiaderente",
      "Com colher, faça bolinhas pequenas",
      "Frite em fogo médio até dourar dos dois lados",
      "Escorra em papel toalha",
      "Polvilhe canela com eritritol ainda quente"
    ],
    "nutritionalInfo": {
      "calories": 95,
      "protein": "5g",
      "carbs": "16g",
      "fat": "2g",
    },
    "prepTime": 20,
    "category": "Lanches/Snacks",
    "portions": 10,
    "difficulty": "Fácil",
    "tags": ["sem glúten", "tradicional", "lanche"],
    "substitutions": {
      "aveia": "farinha de arroz",
      "banana": "purê de maçã",
      "fritar": "assar 180°C por 15min"
    }
  },
  {
    "id": "72",
    "name": "Filé de Frango ao Molho de Mostarda e Mel",
    "image": "/frango-mostarda-mel.jpg",
    "description": "Filés de frango suculentos com um molho agridoce de mostarda e mel, uma refeição saborosa e rápida.",
    "ingredients": [
      "3 filés de frango (450g)",
      "3 colheres de mostarda dijon",
      "2 colheres de mel",
      "Suco de 1 limão",
      "2 dentes de alho picados",
      "1/2 xícara de caldo de legumes",
      "Tomilho fresco",
      "Sal e pimenta",
      "Azeite"
    ],
    "instructions": [
      "Tempere os filés com sal, pimenta e limão",
      "Sele o frango em frigideira quente (3min cada lado)",
      "Retire o frango e reserve",
      "Na mesma frigideira, refogue o alho",
      "Adicione mostarda, mel e caldo",
      "Mexa até formar molho cremoso",
      "Retorne o frango ao molho",
      "Cozinhe em fogo baixo por 5-7min",
      "Adicione tomilho fresco",
      "Sirva com o molho por cima"
    ],
    "nutritionalInfo": {
      "calories": 265,
      "protein": "38g",
      "carbs": "12g",
      "fat": "8g",
    },
    "prepTime": 25,
    "category": "Almoço/Jantar",
    "portions": 3,
    "difficulty": "Fácil",
    "tags": ["proteico", "gourmet", "fácil"],
    "substitutions": {
      "frango": "salmão ou carne de porco magra",
      "mostarda dijon": "mostarda amarela",
      "mel": "agave ou melado"
    }
  },
  {
    "id": "73",
    "name": "Vitamina de Aveia com Frutas",
    "image": "/vitamina-aveia.jpg",
    "description": "Uma vitamina cremosa e nutritiva, perfeita para um café da manhã ou lanche energético.",
    "ingredients": [
      "3 colheres de aveia em flocos",
      "1 banana",
      "1/2 xícara de morango",
      "200ml de leite desnatado",
      "1 colher de pasta de amendoim",
      "1 colher de mel",
      "Canela em pó",
      "Gelo a gosto"
    ],
    "instructions": [
      "Coloque todos os ingredientes no liquidificador",
      "Bata por 2 minutos até ficar cremoso",
      "Adicione mais leite se preferir mais líquido",
      "Ajuste doçura com mais mel se necessário",
      "Sirva imediatamente",
      "Polvilhe canela por cima"
    ],
    "nutritionalInfo": {
      "calories": 275,
      "protein": "14g",
      "carbs": "46g",
      "fat": "5g",
    },
    "prepTime": 5,
    "category": "Bebidas",
    "portions": 1,
    "difficulty": "Muito Fácil",
    "tags": ["energético", "pré-treino", "cremoso"],
    "substitutions": {
      "aveia": "granola",
      "morango": "frutas vermelhas mix",
      "leite": "leite vegetal",
      "pasta amendoim": "tahine"
    }
  },
  {
    "id": "74",
    "name": "Moqueca de Peixe Light",
    "image": "/moqueca-peixe.jpg",
    "description": "Uma moqueca de peixe leve e saborosa, com leite de coco e temperos frescos, sem azeite de dendê.",
    "ingredients": [
      "600g de filé de peixe branco",
      "2 tomates grandes",
      "1 pimentão vermelho",
      "1 pimentão amarelo",
      "1 cebola grande",
      "200ml de leite de coco light",
      "Suco de 2 limões",
      "Coentro, cebolinha",
      "Dendê (opcional, 1 colher)",
      "Sal, pimenta e páprica"
    ],
    "instructions": [
      "Corte o peixe em postas e tempere com limão e sal",
      "Deixe marinar por 15min",
      "Fatie tomate, pimentões e cebola",
      "Em panela, faça camadas: cebola, peixe, tomate, pimentão",
      "Repita as camadas",
      "Regue com leite de coco",
      "Adicione dendê se usar",
      "Tampe e cozinhe em fogo baixo por 20min",
      "Não mexa, balance a panela",
      "Finalize com coentro e cebolinha"
    ],
    "nutritionalInfo": {
      "calories": 245,
      "protein": "32g",
      "carbs": "16g",
      "fat": "8g",
    },
    "prepTime": 35,
    "category": "Almoço/Jantar",
    "portions": 4,
    "difficulty": "Médio",
    "tags": ["proteico", "brasileiro", "nordeste"],
    "substitutions": {
      "peixe branco": "camarão ou lula",
      "leite de coco": "creme de leite light",
      "dendê": "azeite de oliva"
    }
  },
  {
    "id": "75",
    "name": "Paleta Mexicana de Frutas (Picolé)",
    "image": "/paleta-mexicana.jpg",
    "description": "Picolés caseiros de frutas frescas e iogurte, uma sobremesa refrescante e saudável para o verão.",
    "ingredients": [
      "2 xícaras de morangos",
      "1 xícara de manga picada",
      "1 xícara de iogurte natural",
      "2 colheres de mel",
      "Suco de 1 limão",
      "Folhas de hortelã"
    ],
    "instructions": [
      "Bata morangos, iogurte, mel e limão",
      "Pique manga em cubinhos pequenos",
      "Distribua manga nas forminhas de picolé",
      "Adicione folhas de hortelã",
      "Despeje a mistura batida",
      "Insira palito de picolé",
      "Congele por no mínimo 4 horas",
      "Para desenformar, passe água morna na forma"
    ],
    "nutritionalInfo": {
      "calories": 65,
      "protein": "2g",
      "carbs": "14g",
      "fat": "1g",
    },
    "prepTime": 10,
    "category": "Sobremesas",
    "portions": 6,
    "difficulty": "Muito Fácil",
    "tags": ["gelado", "frutas", "refrescante", "kids"],
    "substitutions": {
      "morango": "frutas vermelhas mix",
      "manga": "abacaxi ou kiwi",
      "iogurte": "leite de coco"
    }
  },
  {
    "id": "76",
    "name": "Patê de Atum Fit",
    "image": "/pate-atum.jpg",
    "description": "Um patê de atum leve e cremoso, perfeito para lanches rápidos e saudáveis, rico em proteínas.",
    "ingredients": [
      "2 latas de atum em água",
      "1/2 xícara de iogurte grego",
      "1 colher de mostarda",
      "1 cebola pequena picada",
      "Suco de 1/2 limão",
      "Sal, pimenta",
      "Cebolinha picada",
      "Azeitonas picadas (opcional)"
    ],
    "instructions": [
      "Escorra muito bem o atum",
      "Em um bowl, desfie o atum com garfo",
      "Adicione iogurte e mostarda",
      "Acrescente cebola picada finamente",
      "Tempere com limão, sal e pimenta",
      "Misture bem até ficar cremoso",
      "Adicione cebolinha e azeitonas",
      "Leve à geladeira por 30min",
      "Sirva com torradas integrais ou palitos de cenoura"
    ],
    "nutritionalInfo": {
      "calories": 115,
      "protein": "18g",
      "carbs": "4g",
      "fat": "3g",
    },
    "prepTime": 10,
    "category": "Lanches/Snacks",
    "portions": 4,
    "difficulty": "Muito Fácil",
    "tags": ["proteico", "low carb", "rápido"],
    "substitutions": {
      "atum": "frango desfiado ou sardinha",
      "iogurte grego": "cream cheese light",
      "cebola": "alho-poró picado"
    }
  },
  {
    "id": "77",
    "name": "Arroz Integral com Lentilha",
    "image": "/arroz-lentilha.jpg",
    "description": "Um acompanhamento nutritivo e saboroso, combinando arroz integral e lentilha, rico em fibras e proteínas vegetais.",
    "ingredients": [
      "1 xícara de arroz integral",
      "1/2 xícara de lentilha",
      "1 cebola picada",
      "2 dentes de alho",
      "1 cenoura ralada",
      "Cominho e cúrcuma",
      "Sal e pimenta",
      "Salsinha",
      "2 colheres de azeite"
    ],
    "instructions": [
      "Cozinhe a lentilha em água por 15min",
      "Escorra e reserve",
      "Refogue alho e cebola no azeite",
      "Adicione o arroz e torre por 2min",
      "Acrescente cenoura ralada",
      "Adicione 2 xícaras de água quente",
      "Tempere com cominho, cúrcuma, sal e pimenta",
      "Cozinhe tampado em fogo baixo por 25min",
      "Nos últimos 5min, misture a lentilha cozida",
      "Finalize com salsinha picada"
    ],
    "nutritionalInfo": {
      "calories": 185,
      "protein": "8g",
      "carbs": "34g",
      "fat": "3g",
    },
    "prepTime": 35,
    "category": "Acompanhamentos",
    "portions": 4,
    "difficulty": "Fácil",
    "tags": ["vegetariano", "proteico", "completo"],
    "substitutions": {
      "lentilha": "grão de bico",
      "arroz integral": "quinoa",
      "cenoura": "abobrinha ralada"
    }
  },
  {
    "id": "78",
    "name": "Medalhão de Frango Recheado",
    "image": "/medalhao-frango.jpg",
    "description": "Medalhões de frango recheados com queijo e espinafre, envoltos em peito de peru, uma opção elegante e saudável.",
    "ingredients": [
      "3 filés de frango grandes",
      "100g de queijo branco light",
      "100g de espinafre refogado",
      "3 fatias de peito de peru",
      "Sal, pimenta e alho",
      "Palitos para segurar",
      "Azeite em spray",
      "Tomate seco picado (opcional)"
    ],
    "instructions": [
      "Abra os filés como um livro (tipo borboleta)",
      "Tempere com sal, pimenta e alho",
      "Recheie com peito de peru, queijo e espinafre",
      "Adicione tomate seco se usar",
      "Enrole e prenda com palitos",
      "Sele todos os lados em frigideira quente",
      "Transfira para assadeira",
      "Asse a 180°C por 20min",
      "Deixe descansar 5min antes de fatiar",
      "Retire palitos e sirva em medalhões"
    ],
    "nutritionalInfo": {
      "calories": 285,
      "protein": "42g",
      "carbs": "6g",
      "fat": "10g",
    },
    "prepTime": 35,
    "category": "Almoço/Jantar",
    "portions": 3,
    "difficulty": "Médio",
    "tags": ["proteico", "gourmet", "especial"],
    "substitutions": {
      "espinafre": "rúcula ou agrião",
      "queijo branco": "ricota temperada",
      "peito peru": "presunto magro"
    }
  },
  {
    "id": "79",
    "name": "Creme de Abacate com Cacau",
    "image": "/creme-abacate-cacau.jpg",
    "description": "Um creme de abacate com cacau, vegano e sem açúcar, uma sobremesa cremosa e nutritiva.",
    "ingredients": [
      "1 abacate maduro",
      "3 colheres de cacau em pó 100%",
      "3 colheres de mel ou agave",
      "1/2 xícara de leite de amêndoas",
      "Essência de baunilha",
      "Pitada de sal",
      "Frutas vermelhas para decorar"
    ],
    "instructions": [
      "Retire polpa do abacate",
      "Bata tudo no liquidificador até cremoso",
      "Prove e ajuste doçura",
      "Se muito grosso, adicione mais leite",
      "Distribua em taças",
      "Leve à geladeira por 1h",
      "Decore com frutas vermelhas",
      "Sirva gelado"
    ],
    "nutritionalInfo": {
      "calories": 195,
      "protein": "4g",
      "carbs": "22g",
      "fat": "11g",
    },
    "prepTime": 5,
    "category": "Sobremesas",
    "portions": 2,
    "difficulty": "Muito Fácil",
    "tags": ["vegano", "sem glúten", "cremoso"],
    "substitutions": {
      "abacate": "banana congelada",
      "cacau": "alfarroba em pó",
      "leite amêndoas": "leite de coco"
    }
  },
  {
    "id": "80",
    "name": "Quibe de Forno Fit",
    "image": "/quibe-forno.jpg",
    "description": "Um quibe de forno saudável e saboroso, com carne moída magra e trigo para quibe, perfeito para uma refeição completa.",
    "ingredients": [
      "500g de carne moída magra",
      "1 xícara de trigo para quibe",
      "1 cebola grande ralada",
      "Hortelã e salsinha picadas",
      "Sal, pimenta e canela",
      "Recheio: 200g carne refogada",
      "1 cebola, tomate e pinhão (opcional)",
      "Azeite em spray"
    ],
    "instructions": [
      "Hidrate o trigo em água por 20min",
      "Escorra e esprema bem",
      "Misture trigo, carne crua, cebola e temperos",
      "Amasse bem até dar liga",
      "Prepare recheio: refogue carne com cebola e tomate",
      "Em refratário, espalhe metade da massa",
      "Distribua o recheio",
      "Cubra com a outra metade da massa",
      "Faça desenhos com faca",
      "Borrife azeite e asse 180°C por 35-40min"
    ],
    "nutritionalInfo": {
      "calories": 235,
      "protein": "22g",
      "carbs": "24g",
      "fat": "7g",
    },
    "prepTime": 50,
    "category": "Almoço/Jantar",
    "portions": 8,
    "difficulty": "Médio",
    "tags": ["árabe", "proteico", "festa"],
    "substitutions": {
      "trigo quibe": "quinoa cozida",
      "carne": "grão de bico (versão vegana)",
      "pinhão": "amêndoas picadas"
    }
  },
  {
    "id": "81",
    "name": "Panqueca de Espinafre Proteica",
    "image": "/panqueca-espinafre.jpg",
    "description": "Panquecas verdes e proteicas, feitas com espinafre e aveia, ideais para um café da manhã ou lanche nutritivo.",
    "ingredients": [
      "1 xícara de espinafre",
      "3 ovos",
      "1/2 xícara de aveia",
      "1/4 xícara de queijo cottage",
      "Sal, pimenta e noz moscada",
      "Recheio: ricota temperada",
      "Tomate e manjericão"
    ],
    "instructions": [
      "Bata espinafre, ovos, aveia e cottage",
      "Tempere com sal, pimenta e noz moscada",
      "Aqueça frigideira antiaderente",
      "Despeje porções da massa",
      "Cozinhe 2min de cada lado",
      "Recheie com ricota temperada",
      "Adicione tomate e manjericão",
      "Enrole e sirva"
    ],
    "nutritionalInfo": {
      "calories": 195,
      "protein": "18g",
      "carbs": "20g",
      "fat": "6g",
    },
    "prepTime": 15,
    "category": "Café da Manhã",
    "portions": 3,
    "difficulty": "Fácil",
    "tags": ["proteico", "vegetariano", "verde"],
    "substitutions": {
      "espinafre": "couve ou rúcula",
      "aveia": "farinha de grão de bico",
      "ricota": "cream cheese light"
    }
  },
  {
    "id": "82",
    "name": "Canja de Frango Light",
    "image": "/canja-frango.jpg",
    "description": "Uma canja de frango leve e reconfortante, perfeita para dias frios ou para uma refeição nutritiva e de fácil digestão.",
    "ingredients": [
      "400g de peito de frango",
      "1/2 xícara de arroz integral",
      "2 cenouras picadas",
      "2 batatas pequenas",
      "1 cebola",
      "2 dentes de alho",
      "1,5 litro de água",
      "Sal, pimenta",
      "Salsinha e cebolinha"
    ],
    "instructions": [
      "Cozinhe o frango inteiro em água com sal",
      "Retire o frango e desfie",
      "No mesmo caldo, refogue alho e cebola",
      "Adicione cenoura e batata",
      "Acrescente o arroz",
      "Cozinhe por 25min até arroz amolecer",
      "Retorne o frango desfiado",
      "Ajuste temperos",
      "Finalize com cheiro verde picado",
      "Sirva bem quente"
    ],
    "nutritionalInfo": {
      "calories": 185,
      "protein": "22g",
      "carbs": "20g",
      "fat": "3g",
    },
    "prepTime": 40,
    "category": "Sopas e Caldos",
    "portions": 5,
    "difficulty": "Fácil",
    "tags": ["conforto", "proteico", "tradicional"],
    "substitutions": {
      "arroz integral": "macarrão integral ou quinoa",
      "batata": "mandioquinha",
      "frango": "coxinhas de frango"
    }
  },
  {
    "id": "83",
    "name": "Cookies Salgados de Queijo",
    "image": "/cookies-queijo.jpg",
    "description": "Cookies salgados e crocantes de queijo, feitos com aveia e farinha de arroz, ideais para um lanche saudável.",
    "ingredients": [
      "1 xícara de aveia em flocos",
      "1/2 xícara de farinha de arroz",
      "100g de queijo parmesão ralado",
      "1 ovo",
      "2 colheres de azeite",
      "Sal, orégano e alho em pó",
      "1/2 colher de fermento"
    ],
    "instructions": [
      "Pré-aqueça o forno a 180°C",
      "Misture aveia, farinha, queijo e temperos",
      "Adicione ovo e azeite",
      "Amasse até formar massa homogênea",
      "Acrescente fermento por último",
      "Faça bolinhas e achate",
      "Disponha em assadeira forrada",
      "Asse por 15-18min até dourar",
      "Deixe esfriar para ficarem crocantes"
    ],
    "nutritionalInfo": {
      "calories": 85,
      "protein": "5g",
      "carbs": "10g",
      "fat": "3g",
    },
    "prepTime": 25,
    "category": "Lanches/Snacks",
    "portions": 12,
    "difficulty": "Fácil",
    "tags": ["salgado", "crocante", "lanche"],
    "substitutions": {
      "farinha arroz": "farinha de amêndoas",
      "parmesão": "queijo prato ralado",
      "aveia": "quinoa em flocos"
    }
  },
  {
    "id": "84",
    "name": "Salada Caprese com Peito de Peru",
    "image": "/salada-caprese-peru.jpg",
    "description": "Uma salada caprese fresca e leve, com peito de peru, muçarela de búfala e manjericão, perfeita para uma refeição rápida.",
    "ingredients": [
      "200g de peito de peru fatiado",
      "2 tomates grandes",
      "150g de muçarela de búfala light",
      "Folhas de manjericão fresco",
      "2 colheres de azeite extra virgem",
      "Vinagre balsâmico",
      "Sal rosa e pimenta",
      "Orégano"
    ],
    "instructions": [
      "Fatie tomates e muçarela em rodelas",
      "Intercale em prato: tomate, queijo, peru",
      "Distribua folhas de manjericão",
      "Regue com azeite",
      "Adicione gotas de vinagre balsâmico",
      "Tempere com sal, pimenta e orégano",
      "Sirva imediatamente"
    ],
    "nutritionalInfo": {
      "calories": 225,
      "protein": "24g",
      "carbs": "8g",
      "fat": "11g",
    },
    "prepTime": 10,
    "category": "Almoço/Jantar",
    "portions": 2,
    "difficulty": "Muito Fácil",
    "tags": ["low carb", "rápido", "italiano"],
    "substitutions": {
      "peito peru": "frango grelhado fatiado",
      "muçarela búfala": "queijo branco",
      "vinagre balsâmico": "limão siciliano"
    }
  },
  {
    "id": "85",
    "name": "Buddha Bowl Completo",
    "image": "/buddha-bowl.jpg",
    "description": "Um bowl nutritivo e colorido com quinoa, grão de bico, vegetais frescos e molho tahine, perfeito para um almoço ou jantar leve e saudável.",
    "ingredients": [
      "1 xícara de quinoa cozida",
      "200g de grão de bico assado",
      "1 xícara de couve roxa ralada",
      "1 cenoura ralada",
      "1/2 abacate fatiado",
      "1 beterraba assada",
      "2 colheres de homus",
      "Sementes de gergelim",
      "Molho tahine: 2 col tahine + limão + alho"
    ],
    "instructions": [
      "Cozinhe a quinoa conforme embalagem",
      "Tempere grão de bico e asse 180°C por 20min",
      "Rale couve roxa e massageie com limão",
      "Rale cenoura em tiras finas",
      "Corte beterraba em cubos",
      "Em bowl, distribua todos ingredientes separados",
      "Adicione homus no centro",
      "Prepare molho tahine misturando todos ingredientes",
      "Regue com molho tahine",
      "Polvilhe gergelim por cima"
    ],
    "nutritionalInfo": {
      "calories": 385,
      "protein": "24g",
      "carbs": "48g",
      "fat": "12g"
    },
    "prepTime": 25,
    "category": "Almoço/Jantar",
    "portions": 2,
    "difficulty": "Fácil",
    "tags": ["vegetariano", "completo", "colorido", "vegano"],
    "substitutions": {
      "quinoa": "arroz integral ou farro",
      "grão de bico": "tofu assado",
      "couve roxa": "repolho roxo",
      "tahine": "pasta de amendoim diluída"
    }
  },
  {
    "id": "86",
    "name": "Omelete Suflê Fit",
    "image": "/omelete-sufle.jpg",
    "description": "Uma omelete leve e aerada, com claras em neve e queijo cottage, ideal para um café da manhã ou lanche proteico e sofisticado.",
    "ingredients": [
      "3 ovos (separar claras e gemas)",
      "2 colheres de queijo cottage",
      "1 colher de queijo ralado light",
      "Sal, pimenta e noz moscada",
      "Cebolinha picada",
      "Azeite em spray"
    ],
    "instructions": [
      "Separe claras das gemas",
      "Bata as claras em neve até pico firme",
      "Em outro bowl, misture gemas, cottage e temperos",
      "Incorpore delicadamente claras às gemas",
      "Aqueça frigideira antiaderente em fogo baixo",
      "Despeje a mistura",
      "Cozinhe tampado por 5-6min",
      "Adicione queijo e cebolinha",
      "Dobre ao meio cuidadosamente",
      "Sirva imediatamente (não murcha)"
    ],
    "nutritionalInfo": {
      "calories": 185,
      "protein": "22g",
      "carbs": "6g",
      "fat": "8g"
    },
    "prepTime": 15,
    "category": "Café da Manhã",
    "portions": 1,
    "difficulty": "Médio",
    "tags": ["proteico", "fofo", "especial"],
    "substitutions": {
      "cottage": "ricota amassada",
      "queijo ralado": "parmesão",
      "cebolinha": "ervas finas"
    }
  },
  {
    "id": "87",
    "name": "Cuscuz Marroquino com Vegetais",
    "image": "/cuscuz-marroquino.jpg",
    "description": "Um acompanhamento leve e saboroso, com cuscuz marroquino, vegetais frescos e temperos exóticos, perfeito para refeições ou saladas.",
    "ingredients": [
      "1 xícara de cuscuz marroquino",
      "1 xícara de caldo de legumes quente",
      "1 abobrinha em cubos",
      "1 cenoura em cubos",
      "1/2 xícara de grão de bico",
      "Uvas passas",
      "Amêndoas laminadas",
      "Hortelã fresca",
      "Cominho, canela e cúrcuma"
    ],
    "instructions": [
      "Despeje caldo quente sobre o cuscuz",
      "Tampe e deixe hidratar por 5min",
      "Solte os grãos com garfo",
      "Refogue abobrinha e cenoura rapidamente",
      "Adicione grão de bico e temperos",
      "Misture o cuscuz aos vegetais",
      "Acrescente uvas passas",
      "Torre as amêndoas levemente",
      "Finalize com amêndoas e hortelã",
      "Sirva quente ou frio"
    ],
    "nutritionalInfo": {
      "calories": 165,
      "protein": "6g",
      "carbs": "32g",
      "fat": "3g"
    },
    "prepTime": 20,
    "category": "Acompanhamentos",
    "portions": 4,
    "difficulty": "Fácil",
    "tags": ["vegetariano", "árabe", "exótico"],
    "substitutions": {
      "cuscuz": "quinoa",
      "grão de bico": "lentilha",
      "amêndoas": "castanhas ou nozes"
    }
  },
  {
    "id": "88",
    "name": "Filé Mignon ao Molho Madeira Light",
    "image": "/file-molho-madeira.jpg",
    "description": "Filé mignon suculento com um molho madeira leve, cogumelos frescos e temperos aromáticos, ideal para uma refeição especial e saudável.",
    "ingredients": [
      "2 filés mignon (300g total)",
      "150g de cogumelos fatiados",
      "1/2 xícara de vinho madeira",
      "1/2 xícara de caldo de carne",
      "1 cebola pequena",
      "1 colher de amido de milho",
      "Sal, pimenta e tomilho",
      "Azeite"
    ],
    "instructions": [
      "Tempere os filés com sal e pimenta",
      "Sele em frigideira bem quente (3min cada lado)",
      "Retire os filés e mantenha aquecidos",
      "Na mesma frigideira, refogue cebola",
      "Adicione cogumelos e refogue 5min",
      "Adicione vinho madeira e deixe reduzir",
      "Acrescente caldo de carne",
      "Dissolva amido em água fria e adicione",
      "Cozinhe até engrossar levemente",
      "Retorne os filés, adicione tomilho",
      "Sirva com o molho por cima"
    ],
    "nutritionalInfo": {
      "calories": 325,
      "protein": "42g",
      "carbs": "8g",
      "fat": "14g"
    },
    "prepTime": 30,
    "category": "Almoço/Jantar",
    "portions": 2,
    "difficulty": "Médio",
    "tags": ["gourmet", "proteico", "especial"],
    "substitutions": {
      "filé mignon": "contra filé ou alcatra",
      "vinho madeira": "vinho tinto seco",
      "cogumelos": "champignon paris"
    }
  },
  {
    "id": "89",
    "name": "Rocambole de Carne Moída Fit",
    "image": "/rocambole-carne.jpg",
    "description": "Um rocambole de carne moída magra recheado com queijo branco, espinafre e ovo cozido, uma refeição completa e nutritiva para toda a família.",
    "ingredients": [
      "600g de carne moída magra",
      "3 ovos (2 para massa, 1 cozido)",
      "3 colheres de aveia",
      "1 cenoura ralada",
      "100g de queijo branco",
      "Espinafre refogado",
      "Sal, pimenta e orégano",
      "Molho de tomate para cobrir"
    ],
    "instructions": [
      "Misture carne, 2 ovos, aveia e temperos",
      "Abra a massa entre plásticos formando retângulo",
      "Distribua espinafre, queijo e ovo cozido picado",
      "Enrole como rocambole com ajuda do plástico",
      "Transfira para assadeira forrada",
      "Cubra com molho de tomate",
      "Asse a 180°C por 35min",
      "Deixe esfriar 10min antes de fatiar",
      "Corte em rodelas e sirva"
    ],
    "nutritionalInfo": {
      "calories": 245,
      "protein": "28g",
      "carbs": "12g",
      "fat": "10g"
    },
    "prepTime": 45,
    "category": "Almoço/Jantar",
    "portions": 6,
    "difficulty": "Médio",
    "tags": ["proteico", "marmita", "recheado"],
    "substitutions": {
      "carne moída": "frango moído",
      "espinafre": "brócolis picado",
      "queijo branco": "ricota"
    }
  },
  {
    "id": "90",
    "name": "Smoothie Bowl Tropical",
    "image": "/smoothie-bowl-tropical.jpg",
    "description": "Um bowl refrescante e energizante com manga, banana, whey protein e leite de coco, decorado com granola, kiwi e sementes de chia, ideal para um café da manhã ou lanche tropical.",
    "ingredients": [
      "1 xícara de manga congelada",
      "1/2 banana congelada",
      "1 scoop de whey baunilha",
      "100ml de leite de coco",
      "Toppings: granola, coco ralado",
      "Kiwi fatiado",
      "Sementes de chia",
      "Mel"
    ],
    "instructions": [
      "Bata manga, banana, whey e leite até cremoso",
      "Consistência deve ser grossa (não líquida)",
      "Despeje em bowl",
      "Decore metade com granola",
      "Outra metade com frutas frescas",
      "Adicione coco ralado",
      "Polvilhe chia",
      "Regue com fio de mel",
      "Sirva imediatamente com colher"
    ],
    "nutritionalInfo": {
      "calories": 285,
      "protein": "18g",
      "carbs": "48g",
      "fat": "5g"
    },
    "prepTime": 10,
    "category": "Café da Manhã",
    "portions": 1,
    "difficulty": "Muito Fácil",
    "tags": ["tropical", "proteico", "instagram"],
    "substitutions": {
      "manga": "mamão ou abacaxi",
      "leite coco": "iogurte grego",
      "granola": "aveia em flocos"
    }
  },
  {
    "id": "91",
    "name": "Tortinha de Limão Fitness",
    "image": "/tortinha-limao.jpg",
    "description": "Uma tortinha de limão leve e saborosa, com massa de aveia, recheio cremoso de limão e cobertura de merengue, perfeita para uma sobremesa sem culpa.",
    "ingredients": [
      "Massa: 1 xícara aveia, 2 col mel, 1 ovo",
      "Recheio: 1 lata leite condensado light",
      "Suco de 3 limões",
      "Raspas de 1 limão",
      "3 gemas",
      "Cobertura: 3 claras em neve",
      "2 colheres de eritritol"
    ],
    "instructions": [
      "Pré-aqueça forno a 180°C",
      "Misture ingredientes da massa e forre forma",
      "Asse por 10min e deixe esfriar",
      "Para recheio: misture leite condensado, suco, gemas",
      "Despeje sobre massa e asse 15min",
      "Bata claras em neve com eritritol",
      "Cubra a torta com merengue",
      "Asse mais 5min para dourar levemente",
      "Leve à geladeira por 2h antes de servir"
    ],
    "nutritionalInfo": {
      "calories": 155,
      "protein": "8g",
      "carbs": "20g",
      "fat": "5g"
    },
    "prepTime": 30,
    "category": "Sobremesas",
    "portions": 8,
    "difficulty": "Médio",
    "tags": ["sobremesa", "cítrico", "festa"],
    "substitutions": {
      "leite condensado light": "leite condensado de coco",
      "massa aveia": "massa de tapioca",
      "limão": "maracujá"
    }
  },
  {
    "id": "92",
    "name": "Yakissoba Fit de Frango",
    "image": "/yakissoba-fit.jpg",
    "description": "Um yakissoba saudável e saboroso com frango em tiras, macarrão integral e uma variedade de vegetais frescos, salteados em molho shoyu light.",
    "ingredients": [
      "300g de peito de frango em tiras",
      "200g de macarrão integral ou shirataki",
      "1 cenoura em julienne",
      "1 xícara de brócolis",
      "1/2 repolho fatiado fino",
      "3 colheres de shoyu light",
      "1 colher de gergelim",
      "Gengibre e alho",
      "Cebolinha"
    ],
    "instructions": [
      "Cozinhe o macarrão al dente e escorra",
      "Corte frango em tiras e tempere",
      "Em wok ou frigideira grande, sele o frango",
      "Retire e reserve",
      "Refogue alho e gengibre rapidamente",
      "Adicione cenoura, brócolis e repolho",
      "Refogue em fogo alto por 3-4min",
      "Retorne frango e macarrão",
      "Adicione shoyu e misture bem",
      "Finalize com gergelim e cebolinha"
    ],
    "nutritionalInfo": {
      "calories": 315,
      "protein": "32g",
      "carbs": "34g",
      "fat": "8g"
    },
    "prepTime": 25,
    "category": "Almoço/Jantar",
    "portions": 3,
    "difficulty": "Fácil",
    "tags": ["asiático", "proteico", "completo"],
    "substitutions": {
      "frango": "camarão ou tofu",
      "macarrão integral": "macarrão de arroz",
      "shoyu": "molho teriyaki light"
    }
  },
  {
    "id": "93",
    "name": "Beterraba Assada com Queijo de Cabra",
    "image": "/beterraba-queijo-cabra.jpg",
    "description": "Beterrabas assadas com queijo de cabra cremoso, rúcula fresca e nozes crocantes, regadas com azeite e vinagre balsâmico, um acompanhamento elegante e saboroso.",
    "ingredients": [
      "4 beterrabas médias",
      "100g de queijo de cabra light",
      "Rúcula fresca",
      "Nozes picadas",
      "2 colheres de azeite",
      "1 colher de vinagre balsâmico",
      "Mel",
      "Sal e pimenta"
    ],
    "instructions": [
      "Pré-aqueça forno a 200°C",
      "Lave beterrabas e embrulhe em papel alumínio",
      "Asse por 40-50min até macias",
      "Deixe esfriar e descasque",
      "Corte em fatias ou cubos",
      "Disponha rúcula em prato",
      "Adicione beterraba",
      "Esfarele queijo de cabra por cima",
      "Polvilhe nozes",
      "Regue com azeite, vinagre e fio de mel"
    ],
    "nutritionalInfo": {
      "calories": 145,
      "protein": "7g",
      "carbs": "18g",
      "fat": "6g"
    },
    "prepTime": 50,
    "category": "Acompanhamentos",
    "portions": 4,
    "difficulty": "Fácil",
    "tags": ["vegetariano", "gourmet", "assado"],
    "substitutions": {
      "queijo cabra": "feta ou ricota",
      "beterraba": "abóbora ou cenoura",
      "nozes": "amêndoas ou castanhas"
    }
  },
  {
    "id": "94",
    "name": "Empadão de Frango Fit",
    "image": "/empadao-frango.jpg",
    "description": "Um empadão de frango cremoso com massa de aveia, recheado com frango desfiado, vegetais e azeitonas, uma opção saudável e reconfortante para toda a família.",
    "ingredients": [
      "Massa: 2 xícaras aveia, 1 ovo, 1/4 xícara azeite",
      "Recheio: 400g frango desfiado",
      "1 cebola, 2 tomates",
      "Milho e ervilha",
      "Azeitonas",
      "Sal, pimenta e salsinha",
      "1 gema para pincelar"
    ],
    "instructions": [
      "Pré-aqueça forno a 180°C",
      "Para massa: bata aveia no liquidificador até virar farinha",
      "Misture com ovo, azeite e sal",
      "Amasse até dar liga",
      "Forre forma com 2/3 da massa",
      "Refogue frango com cebola, tomate e temperos",
      "Adicione milho, ervilha e azeitonas",
      "Despeje recheio sobre massa",
      "Cubra com restante da massa",
      "Pincele gema e asse 40min até dourar"
    ],
    "nutritionalInfo": {
      "calories": 265,
      "protein": "24g",
      "carbs": "28g",
      "fat": "8g"
    },
    "prepTime": 55,
    "category": "Almoço/Jantar",
    "portions": 8,
    "difficulty": "Médio",
    "tags": ["proteico", "festa", "tradicional"],
    "substitutions": {
      "aveia": "farinha de arroz",
      "frango": "atum ou carne moída",
      "azeite": "óleo de coco"
    }
  },
  {
    "id": "95",
    "name": "Tofu Mexido Vegano",
    "image": "/tofu-mexido.jpg",
    "description": "Um tofu mexido saboroso e proteico, temperado com cúrcuma e páprica, com tomate e espinafre, uma alternativa vegana perfeita para ovos mexidos.",
    "ingredients": [
      "300g de tofu firme",
      "1/2 cebola picada",
      "1 tomate picado",
      "1 colher de cúrcuma",
      "1/2 colher de páprica",
      "Sal negro (kala namak) opcional",
      "Espinafre",
      "Azeite",
      "Cebolinha"
    ],
    "instructions": [
      "Escorra e seque bem o tofu",
      "Esmigalhe com garfo (textura de ovo mexido)",
      "Aqueça azeite e refogue cebola",
      "Adicione tofu esfarelado",
      "Tempere com cúrcuma, páprica e sal",
      "Mexa por 5min em fogo médio",
      "Adicione tomate e espinafre",
      "Cozinhe mais 3min",
      "Finalize com cebolinha",
      "Sirva com pão ou torradas"
    ],
    "nutritionalInfo": {
      "calories": 195,
      "protein": "18g",
      "carbs": "8g",
      "fat": "11g"
    },
    "prepTime": 12,
    "category": "Café da Manhã",
    "portions": 2,
    "difficulty": "Fácil",
    "tags": ["vegano", "proteico", "sem ovo"],
    "substitutions": {
      "tofu": "ovos (versão não vegana)",
      "espinafre": "couve ou rúcula",
      "sal negro": "sal comum (perde sabor de ovo)"
    }
  },
  {
    "id": "96",
    "name": "Caldeirada de Frutos do Mar",
    "image": "/caldeirada-frutos-mar.jpg",
    "description": "Uma caldeirada rica e saborosa com peixe branco, camarão, lula, batatas e vegetais, cozida em leite de coco e temperos frescos, perfeita para uma refeição especial.",
    "ingredients": [
      "300g de peixe branco em postas",
      "200g de camarão limpo",
      "150g de lula em anéis",
      "2 batatas em cubos",
      "2 tomates",
      "1 cebola",
      "Pimentão",
      "Coentro e cebolinha",
      "Leite de coco light",
      "Azeite"
    ],
    "instructions": [
      "Refogue cebola, alho e pimentão",
      "Adicione tomate picado",
      "Acrescente batatas e água para cobrir",
      "Cozinhe 10min até batata amolecer",
      "Adicione peixe e cozinhe 5min",
      "Acrescente camarão e lula",
      "Cozinhe mais 3-4min",
      "Adicione leite de coco",
      "Tempere com sal e pimenta",
      "Finalize com coentro e cebolinha"
    ],
    "nutritionalInfo": {
      "calories": 245,
      "protein": "32g",
      "carbs": "18g",
      "fat": "6g"
    },
    "prepTime": 35,
    "category": "Sopas e Caldos",
    "portions": 4,
    "difficulty": "Médio",
    "tags": ["frutos do mar", "proteico", "especial"],
    "substitutions": {
      "frutos do mar": "só peixe ou só camarão",
      "batata": "mandioca ou inhame",
      "leite de coco": "creme de leite light"
    }
  },
  {
    "id": "97",
    "name": "Panna Cotta Proteica",
    "image": "/panna-cotta-proteica.jpg",
    "description": "Uma panna cotta leve e cremosa, feita com whey protein e leite desnatado, servida com calda de frutas vermelhas, uma sobremesa elegante e saudável.",
    "ingredients": [
      "2 xícaras de leite desnatado",
      "2 scoops de whey baunilha",
      "1 envelope de gelatina sem sabor",
      "3 colheres de adoçante culinário",
      "Essência de baunilha",
      "Calda: frutas vermelhas com adoçante"
    ],
    "instructions": [
      "Hidrate gelatina conforme embalagem",
      "Aqueça metade do leite sem ferver",
      "Dissolva gelatina no leite quente",
      "Adicione restante do leite frio",
      "Misture whey, adoçante e baunilha",
      "Bata bem com fouet até incorporar",
      "Distribua em forminhas ou tacinhas",
      "Leve à geladeira por no mínimo 4h",
      "Prepare calda cozinhando frutas com adoçante",
      "Desenforme e sirva com calda de frutas"
    ],
    "nutritionalInfo": {
      "calories": 125,
      "protein": "15g",
      "carbs": "12g",
      "fat": "3g"
    },
    "prepTime": 15,
    "category": "Sobremesas",
    "portions": 4,
    "difficulty": "Fácil",
    "tags": ["proteico", "italiano", "gelado", "elegante"],
    "substitutions": {
      "leite desnatado": "leite de amêndoas",
      "whey": "colágeno hidrolisado",
      "calda frutas": "coulis de chocolate"
    }
  },
  {
    "id": "98",
    "name": "Pão de Queijo de Batata Doce",
    "image": "/pao-queijo-batata-doce.jpg",
    "description": "Pães de queijo caseiros e sem glúten, feitos com batata doce e polvilho, uma opção saudável e saborosa para o lanche.",
    "ingredients": [
      "1 xícara de batata doce cozida",
      "1 ovo",
      "3 colheres de polvilho doce",
      "2 colheres de queijo parmesão",
      "1/4 xícara de leite",
      "Sal e orégano"
    ],
    "instructions": [
      "Pré-aqueça forno a 180°C",
      "Amasse bem a batata doce ainda morna",
      "Adicione ovo e leite, misture",
      "Acrescente polvilho aos poucos",
      "Adicione queijo e temperos",
      "Misture até dar liga",
      "Unte forminhas de silicone",
      "Distribua a massa",
      "Asse por 25-30min até dourar",
      "Sirva morno"
    ],
    "nutritionalInfo": {
      "calories": 95,
      "protein": "4g",
      "carbs": "14g",
      "fat": "3g"
    },
    "prepTime": 35,
    "category": "Lanches/Snacks",
    "portions": 12,
    "difficulty": "Fácil",
    "tags": ["sem glúten", "brasileiro", "lanche"],
    "substitutions": {
      "batata doce": "mandioca cozida",
      "polvilho doce": "polvilho azedo",
      "leite": "água"
    }
  },
  {
    "id": "99",
    "name": "Caponata Italiana",
    "image": "/caponata-italiana.jpg",
    "description": "Uma caponata italiana saborosa e agridoce, com berinjela, tomate, cebola, aipo, azeitonas e alcaparras, perfeita como acompanhamento ou antepasto.",
    "ingredients": [
      "2 berinjelas em cubos",
      "2 tomates picados",
      "1 cebola roxa",
      "2 talos de aipo",
      "Azeitonas verdes",
      "Alcaparras",
      "2 colheres de vinagre",
      "1 colher de mel",
      "Manjericão fresco",
      "Azeite"
    ],
    "instructions": [
      "Corte berinjela, polvilhe sal e deixe 20min",
      "Enxugue e refogue em azeite até dourar",
      "Retire e reserve",
      "Refogue cebola e aipo",
      "Adicione tomate e cozinhe 5min",
      "Acrescente vinagre e mel",
      "Retorne berinjela",
      "Adicione azeitonas e alcaparras",
      "Cozinhe 10min em fogo baixo",
      "Finalize com manjericão",
      "Sirva frio ou temperatura ambiente"
    ],
    "nutritionalInfo": {
      "calories": 115,
      "protein": "3g",
      "carbs": "16g",
      "fat": "5g"
    },
    "prepTime": 40,
    "category": "Acompanhamentos",
    "portions": 6,
    "difficulty": "Médio",
    "tags": ["vegetariano", "italiano", "agridoce"],
    "substitutions": {
      "berinjela": "abobrinha",
      "aipo": "pimentão verde",
      "alcaparras": "azeitonas picadas"
    }
  },
  {
    "id": "100",
    "name": "Bolo de Chocolate na Air Fryer",
    "image": "/bolo-chocolate-airfryer.jpg",
    "description": "Um bolo de chocolate proteico e sem glúten, feito na air fryer, uma sobremesa rápida e deliciosa para matar a vontade de doce.",
    "ingredients": [
      "1 xícara de aveia em flocos finos",
      "3 colheres de cacau 100%",
      "2 ovos",
      "1/2 xícara de leite desnatado",
      "1 scoop de whey chocolate",
      "3 colheres de adoçante culinário",
      "1 colher de fermento",
      "Essência de baunilha",
      "Gotas de chocolate 70%"
    ],
    "instructions": [
      "Bata aveia no liquidificador até virar farinha",
      "Em bowl, misture farinha de aveia, cacau e whey",
      "Bata ovos com leite e adoçante",
      "Misture ingredientes secos aos líquidos",
      "Adicione baunilha e fermento por último",
      "Acrescente gotas de chocolate",
      "Despeje em forma que caiba na air fryer",
      "Asse 160°C por 20min",
      "Teste com palito",
      "Deixe esfriar antes de desenformar"
    ],
    "nutritionalInfo": {
      "calories": 175,
      "protein": "10g",
      "carbs": "24g",
      "fat": "5g"
    },
    "prepTime": 25,
    "category": "Sobremesas",
    "portions": 6,
    "difficulty": "Fácil",
    "tags": ["proteico", "chocolate", "air fryer", "rápido"],
    "substitutions": {
      "air fryer": "forno 180°C por 25min",
      "aveia": "farinha de amêndoas",
      "whey": "cacau extra",
      "leite": "café forte (bolo mocaccino)"
    }
  }
];