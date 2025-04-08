import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Inquiry submission endpoint
  app.post("/api/inquiries", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertInquirySchema.parse(req.body);
      
      // Save inquiry to storage
      const newInquiry = await storage.createInquiry(validatedData);
      
      res.status(201).json({
        message: "Inquiry submitted successfully",
        inquiry: newInquiry
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An error occurred while submitting your inquiry" });
      }
    }
  });

  // Get all inquiries endpoint
  app.get("/api/inquiries", async (_req: Request, res: Response) => {
    try {
      const inquiries = await storage.getAllInquiries();
      res.status(200).json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching inquiries" });
    }
  });

  // Get specific inquiry endpoint
  app.get("/api/inquiries/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid inquiry ID" });
      }

      const inquiry = await storage.getInquiryById(id);
      if (!inquiry) {
        return res.status(404).json({ message: "Inquiry not found" });
      }

      res.status(200).json(inquiry);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching the inquiry" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
