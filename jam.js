// document.getElementById("btn1").addEventListener("click",function(){
//     var box1=document.getElementById("sidebar")
//     var bt2=document.getElementById("btn1")
//     if(box1.style.display=="none")
//     {
//       box1.style.display="block"
//       bt2.style.display="none"
//
//     }
//     else {
//       box1.style.display="none"
//     }
//   })
 var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
 var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
   return new bootstrap.Popover(popoverTriggerEl)
 })
