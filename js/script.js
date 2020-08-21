$('.page-scroll').on('click', function (e) {
    // ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap element ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('body,html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1500, 'easeInOutExpo');

    e.preventDefault();

});

// parallax
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 4 + '%)'
    });

    $('.jumbotron h2').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 1.2 + '%)'
    });

    // portfolio
    if (wScroll > $('.portfolio').offset().top - 200) {
        $('.img-thumbnail').each(function (i) {
            setTimeout(function () {
                $('.img-thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }

});

$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');

});