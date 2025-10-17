"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de login (será implementada com Supabase ou outro backend)
    console.log("Tentativa de login...");
    navigate("/explore"); // Redireciona para a tela de explorar após o login
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de cadastro (será implementada com Supabase ou outro backend)
    console.log("Tentativa de cadastro...");
    navigate("/explore"); // Redireciona para a tela de explorar após o cadastro
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-orange-100 dark:from-green-900 dark:to-orange-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-green-700 dark:text-green-300">Eatclean</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">Sua jornada para uma alimentação saudável começa aqui.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" required />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="********" required />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md">
              Entrar
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Button variant="outline" onClick={handleRegister} className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-900">
              Cadastre-se
            </Button>
          </div>
        </CardContent>
      </Card>
      <p className="mt-8 text-lg font-semibold text-green-800 dark:text-green-200">Bem-vindo</p>
    </div>
  );
};

export default AuthPage;