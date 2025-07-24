// const nama = ['haykal','budi','tono','fulana'];
// for(let i = 0; i < nama.length; i++){
//     console.log(i ,nama[i])
// }

// const { response } = require("express");

// const pilihan = 'abcd'
// for(let i = 1 ; i <= 5; i ++){
//     console.log(`${i} soal nomer ${i}`)
//     for(let k = 0; k < pilihan.length; k ++){
//         console.log(`${pilihan[k]}. pilihan jawaban`);
//     }
// }

// const siswa = [
//     ['haykal','reynal','marsel','denil'],
//     ['dita','nadin','nasywa','nayfa'],
//     ['tonggos','genjor','matalima','keriting'],
// ];

// for(let orang of siswa){
//     for(let pergoking of orang){
//     console.log(pergoking);
//     }
// }

// for(let i = 0; i < siswa.length; i ++){
//     let pergoking = siswa[i];
//     console.log(`anggota ${i + 1}`);
//     for(let j = 0; j < pergoking.length; j ++){
//         console.log(` ${pergoking[j]}`);
//     }
// }

// const PASSWORD = 'Pass1234';
// let isi = prompt('enter the password');
// while(isi !== PASSWORD){
//     isi = prompt('password failed');
// }
// alert('password true')

// const password = prompt('letakan password');
//     while(true){
//         password = prompt(password);
//         if(password === 'stop')break;
//     }

// function jumlahkan(a,b,c){
//     const total = a+b+c;
//     console.log(total)
// }

// function angka() {
//   let penjumlahan = Math.random() + 1;
//   console.log(penjumlahan[i]);
// }

// function contoh(func) {
//   func();
//   func();
//   func();
// }

// const noAbsen = [1,2,3,4,5,6];

// noAbsen.forEach(function(jumlah){
//   if(jumlah % 2 === 0){
//     console.log(jumlah);
//   }
// })

// const hasil = noAbsen.map(function(n){
//   return n*3;
// })
// console.log('hallo')

//  setTimeout (() => {
//     console.log('hallo siapa nama mu');
// },3000 );

// const interval = setInterval (() => {
//     for(let i = 0; i < 3; i++){
//         console.log(Math.random())
// }
// },3000)

// function penjumlahan(s1 = 4,s2){
//     return s1 + s2
// }

// const harga = {
//     sepatu : 'kanky',
//     harga : 200000,
// }
// console.log(...harga.sepatu)

// function halo(){
//     const angka =[1,2,3,4,5];
//     return angka;
// }

// function nama(){
//     const masuk =['ahmad','haykal'];
//     return masuk
// }

// const campuran = [...halo(),...nama()]

// function banyak(...angka){
//     return angka + 1
// }

// function hello(name) {

//   if (name === "") {
//     return "Hello, World!";
//   } else
//   return ` Hello, ${name}!`;
// }

// function warna (r, g, b) {
//   const color = {};

//   color.r = r;
//   color.g = g;
//   color.b = b;

//   color.rgb = () => {
//     const { r, g, b } = this;
//     return `${r},${g},${b}`;
//   };

//   return color

// class Color{
//   constructor(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
//   }

//   innerRGB(){
//     const {r,g,b} = this;
//     return `${r},${g},${b}`;
//   }

// }

// const perkalian = (x,y) => x*y;

// const akar = (x) => perkalian(x,x);

// const pythagoras = (a,b,c) => {
//     return akar(a) + akar(b) === akar(c);
// };

// pythagoras(3,4,5);

// console.log('pertama');
// setTimeout(() =>{
//     console.log('ini ketiga');
// },3000)
// console.log('ini kedua')

// const mantab = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("failed");
//       } else {
//         resolve(`success: ${url} (${delay}ms)`);
//       }
//     }, delay);
//   });
// };

// mantab("movie.con")
//   .then((result) => {
//     console.log("page 1");
//     console.log(result);
//     return mantab("movie.com");
//   })

//   .then((result) => {
//     console.log("page 2");
//     console.log(result);
//     return mantab("movie.com");
//   })

//   .then((result) => {
//     console.log("page 3");
//     console.log(result);
//     return mantab("movie.com");
//   })

//   .catch((error) => {
//     console.log("error", error);
//   });

// const colorBackground = (color,delay) => {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     });
// };

// colorBackground('red',1000)
//     .then(() => colorBackground('yellow', 1000))
//     .then(() => colorBackground('orange', 1000))
//     .then(() => colorBackground('green', 1000))
//     .then(() => colorBackground('blue', 1000))
//     .then(() => colorBackground('purple', 1000))

// Fungsi untuk mengambil data dari API
// async function fetchData() {
//   try {
//     const response = await fetch('kamu keren banget');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Gagal mengambil data:', error);
//     throw error;
//   }
// }

// // Fungsi untuk menampilkan data kepada pengguna
// function displayData(data) {
//   // Logika untuk menampilkan data ke dalam elemen HTML
//   console.log('Data yang diterima:', data);
// }

// // Fungsi utama untuk mengambil data dan menampilkannya
// async function main() {
//   try {
//     // Menunggu data dari API
//     const data = await fetchData();

//     // Setelah data diterima, menampilkan data kepada pengguna
//     displayData(data);
//   } catch (error) {
//     // Menangani kesalahan jika gagal mengambil data
//     console.error('Terjadi kesalahan:', error);
//   }
// }

// // Memanggil fungsi utama untuk memulai proses
// main();


