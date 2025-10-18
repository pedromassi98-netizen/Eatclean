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
  category: "Todas" | "Café da Manhã" | "Almoço/Jantar" | "Lanches" | "Sopas e Caldos" | "Sobremesas" | "Bebidas" | "Pães e Massas" | "Molhos" | "Acompanhamentos";
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
    "image": "/omelete-claras.jpg",
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
    "image": "/wrap-frango.jpg",
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
    "image": "/brownie-caneca.jpg",
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
    "image": "/salmao-aspargos.jpg",
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
    "image": "/tapioca-frango.jpg",
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
    "image": "/batata-doce-recheada.jpg",
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
    "image": "/vitamina-pos-treino.jpg",
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
    "image": "/hamburguer-frango.jpg",
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
    "image": "/crepioca.jpg",
    "description": "Uma crepioca versátil e rica em proteínas, ideal para qualquer refeição.",
    "ingredients": [
      "1 ovo",
      "2 colheres de tapioca",
      "1 colher de queijo cottage",
      "Sal e orégano a gosto",
      "Recheio: peito de peru e queijo branco"
    ],
    "instructions": [
      "Bata o ovo com sal em um bowl",
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
    "image": "/cookies-amendoim.jpg",
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
  }
];