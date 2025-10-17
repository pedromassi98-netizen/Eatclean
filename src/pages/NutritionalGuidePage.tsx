"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MadeWithDyad } from "@/components/made-with-dyad"; // Importar MadeWithDyad

const NutritionalGuidePage = () => {
  return (
    <div className="container mx-auto p-4 pb-20"> {/* Adicionado pb-20 para o footer */}
      <Card className="overflow-hidden rounded-lg shadow-lg mb-6">
        <img
          src="/public/pedro_massi_Crie_uma_imagem_toda_com_alimentos_saudáveis,_pode_usar_um_fundo_01d4a700-c002-4ff9-89be-668a3358c949.png"
          alt="Guia Nutricional"
          className="w-full h-64 object-cover"
        />
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-green-700 dark:text-green-300 mb-2">Guia Nutricional</CardTitle>
          <p className="text-gray-600 dark:text-gray-400">Sua bússola para uma alimentação saudável e equilibrada.</p>
        </CardHeader>
      </Card>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-orange-600 dark:text-orange-400">🌿 Nutrientes Essenciais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">🥚 Proteínas</h3>
              <p>Essenciais para construir e reparar tecidos, enzimas e hormônios.</p>
              <p className="font-semibold">👉 Fontes: carnes magras, ovos, peixes, laticínios, leguminosas.</p>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">🌾 Carboidratos</h3>
              <p>Principal fonte de energia para o corpo.</p>
              <p className="font-semibold">👉 Fontes: grãos integrais, frutas, batata, mandioca e vegetais.</p>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">🥑 Gorduras</h3>
              <p>Importantes para a absorção de vitaminas e produção de hormônios.</p>
              <p className="font-semibold">👉 Fontes: azeite, abacate, castanhas e sementes.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-orange-600 dark:text-orange-400">⚖️ Porções Recomendadas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">🍗 Proteínas</h3>
              <p>Consuma 2–3 porções por dia, incluindo carnes magras, peixes, ovos e leguminosas.</p>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">🍞 Carboidratos</h3>
              <p>Inclua 3–5 porções diárias, priorizando grãos integrais, frutas e vegetais.</p>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">🥥 Gorduras</h3>
              <p>Limite a 1–2 porções por dia, optando por fontes saudáveis como azeite, abacate e oleaginosas.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-orange-600 dark:text-orange-400">💡 Dicas para uma Alimentação Equilibrada</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>✅ Varie os alimentos para garantir diferentes nutrientes.</p>
            <p>✅ Prefira alimentos naturais e evite ultraprocessados.</p>
            <p>✅ Beba bastante água ao longo do dia.</p>
            <p>✅ Monte pratos coloridos e equilibrados.</p>
            <p>✅ Mantenha horários regulares para as refeições.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-orange-600 dark:text-orange-400">🔁 Equilíbrio é a chave</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            <p>Não é sobre restringir — é sobre equilibrar.</p>
            <p>Com pequenas escolhas diárias, você alcança grandes resultados!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-orange-600 dark:text-orange-400">🍉 Frutas e Vegetais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>Essenciais para a saúde e o equilíbrio do corpo. Ricos em vitaminas, minerais, fibras e antioxidantes, eles ajudam a fortalecer o sistema imunológico, melhorar a digestão e manter a pele, os cabelos e o metabolismo saudáveis.</p>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">🥦 Vegetais</h3>
              <p>Fornecem fibras que ajudam na saciedade e no funcionamento do intestino.</p>
              <p>São fontes importantes de vitaminas (como A, C, K) e minerais (ferro, cálcio, magnésio).</p>
              <p>Devem estar presentes em todas as refeições principais.</p>
              <p className="font-semibold">👉 Exemplos: brócolis, espinafre, cenoura, abobrinha, couve-flor, tomate.</p>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">🍎 Frutas</h3>
              <p>Ajudam a manter a energia durante o dia e reduzem a vontade de doces.</p>
              <p>São ricas em antioxidantes naturais, que combatem o envelhecimento celular.</p>
              <p>Prefira consumir as frutas inteiras, e não em sucos, para aproveitar melhor as fibras.</p>
              <p className="font-semibold">👉 Exemplos: banana, maçã, laranja, mamão, morango, abacaxi.</p>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">💚 Dica extra:</h3>
              <p>Combine vegetais crus e cozidos, e adicione frutas nas principais refeições ou nos lanches para manter um fluxo constante de energia e nutrientes.</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default NutritionalGuidePage;