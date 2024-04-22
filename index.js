var b= document.querySelector("#menu")
var a = document.querySelector(".nav-prt3 i")
var c =document.querySelector(".content")
var flag =0
a.addEventListener("click",function()
{
    if(flag==0)
    {
         b.style.top="0%"
         flag=1
         c.style.opacity="0.5"
    }   
    else{
        b.style.top="-100%"
        flag=0
        c.style.opacity="1"
    }
})
document.querySelector("#menu1 i").addEventListener("click",function()
{
    if(flag==0)
    {
         b.style.top="0%"
         flag=1
         c.style.opacity="0.1"
    }   
    else{
        b.style.top="-110%"
        flag=0
        c.style.opacity="1"
    }
})

// document.getElementById("h1").onmouseenter = function() {mouseEnter()};
// document.getElementById("h1").onmouseleave = function() {mouseLeave()};

// function mouseEnter() {
//   document.querySelector(".hover").style.display = "initial";
// }

// function mouseLeave() {
//   document.querySelector(".hover").style.display ="none";
// }

var tl=gsap.timeline()
tl.to("#loading  #loadingdiv",{
    width:"20vw",
    duration:"1",
    
})
tl.to("#loading",{
    top:"-110vh",
    transition:"all ease .2"
})
tl.from(".navbar",{
      top:"-10%",
      opacity:0,
      duration:1,
      delay:.1,
})
tl.from(".main-left",{
    x:-120,
    opacity:0,
    scale:5,
    transition:"linear"
})
tl.from(".main-left i",{
      x:-150,
      opacity:0,
      
})
tl.from(".main-right",{
      x:120,
      opacity:0,
      
})
tl.from(".main2-inner",{
      y:50,
      opacity:0,
      stagger:.2
})  


gsap.from("#right3",{
     x:"-100%",
    scrollTrigger:{
        trigger:"#right3",
        // markers:"true",
        scrub:2,
        start:"top 66%",
        end:"top 20%"
    }
})
gsap.from("#left3 #round",{
     x:"140%",
     scrollTrigger:{
        trigger:"#left3",
        // markers:"true",
        scrub:2,
        start:"top 66%",
        end:"top 20%"
    }
})
gsap.from("#left3 #round2",{
    scale:0,
    scrollTrigger:{
       trigger:"#left3",
    //    markers:"true",
       scrub:2,
       start:"top 66%",
       end:"top 20%"
   }
})
gsap.from("#left3 #round3",{
    scale:0,
    scrollTrigger:{
       trigger:"#left3",
    //    markers:"true",
       scrub:2,
       start:"top 66%",
       end:"top 20%"
   }
})
gsap.from("#left3 img",{
    scale: 2,
    opacity:0,

    scrollTrigger:{
       trigger:"#left3",
    //    markers:"true",
       scrub:2,
       start:"top 66%",
       end:"top 20%"
   }
})
 var flag3=0
 var h4 =document.querySelector("#rightbottom h4")
document.querySelector(" #oneb").addEventListener("click",function()
{      
        flag3=flag3+1
        h4.innerHTML=flag3   
   
})
document.querySelector(" #twob").addEventListener("click",function()
{
     if(flag3>0)
     {  
        flag3=flag3-1 
         h4.innerHTML=flag3   
     }     
     
})

// gsap.from("#righttop",{
//      x:"-90%",
//      delay:.5
// })
// gsap.from("#rightbottom",{
//     x:"-90%",
//     delay:1
// })

gsap.from(".content4 #img1",{
    y:"-100%",
    opacity:0,
    duration:".8",
    scrollTrigger:{
          trigger:".content4",
          scrub:2,
        //   markers:true,
          start:"top 80%",
          end:"top 10%"
    }
    
})
gsap.from("#inner4",{
     x:"80%",
     opacity:0,
     scrollTrigger:{
          trigger:"#inner4",
          scrub:2.5,
        //   markers:true,
          start:"top 50%",
          end:"top 50%"
     }
})