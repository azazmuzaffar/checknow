var home=$(".home .content-area").offset(),about=$(".about .content-area").offset(),projects=$(".projects .content-area").offset(),team=$(".team .content-area").offset(),contact=$(".contact .content-area").offset();function setTop(e){0==e?(document.getElementById("myMenu").style.top=home.top+21+"px",$(".two").removeClass("anime-about"),$(".two").removeClass("anime-projects"),$(".two").removeClass("anime-team"),$(".two").removeClass("anime-contact"),$(".two").addClass("anime-home"),$(".line").addClass("show")):1==e?(document.getElementById("myMenu").style.top=about.top+10+"px",$(".two").addClass("anime-about"),$(".two").removeClass("anime-projects"),$(".two").removeClass("anime-team"),$(".two").removeClass("anime-contact"),$(".two").removeClass("anime-home"),$(".line").removeClass("show")):2==e?(document.getElementById("myMenu").style.top=projects.top+10+"px",$(".two").removeClass("anime-about"),$(".two").addClass("anime-projects"),$(".two").removeClass("anime-team"),$(".two").removeClass("anime-contact"),$(".two").removeClass("anime-home"),$(".line").removeClass("show")):3==e?(document.getElementById("myMenu").style.top=team.top+10+"px",$(".two").removeClass("anime-about"),$(".two").removeClass("anime-projects"),$(".two").addClass("anime-team"),$(".two").removeClass("anime-contact"),$(".two").removeClass("anime-home"),$(".line").removeClass("show")):4==e&&(document.getElementById("myMenu").style.top=contact.top+10+"px",$(".two").removeClass("anime-about"),$(".two").removeClass("anime-projects"),$(".two").removeClass("anime-team"),$(".two").addClass("anime-contact"),$(".two").removeClass("anime-home"),$(".line").removeClass("show"))}$("#fullpage").fullpage({anchors:["Home","About","Projects","Team","Contact"],menu:".nav-right",navigation:!1,licenseKey:"15560068-077B4EC4-B9C3AECE-631A2B58",slidesNavigation:!0,autoScrolling:!1,controlArrows:!1,verticalCentered:!0,onLeave:function(e,t,o,a){setTop(t.index)},afterLoad:function(e,t,o,a){setTop(t.index)}}),$(".nav-toggle").click(function(){$(this).toggleClass("opened"),$(this).parent().parent("nav").toggleClass("mobile-menu")}),$("nav ul li a").click(function(){$(".nav-toggle").removeClass("opened"),$("nav").removeClass("mobile-menu")});var swiper=new Swiper(".swiper",{slidesPerView:"auto",spaceBetween:15,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}}}),swipertwo=new Swiper(".projects-slider",{slidesPerView:"auto",spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}}});btn.addEventListener("click",function(){btn.textContent="Button clicked"});
//# sourceMappingURL=main.js.map
