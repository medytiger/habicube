// pages/api/auth/login.js

import { loginWithCredentials } from "@/actions/authentification";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const response = await loginWithCredentials({ email, password });

    if (response.error) {
      return res.status(400).json({ error: response.error });
    }

    return res.status(200).json({ message: "Connexion réussie" });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
