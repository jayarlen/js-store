//tab栏切换
var tabc=document.querySelector('.container-tc').getElementsByTagName("li")
console.log(tabc)
var tabitem=document.querySelector('.li-content');
for( var i=0;i<tabc.length;i++){
    tabc[i].onmousemove=function (){
        for(var i=0;i<tabc.length;i++){
            tabc[i].className='bfcurrent';
        }
        this.className='current'
        tabitem.style.display='flex';
    }
    tabc[i].onmouseleave=function (){
        for(var i=0;i<tabc.length;i++){
            tabc[i].className='';
        }
        this.className=''
        tabitem.style.display='none';
    }
}
//轮播图制作
(function(){
var jsDivBox = document.getElementById("loopDiv");
//图片节点
var jsImg = document.getElementById("pic");
//左右按钮节点
var jsLeft = document.getElementById("left");
var jsRight = document.getElementById("right");
//获取所有的li
var jsUl = document.getElementById("list");
var jsLis = jsUl.getElementsByTagName("li");
//让第一个小圆点变为红色
jsLis[0].style.backgroundColor = "red";

//显示当前的图片下标
var currentPage = 0;

//启动定时器
var timer = setInterval(func, 5000);
function func() {
    currentPage++;
    changePic();

}
function changePic() {
    if (currentPage == 5) {
        currentPage = 0;
    }
    if (currentPage == -1) {
        currentPage = 4;
    }
    //更换图片
    //"img/1.jpg"
    jsImg.src = "../asset/Img/" + currentPage + ".webp";
    //将所有的小圆点颜色清空
    for (var i = 0; i < jsLis.length; i++) {
        jsLis[i].style.backgroundColor = "#aaa";
    }
    //改变对应小圆点为红色
    jsLis[currentPage].style.backgroundColor = "red";
}

//鼠标进入
jsDivBox.addEventListener("mouseover", func1, false);
function func1() {
    //停止定时器
    clearInterval(timer);
    //显示左右按钮
    jsLeft.style.display = "block";
    jsRight.style.display = "block";
}
//鼠标移出
jsDivBox.addEventListener("mouseout", func2, false);
function func2() {
    //重启定时器
    timer = setInterval(func, 5000);

    //隐藏左右按钮
    jsLeft.style.display = "none";
    jsRight.style.display = "none";
}

//点击左右按钮
jsLeft.addEventListener("click", func3, false);
function func3() {
    currentPage--;
    changePic();
}
jsLeft.onmouseover = function() {
    this.style.backgroundColor = "rgba(0,0,0,0.6)";
}
jsLeft.onmouseout = function() {
    this.style.backgroundColor = "rgba(0,0,0,0.2)";
}
jsRight.addEventListener("click", func4, false);
function func4() {
    currentPage++;
    changePic();
}
jsRight.onmouseover = function() {
    this.style.backgroundColor = "rgba(0,0,0,0.6)";
}
jsRight.onmouseout = function() {
    this.style.backgroundColor = "rgba(0,0,0,0.2)";
}

//进入小圆点
for (var j = 0; j < jsLis.length; j++) {
    jsLis[j].onmouseover = function() {
        currentPage = parseInt(this.innerHTML) - 1;
        changePic();
    };
}
}())
//侧边工具栏制作

    (function (){
// 当网页向下滑动 px 出现"返回顶部" 按钮

let containerss=document.querySelector('.container-ss');
let advertising=document.querySelector('.advertising');
let bts=document.querySelector('#bts');
let cdistance=containerss.offsetTop;
let adistance=advertising.offsetTop;

let  ddistance=adistance-cdistance;

document.onscroll=function () {
    //console.log(adistance);
    if (window.pageYOffset >= cdistance) {
        advertising.style.position = 'fixed';
        advertising.style.top = ddistance + 'px';
        bts.style.display = 'block';
    } else {
        advertising.style.position = 'absolute';
        advertising.style.top = 200 + 'px';
        bts.style.display = 'none';
    }

//页面垂直缓动的动画
    function moveTop(obj, target, callback) {
        // 清除多次点击后的定时器，保留最新的那一次
        clearInterval(obj.timer);

        //  使用obj.timer，把timer当作obj的属性，如果使用var timer = ，调用一次就会开辟一次内存空间
        obj.timer = setInterval(function () {
            //对步长向上取整，因为除以10可能有小数
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            //达到目标，清除定时器
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                if (callback) {
                    callback();
                }
            }
            //  只要还没到目标位置，就加上步长，继续走
            window.scroll(0, window.pageYOffset + step)

        }, 15);
    }

    // 点击【返回顶部】模块，就让窗口滚动回最上方
    bts.addEventListener('click', function () {
        moveTop(window, 0);
    })
}
}())
