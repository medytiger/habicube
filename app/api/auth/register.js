import { registerUser } from "@/actions/authentification";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    // Validation des champs
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    // Appeler la fonction `registerUser` pour créer l'utilisateur
    const response = await registerUser({ name, email, password });

    if (response.error) {
      return res.status(400).json({ error: response.error });
    }

    return res.status(201).json({ message: "Inscription réussie !" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
