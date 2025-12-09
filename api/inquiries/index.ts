import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../../server/storage';
import { insertInquirySchema } from '@shared/schema';
import { fromZodError } from 'zod-validation-error';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      // Validate request body
      const validatedData = insertInquirySchema.parse(req.body);
      
      // Save inquiry to storage
      const newInquiry = await storage.createInquiry(validatedData);
      
      return res.status(201).json({
        message: 'Inquiry submitted successfully',
        inquiry: newInquiry
      });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      } else {
        return res.status(500).json({ message: 'An error occurred while submitting your inquiry' });
      }
    }
  }

  if (req.method === 'GET') {
    try {
      const inquiries = await storage.getAllInquiries();
      return res.status(200).json(inquiries);
    } catch (error) {
      return res.status(500).json({ message: 'An error occurred while fetching inquiries' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

