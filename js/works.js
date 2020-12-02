window.addEventListener('DOMContentLoaded',function(){

    var nameTit = document.querySelector('.view_tit_area .name_tit');
    var launch = document.querySelector('.container .view_tit_area a');
    var info = document.querySelector('.view_info .info');
    var skillChart = document.querySelector('.skill_chart');
    var font01 = document.querySelector('.font .font-01');
    var font02 = document.querySelector('.font .font-02');
    var colorInfo = document.querySelectorAll('.color .aos-init');
    var mac = document.querySelector('.view_main_mac p');
    var winH = window.innerHeight;

    window.addEventListener('scroll',funScroll);

    function funScroll(){
        console.log(scrollY);
        if(scrollY > nameTit.offsetTop - winH){
            nameTit.classList.add("active")
        }
        if(scrollY > launch.offsetTop - winH){
            launch.classList.add("active")
        }
        if(scrollY > info.offsetTop - winH){
            info.classList.add("active")
        }
    }




});