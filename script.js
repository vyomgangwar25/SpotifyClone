//console.log("welcome")

// Initialize the Variables
let songIndex=0;
let audioElement=new Audio("1.mp3");
let masterPlay=document.getElementById("masterPlay")
let myProgressBar=document.getElementById("myProgressBar")
let gif=document.getElementById("gif")
let masterSongName=document.getElementById("masterSongName")
let songItems=Array.from(document.getElementsByClassName("songItem"));
let songs=[
    {songName:"Let-me-down" ,filePath:"Cheap-Thrills.mp3",coverPath:"cover/let-me-down.jpg"},
    {songName:" Let-Me-Love-You" ,filePath:"Besharam.mp3",coverPath:"cover/let_me_love_you.jpg"},  
    {songName:"Cheap-Thrills" ,filePath:"Let-Me-Love-You.mp3",coverPath:"cover/cheap-thrills.jpg"},  
    {songName:"Calm_down" ,filePath:"Cheap-Thrills.mp3",coverPath:"cover/calm-down.jpg"},  
    {songName:"Shape-of-you" ,filePath:"Cheap-Thrills.mp3",coverPath:"cover/shape-of-you.png"}
    
  
]
songItems.forEach((element,i)=>{
   //console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
      gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
        gif.style.opacity=0;
    }
})
//Lsiten to Events
audioElement.addEventListener('timeupdate',()=>{
    //console.log()
    //update Seakbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays= () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
     
    }) 
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target);
       makeAllPlays();
       
       songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause")
        
        audioElement.src=`${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
    })
})
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=5)
    {
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
       
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
})
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=1)
    {
        songIndex=1;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
})