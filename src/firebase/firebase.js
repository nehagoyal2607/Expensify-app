import * as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  };

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};



// //child remove
// database.ref('expenses').on('child_removed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val());
// })

// //child update
// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// })

// //child added
// database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot)=>{
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses);
//   })

//   database.ref('expenses')
//   .on('value', (snapshot)=>{
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses);
//   })

// database.ref('expenses').push({
//     description : 'WaterBill',
//     note: '',
//     amount: '1233',
//     createdAt: 12346
// })


// database.ref('notes').push({
//     title: 'second',
//     body: 'body2'
// })

// const notes = [{
//     id:'123',
//     title:'First',
//     body: 'Body1'
// },
// {
//     id:'456',
//     title:'Second',
//     body: 'Body2'
// }];

// database.ref('notes').set(notes);


// database.ref().on('value', (snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.role} at ${val.location.city}`)
// })

// const onValueChange = database.ref()
//   .on('value', (snapshot)=>{
//       console.log(snapshot.val());
//   }, (e)=>{
//       console.log('Error ', e);
//   })

// setTimeout(()=>{
//     database.ref('age').set(29);
// },3500)

// setTimeout(()=>{
//     database.ref().off(onValueChange);
// },7000)

// setTimeout(()=>{
//     database.ref('age').set(20);
// },10500)

// database.ref('location')
//   .once('value')
//   .then((snapshot)=>{
//       const val = snapshot.val();
//       console.log(val);
//   })
//   .catch((e)=>{
//       console.log('Error fetching data ', e);
//   })

// database.ref().set({
//     name : 'Neha',
//     age: 26,
//     location : {
//         city : 'Delhi',
//         country : 'India'
//     }
// }).then(()=>{
//     console.log('Data is saved.');
// }).catch((e)=>{
//     console.log('This is the error: ', e);
// })
// database.ref('age').set(34);

// database.ref('attributes').set({
//     height:12,
//     weight:89
// })

// database.ref('age').set(26)

// database.ref('age')
//     .remove()
//     .then(()=>{
//         console.log("Data was removed");
//     }).catch((e)=>{
//         console.log("Did not remove data ", e);
//     })

// database.ref().update({
//     name:'Tanishka',
//     age:18,
//     role:'student',
//     'location/city': 'Mumbai'
// })