window.addEventListener('DOMContentLoaded',function(){
    
    
    //  ------JSON------
    var data = new XMLHttpRequest();
    var subTit = document.querySelector('.sub_visual_txt');
    var subV = document.querySelector('#sub_visual');

    data.open('GET','json/work.json',true);
    data.send(null);

    $('.loading').addClass('active');
    data.addEventListener('load', dataFun);
    $('.loading').removeClass('active');
    function dataFun(){
        var response;
        var titEle = '';
        var subVEle = '';
        var dNum = localStorage.pol;

        response = JSON.parse(data.responseText);
        subTit.innerHTML = '';

        response.product.forEach(function(el,key){
            if(dNum == key){
                subVEle = "<li><p style=background:url("+el.subVisual+")center;background-size:cover;></p></li>"
                subV.innerHTML = subVEle;

                titEle = "<h2>"+el.title+"</h2>";
                subTit.innerHTML = titEle;



            }
        });
    }

//  -----work.html기능들-----
    var nameTit = document.querySelector('.view_tit_area .name_tit');
    var launch = document.querySelector('.container .view_tit_area a');
    var info = document.querySelector('.view_info');
    var skillChart = document.querySelector('.skill_chart');
    var font01 = document.querySelector('.font .font-01');
    var font02 = document.querySelector('.font .font-02');
    var colorInfo = document.querySelectorAll('.color .aos-init');
    var mac = document.querySelector('.view_main_mac');
    var winH = window.innerHeight;

    window.addEventListener('scroll',funScroll);

    function funScroll(){

        if(scrollY > nameTit.offsetTop - winH){
            nameTit.classList.add("active")
        }if(scrollY == 0){
            nameTit.classList.remove("active");
        }
        if(scrollY > launch.offsetTop - winH){
            launch.classList.add("active")
        }else{
            launch.classList.remove("active")
        }
        if(scrollY > info.offsetTop - winH + 100){
            info.classList.add("active")
        }else{
            info.classList.remove("active")
        }
        if(scrollY > skillChart.offsetTop - winH + 100){
            skillChart.classList.add("active")
        }else{
            skillChart.classList.remove("active")
        }
        if(scrollY > font01.offsetTop - winH){
            font01.classList.add("active")
        }else{
            font01.classList.remove("active")
        }
        if(scrollY > font02.offsetTop - winH){
            font02.classList.add("active")
        }else{
            font02.classList.remove("active")
        }
        for(var i=0;i<colorInfo.length;i++){
            if(scrollY > colorInfo[i].offsetTop - winH + 100){
                colorInfo[i].classList.add("active")
            }else{
                colorInfo[i].classList.remove("active")
            }
        }
        if(scrollY > mac.offsetTop - winH + 400){
            mac.classList.add("active")
        }else{
            mac.classList.remove("active")
        }
        if(scrollY > 200){
            topBtn.classList.add("active")
        }else{
            topBtn.classList.remove("active");
        }
    }

    var topBtn = document.querySelector('.fixed_btn');

    topBtn.addEventListener('click',funClick);

    function funClick(e){
        e.preventDefault();

        $('html, body').animate({
			scrollTop : 0
		}, 400);
		return false;
    }




});










