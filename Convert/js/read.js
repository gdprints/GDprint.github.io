$(document).ready(function(){
    $(".invisible-content").hide();
    $(document).on('click',"#btn",function(){
        var moreLessButton=$(".invisible-content").is(":visible")?'Կարդալ ավելին':'Ցույցադրել քիչ';
        $(this).text(moreLessButton);
        $(this).parent(".span8").find(".invisible-content").toggle();
        $(this).parent(".span8").find(".visible-content").toggle();
    });
});
