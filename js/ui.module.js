import {Games} from './games.module.js'

export class categoryClicked {
    constructor(){
        this.options = document.getElementsByClassName('nav-link');
        let elements = Array.from(this.options);
        elements.forEach(element => {
                element.addEventListener("click", () => {
                    this.toogleActive(element);   
                });
        });
        new Games('MMORPG');


    }

    toogleActive(element){
        $(element).addClass('active');
        $(this.options).not($(element)).removeClass('active');
        return new Games(element.innerText);
    }
}

let topSpace = $("#nav-sec").offset().top;

$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();

    if (scrollTop >= topSpace){
        $(".navbar").addClass("fixed-top");
    } else {
        $(".navbar").removeClass("fixed-top");
    }
});