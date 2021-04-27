function upDate(element){
    let img = document.createElement("IMG");
    img.src = "/img/" + element;
    //document.getElementById('image').innerHTML = element.img;
    document.getElementById('image').appendChild(img);
  }
  function unDo(){
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
  }
  function openFunction(){
    el = document.getElementById("content");
    el.style.display = "block";
  }
  function closeFunction(){
    el = document.getElementById("content");
    el.style.display = "none";
  }