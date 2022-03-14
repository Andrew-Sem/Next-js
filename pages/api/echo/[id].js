import React from "react";

export default function getById(req, res) {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application/json");
  // res.end(req.query.id);
  res.json({ yourId: req.query.id });
}
