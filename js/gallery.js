function upDate(element){
    //let img = document.createElement("IMG");
    //img.src = "/img/" + element;
    let imgsrc = document.getElementsByClassName('preview').getAttribute('src')
    console.log(imgsrc)
    document.getElementById('image').innerHTML = imgsrc;
    //document.getElementById('image').src = img;
  }
  function unDo(){
    document.getElementById('image').innerHTML = " ";
  }
  function openFunction(){
    el = document.getElementById("content");
    el.style.display = "block";
  }
  function closeFunction(){
    el = document.getElementById("content");
    el.style.display = "none";
  }