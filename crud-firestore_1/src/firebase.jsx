import { initializeApp } from 'firebase/app';

import { getFirestore, collection, getDocs, addDoc, deleteDoc, updateDoc , doc } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyBii7amTOOSkx7dI1uYZN90iZMkQSYVB14",
    authDomain: "crududemy-c3cf8.firebaseapp.com",
    projectId: "crududemy-c3cf8",
    storageBucket: "crududemy-c3cf8.appspot.com",
    messagingSenderId: "676244901519",
    appId: "1:676244901519:web:c3dc7fac4e10431a60eafa"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  

const _getDocs = async (_colletionName) => {
  const _collection = collection(db, _colletionName);
  const snapshot = await getDocs(_collection);
  const list = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  return list;

}

const _addDoc = async(_data, _colletionName) => {
  const _collection = collection(db, _colletionName);
  return await addDoc(_collection, _data);
}

const _deleteDoc = async(_id, _colletionName) => {
  return await deleteDoc(doc(db, _colletionName, _id));
}

const _updateDoc = async(_id, _newData, _colletionName) => {
  const _doc = doc(db, _colletionName, _id);
  return await updateDoc(_doc, _newData);
}

export {db, _getDocs, _addDoc, _deleteDoc, _updateDoc};