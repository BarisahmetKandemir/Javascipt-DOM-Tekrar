// FETCH API

// function fetchResponse() {
//     fetch("AJAX.txt")
//     .then(response => response.text())
//     .then(text => console.log(text))
//     .catch(err => console.log(err))
// }
// fetchResponse();

// function getJSONfile(){
//     fetch("ajax.json")
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))
// }
// getJSONfile();
// JSON place Holder



// GET TALEBİ ( veri alma )

// class Request {
//     get(url){
//         fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
//     }
// }
// const request = new Request()
// request.get("https://jsonplaceholder.typicode.com/albums")

// class Request {
//     get(url){
//         return new Promise((resolve, reject) => {
//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => resolve(data))
//                 .catch(err => reject(err));
//         });
//     }
// }
// const request5 = new Request();
// request5.get("https://jsonplaceholder.typicode.com/albums")
//     .then(data => console.log(data))
//     .catch(err => console.error(err));


 
// //  ASYNC VE AWAİT FONKSİYONLARI

// class Request1 {
//     async get(url){
//         const response = await fetch(url)
//         const data = await response.json()
//         return data;
//     }
// }
// const request2 = new Request1();
// let albums;
// request2.get("https://jsonplaceholder.typicode.com/albums")
// .then(data => console.log(data))
// .catch(err =>  console.log(err))



// // POST REQUEST (VERİ YOLLLAMA)

// class Request {
//     post(url, data) {
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: "POST",
//                 // kullandığımız metodu belirtmeliyiz
//                 body: JSON.stringify(data),
//                 // gönderdiğimiz json verisini dönüştürmemiz gerekiyoor
//                 headers: {
//                     "Content-type": "application/json;charset=UTF-8"
//                 }
//                 // gönderdiğimiz datanın tipini ve karakter setini belirtiyoruz(charset=UTF-8)
//             })
//                 .then(response => response.json())
//                 // json şeklinde gelen veriyi dönüştürme
//                 .then(data => resolve(data))
//                 // resolve ile gönderme sebebimiz altta veriyi çekebilmek
//                 .catch(err => reject(err))
//         })
//     }
// }
// const request = new Request();
// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Thriller" })
// // postun içinde 2 tane veri tutuyoruz post(nereye yollayacağımız ,neyi yollayacağımız)
// .then(x => console.log(x))
// .catch(err => console.log(err))

//POSTU ASYNC OLARAK KURGULAMA
// class Request2 {
//     async post(url,data){
//         const response = await fetch(url,{
//             method: "POST",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-type":"application/json;charset=UTF-8"
//             }
//         })
//         const responseData = await response.json()
//         return responseData;
//     }
// }
// const request3 = new Request2();
// request3.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Thriller" })
// .then(dataResponse => console.log(dataResponse))
// .catch(err => console.log(err))

// // Örnek ben yaptım
// class Request3 {
//     async post(url,data){
//        const barış = await fetch(url,{
//            method:"POST",
//            body: JSON.stringify(data),
//            headers:  {
//             "Content-type":"application/json;charset=UTF-8"
//         }
//        })
//        const ahmet = await barış.json();
//        return ahmet
//     }
// }
// const request4 = new Request3();
// request4.post("https://jsonplaceholder.typicode.com/photos" , {baışID:14, title:"Kandemir"})
// .then(x => console.log(x))
// .catch(err => console.log(err))



// PUT REQUEST (GÜNCELLEME MEVCUT OLAN İÇERİĞİ SİLER-ÜZERİNE EKLEME YAPAR)

// class Request4 {
//     put(url, data) {
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: "PUT",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json;charset=UTF-8"
//                 }
//             })
//             .then(response => response.json())
//             .then(data => resolve(data))
//             .catch(err => reject(err))
//         });
//     }
// }

// const request6 = new Request4();
// request6.put("https://jsonplaceholder.typicode.com/albums/8", { userId: 1, title: "Thriller" })
//     .then(album => console.log(album))
//     .catch(err => console.log(err));


// // PATCH REQUEST (GÜNCELLEME YAPAR-ESKİ VERİLER KALIR YENİ VERİLER EKLER-ESKİ-VERİLERİ KORUR)

// class Request5 {
//     put(url, data) {
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: "PATCH",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json;charset=UTF-8"
//                 }
//             })
//             .then(response => response.json())
//             .then(data => resolve(data))
//             .catch(err => reject(err))
//         });
//     }
// }

// const request7 = new Request5();
// request7.put("https://jsonplaceholder.typicode.com/albums/8", { userId: 1, name: "Thriller" })
//     .then(album => console.log(album))
//     .catch(err => console.log(err));


// ASYNC OLARAK PUT YAZMA

// class Request6 {
//     async put(url,data) {
//         const response = await fetch(url,{
//             method: "PUT",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-type" : "application/json;charset=UTF-8"
//             }
//         })
//         const responseData = await response.json()
//         return responseData
//     }
// }
// const request8 = new Request6();
// request8.put("https://jsonplaceholder.typicode.com/albums/8", { userId: 1, name: "Thriller"})
// .then(data => console.log(data))
// .catch(err => console.log(err))



// DELETE REQUEST

class Request7 {
    delete(url){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method:"DELETE",
            })
            .then(()=>resolve("Veri silme işlemi başarılı"))
            .catch(err => console.log(err))
        })
    }
}
const request9 = new Request7();
request9.delete("https://jsonplaceholder.typicode.com/albums/8")
.then(message => console.log(message))
.catch(err => console.log(err))




