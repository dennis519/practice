var btn = document.getElementsByName('btn_answer');
var answer = document.getElementById('correct');
var nope = document.getElementById('nope1');
var xx = document.getElementsByClassName('error_message');
var pp = videojs('LOL', {}, function(){
});

pp.on('timeupdate', ()=>{
    let when = Math.floor(pp.currentTime());
    console.log('the time was updated to: ' + when);
    if(when == 10){
        pp.pause();
        btn[0].style.display='inline-block';
        btn[1].style.display='inline-block';
        btn[2].style.display='inline-block';
    }
    else if(when == 20){
        pp.pause();
        btn[0].innerHTML= '問題2解答',btn[0].style.display='inline-block';
        btn[1].innerHTML= '問題2錯誤選項',btn[1].style.display='inline-block';
        btn[2].innerHTML= '問題2錯誤選項', btn[2].style.display='inline-block';   
    }
    else{
        btn[0].style.display='none';
        btn[1].style.display='none';
        btn[2].style.display='none'; 
    }
})

pp.on('pause',()=>{
    let when = Math.floor(pp.currentTime());
    console.log('停止時間'+when);
    if(when == 10){
        answer.onclick = ()=>{
            pp.currentTime(11);
            console.log('第一題正確');
            pp.play();
        }   
    }
    if(when == 20){
        answer.onclick = ()=>{
            pp.currentTime(21);
            console.log('第二題正確');
            pp.play();
        }   
    }
})

// function incorrect(){
//     xx.style.opacity = '1';
// }

