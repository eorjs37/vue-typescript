// importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js");

importScripts("https://www.gstatic.com/firebasejs/10.5.2/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/10.5.2/firebase-messaging-compat.js")

firebase.initializeApp({
  apiKey: "AIzaSyBaXYPHexb32vmjW-Xj-N2oIn4N4TClBz4",
  authDomain: "webpush-a5e3f.firebaseapp.com",
  projectId: "webpush-a5e3f",
  storageBucket: "webpush-a5e3f.appspot.com",
  messagingSenderId: "180140771495",
  appId: "1:180140771495:web:465246b4183bd23f6b3382",
  measurementId: "G-Y3BB9P587V"
})

const messaging = firebase.messaging();

messaging.onMessage((payload)=>{
  console.log(payload);
})

messaging.onBackgroundMessage((payload)=>{
  console.log(payload);
  const notification = payload.notification;

  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    notification
  );

  //   const notificationTitle = notification.title;
  //   const notificationOptions = {
  //     body: notification.body,
  //     icon:"/images/icon/logo.png"
  //   }

//   self.registration.showNotification(notificationTitle,notificationOptions)
})
