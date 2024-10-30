// const toggler = document.querySelector(".btn");
// toggler.addEventListener("click",function(){
//     document.querySelector("#sidebar").classList.toggle("collapsed");
// });

$(document).on("click", ".btn-custom", function () {
    $("#sidebar").toggleClass("expanded");
    if ($(this).hasClass("expanded")) {
        $("#sidebar").css({
            "max-width": "60px",
            "min-width": "60px",
        });
    } else {
        $("#sidebar").css({
            "max-width": "264px",
            "min-width": "264px",
        });
    }
});

$(document).on("mouseenter", "#sidebar", function () {
    if ($(this).hasClass("expanded")) {
        $("#sidebar").css({
            "max-width": "264px",
            "min-width": "264px",
        });
    }
});
$(document).on("mouseleave", "#sidebar", function () {
    if ($(this).hasClass("expanded")) {
        $("#sidebar").css({
            "max-width": "60px",
            "min-width": "60px",
        });
    }
});

// $(".side-name").css({
//     "display": "none",
// });