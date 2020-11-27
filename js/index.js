window.addEventListener('DOMContentLoaded',function(){
    var contents = document.querySelector('.contents');
    var slideInner = document.querySelector('.slider-inner');
    var slide = document.querySelectorAll('.slide');
    var move = 0;
    var upMove = 0;
    var indiMove = 0;
    var bgPop = document.querySelector('.bg');
    var bg2Pop = document.querySelector('.bg2');

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
        prev.addEventListener('click',funPrev);
        next.addEventListener('click',funNext);

            function funNext(e){
                e.preventDefault();
                console.log(slideW);
                move += slideW;
                upMove += whiteT;
                indiMove += indiT;
                slideInner.style.transform = "translateX(-"+move+"px)";
                whiteW.style.transform = "translateY(-"+upMove+"px)";
                blackW.style.transform = "translateY(-"+upMove+"px)";
                indiBox.style.transform = "translateY(-"+indiMove+"px)";
            }
    
            function funPrev(e){
                e.preventDefault();
                console.log(slideW);
                move -= slideW;
                upMove -= whiteT;
                indiMove -= indiT;
                slideInner.style.transform = "translateX(-"+move+"px)";
                whiteW.style.transform = "translateY(-"+upMove+"px)";
                blackW.style.transform = "translateY(-"+upMove+"px)";
                indiBox.style.transform = "translateY(-"+indiMove+"px)";
            }

        

//페이지 팝업
    var worksPop = document.querySelector('.works');
    var popup1 = document.querySelector('.works .w-title .title h2')
    var aboutPop = document.querySelector('.About-me');
    var popup2 = document.querySelector('.About-me .a-title h2')
    var contactPop = document.querySelector('.contact-me');
    var popup3 = document.querySelector('.contact-me .c-title .title h2')
    var popImg1 = document.querySelector('.w-title img');
    var popImg2 = document.querySelector('.a-title img');
    var popImg3 = document.querySelector('.c-title img');

    for(var i=0;i<whiteWEl.length;i++){
            whiteWEl[0].addEventListener('click',funTab);
            whiteWEl[1].addEventListener('click',funTab2);
            whiteWEl[2].addEventListener('click',funTab3);
    }
    //works
    var imgScale = document.querySelectorAll('.slide-box .slide');

    function funTab(e){
        e.preventDefault();
        $('.works').show();

        setTimeout(function(){ 
            worksPop.classList.add('active')
            popup1.classList.add('active');
        },10);
        setTimeout(function(){ 
            popImg1.classList.add('active');
        },1000);

        bgPop.classList.add('active');

    }
    //about me
    function funTab2(e){
        e.preventDefault();
        $('.About-me').show();

        setTimeout(function(){ 
            aboutPop.classList.add('active')
            popup2.classList.add('active');
        },10);
        setTimeout(function(){ 
            popImg2.classList.add('active');
        },1000);

        bg2Pop.classList.add('active');
    }
    //contact me
    function funTab3(e){
        e.preventDefault();
        $('.contact-me').show();

        setTimeout(function(){ 
            contactPop.classList.add('active')
            popup3.classList.add('active');
        },10);
        setTimeout(function(){ 
            popImg3.classList.add('active');
        },1000);

        bgPop.classList.add('active');
    }

// X누르면 팝업내려가게
    var burgerX1 = document.querySelector('.works .burger');
    var burgerX2 = document.querySelector('.About-me .burger');
    var burgerX3 = document.querySelector('.contact-me .burger');
    var workEl = document.querySelectorAll('.work-list .work-item');
    
        burgerX1.addEventListener('click',funburgerX1)
        burgerX2.addEventListener('click',funburgerX2)
        burgerX3.addEventListener('click',funburgerX3)
        
    function funburgerX1(e){
        e.preventDefault();
        
        worksPop.scrollTo(0,0);
        worksPop.classList.remove('active');
        popup1.classList.remove('active');
        bgPop.classList.remove('active');
        popImg1.classList.remove('active');
        $('.works').hide();
    }
    function funburgerX2(e){
        e.preventDefault();
        
        aboutPop.scrollTo(0,0);
        aboutPop.classList.remove('active');
        popup2.classList.remove('active');
        bg2Pop.classList.remove('active');
        popImg2.classList.remove('active');
        $('.About-me').hide();
    }
    function funburgerX3(e){
        e.preventDefault();
        
        contactPop.scrollTo(0,0);
        contactPop.classList.remove('active');
        popup3.classList.remove('active');
        bgPop.classList.remove('active');
        popImg3.classList.remove('active');
        $('.contact-me').hide();
        
    }
//work 컨텐츠들 나타나게






//About me 컨텐츠들 나타나게
var jsIcon = document.querySelector('.greeting .icon');
var nameTit = document.querySelector('.greeting .name_tit');
var subTit = document.querySelector('.sub_pun_content .sub_title');
var subList = document.querySelector('.sub_pun_content .sub_list');
var myInfo = document.querySelector('.container .my_info .clfix');
var graph = document.querySelector('.my_skill .graph');
var skillTxt = document.querySelector('.my_skill .skill_txt');
var home = document.querySelector('.home h2');
var winH = window.innerHeight/5;

aboutPop.addEventListener('scroll',aboutScroll);

function aboutScroll(e){
    var jsTop = jsIcon.offsetTop;
    var nameTop = nameTit.offsetTop;
    var subTop = subTit.offsetTop;
    var infoTop = myInfo.offsetTop;
    var graphTop = graph.offsetTop;
    var homeTop = home.offsetTop;

    var scrollY = $('.About-me').scrollTop();
        console.log(scrollY);
    
        if(scrollY +969 >= jsTop + winH){
            jsIcon.classList.add('active'); 
        }
        if(scrollY + 969 >= nameTop + winH){
            nameTit.classList.add('active');
        }
        if(scrollY + 969 >= subTop + winH){
            subTit.classList.add('active');
        }
        setTimeout(function(){
            if(scrollY + 969 >= subTop + winH){
                subList.classList.add('active');
            }
        },800);
        setTimeout(function(){
            if(scrollY + 969 >= infoTop + winH){
                myInfo.classList.add('active');
            }
            setTimeout(function(){
                if(scrollY + 969 >= graphTop + winH){
                    graph.classList.add('active');
                }
            },300);
            setTimeout(function(){
                if(scrollY + 969 >= graphTop + winH){
                    skillTxt.classList.add('active');
                }
                setTimeout(function(){
                    if(scrollY + 969 >= homeTop){
                        home.classList.add('active');
                    }
                },300);
            },400);
        },400);
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
var snsAdrs = document.querySelector('.sns-adress');




var winH = window.innerHeight/5;
    contactPop.addEventListener('scroll',function(){

    
        cList.forEach(function(cn,idx){
            cListArr.push(cn.offsetTop);
        });

        var snsTop = snsAdrs.offsetTop;
        var scrollY = $('.contact-me').scrollTop();

        if(scrollY +969 >= cListArr[0] + winH){
            cName.classList.add('active');
            cLocation.classList.add('active');
        }
        if(scrollY +969 >= cListArr[1] + winH + 200){
            cBirth.classList.add('active');
            cEmail.classList.add('active');
        }
        if(scrollY +969 >= cListArr[2] + winH +100){
            cAdress.classList.add('active');
            cPhone.classList.add('active');
        }
        if(scrollY + 969 >= snsTop + winH){
            snsAdrs.classList.add('active');
        }
});

});