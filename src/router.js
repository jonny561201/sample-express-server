import { Router } from "express";


export const router = Router();


router.get('/healthCheck', (req, res) => {
    res.json({ message: 'success' })
});