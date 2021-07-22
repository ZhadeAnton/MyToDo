import { db } from '../Firebase/Firebase.config'
import { IUser } from '../Interfaces/UserInterfaces'

export function getFromSnapshot(snapShot: any) {
  return snapShot.docs.map((doc: any) => ({
    ...doc.data()
  }))
}

export function getFromDoc(doc: any) {
  return ({
    id: doc.id,
    ...doc.data()
  })
}

export function mapDocs(doc: any) {
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
