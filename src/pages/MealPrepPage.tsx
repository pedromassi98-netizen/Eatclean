"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MadeWithDyad } from "@/components/made-with-dyad";

const MealPrepPage = () => {
  return (
    <div className="container mx-auto p-4 pb-20">
      <Card className="mb-8 p-6 text-center bg-gradient-to-r from-green-50 to-orange-50 dark:from-green-950 dark:to-orange-950">
        <CardTitle className="text-4xl font-bold text-green-700 dark:text-green-300 mb-4">
          🍱 Planeje suas Refeições
        </CardTitle>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Descubra como preparar refeições fit e equilibradas com antecedência para economizar tempo, manter o foco e alcançar seus objetivos nutricionais.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          Com o meal prep, você evita deslizes, organiza sua rotina e garante uma alimentação saudável durante toda a semana.
        </p>
      </Card>

      {/* Novas imagens adicionadas aqui */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <img
          src="/meal-prep.png"
          alt="Meal Prep Organization"
          className="w-full sm:w-1/2 max-w-xs h-auto rounded-lg shadow-md object-cover"
        />
        <img
          src="/meal-prep2.png"
          alt="Meal Prep Containers"
          className="w-full sm:w-1/2 max-w-xs h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-orange-600 dark:text-orange-400">
              🍳 Organize sua Cozinha para o Meal Prep
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Antes de começar a preparar as refeições, é essencial deixar o ambiente pronto. Uma cozinha organizada economiza tempo, evita desperdício e torna o processo muito mais agradável.
            </p>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">🧼 1. Limpe e organize o espaço</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Lave e guarde a louça para liberar a pia e a bancada.</li>
                <li>Limpe as superfícies de trabalho e mantenha apenas o essencial à vista.</li>
                <li>Certifique-se de que os potes e utensílios estão limpos e acessíveis.</li>
                <li className="font-semibold">💡 Dica: deixe uma área da bancada exclusiva para montagem das marmitas.</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">🔪 2. Separe todos os utensílios que vai usar</h3>
              <p>Tenha à mão:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Tábuas de corte (uma para carnes e outra para vegetais)</li>
                <li>Facas afiadas</li>
                <li>Panelas e frigideiras de diferentes tamanhos</li>
                <li>Formas ou refratários</li>
                <li>Colheres, espátulas e pegadores</li>
                <li>Potes e tampas organizados</li>
                <li className="font-semibold">💡 Dica: use uma “caixa de preparo” com tudo que você sempre precisa — isso agiliza muito!</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">🛒 3. Organize seus ingredientes</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Separe os alimentos por categoria: proteínas, vegetais, grãos e temperos.</li>
                <li>Deixe tudo lavado, cortado e porcionado antes de começar a cozinhar.</li>
                <li>Mantenha temperos e azeite próximos ao fogão.</li>
                <li className="font-semibold">💡 Dica: armazene grãos e cereais em potes rotulados — facilita na hora de medir e evita bagunça.</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">🔥 4. Planeje a ordem de preparo</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Comece pelos alimentos que demoram mais (ex: arroz, carnes).</li>
                <li>Enquanto cozinham, prepare os legumes ou corte as frutas.</li>
                <li>Use o tempo de forno para adiantar o próximo prato.</li>
                <li className="font-semibold">💡 Dica: cozinhe em “camadas”: enquanto um alimento está no forno, outro está na panela e outro sendo montado.</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">🧊 5. Deixe o armazenamento pronto</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Tenha potes limpos, secos e separados por tamanho.</li>
                <li>Deixe etiquetas e caneta à mão para anotar o conteúdo e a data.</li>
                <li>Mantenha espaço reservado na geladeira e no freezer antes de começar.</li>
                <li className="font-semibold">💡 Dica: use potes empilháveis — eles economizam espaço e deixam tudo mais bonito e organizado.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-orange-600 dark:text-orange-400">
              🧠 Planejamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-700 dark:text-gray-300">
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Escolha um dia fixo da semana (geralmente domingo) para planejar e preparar suas refeições.</li>
              <li>Defina o cardápio com antecedência — pense em combinações simples de proteínas, carboidratos e vegetais.</li>
              <li>Monte uma lista de compras inteligente, evitando desperdício e garantindo todos os ingredientes necessários.</li>
              <li>Priorize alimentos versáteis, que possam ser usados em diferentes refeições (ex: frango, arroz integral, legumes cozidos).</li>
              <li>Inclua lanches e snacks saudáveis no planejamento, como frutas, castanhas e iogurte.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-orange-600 dark:text-orange-400">
              🔪 Preparo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-700 dark:text-gray-300">
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Cozinhe em lotes — asse ou grelhe várias porções de proteína de uma só vez.</li>
              <li>Use panelas e formas grandes para otimizar o tempo.</li>
              <li>Combine métodos de cozimento (forno, airfryer, panela de pressão) para acelerar o processo.</li>
              <li>Tempere bem para manter o sabor durante a semana — ervas e especiarias ajudam muito.</li>
              <li>Cozinhe legumes no vapor para preservar os nutrientes e a textura.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-orange-600 dark:text-orange-400">
              🥡 Armazenamento e Conservação
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">Escolha os recipientes certos:</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Utilize potes herméticos de vidro ou plástico de boa qualidade.</li>
                <li>Certifique-se de que os potes são adequados para micro-ondas e freezer, se necessário.</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">Organização na geladeira:</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Coloque as refeições que serão consumidas primeiro na parte da frente da geladeira.</li>
                <li>Mantenha alimentos crus e cozidos separados para evitar contaminação.</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">Congelamento:</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Para congelar refeições, utilize sacos ou potes específicos para freezer.</li>
                <li>Identifique as embalagens com a data de preparo e o conteúdo.</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">Descongelamento seguro:</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Transfira as refeições congeladas para a geladeira na noite anterior ao consumo.</li>
                <li>Evite descongelar em temperatura ambiente para prevenir a proliferação de bactérias.</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-medium text-green-700 dark:text-green-300">Rotação de alimentos:</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Consuma primeiro as refeições preparadas há mais tempo para evitar desperdícios.</li>
              </ul>
            </div>
            <p className="font-semibold mt-4">Etiqueta tudo! Coloque nome e data nos potes para saber o que consumir primeiro.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-orange-600 dark:text-orange-400">
              🕒 Conservação e Duração Média
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-700 dark:text-gray-300">
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Geladeira:</strong> até 3 dias (proteínas, legumes e grãos).</li>
              <li><strong>Freezer:</strong> até 3 meses (marmitas prontas ou alimentos cozidos).</li>
              <li><strong>Frutas cortadas:</strong> até 2 dias (melhor armazenar em potes vedados).</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default MealPrepPage;