import express from "express";
import cors from "cors";
import { auth } from "./server/firebase.js";

const app = express();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

app.get("/users", async (req, res) => {
  try {

    const listUsers = await auth.listUsers();

    const users = listUsers.users.map((user) => ({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "",
      photoURL: user.photoURL || "",
    }));

    console.log(users);

    res.status(200).json(users);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error obteniendo usuarios",
      error: error.message,
    });
  }
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor corriendo en puerto 3000 🚀");
});