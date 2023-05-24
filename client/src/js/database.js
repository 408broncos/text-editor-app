import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

const dbPromise = initdb();

export const putDb = async (content) => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.add({ content });
  
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      console.log('Data added to the database');
      resolve();
    };

    request.onerror = () => {
      console.error('Error adding data to the database');
      reject(new Error('Failed to add data'));
    };
  });
};

export const getDb = async () => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      console.log('Data retrieved from the database');
      resolve(request.result);
    };

    request.onerror = () => {
      console.error('Error retrieving data from the database');
      reject(new Error('Failed to retrieve data'));
    };
  });
};

initdb();