import firebase_app from "../config";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getDocumentByEmail(collectionName, email) {
  let result = null;
  let error = null;

  try {
    const q = query(
      collection(db, collectionName),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        result = { id: doc.id, ...doc.data() };
      });
    } else {
      error = "No matching documents found";
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
}
