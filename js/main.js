$("#car_sec > div").hide();

    $(".car_list > li").eq(0).click(function () {
        $("#car_sec > div").hide();
        $("#car_sec > div").eq(0).fadeIn();
    });
    $(".car_list > li").eq(1).click(function () {
        $("#car_sec > div").hide();
        $("#car_sec > div").eq(1).fadeIn();
    });
    $(".car_list > li").eq(2).click(function () {
        $("#car_sec > div").hide();
        $("#car_sec > div").eq(2).fadeIn();
    });
    $("#car_sec > div").click(function () {
        $(this).hide();
    });