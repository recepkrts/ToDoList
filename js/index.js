function newElement() {
    var inputValue = document.getElementById("task").value.trim();
    if (inputValue === "") {
      showErrorToast(); //input value değeri boş ise bu fonksiyonu çalıştırır
    } else {
      var li = document.createElement("LI");
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      document.getElementById("list").appendChild(li); 
      document.getElementById("task").value = "";
  
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
  
      span.onclick = function() { // span öğesine tıklanma fonksiyonu
        var div = this.parentElement;
        div.style.display = "none";
      };
  
      li.onclick = function() { // li öğesine tıklanma fonksiyonu
        this.classList.toggle("checked"); 
      };
  
      showSuccessToast();
    }
  }
  
  function showSuccessToast() {
    var toast = document.getElementById("liveToast");
    toast.classList.remove("hide"); 
    toast.classList.add("show");
    setTimeout(function() {
      toast.classList.remove("show");
      toast.classList.add("hide");
    }, 4000); 
  }
  
  function showErrorToast() {
    var toast = document.getElementById("liveToastError"); 
    toast.classList.remove("hide");
    toast.classList.add("show");
    setTimeout(function() {
      toast.classList.remove("show");
      toast.classList.add("hide");
    }, 4000); 
  }
  
  var myNodelist = document.getElementsByTagName("LI"); 
  for (var i = 0; i < myNodelist.length; i++) { 
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
  
  var close = document.getElementsByClassName("close"); 
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement; 
      div.style.display = "none";
    };
  }
  
  var list = document.querySelector("ul");
  list.addEventListener("click", function(ev) { 
    if (ev.target.tagName === "LI") { 
      ev.target.classList.toggle("checked");
    }
  }, false);