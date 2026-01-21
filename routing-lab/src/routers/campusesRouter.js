import { Router } from "express";
import { campuses, campusesById, search } from "../controllers/campusesController.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        title: "MVC Starter App",
        subtitle: "Express + EJS + Static Assets"
    });
});

router.get(["/about", "/info"], (req, res) => {
  res.status(200).json({
    message: "Campus directory routes",
    routes: [
      "GET /",
      "GET /about | /info",
      "GET /:id",
      "GET /search?city=&open=&program="
    ]
  });
});

router.get("/", (req, res) => {
  res.status(200).json({ campuses });
});

router.get("/search", search);

router.get("/id/:id", campusesById);

export default router;
