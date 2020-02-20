$(document).ready(function(){
    $("#designimg , #design").click(function(){
        $ ("#design").toggle()
        $ ("#designimg").toggle()
    });
    $("#developimg , #develop").click(function(){
        $("#develop").toggle()
        $("#developimg").toggle()
    });
    $("#productimg , #product").click(function(){
        $("#product").toggle()
        $("#productimg").toggle()
    });

    $(".myportfolio1").hover(function(){
        $(".overlay1").toggle()
    });
    $(".myportfolio2").hover(function(){
        $(".overlay2").toggle()
    });
    $(".myportfolio3").hover(function(){
        $(".overlay3").toggle()
    });
    $(".myportfolio4").hover(function(){
        $(".overlay4").toggle()
    });
    $(".myportfolio5").hover(function(){
        $(".overlay5").toggle()
    });
    $(".myportfolio6").hover(function(){
        $(".overlay6").toggle()
    });
    $(".myportfolio7").hover(function(){
        $(".overlay7").toggle()
    });
    $(".myportfolio8").hover(function(){
        $(".overlay8").toggle()
    });

    $("form#form").submit(function(){
        var name = $("input#name").val();
        var mail = $("input#email").val();
        var message = $("textarea").val();
        $ (alert("We have received your details.Thank you for your submission"))
    });
    
});

