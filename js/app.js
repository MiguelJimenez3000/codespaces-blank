
// if (sessionStorage.StoreBoothName === "NAS_Storyboard"){
//     // document.getElementById("selectBooth").value("NAS_Storyboard")
//   $("#selectBooth").val("NAS_Storyboard");
//  storyboardData();

// }


document.addEventListener('DOMContentLoaded', function(){
    var chatWindow = document.querySelector('.mainBoothWrapper');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });


gsap.config({
    nullTargetWarn: false
})

// Opens Modal
function openTab(){
    const tlOpen = gsap.timeline({immediateRender: true});
    tlOpen.to("#close", {display: "block", opacity: "1"})
          .to(".infoWrapper", {duration: .5, ease: "back.out(.9)", y: -500, display: 'block', opacity: "1"}, 0)
          .to(".mainBoothWrapper", {duration: .5, ease: "back.out(.9)", height : "49vh"}, 0)
          .to('.infoWrapper', {duration: .3, scrollTop: 0}, 0.5);
}
  

// This closes the pop up modal
// function closeTab(){
//     const tlClose = gsap.timeline({immediateRender: true});
//     tlClose.to(".mainBoothWrapper", {duration: .5, ease: "back.out(.9)", height : "100vh"}, 0)
//            .to(".infoWrapper", {duration: .5, ease: "back.out(.9)", y: 0, display: 'none', opacity: "0",}, 0)
//            .to("#close", {display: "none", opacity: "0"}, 0);
//            tabIsOpen = false;
// }
function closeTab(){
  if (!iconClicked) { // only run if an icon was not clicked
    const tlClose = gsap.timeline({immediateRender: true});
    tlClose.to(".mainBoothWrapper", {duration: .5, ease: "back.out(.9)", height : "100vh"}, 0)
           .to(".infoWrapper", {duration: .5, ease: "back.out(.9)", y: 0, display: 'none', opacity: "0",}, 0)
           .to("#close", {display: "none", opacity: "0"}, 0);
           tabIsOpen = false;
  }
}

let tabIsOpen = false;

function getInfo(boothID){
  // gets the ID of the selected booth from dropdown
   let boothName = document.getElementById("selectBooth").value;
   iconClicked = false;
  
    if (boothName === "NAS_Storyboard" || boothID === "NAS_Storyboard"){
      if (!tabIsOpen) {
        openTab();
        tabIsOpen = true;
      }
       setData(storyboard);
        scrollToElement("NAS_Storyboard");
        
    }else if( boothName ==="MMAC" || boothID === "MMAC"){
      if (!tabIsOpen) {
        openTab();
        tabIsOpen = true;
      }
     setData(MMAC);
      scrollToElement("MMAC");
  }  
      else if( boothName ==="AI_ML" || boothID === "AI_ML"){
        if (!tabIsOpen) {
          openTab();
          tabIsOpen = true;
        }
      setData(AIML);
        scrollToElement("AI_ML");
    } 
    else if( boothName ==="Aviation_Research" || boothID === "Aviation_Research"){
      if (!tabIsOpen) {
        openTab();
        tabIsOpen = true;
      }
      setData(aviationResearch);
      scrollToElement("Aviation_Research");
  }
  else if( boothName ==="Cybersecurity" || boothID === "Cybersecurity"){
    if (!tabIsOpen) {
      openTab();
      tabIsOpen = true;
    }
    setData(Cybersecurity);
    scrollToElement("Cybersecurity");
}
  else if( boothName ==="DSS" || boothID === "DSS"){
    if (!tabIsOpen) {
      openTab();
      tabIsOpen = true;
    }
                setData(DSS);
                scrollToElement("DSS");
    }  else if( boothName ==="Human_Factor" || boothID === "Human_Factor"){
      if (!tabIsOpen) {
        openTab();
        tabIsOpen = true;
      }
                setData(HumanFactor);
                scrollToElement("Human_Factor");
  }else if( boothName ==="ICN" || boothID === "ICN"){
    if (!tabIsOpen) {
      openTab();
      tabIsOpen = true;
    }
                setData(ICN);
                scrollToElement("ICN");
}else if( boothName ==="MITRE" || boothID === "MITRE"){
  if (!tabIsOpen) {
    openTab();
    tabIsOpen = true;
  }
                setData(MITRE);
                scrollToElement("MITRE");
}else if( boothName ==="NAS_Monitoring_Team" || boothID === "NAS_Monitoring_Team"){
  if (!tabIsOpen) {
    openTab();
    tabIsOpen = true;
  }
                setData(monitoring);
                scrollToElement("NAS_Monitoring_Team");
    }
    else if( boothName ==="NASA-1" || boothID === "NASA-1"){
      if (!tabIsOpen) {
        openTab();
        tabIsOpen = true;
      }
                setData(NASAOne);
                scrollToElement("NASA-1");
    }else if( boothName ==="NASA-2" || boothID === "NASA-2"){
      if (!tabIsOpen) {
        openTab();
        tabIsOpen = true;
      }
                setData(NASATwo);
                scrollToElement("NASA-2");
    }else if( boothName ==="NASA-3" || boothID === "NASA-3"){
      if (!tabIsOpen) {
        openTab();
        tabIsOpen = true;
      }
                setData(NASAThree);
                scrollToElement("NASA-3");
    }
    else if( boothName ==="Rotorcraft" || boothID === "Rotorcraft"){
      if (!tabIsOpen) {
        openTab();
        tabIsOpen = true;
      }
                setData(Rotorcraft);
                scrollToElement("Rotorcraft");
    } else if( boothName ==="Satellite" || boothID === "Satellite"){
      if (!tabIsOpen) {
        openTab();
        tabIsOpen = true;
      }
                setData(Satellite);
                scrollToElement("Satellite");
    }else if( boothName ==="van" || boothID === "van"){
      if (!tabIsOpen) {
        openTab();
        tabIsOpen = true;
      }
                setData(van);
                scrollToElement("van");
  }else if( boothName ==="TBFM" || boothID === "TBFM"){
    if (!tabIsOpen) {
      openTab();
      tabIsOpen = true;
    }
                setData(TBFM);
                scrollToElement("TBFM");
  }else if( boothName ==="Lighting" || boothID === "Lighting"){
    if (!tabIsOpen) {
      openTab();
      tabIsOpen = true;
    }
                setData(Lighting);
                scrollToElement("Lighting");
}
    
}


