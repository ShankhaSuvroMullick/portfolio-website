import { db } from "./db";
import { 
  projects, skills, experiences, messages,
  type Project, type InsertProject,
  type Skill, type InsertSkill,
  type Experience, type InsertExperience,
  type Message, type InsertMessage
} from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getExperiences(): Promise<Experience[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  
  // Seed helpers
  createProject(project: InsertProject): Promise<Project>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  createExperience(experience: InsertExperience): Promise<Experience>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(desc(projects.id));
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experiences).orderBy(desc(experiences.id));
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db
      .insert(projects)
      .values(insertProject)
      .returning();
    return project;
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const [skill] = await db
      .insert(skills)
      .values(insertSkill)
      .returning();
    return skill;
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const [experience] = await db
      .insert(experiences)
      .values(insertExperience)
      .returning();
    return experience;
  }
}

export const storage = new DatabaseStorage();
