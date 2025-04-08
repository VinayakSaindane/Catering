import { users, type User, type InsertUser, inquiries, type Inquiry, type InsertInquiry } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Inquiry methods
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getAllInquiries(): Promise<Inquiry[]>;
  getInquiryById(id: number): Promise<Inquiry | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiriesStore: Map<number, Inquiry>;
  currentUserId: number;
  currentInquiryId: number;

  constructor() {
    this.users = new Map();
    this.inquiriesStore = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const submittedAt = new Date();
    const inquiry: Inquiry = { ...insertInquiry, id, submittedAt };
    this.inquiriesStore.set(id, inquiry);
    return inquiry;
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiriesStore.values());
  }

  async getInquiryById(id: number): Promise<Inquiry | undefined> {
    return this.inquiriesStore.get(id);
  }
}

export const storage = new MemStorage();
