import express from "express";
import cors from "cors";

export const app = express();

app.use(cors({ origin: process.env.WEB_ORIGIN ?? "http://localhost:3000" }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

// Unknown routes answer in JSON, like every other route, instead of Express's HTML page.
app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});
