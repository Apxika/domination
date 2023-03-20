
function strikeThrough() {
    let newItem = document.querySelector('li')
    newItem.style.textDecoration = "line-through"
}

strikeThrough()

function addImage(id, url) {
    let image = document.querySelector(id)
    image.src = url
}

addImage("#image-1", "https://destiny.wiki.gallery/images/thumb/9/9a/Destiny-Witch-Queen-Mara.jpg/290px-Destiny-Witch-Queen-Mara.jpg")
addImage('#image-2', 'http://pm1.narvii.com/6059/4b603c414676f317b48140ae4210ead82549b78e_00.jpg')
addImage('#image-3', 'https://i.pinimg.com/originals/36/5b/ae/365baefebed96107b34ee5e30a6a9d15.jpg')

function removeElement() {
    let firstLi = document.querySelector('li')
    firstLi.remove()
}

removeElement()
removeElement()

function changeSize(fontSize, id) {
    let x = document.querySelector(id)
    x.style.fontSize = fontSize
}

changeSize("100px", "#thing-1")

let Image4 = document.querySelector('img')

function addDOM(x){
    let newDOM = document.querySelector(x)
    newDOM.appendChild("ul")
}

addDOM(Image4)

function image30(img) {
    img.style.height = "200px"
}

let myImg = document.querySelector("#image-3")
let myImg2 = document.querySelector("#image-2")

image30(myImg)
image30(myImg2)

function inviz(x){
    let item = document.querySelector(x)
    item.className = "invisible"
}

inviz("li")

function addText(x){
    let newText = document.createElement("li")
    newText.innerText = text
    return newText
}

let newItem1 = addText("new text is here")

function createHeader(headerSize, text){
    let newHeader = document.createElement("h" + headerSize)
    newHeader.innerText = text
    return newHeader
}

let header1 = createHeader("6", "header test")
arguments.appendChild(header1)

