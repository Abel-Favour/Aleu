let codesP=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"[","]","0","9","8","7","6","5","4","3","2","1","!","@","#","$","$","%","^","&","*","(",")","-","+" ]
let realPa=document.querySelector("#passrel")
let reala=document.querySelector("#parel")

function createPa(){
    let eachPs= Math.floor(Math.random()*codesP.length)
    let eachP= Math.floor(Math.random()*codesP.length)
    let eact= Math.floor(Math.random()*codesP.length)
    let eak= Math.floor(Math.random()*codesP.length)
    let ea= Math.floor(Math.random()*codesP.length)
    let e= Math.floor(Math.random()*codesP.length)
    let khP= Math.floor(Math.random()*codesP.length)
    let chP= Math.floor(Math.random()*codesP.length)
    let hP= Math.floor(Math.random()*codesP.length)
    let P= Math.floor(Math.random()*codesP.length)
    let h= Math.floor(Math.random()*codesP.length)
    let t= Math.floor(Math.random()*codesP.length)

  realPa.textContent=codesP[eachPs]+codesP[eachP]+codesP[eact]+codesP[eak]
  +codesP[ea]+codesP[e]+codesP[khP]+codesP[chP]+codesP[hP]+
  codesP[P]+codesP[h]+codesP[t]

  reala.textContent=realPa.textContent
}

