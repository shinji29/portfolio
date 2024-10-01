"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MenuToggle } from "@/components/menu-toggle";
import { ThemeToggle } from "@/components/theme-toggle";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, LinkedinIcon, MailIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Portfolio() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const menuItems = [
    { item: "About", url: "#about" },
    { item: "Projects", url: "#projects" },
    { item: "Skills", url: "#skills" },
    { item: "Contact", url: "#contact" },
  ];

  const projects = [
    { title: "Project 1", description: "A brief description of Project 1" },
    { title: "Project 2", description: "A brief description of Project 2" },
    { title: "Project 3", description: "A brief description of Project 3" },
  ];

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "GraphQL",
    "MongoDB",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`sticky top-0 z-10 bg-background border-b transition-transform duration-300 ease-in-out ${
          visible ? "md:translate-y-0" : "md:-translate-y-full"
        }`}
      >
        <div className="container mx-auto md:p-4 p-3 flex justify-between items-center">
          <h1 className="md:text-2xl text-xl font-bold">
            <Link href={"/"}>Shinji Ikari</Link>
          </h1>
          <div className="flex justify-center items-center gap-2">
            <nav className="hidden md:block md:mr-6">
              <ul className="flex flex-row justify-center items-center gap-8">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="hover:text-slate-300">
                      {item.item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="md:hidden">
              <MenuToggle />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section className="mb-32 pt-32" id="about">
          <Card>
            <CardContent className="flex flex-col md:flex-row items-center gap-8 p-6">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/me.png" alt="Shinji Ikari" />
                <AvatarFallback>SI</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="md:text-3xl text-xl font-bold mb-4">
                  👋 Hi, I am Shinji Ikari.
                </h2>
                <p className="md:text-xl text-left text-md text-muted-foreground">
                  A passionate full-stack developer with a love for creating
                  elegant, efficient, and user-friendly web applications.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="pt-16">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{project.description}</p>
                </CardContent>
                <CardDescription className="w-5/6 mx-6 mb-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus rerum autem a tempore rem distinctio? Debitis laboriosam
                  pariatur enim cupiditate, cum, veritatis quae et rem
                  dignissimos minus aliquam ducimus officia!
                </CardDescription>
                <CardFooter>
                  <Button variant="outline">View Project</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="pt-16">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section id="contact" className="pt-20">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-4">
            <Link href={"https://github.com/shinji29"} target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={"/"}>
              <Button variant="ghost" size="icon">
                <LinkedinIcon className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={"/"}>
              <Button variant="ghost" size="icon">
                <MailIcon className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <p className="text-center mt-4 text-sm text-muted-foreground">
            © 2024 Shinji Ikari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
