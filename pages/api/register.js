import { PrismaClient } from '@prisma/client';

import bcrypt from 'bcrypt'; // for bcrypt

const prisma = new PrismaClient();


const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, password, confirmPassword } = req.body;
    
        // Validate passwords
        if (password !== confirmPassword) {
          return res.status(400).json({ error: 'Passwords do not match' });
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        try {
          // Create user in the database
          const user = await prisma.user.create({
            data: {
              name,
              email,
              password: hashedPassword,
            },
          });
    
          // Respond with success
          res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
          // Handle any errors (e.g., unique email constraint)
          res.status(500).json({ error: 'Failed to register user', details: error.message });
        }
      } else {
        res.status(405).json({ error: 'Method Not Allowed' });
      }
    }

    export default handler; // Default export
