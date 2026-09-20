import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    service: "Docentes IA PRO",
    version: "0.9.0",
    status: "online",
    timestamp: new Date().toISOString()
  });
});

export default router;