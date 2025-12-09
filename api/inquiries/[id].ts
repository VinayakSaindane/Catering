import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../../server/storage';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const id = parseInt(req.query.id as string);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid inquiry ID' });
      }

      const inquiry = await storage.getInquiryById(id);
      if (!inquiry) {
        return res.status(404).json({ message: 'Inquiry not found' });
      }

      return res.status(200).json(inquiry);
    } catch (error) {
      return res.status(500).json({ message: 'An error occurred while fetching the inquiry' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

