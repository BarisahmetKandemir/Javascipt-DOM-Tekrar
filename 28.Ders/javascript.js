// // // Tag lere erişim yöntemleri

// // let myTitle = document.getElementById("head").innerHTML
// // console.log(myTitle)

// // let myTitle2 = document.getElementById("head").firstChild.nodeValue
// // console.log(myTitle2)

// // let myTitle3 = document.getElementById("head").childNodes[0].nodeValue
// // console.log(myTitle3)

// // console.log(document.head.innerHTML)
// // console.log(document.body.innerHTML)
// // console.log(document.documentElement.innerHTML)
// // console.log(document.getElementById("head").nodeName)
// // // Nodename tagin adını yazar




// // // Create Nodes(Oluşturma)(En sona oluşturur)

// // const para = document.createElement("p")
// // const node = document.createTextNode("This is new")
// // para.appendChild(node)
// // const element = document.getElementById("div1")
// // // element.appendChild(para)
// // console.log(document.body.innerHTML)
// // const child = document.getElementById("p1");
// // element.insertBefore(para , child)
// // para.innerHTML = "New item changed"
// // para.setAttribute("id","p4")
// // // setAttribute ali yeni tage attribute ekleyebiliyoruz.ÖR:id,value,index
// // child.remove()

// // const child2 = document.getElementById("p2")
// // element.replaceChild(para , child2)
// // // replaceChild bir tagi başka bir tagin yerine koyar.(ilk değer yerine koyacağımız değer,yerine geçecek değer)
// // console.log(document.body.innerHTML)
// // // AppendChild en sona ekle insertBefore seçilen elementin önüne yerleştirir.



// // Node List

// const myNodeList = document.querySelectorAll("p")
// console.log(myNodeList)

// const myNodeList2 = document.querySelector("#p1")
// console.log(myNodeList2)



// // Sibling(Kardeşlik)
// const myNode = document.querySelector("#p2")
// const next = myNode.nextElementSibling.innerHTML
// console.log(next)

// const previous = myNode.previousElementSibling.innerHTML
// console.log(next)

// const parent = myNode.parentNode.innerHTML
// console.log(parent)

// const point = myNode.parentNode.previousElementSibling.previousElementSibling.innerHTML
// console.log(point)





// // Storage_apı

// // Local kapattığında silinir Session kapattığında silinir.

// localStorage.setItem("name" , ["Barış Ahmet Kandemir"])
// const item = localStorage.getItem("name")
// console.log(item)
// // setItem eleman ekler getItem kaydedilen elemanı almamızı sağlar.

// //Problem 1 = Localstorage string kaydı yapar.
// // Problem2 = Üzerrine yazar önceki elemanı siler.

// const name = ["ahmet" , "mustafa"]
// localStorage.setItem("name",JSON.stringify(name))
// const item2 = JSON.parse(localStorage.getItem("name")) 
// console.log(item2)

// const name1 = ["Barış","Ahmet"]
// localStorage.setItem("name",JSON.stringify(name1))
// const item3 = JSON.parse(localStorage.getItem("name"))
// console.log(item3)
// const name2 = [...JSON.parse(localStorage.getItem("name")),"Mahmut","Ayşe"]
// localStorage.setItem("name",JSON.stringify(name2))

// LocalStorage.removeItem("name") Silmeye yarar.




 // AJAX

const xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    // Yüklendiğinde yapılması gerekn söylenir.
    document.getElementById("demo").innerHTML = JSON.parse(this.responseText).name
    console.log(JSON.parse(this.responseText))
}
xhttp.open("GET","ajax.json")
xhttp.send()


const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    console.log(this.readyState)
    console.log(this.status)
}
xhttp.onload = function(){
    document.getElementById("demo").innerHTML = this.responseText
    console.log(this)
}
xhttp.open("GET","ajax.txt")
xhttp.send()








