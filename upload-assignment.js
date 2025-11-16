// FILE: upload-assignment.js

// This script uses the Firebase Admin SDK, which gives you server-like access
// to your database. It's perfect for tasks like this.
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

// --- IMPORTANT ---
// 1. Download your service account key from Firebase
//    - Go to Project Settings > Service accounts
//    - Click "Generate new private key" and save the JSON file.
// 2. Rename the downloaded file to `serviceAccountKey.json` and place it
//    in the same directory as this script.
// 3. MAKE SURE your .gitignore file includes `serviceAccountKey.json`
//    so you don't commit it to GitHub!
import serviceAccount from './serviceAccountKey.json' with { type: 'json' };

// --- YOUR ASSIGNMENT DATA ---
// Read the local assignment.json file
const assignmentJson = JSON.parse(fs.readFileSync('./public/assignment.json', 'utf8'));
const assignmentId = assignmentJson.assignmentId; // We'll use the ID from the file

// --- FIREBASE INITIALIZATION ---
initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// --- UPLOAD FUNCTION ---
async function uploadAssignment() {
  if (!assignmentId) {
    console.error("Error: assignment.json must have an 'assignmentId' field.");
    return;
  }

  console.log(`Preparing to upload assignment with ID: ${assignmentId}`);

  // Get a reference to the document we want to create/overwrite
  const assignmentRef = db.collection('assignments').doc(assignmentId);

  try {
    // Use set() to upload the entire JavaScript object.
    // Firestore will automatically convert it to the correct nested structure.
    await assignmentRef.set(assignmentJson);
    console.log('✅ Success! Assignment uploaded to Firestore.');
  } catch (error) {
    console.error('❌ Error uploading assignment:', error);
  }
}

// Run the function
uploadAssignment();