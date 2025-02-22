import bcrypt from 'bcrypt'; // for bcrypt
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



const handler = async(req, res) => {
    if (req.method === 'POST') {
        const { email, password } = req.body;
    
        if (!email || !password) {
          return res.status(400).json({ message: 'Email and password are required' });
        }
    
        try {
          // Find the user by email
          const user = await prisma.user.findUnique({
            where: { email },
          });
    
          // Log the user to check if we are getting the user data
          console.log('User found:', user);
    
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
    
          // Compare the hashed password with the provided password
          const isPasswordValid = await bcrypt.compare(password, user.password);
    
          if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
          }
    
          // Successful login
          return res.status(200).json({ message: 'Login successful', user });
    
        } catch (error) {
          console.error('Error during login:', error);
          return res.status(500).json({ message: 'An error occurred during login' });
        }
      } else {
        // Handle any non-POST requests
        res.status(405).json({ message: 'Method not allowed' });
      }
}
export default handler;