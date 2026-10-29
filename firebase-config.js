// CONFIGURACIÓN DE FIREBASE (Sustituye con tus credenciales de consola de Firebase)
const firebaseConfig = {
    apiKey: "AIzaSyB0JWN4bRHZ8f2tZEQwnxBW8hGmP9XPaEA",
    authDomain: "calcos-6760b.firebaseapp.com",
    projectId: "calcos-6760b",
    storageBucket: "calcos-6760b.firebasestorage.app",
    messagingSenderId: "20210064860",
    appId: "1:20210064860:web:01db78b92e3b0d43400319"
};

// Inicializar SDKs de Firebase v10 (Modular via CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, query, orderBy, limit, startAfter, where } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, signInWithEmailAndPassword, signOut, onAuthStateChanged, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, query, orderBy, limit, startAfter, where, ref, uploadBytes, getDownloadURL };

// Estilos CSS Globales Compartidos
export const globalStyles = `
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    body { background-color: #f4f6f9; color: #333; display: flex; flex-direction: column; min-height: 100vh; }
    header.main-header { background: #1b263b; color: white; text-align: center; padding: 2rem 1rem; border-bottom: 4px solid #e63946; }
    header.main-header h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
    header.main-header p { font-size: 1.1rem; color: #a8dadc; }
    .layout-container { display: grid; grid-template-columns: 240px 1fr 280px; gap: 20px; max-width: 1300px; margin: 20px auto; width: 95%; flex: 1; }
    aside.left-sidebar, aside.right-sidebar { background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); height: fit-content; }
    aside h3 { font-size: 1.1rem; margin-bottom: 12px; color: #1d3557; border-bottom: 2px solid #f1faee; padding-bottom: 6px; }
    aside ul { list-style: none; }
    aside ul li { margin-bottom: 8px; }
    aside ul li a { text-decoration: none; color: #457b9d; font-weight: 500; display: block; padding: 6px 10px; border-radius: 4px; transition: 0.2s; }
    aside ul li a:hover { background: #f1faee; color: #1d3557; }
    main.content-feed { display: flex; flex-direction: column; gap: 20px; }
    .news-card { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
    .news-card h2 a { text-decoration: none; color: #1d3557; }
    .news-card h2 a:hover { color: #e63946; }
    .news-meta { font-size: 0.85rem; color: #666; margin: 8px 0 15px 0; display: flex; gap: 15px; }
    .news-media { width: 100%; max-height: 400px; object-fit: cover; border-radius: 6px; margin-bottom: 15px; }
    .news-text { line-height: 1.6; color: #444; margin-bottom: 15px; }
    .news-footer-banner { background: #e9ecef; border: 2px dashed #ced4da; padding: 10px; text-align: center; border-radius: 6px; font-size: 0.9rem; color: #555; margin-top: 10px; }
    .news-hashtags { font-size: 0.85rem; color: #e63946; margin-top: 10px; font-weight: bold; }
    .pagination { display: flex; justify-content: center; gap: 10px; margin: 20px 0; }
    .pagination button { padding: 8px 16px; background: #1d3557; color: white; border: none; border-radius: 4px; cursor: pointer; }
    .pagination button:disabled { background: #adb5bd; cursor: not-allowed; }
    footer.main-footer { background: #1b263b; color: white; text-align: center; padding: 1.5rem; margin-top: auto; }
    @media(max-width: 992px) { .layout-container { grid-template-columns: 1fr; } }
`;
