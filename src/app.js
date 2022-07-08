import express from "express";
import "dotenv/config";
import categoriesRouter from "./routes/categories.routes"
import productsRouter from "./routes/products.routes"
import { startDatabase } from "./database";

const app = express();

app.use(express.json());

const port = process.env.NODE_ENV === "test" ? 4040 : 5050

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log("Server running");
  startDatabase();
});

export default app;