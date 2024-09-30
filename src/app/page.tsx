"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon, MailIcon, MenuIcon } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shinji Ikari</h1>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
          <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <a href="#about" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
              <ThemeToggle />
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-16">
          <Card>
            <CardContent className="flex flex-col md:flex-row items-center gap-8 p-6">
              <Avatar className="w-32 h-32">
                <AvatarImage
                  src="/placeholder.svg?height=128&width=128"
                  alt="Shinji Ikari"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Hi, I'm Shinji Ikari. 👋
                </h2>
                <p className="text-xl text-muted-foreground">
                  A passionate full-stack developer with a love for creating
                  elegant, efficient, and user-friendly web applications.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="mb-16">
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
                <CardDescription>
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

        <section id="skills" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section id="contact">
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
            <Button variant="ghost" size="icon">
              <GithubIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LinkedinIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MailIcon className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-center mt-4 text-sm text-muted-foreground">
            © 2024 Shinji Ikari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
