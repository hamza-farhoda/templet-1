// function makeIUtred(e) {
//   e.target.style.color = "red";
// }
// let p = document.querySelector(".test");
// p.addEventListener("click", makeIUtred);
// function ianmAcallback() {
//   console.log("sdjshfgecfdqwdwenbehf");
// }
// setTimeout(ianmAcallback, 2000);
// setTimeout(() => {
//   console.log("reset photo");
//   setTimeout(() => {
//     console.log("add to the photo");
//     setTimeout(() => {
//       console.log("add loge to the photo");
//     }, 3000);
//   }, 2000);
// }, 1000);
// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("connection Established");
//   } else {
//     rejectFunction("Comection falide");
//   }
// })
//   .then(
//     (n) => console.log(` Good ${n}`)
//     // (m) => console.log(`Bad ${m}`)
//   )
//   .catch((m) => console.log(`Bad ${m}`));
// console.log(myPromise);
// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   let b = ["m", "h", "g"];
//   if (connect) {
//     resolveFunction(b);
//   } else {
//     rejectFunction(Error("Comection falide"));
//   }
// });
// console.log(myPromise);

// myPromise
//   .then((x) => {
//     x.length = 2;
//     console.log(x.length);
//     return x;
//   })
//   .then((x) => {
//     x.length = 1;
//     return x;
//   })
//   .then((x) => {
//     console.log(`the choosen Empluee ${x}`);
//   })
//   .catch((b) => {
//     console.log(b);
//   })
// //   .finally(console.log("ggggggggg"));
// function getData() {
//   return new Promise((resolve, reject) => {
//     let uesers = ["osama"];
//     if (uesers.length > 0) {
//       resolve("ueser found");
//     } else {
//       reject("on users found");
//     }
//   });
// }
// getData().then(
//   (n) => {
//     console.log(n);
//   },
//   (m) => {
//     console.log(m);
//   }
// );
// function getData() {
//   let uesers = [];
//   if (uesers.length > 0) {
//     return Promise.resolve("Users found");
//   } else {
//     return Promise.reject("no users found");
//   }
// }
// getData().then(
//   (n) => {
//     console.log(n);
//   },
//   (m) => {
//     console.log(m);
//   }
// );
async function getData() {
  let uesers = [""];
  if (uesers.length >= 0) {
    return "ueserfound";
  } else {
    throw new Error("no found users");
  }
}
getData().then(
  (n) => {
    console.log(n);
  },
  (m) => {
    console.log(m);
  }
);
console.log(getData());
