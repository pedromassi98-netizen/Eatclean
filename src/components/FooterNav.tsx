"use client";

import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Heart, Utensils, Book, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const FooterNav = () => {
  const navItems = [
    { name: "Explorar", icon: Home, path: "/explore" },
    { name: "Favoritos", icon: Heart, path: "/favorites" },
    { name: "Meal Prep", icon: Utensils, path: "/meal-prep" },
    { name: "Guia", icon: Book, path: "/nutritional-guide" },
    { name: "Compras", icon: ShoppingCart, path: "/shopping-list" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50">
      <nav className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center text-xs font-medium transition-colors",
                isActive
                  ? "text-green-600 dark:text-green-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-300"
              )
            }
          >
            <item.icon className="h-5 w-5 mb-1" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </footer>
  );
};

export default FooterNav;