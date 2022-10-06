import { Request, Response, Router } from 'express';
const router = Router();

/**
 * API DESC
 */
 router.get('/', (req : Request, res: Response) => {
    res.status(200).json({ 
        name: "CarRouterApi",
        description: "Effectue la gestion des de voiture pour un garage",
    });
});

export default router;