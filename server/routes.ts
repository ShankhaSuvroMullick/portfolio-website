import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Projects
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // Skills
  app.get(api.skills.list.path, async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  // Experience
  app.get(api.experience.list.path, async (req, res) => {
    const experience = await storage.getExperiences();
    res.json(experience);
  });

  // Messages
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    // Skills
    const skills = [
      { name: "C", category: "Languages" },
      { name: "C++", category: "Languages" },
      { name: "Python", category: "Languages" },
      { name: "JavaScript", category: "Web" },
      { name: "HTML/CSS", category: "Web" },
      { name: "Data Structures & Algorithms", category: "Core" },
      { name: "AI / Machine Learning", category: "Core" },
    ];
    for (const skill of skills) {
      await storage.createSkill(skill);
    }

    // Projects
    const projects = [
      {
        title: "AI Image Classifier",
        description: "A deep learning model to classify images with 98% accuracy using PyTorch.",
        tags: ["Python", "PyTorch", "AI"],
        imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
        githubUrl: "https://github.com",
        isFeatured: true
      },
      {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce application with secure payments and real-time inventory.",
        tags: ["React", "Node.js", "PostgreSQL"],
        imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        githubUrl: "https://github.com",
        isFeatured: true
      },
      {
        title: "Sorting Visualizer",
        description: "Interactive visualization of common sorting algorithms to help students understand DSA.",
        tags: ["JavaScript", "Algorithms", "Education"],
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        githubUrl: "https://github.com",
        isFeatured: true
      }
    ];
    for (const project of projects) {
      await storage.createProject(project);
    }

    // Experience
    const experiences = [
      {
        role: "Software Engineering Intern",
        company: "Tech Solutions Inc.",
        duration: "Summer 2025",
        description: "Optimized backend API performance by 40% and implemented new user authentication flows."
      },
      {
        role: "Open Source Contributor",
        company: "GitHub",
        duration: "2024 - Present",
        description: "Contributed bug fixes and feature enhancements to popular machine learning libraries."
      }
    ];
    for (const exp of experiences) {
      await storage.createExperience(exp);
    }
  }
}
