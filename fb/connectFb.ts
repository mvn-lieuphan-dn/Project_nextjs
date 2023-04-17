import { Users } from "./../model/Users.model";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { database } from "./clientApp";

export const addData = async (values: Users, nameTable: string, id: string) => {
  await setDoc(doc(database, nameTable, id), values);
};
export const getDataById = async (
  id: string | undefined,
  nameTable: string
) => {
  if (id) {
    return new Promise<Users>((res) => {
      const fetchData = async () => {
        const docRef = doc(database, nameTable, id);
        const docSnap = await getDoc(docRef);
        res(docSnap.data() as Users);
      };
      fetchData();
    });
  }
};

// export const getData = (nameTable: string) =>
//   new Promise((res) => {
//     const fetchData = async () => {
//       const q = collection(database, nameTable);
//       const querySnapshot = await getDocs(q);
//       const datas: any = [];
//       querySnapshot.forEach((doc) => {
//         const db = { ...doc.data(), id: doc.id };
//         datas.push(db);
//       });
//       console.log(datas);

//       res(datas);
//     };
//     fetchData();
//   });

// export const deleteData = async (id: string, nameTable: string) => {
//   console.log(id);

//   if (id) {
//     const docRef = doc(database, nameTable, id);
//     deleteDoc(docRef)
//       .then(() => {
//         console.log("Success Delete");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// };

// export const updateData = async (
//   id: string,
//   nameTable: string,
//   values: any
// ) => {
//   if (id) {
//     const docRef = doc(database, nameTable, id);
//     updateDoc(docRef, values)
//       .then(() => {
//         console.log("Success Update");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// };
