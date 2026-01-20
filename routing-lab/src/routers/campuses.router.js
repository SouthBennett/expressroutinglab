import { Router } from 'express';
import { campuses } from "../controllers/campusesController.js"

const router = Router();

router.get(["/about", "/info"], (req, res) => {
  res.json({
    message: "Campus directory routes",
    routes: [
      "GET /",
      "GET /about|/info",
      "GET /:id",
      "GET /search?city=&open=&program="
    ]
  });
});

router.get("/", (req, res) => {
  res.status(200).json({
    campuses
  });
});

export default router;