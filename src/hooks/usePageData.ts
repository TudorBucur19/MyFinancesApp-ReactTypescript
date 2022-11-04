import { useState, useEffect } from 'react';
import { collection, query, getDocs, addDoc, onSnapshot } from "firebase/firestore"; 

import db from 'utils/firebase';
import { IOperation } from 'interfaces/IOperation';

export const usePageData = (collectionName: string) => {
    const [data, setData] = useState<IOperation[]>();    

    useEffect(() => {
        const response = query(collection(db, collectionName))
        onSnapshot(response, (querySnapshot: any) => {
          setData(querySnapshot.docs.map((doc: any) => ({
            id: doc.id,
            data: doc.data()
          })))
        })
    }, [collectionName]);    

    return { data };
};