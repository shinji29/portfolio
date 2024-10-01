"use client";

import Link from "next/link";
import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MenuToggle() {
  const menuItems = [
    { item: "About", url: "#about" },
    { item: "Projects", url: "#projects" },
    { item: "Skills", url: "#skills" },
    { item: "Contact", url: "#contact" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Toggle menu">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {menuItems.map((menuItem, id) => (
          <DropdownMenuItem key={id} asChild>
            <Link href={menuItem.url}>{menuItem.item}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
