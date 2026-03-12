// إعدادات Firebase الخاصة بمشروعك
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
};

// تشغيل Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const visitCountRef = database.ref('online_users');

// زيادة العداد عند الدخول ونقصه عند الخروج
const userRef = visitCountRef.push();
userRef.set(true);
userRef.onDisconnect().remove();

// تحديث الرقم في الصفحة تلقائياً عند أي تغيير
visitCountRef.on('value', (snapshot) => {
    const count = snapshot.numChildren();
    document.getElementById('online-count').innerText = count;
});