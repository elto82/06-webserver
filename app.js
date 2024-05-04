import express from "express";
import path from "path";
import hbs from "hbs";
import "dotenv/config";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

hbs.registerPartials(path.join(__dirname, "views", "partials"), function (err) {
  if (err) {
    console.error("Error al registrar parciales:", err);
  }
});

const app = express();
//Handlebar
app.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "views", "partials"), function (err) {
  if (err) {
    console.error("Error al registrar parciales:", err);
  }
});

const PORT = process.env.PORT;

//servir contenido estatico
const publicPath = path.resolve(
  new URL(import.meta.url).pathname.replace(/^\/(\w:\/)/, "$1"),
  "../public"
);

app.use(express.static("public"));

app.get("/index", (req, res) => {
  res.render("home", {
    nombre: "Argiro Arias",
    titulo: "Curso de Node",
  });
});

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Argiro Arias",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Argiro Arias",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Argiro Arias",
    titulo: "Curso de Node",
  });
});

app.get("/hola-mundo", (req, res) => {
  res.send("Hello World en su respectiva rura");
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.get("/generic", (req, res) => {
  res.sendFile(path.join(publicPath, "generic.html"));
});

app.get("/elements", (req, res) => {
  res.sendFile(path.join(publicPath, "elements.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
