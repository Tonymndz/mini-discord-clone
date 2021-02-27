/ Discord Clone YouTube Video /

/ Setup! /
 o Setup your firebase project!
  - https://firebase.google.com/
  - Click the Add Project
  - Click the </> Icon to setup adding firebase to client 
  - Go to Settings -> Project Setings -> Firebase SDK snippet(Config Setting)
  - Build -> Cloud Firestore -> Start in test mode
  - Authentication -> Get Started -> Sign-in method -> Enable Google Sign-in
  - Cloud Firestore -> Rules -> Delete: :if request.time < timestamp.date(2021, 3, 15);

 o firebase.js boilerplate
  - const firebaseConfig = { ... }
  - const firebaseApp = firebase.initializeApp(firebaseConfig);
  - const db = firebaseApp.firestore();
  - const auth = firebase.auth();
  - const provider = new firebase.auth.GoogleAuthProvider();
  - export { auth, provider };
  - export default db;

 o Setup React App
  - npx create-react-app discord-clone --template redux
  - npm i @material-ui/core
  - npm i @material-ui/icons
  - npm i firebase

 o Firebase Deploy
  - firebase init
  - Hosting -> Spacebar
  - Select Existing Project
  - build
  - -y
  - npm run build && firebase deploy

css
 material-ui muginicvna sosmething targeting
 flex 0.0 12k3p1 something
 he said in professional bootstrap is not the way to go WAT GOOD!


why did I like that server, because I felt like I was getting upgrades
and progressing