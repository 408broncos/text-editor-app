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
  console.log('GET from the database');

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
  console.log('PUT to the database');

  const saveToDb = async (content) => {
    try {
      const contactDb = await openDB('jate', 1);
      const tx = contactDb.transaction('jate', 'readwrite');
      const store = tx.objectStore('jate');
      const request = store.put({ id: 1, value: content });
      const result = await request;
      console.log('🚀 - data saved to the database', result);
    } catch (error) {
      console.error('Error saving data to the database', error);
    }
  };

  const retrieveFromDb = async () => {
    try {
      const contactDb = await openDB('jate', 1);
      const tx = contactDb.transaction('jate', 'readonly');
      const store = tx.objectStore('jate');
      const request = store.getAll();
      const result = await request;
      console.log('result.value', result);
      return result?.value;
    } catch (error) {
      console.error('Error retrieving data from the database', error);
      return null;
    }
  };

  await saveToDb('Content to be saved');

  const data = await retrieveFromDb();
  console.log('Database initialization complete');
  return data;
};

initdb();
getDb();
