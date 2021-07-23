import { db } from '../Firebase/Firebase.config'
import { IUser } from '../Interfaces/UserInterfaces'

export function getFromSnapshot(snapShot: any) {
  return snapShot.docs.map((doc: any) => ({
    id: doc.id,
    ...doc.data()
  }))
}

export function getDocsWithId(doc: any) {
  return ({
    id: doc.id,
    ...doc.data()
  })
}

export function getDocs(doc: any) {
  return ({
    ...doc.data()
  })
}

export function getUserFromId(userId: IUser['id']) {
  return db.collection('users')
      .where('id', '==', `${userId}`)
      .get()
      .then(getFromSnapshot)
      .then((user) => user[0])
}
