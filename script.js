var rect = document.querySelector(".center");
rect.addEventListener("mousemove",function(evt){
   var rectangalelocation=(rect.getBoundingClientRect());
   var insiderectval = (evt.clientX - rectangalelocation.left);

   if(insiderectval<rectangalelocation.width/2){
    var redcolor=gsap.utils.mapRange(0,rectangalelocation.width/2,255,0,insiderectval);
    gsap.to(rect,{
        backgroundColor:`rgb(${redcolor},0,0)`,
        ease:Power4,
    });
   }
   else{
    
    var bluecolor=gsap.utils.mapRange(rectangalelocation.width/2,rectangalelocation.width,0,255,insiderectval);
    gsap.to(rect,{
        backgroundColor:`rgb(0,0,${bluecolor})`,
        ease:Power4,
    });

   }
})

rect.addEventListener("mouseleave",function(){
gsap.to(rect,{
    backgroundColor: "white",
})
});