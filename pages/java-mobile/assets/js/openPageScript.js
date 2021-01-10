function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  //  elmnt.style.borderRight = 0;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
    
  }

/***************************** MY CODE ************************************/
function changeColorByTag(tagName,color){
  var x = document.getElementsByTagName(tagName);
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.color = color;
  }
}

function changeColorByClass(id,color){
  var x = document.getElementsByClassName(id);
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.color = color;
  }
}
  
function changeBgColorByClass(id,color){
  var x = document.getElementsByClassName(id);
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = color;
  }
}
  
function changeColorById(id,color){
  var x = document.getElementById(id);
    x.style.color = color;
}

  function changeBgColorById(id,color){
      var x = document.getElementById(id);
      x.style.backgroundColor = color;
  }


function dark() {
    document.body.style.background = '#1e1e1e';
    changeColorById("w1","#d0d0d0");
    changeColorById("w2","#d0d0d0");
    changeColorByTag("h2","#d0d0d0");
    changeColorByTag("p","#e1e1e1");
    changeColorByClass("lesson-tab","#d0d0d0");
    changeBgColorByClass("lesson-name","#111111");
    changeBgColorByClass("lesson-tab","#1e1e1e");
    changeBgColorByClass("site-main","#1e1e1e");
    changeBgColorByClass("skrollr","#1e1e1e");
    changeBgColorByClass("site-header","#1e1e1e");
}

function light() {
    document.body.style.background = '#e1e1e1';
    changeColorById("w1","#1e1e1e");
    changeColorById("w2","#1e1e1e");
    changeColorByTag("h2", "#1e1e1e");
    changeColorByTag("p","#1e1e1e");
    changeColorByClass("lesson-tab","#1e1e1e");
    changeBgColorByClass("lesson-name","#d0d0d0");
    changeBgColorByClass("lesson-tab","#e1e1e1");
    changeBgColorByClass("site-main","#e1e1e1");
    changeBgColorByClass("skrollr","#e1e1e1");
    changeBgColorByClass("site-header","#e1e1e1");
}