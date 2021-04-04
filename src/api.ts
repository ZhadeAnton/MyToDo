import { db } from './firebase/firebase.config';

export async function get(param: string) {
  try {
    const snapshot = await db.collection(param)
        .get();
    const todos = snapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data()
    }));
    return todos;
  } catch (error) {
    console.log('Error getting document:', error);
  }
}
