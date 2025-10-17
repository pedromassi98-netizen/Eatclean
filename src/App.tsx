import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";
import ExplorePage from "./pages/ExplorePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import FavoritesPage from "./pages/FavoritesPage"; // Importando a nova página
import MealPrepPage from "./pages/MealPrepPage"; // Importando a nova página
import NutritionalGuidePage from "./pages/NutritionalGuidePage"; // Importando a nova página
import ShoppingListPage from "./pages/ShoppingListPage"; // Importando a nova página
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/"
            element={
              <Layout>
                <ExplorePage />
              </Layout>
            }
          />
          <Route
            path="/explore"
            element={
              <Layout>
                <ExplorePage />
              </Layout>
            }
          />
          <Route
            path="/recipe/:id"
            element={
              <Layout>
                <RecipeDetailsPage />
              </Layout>
            }
          />
          <Route
            path="/favorites" // Nova rota
            element={
              <Layout>
                <FavoritesPage />
              </Layout>
            }
          />
          <Route
            path="/meal-prep" // Nova rota
            element={
              <Layout>
                <MealPrepPage />
              </Layout>
            }
          />
          <Route
            path="/nutritional-guide" // Nova rota
            element={
              <Layout>
                <NutritionalGuidePage />
              </Layout>
            }
          />
          <Route
            path="/shopping-list" // Nova rota
            element={
              <Layout>
                <ShoppingListPage />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;