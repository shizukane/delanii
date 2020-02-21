$(document).ready(function(){
    $("#designimg , #design").click(function(){
        $ ("#design").fadeToggle()
        $ ("#designimg").fadeToggle()
    });
    $("#developimg , #develop").click(function(){
        $("#develop").slideToggle()
        $("#developimg").slideToggle()
    });
    $("#productimg , #product").click(function(){
        $("#product").fadeToggle()
        $("#productimg").fadeToggle()
    });

    $(".myportfolio1").hover(function(){
        $(".overlay1").slideToggle()
    });
    $(".myportfolio2").hover(function(){
        $(".overlay2").slideToggle()
    });
    $(".myportfolio3").hover(function(){
        $(".overlay3").slideToggle()
    });
    $(".myportfolio4").hover(function(){
        $(".overlay4").slideToggle()
    });
    $(".myportfolio5").hover(function(){
        $(".overlay5").slideToggle()
    });
    $(".myportfolio6").hover(function(){
        $(".overlay6").slideToggle()
    });
    $(".myportfolio7").hover(function(){
        $(".overlay7").slideToggle()
    });
    $(".myportfolio8").hover(function(){
        $(".overlay8").slideToggle()
    });

    $("form#form").submit(function(){
        var name = $("input#name").val();
        var mail = $("input#email").val();
        var message = $("textarea").val();
        $ (alert("We have received your details.Thank you for your submission"))
    });
    
});

