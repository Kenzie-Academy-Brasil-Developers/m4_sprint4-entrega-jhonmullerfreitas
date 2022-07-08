import express from "express";
import "dotenv/config";
import categoriesRouter from "./routes/categories.routes"
import productsRouter from "./routes/products.routes"
import { startDatabase } from "./database";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log("Server running");
  startDatabase();
});

export default app;
