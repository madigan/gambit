import { Router } from "express";

export default new Router()
  .get('/health', (req, res) => res.status(200).json({}));