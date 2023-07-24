import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  doc,
  query,
  where,deleteDoc
} from "firebase/firestore";
import { app, auth } from "../firebaseConfig";

export const uploadAudioFile = async (uri) => {
  console.log(`uri is ${uri}`);
  const response = await fetch(uri);

  const blob = await response.blob();
  console.log("blob created");
  const storage = getStorage(app);
  const storageRef = ref(storage, `/voice_recordings/${Date.now()}.m4a`);

  return await uploadBytes(storageRef, blob)
    .then(async (snapshot) => {
      console.log("Uploaded a blob or file!");
      const url = await getDownloadURL(storageRef);
      //console.log(url);
      const data = {
        uploaded_at: Date.now(),
        uploaded_by: auth.currentUser.uid,
        url,
      };
      const db = getFirestore(app);

      return await addDoc(collection(db, "recordings"), data)
        .then((snapshot) => {
          return true;
        })
        .catch((err) => {
          console.log(`set doc failed ${err}`);
          return false;
        });
    })
    .catch((err) => {
      console.log(`upload file page ${err}`);
      return false;
    });
};

export const getDiaries = async () => {
  let diaries = [];
  const db = getFirestore(db);
  const q = query(
    collection(db, "recordings"),
    where("uploaded_by", "==", auth.currentUser.uid)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    diaries.push({ id: doc.id, ...doc.data() });
  });
  
  return diaries;
};


export const deleteDiary = async(id)=>{
  const db = getFirestore(db);
  await deleteDoc(doc(db, "recordings", id));
}