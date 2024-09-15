// document.getElementById('id1').addEventListener('mousemove',(dets)=>{
//     addEventListener('click',()=>{
//         console.log(dets.clientX+" "+dets.clientY)
//     })
// })

document.getElementById('id1').addEventListener('mousemove',(dets)=>{
    let x=dets.clientX;
    let y=dets.clientY;
    let cords= "coords : ( "+x+" "+y+" )";
    document.getElementById('para').innerHTML=cords;
})
document.getElementById('id1').addEventListener('click',(dets)=>{
    let x=dets.clientX;
    let y=dets.clientY;
    let cords= "coords : ( "+x+" "+y+" )";
    document.getElementById('p2').innerHTML=cords;
})
document.getElementById('container').addEventListener('mousemove',(e)=>{
    var x = e.clientX;
    var y = e.clientY;
    var r = Math.floor(x/5);
    var g = 0;
    var b = Math.floor(y/4);
    console.log(r, g, b);
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    // console.log(color);
    document.getElementById('container').style.backgroundColor=color;
  });