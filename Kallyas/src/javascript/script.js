$(document).ready(function () {
    $('.works_menues div').on('click', function () {
        $('.works_menues div').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.works_menues #first').on('click', function () {
        $('.works_photoes .photo_item').animate({ 'opacity': '0' }, 0);
        $('.works_photoes .photo_item').removeClass('active');
        $('.works_photoes .photo_item').addClass('active');
        $('.works_photoes .photo_item').animate({ 'opacity': '1' }, 300);
    });
    $('.works_menues #second').on('click', function () {
        $('.works_photoes .photo_item.web').animate({ 'opacity': '0' }, 0);
        $('.works_photoes .photo_item').removeClass('active');
        $('.works_photoes .photo_item.web').toggleClass('active');
        $('.works_photoes .photo_item.web').animate({ 'opacity': '1' }, 300);

    });
    $('.works_menues #third').on('click', function () {
        $('.works_photoes .photo_item').animate({ 'opacity': '0' }, 0);
        $('.works_photoes .photo_item').removeClass('active');
        $('.works_photoes .photo_item.advertising').toggleClass('active');
        $('.works_photoes .photo_item.advertising').animate({ 'opacity': '1' }, 300);

    });
    $('.works_menues #fourth').on('click', function () {
        $('.works_photoes .photo_item').animate({ 'opacity': '0' }, 0);
        $('.works_photoes .photo_item').removeClass('active');
        $('.works_photoes .photo_item.branding').toggleClass('active');
        $('.works_photoes .photo_item.branding').animate({ 'opacity': '1' }, 300);

    });
    $('.works_menues #fifth').on('click', function () {
        $('.works_photoes .photo_item').animate({ 'opacity': '0' }, 0);
        $('.works_photoes .photo_item').removeClass('active');
        $('.works_photoes .photo_item.design').toggleClass('active');
        $('.works_photoes .photo_item.design').animate({ 'opacity': '1' }, 300);

    });
    $('.works_menues #sixth').on('click', function () {
        $('.works_photoes .photo_item').animate({ 'opacity': '0' }, 0);
        $('.works_photoes .photo_item').removeClass('active');
        $('.works_photoes .photo_item.photography').toggleClass('active');
        $('.works_photoes .photo_item.photography').animate({ 'opacity': '1' }, 300);

    });
});