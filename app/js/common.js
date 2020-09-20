$('.clients-slider').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179\n' +
        '\t\tl-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816\n' +
        '\t\tC52.942,116.507,52.942,124.327,57.633,129.007z"/>\n' +
        '</g>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179\n' +
        '\t\tl-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816\n' +
        '\t\tC52.942,116.507,52.942,124.327,57.633,129.007z"/>\n' +
        '</g>\n' +
        '</svg>\n</button>',
});

$('[name=phone]').mask('+7(999) 999 - 99 - 99');


$('.reviews-slider').slick({
    slidesToShow: 6,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179\n' +
        '\t\tl-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816\n' +
        '\t\tC52.942,116.507,52.942,124.327,57.633,129.007z"/>\n' +
        '</g>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179\n' +
        '\t\tl-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816\n' +
        '\t\tC52.942,116.507,52.942,124.327,57.633,129.007z"/>\n' +
        '</g>\n' +
        '</svg>\n</button>',
});

//Добавляем всем элементам прозрачность
$('.reviews-slider .slick-slide').addClass('slick-slider-opacity');
//Убираем прозрачность у центральных элементов
$('.reviews-slider .slick-slide.slick-active').eq(1).removeClass('slick-slider-opacity');
$('.reviews-slider .slick-slide.slick-active').eq(2).removeClass('slick-slider-opacity');
$('.reviews-slider .slick-slide.slick-active').eq(3).removeClass('slick-slider-opacity');
$('.reviews-slider .slick-slide.slick-active').eq(4).removeClass('slick-slider-opacity');
//Вешаем обработчик на событие слайдера
$(".reviews-slider").on("afterChange", function () {
    //Добавляем прозрачность всем элементам, обнуляя её у нужных
    $('.reviews-slider .slick-slide').addClass('slick-slider-opacity');
    $('.reviews-slider .slick-slide.slick-active').eq(1).removeClass('slick-slider-opacity');
    $('.reviews-slider .slick-slide.slick-active').eq(2).removeClass('slick-slider-opacity');
    $('.reviews-slider .slick-slide.slick-active').eq(3).removeClass('slick-slider-opacity');
    $('.reviews-slider .slick-slide.slick-active').eq(4).removeClass('slick-slider-opacity');
});

$('.partners-slider').slick({
    slidesToShow: 4,
    arrows: false,
    dots: true
});