import admin from "firebase-admin";
import serviceAccount from "./config/mercantilgo-data-firebase-adminsdk-fbsvc-805ea43053.json" with { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
export const auth = admin.auth();