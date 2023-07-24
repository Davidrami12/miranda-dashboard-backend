import { Request, Response, NextFunction } from 'express';

const hardcodedUser = {
    email: 'admin@admin.com',
    password: 'Admin123',
};

export const checkAuthentication = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
        next();
    } else {
        res.status(401).json({ message: 'Authentication failed' });
    }
};
