function upDate(element){
    //let img = document.createElement("IMG");
    //img.src = "/img/" + element;
    document.getElementById('image').src = element;
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