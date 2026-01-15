import { Router } from 'express';

const router = Router();

router.get(["/about", "/info"], (req, res) => {
  return res.status(200).json({
    message: "Campus directory routes",
    route: ["GET /", "GET / about"]

  })
});