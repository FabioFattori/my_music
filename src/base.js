import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  projectId: "mymusic1112",
    appId: "1:841211748384:web:82ab933ce10d2b01091c45",
    storageBucket: "mymusic1112.appspot.com",
    locationId: "europe-west",
    apiKey: "AIzaSyDs5-ZeSMK0w6kVBlAVpVeeC8tvhqNi26E",
    authDomain: "mymusic1112.firebaseapp.com",
    messagingSenderId: "841211748384",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export {app,storage};