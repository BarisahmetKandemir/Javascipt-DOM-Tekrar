// // Using events

// function chanceColor(){
//     let x =document.getElementById("id1").style.color = "red"
// }


// function hide(){
//     let x = document.getElementById("p2").style.visibility = "hidden"
// }
// function show(){
//     let x = document.getElementById("p2").style.visibility = "visible"
// }


// function chanceText(id){
//     id.innerHTML = "Ooooops"
// }

// // On Chance Event

// function upperCase(){
//     const x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
// }


// function mOver(obj){
//      obj.innerHTML = "Thank You"
//      obj.style.backgroundColor = "blue"
//      obj.style.color = "white"
// }
// function mOut(obj){
//     obj.innerHTML = "Mouse Over Me"
//     obj.style.backgroundColor = "red"
//     obj.style.color = "black"
// }


// // document.getElementById("myBtn").addEventListener("click" , 
// // function(){
// //     alert("Hello World")
// // })

// let x = document.getElementById("myBtn")
// x.addEventListener("mouseover" , myFunction)
// x.addEventListener("click" , mySecondFunction)
// x.addEventListener("mouseout" , myThird)

// function myFunction(){
//     document.getElementById("demo").innerHTML += "Moused over"
// }
// function mySecondFunction(){
//     document.getElementById("demo").innerHTML += "Clicked"
// }
// function myThird(){
//     document.getElementById("demo").innerHTML += "Mouse out"
// }
// // addEventListener nesnelere olay dinleyici ekler, eklenen olay tetiklendiğinde çalışması beklenen fonksiyonu çalıştırır. Bu metodu kullanıcı etkileşimlerinden sonra yapacağımız işlemler için kullanırız.


// // Bubbling-Capturing
// // Bubbuling de en içteki öğede öncelik vardır
// // Capturng de en dıştaki öğede öncelik vardır
// // False Bubbuling    True Capturing olur.

// // Bubbuling
// document.getElementById("myP1").addEventListener("click" , 
// function(){
//     alert("myP1")
// },false)
// document.getElementById("div1").addEventListener("click",
// function(){
//     alert("my Div1")
// },false)
// // Capturing
// document.getElementById("myP2").addEventListener("click" , 
// function(){
//     alert("myP2")
// },true)
// document.getElementById("div2").addEventListener("click",
// function(){
//     alert("my Div2")
// },true)


// Removehalder

document.getElementById("myDiv").addEventListener("mousemove" , myFunction)
function myFunction(){
    document.getElementById("demo1").innerHTML = Math.random()
}
function removeHandler(){
    document.getElementById("myDiv").removeEventListener("mousemove",myFunction)
}




