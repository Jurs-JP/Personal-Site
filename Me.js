// const buttons = document.querySelectorAll("button");
// const allDivs = document.querySelectorAll("div");
// const allSections = document.querySelectorAll("section");
// const allMain = document.querySelectorAll("main");



// var tagArray = [buttons, allDivs, allSections, allMain];

// var borders = () => {

// for(var z = 0; z < tagArray.length; z++) {

//         for(var i = 0; i <tagArray[z].length; i++) {
//             tagArray[z][i].style.border = "1px solid green";
//             tagArray[z][i].style.boxSizing = "border-box";
//         }
//     }
    
// }

// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// var projectTitles = [];
// var projectTags = [];

// var projectObj = {
//     project01: {
//         title: "???",
//         tag: "Esports",
//         addTitle() {
//             projectTitles.push(this.title)
//         }
//     },
//     project02: {
//         title: "???",
//         tag: "Math",
//         addTitle() {
//             projectTitles.push(this.title)
//         }
//     },
//     project03: {
//         title: "3d Dimensions",
//         tag: "Animation",
//         addTitle() {
//             projectTitles.push(this.title)
//         }  
//     }
// }

// projectObj.project01.addTitle();
// projectObj.project02.addTitle();
// projectObj.project03.addTitle();




// const projBoxes = document.getElementById("projectBox2");
// var projDivs = "";

// for(var i =0;i < projectTitles.length; i++) {
//     if(projectTitles.length <= 3) {
//         projDivs += '<div id="projectBoxes"></div>';
//     }
// }

// projBoxes.innerHTML = projDivs;




  window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v15.0'
    });
  };
  
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));