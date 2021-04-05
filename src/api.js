import { db } from './firebase.config';

export function getLists() {
  return db.collection('lists')
      .get()
      .then((snapShot) => {
        const items = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        return items
      }).catch((error) => console.log(error))
}

export function getListsTodos(listId) {
  return db.collection('todos')
      .where('listId', '==', listId)
      .get()
      .then((snapShot) => {
        const items = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        return items
      })
      .catch((error) => console.log(error))
}