function setData(obj) {
  // Clear previous data
  document.getElementById('boothName').innerHTML = '';
  document.getElementById('description').innerHTML = '';
  document.getElementById('ttt').innerHTML = '';
  document.getElementById('tttTime').innerHTML = '';
  document.getElementById('linkHead').innerHTML = '';
  document.getElementById('StoryboardLink').innerHTML = '';
  

  for (let prop in obj) {
    if (prop === 'name') {
      document.getElementById('boothName').innerHTML = obj[prop];
    } else if (prop === 'description') {
      if (obj[prop]) {
        document.getElementById('description').innerHTML = obj[prop];
      }
    } else if (prop === 'link' && obj[prop] && obj.linkTitle) {
      document.getElementById('StoryboardLink').innerHTML = obj.linkTitle;
      document.getElementById('StoryboardLink').setAttribute('href', obj.link);
    } else if (prop === 'ttt') {
      if (obj[prop]) {
        document.getElementById('ttt').innerHTML = obj[prop];
      }
    } else if (prop === 'tttTime') {
      if (obj[prop]) {
        document.getElementById('tttTime').innerHTML = obj[prop];
      }
    } else if (prop === 'linkHead') {
      if (obj[prop]) {
        document.getElementById('linkHead').innerHTML = obj[prop];
      }
    }
    //  else if (prop === 'map') {
    //   if (obj[prop]) {
    //     document.getElementById('map').setAttribute('href', obj[prop]);
    //   }
    // }
  }
}




function clearSelection(){
    document.getElementById("selectBooth").selectedIndex = 0
}





var isScrollingToElement = false;

function scrollToElement(elementID){
  isScrollingToElement = true;
  var element = document.getElementById(elementID);
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});

  var elements = document.getElementsByClassName('leftIcons');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('focus');
  }

  var elements = document.getElementsByClassName('rightIcons');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('focus');
  }
  
  document.getElementById(elementID).classList.add('focus');
  setTimeout(function(){
    isScrollingToElement = false;
  }, 1000);
}
// 
//
var myDiv = document.querySelector('.mainBoothWrapper');
var bottomDiv = document.querySelector('.infoWrapper');

function isBottomDivVisible() {
  return bottomDiv.style.display !== 'none';
}

function isBottomDivInViewport() {
  var rect = bottomDiv.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  if (!isScrollingToElement && isBottomDivVisible() && isBottomDivInViewport()) {
    closeTab();
    
  }
}

myDiv.addEventListener('click', function(event) {
  if (isBottomDivVisible() && !event.target.closest('.leftIcons') && !event.target.closest('.rightIcons')) {
    closeTab();
   
  }
});

myDiv.addEventListener('scroll', handleScroll);
