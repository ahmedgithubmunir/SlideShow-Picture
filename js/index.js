/*获取元素*/
window.onload = function(){

var container = document.getElementById("container");
var list = document.getElementById("list");
var buttons = document.getElementById("buttons").getElementsByTagName("span");
//左右方向键
var prev = document.getElementById("prev");
var next = document.getElementById("next");
//小圆点
var index = 1;
var animated = false;//在动画
var timer ; //定时器
function showButton(){
    for (var i =0; i < buttons.length; i++){
        if (buttons[i].className == 'on'){
            buttons[i].className = '';
            break;
        }
    }
    buttons[index - 1].className = 'on';
}
//绑定点击箭头事件

function animate(offset){
    animated = true;
    var newleft = parseInt(list.style.left) + offset;
    
    var time = 300;//位移总时间
    var interval = 10;//位移间隔时间
    var speed = offset/(time/interval);//位移量

    function go() {
        if ( (speed < 0 && parseInt(list.style.left) > newleft) || (speed > 0 && parseInt(list.style.left) < newleft) ){
            list.style.left = parseInt(list.style.left) + speed + "px";
            setTimeout(go,interval);

        }else {
            animated = false;
            list.style.left = newleft + "px";
            if (newleft > -880){
                list.style.left = -4400 + "px";
            }
            if (newleft < -4400){
                list.style.left = -880 + "px";
            }
        }
    } 
    go();
}

//自动播放
function play(){
    timer = setInterval(function() {
        next.onclick();
    }, 3000);
}

function stop (){
    clearInterval(timer);
}
//鼠标移上去就停止播放
container.onmouseover = stop;
container.onmouseout = play;

play();

next.onclick = function (){
    if (index == 5){
        index = 1;
    }else {
        index +=1;
    }
    showButton();
    if (!animated){
    animate(-880);
    }
}

prev.onclick = function (){
    if (index == 1){
        index = 5;
    }else {
        index -=1;
    }
    showButton();
    if (!animated){
    animate(880);
    }
}
//鼠标点击切换图片
for (var i = 0; i < buttons.length; i ++){
    buttons[i].onclick = function (){
        if (this.className == 'on'){
            return;
        }
        var myIndex = parseInt(this.getAttribute('index'));
        var offset = -880 * (myIndex - index);
        if (!animated){
        animate(offset);
        }
        index = myIndex;
        showButton();
    }
}

}



//索引
/*var index = 1;

var timer = 0;

container.style.width = img.offsetWidth + "px";
container.style.height = img.offsetHeight + "px";
container.style.overflow = "hidden";

banner.style.height = img.offsetHeight + "px";
banner.style.width = img.offsetWidth * li.length + "px";
banner.style.left = "-600px";

//点击左右按钮，实现图片的切换
function animate(offset){
    banner.style.transition = "0.5s";
    banner.style.left = -parseInt(offset) * index + "px";
}
next.onclick = function() {

    if (index == spanNode.length){
        index =0;
    }
    index ++;
    console.log("索引index："+ index);
    animate(img.offsetWidth);
    showButton();
}

prev.onclick = function (){
    if (index == 1){
        index = li.length - 1;
    }
    index --;
    animate(img.offsetWidth);
    showButton();
}
 function showButton(){
     for (var i= 0 ;i< spanNode.length; i++){
         spanNode[i].className = ' ';
     }
     console.log("小圆点的index值："+index);
     spanNode[index - 1].className = "on";
 }

 //自动轮播
 function play(){
    timer = setInterval(function (){
        banner.style.transition = "none";
    setTimeout(function(){
        
        next.onclick();
    },200);
 },1500);
 }
//鼠标移上去时清除定时器
 container.onmouseover = function (){
     clearInterval(timer);
 }
 container.onmouseout = function (){
     play();
 }

 //鼠标点击对应小圆点：自动切换
 function ButtonImage(){
    for (var i = 0; i< spanNode.length; i++){
        spanNode[i].onclick = function () {
            var myIndex = parseInt(this.getAttribute('index'));
                index = myIndex;
               animate(img.offsetWidth);
                showButton();
        }
    }
 }
 ButtonImage();
*/
