import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDYY3wkb4sTojIkTzUq0KUV6h7He_yBp2c",
	authDomain: "house-marketplace-1.firebaseapp.com",
	projectId: "house-marketplace-1",
	storageBucket: "house-marketplace-1.appspot.com",
	messagingSenderId: "365634409145",
	appId: "1:365634409145:web:db44ec4a5341740e54c168"
};

initializeApp( firebaseConfig );
export const db = getFirestore();