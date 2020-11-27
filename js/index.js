window.addEventListener('DOMContentLoaded',function(){
    var contents = document.querySelector('.contents');
    var slideInner = document.querySelector('.slider-inner');
    var slide = document.querySelectorAll('.slide');
    var move = 0;
    var upMove = 0;
    var indiMove = 0;

    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');

    var indiBox = document.querySelector('.indi-inner .abs');
    var indi = document.querySelectorAll('.indi .abs');
    var whiteW = document.querySelector('.whiteW .menu-list');
    var whiteWEl = document.querySelectorAll('.whiteW .menu-list .rel .menu-item-title');
    var blackW = document.querySelector('.blackW');


    
    var slideW = slide[0].offsetWidth + slide[0].offsetLeft;
    var whiteT = whiteWEl[0].offsetHeight + whiteWEl[0].offsetTop;
    var indiT = indi[0].offsetHeight + indi[0].offsetTop;
//슬라이드 
        var aa;
        slide.forEach(function(el, idx){
            contents.addEventListener('mousewheel',function(e){
                clearTimeout(aa);
                aa = setTimeout(funWheel,100,e);
            })

            function funWheel(e){
                if(e.wheelDelta < 0){
                    //down
                    move += slideW;
                    upMove += whiteT;
                    indiMove += indiT;
                }else{
                    //up
                    move -= slideW;
                    upMove -= whiteT;
                    indiMove -= indiT;
                }
                slideInner.style.transform = "translateX(-"+move+"px)";
                whiteW.style.transform = "translateY(-"+upMove+"px)";
                blackW.style.transform = "translateY(-"+upMove+"px)";
                indiBox.style.transform = "translateY(-"+indiMove+"px)";

            }
        });

    

//works페이지 팝업
    var worksPop = document.querySelector('.works');
    var popup2 = document.querySelector('.works .w-title .title h2')

    for(var i=0;i<whiteWEl.length;i++){
        if(i == 0){
            whiteWEl[i].addEventListener('click',funTab);
        }
    }
    
    function funTab(e){

        e.preventDefault();

        $('.works').show();

        setTimeout(function(){ 

            worksPop.classList.add('active')
            popup2.classList.add('active');

        },10);
        
    }




// X누르면 팝업내려가게
    var burgerX = document.querySelectorAll('.burger');
    var workEl = document.querySelectorAll('.work-list .work-item');

    for(var i=0;i<burgerX.length;i++){
        burgerX[i].addEventListener('click',funburgerX)
    }

    function funburgerX(e){
        e.preventDefault();
    
        worksPop.classList.remove('active');
        popup2.classList.remove('active');
        
        $('.works').hide();
    }


//About me 컨텐츠들 나타나게

var jsIcon = document.querySelector('.greeting .icon');
var jsTop = jsIcon.offsetTop;
var nameTit = document.querySelector('.greeting .name_tit');
var nameTop = nameTit.offsetTop;
var subTit = document.querySelector('.sub_pun_content .sub_title');
var subTop = subTit.offsetTop;
var subList = document.querySelector('.sub_pun_content .sub_list');
var myInfo = document.querySelector('.container .my_info .clfix');
var infoTop = myInfo.offsetTop;
var graph = document.querySelector('.my_skill .graph');
var graphTop = graph.offsetTop;
var skillTxt = document.querySelector('.my_skill .skill_txt');
var home = document.querySelector('.home h2');
var homeTop = home.offsetTop;

var winH = window.innerHeight/5;
window.addEventListener('scroll',aboutScroll);

function aboutScroll(){
    
        if(window.scrollY >= jsTop + winH){
            jsIcon.classList.add('active'); 
        }
        if(window.scrollY >= nameTop + winH + 200){
            nameTit.classList.add('active');
        }
        if(window.scrollY >= subTop + winH + 100){
            subTit.classList.add('active');
        }
        setTimeout(function(){
            if(window.scrollY >= subTop + winH + 200){
                subList.classList.add('active');
            }
        },800);
        setTimeout(function(){
            if(window.scrollY >= infoTop + winH){
                myInfo.classList.add('active');
            }
            setTimeout(function(){
                if(window.scrollY >= graphTop + winH){
                    graph.classList.add('active');
                }
            },800);
            setTimeout(function(){
                if(window.scrollY >= graphTop + winH + 200){
                    skillTxt.classList.add('active');
                }
                setTimeout(function(){
                    if(window.scrollY >= homeTop + 100){
                        home.classList.add('active');
                    }
                },1000);
            },800);
        },800);
}

// Contact me 컨텐츠들 나오게

var cList = document.querySelectorAll('.c-list > div');
var cListArr = [];
var cName = document.querySelector('.cName');
var cBirth = document.querySelector('.cBirth');
var cAdress = document.querySelector('.cAdress');
var cLocation = document.querySelector('.cLocation');
var cEmail = document.querySelector('.cEmail');
var cPhone = document.querySelector('.cPhone');

setTimeout(function(){
    cList.forEach(function(cn,idx){
        cListArr.push(cn.offsetTop);
    });
},500);


var winH = window.innerHeight/5;
    window.addEventListener('scroll',function(){
        
        if(window.scrollY >= cListArr[0] + winH){
            cName.classList.add('active');
            cLocation.classList.add('active');
        }
        if(window.scrollY >= cListArr[1] + winH){
            cBirth.classList.add('active');
            cEmail.classList.add('active');
        }
        if(window.scrollY >= cListArr[2] + winH){
            cAdress.classList.add('active');
            cPhone.classList.add('active');
        }
});

});