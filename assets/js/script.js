jQuery(function ($) {
    var winWidth = $(window).width(),
            winHeight = $(window).height(),
            scrollVal = $(window).scrollTop();

    $('.language-active').on('click', function () {
        $('.block_language').slideToggle();
    });

    $('a.open-nav').on('click', function () {
        $('body').toggleClass('open-nav');
        $('a.open-nav, a.close-nav').toggleClass('open-nav close-nav');
    });


    if ($('.custom-top-menu').length) {
        $('.custom-top-menu ul').wrap('<div class="custom-top-menu-wrapper"></div>');
        $('.custom-top-menu-wrapper').prepend('<div class="toggle-custom-top-menu"><svg class="yt-header__cta-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></div>');
        $('.logo.twenty').after($('.custom-top-menu-wrapper'));

        $('.toggle-custom-top-menu').on('click', function () {
            $('.custom-top-menu-wrapper ul').stop().slideToggle().toggleClass('active');
        });

        $('.custom-top-menu').closest('.lb-container').remove();
    }


    $(document).on('click', 'a[href*="#"]', function (e) {
        e.stopPropagation();
        e.preventDefault();

        var el = $(this).attr('href').split('#');
        $('body,html').stop().animate({scrollTop: ($('#' + el[1]).offset().top - 51)}, 1000);

        if ($('.custom-top-menu-wrapper ul').hasClass('active')) {
            $('.custom-top-menu-wrapper ul').stop().slideUp().removeClass('active');
        }

        return false;
    });


    if ($('#cover-slider').length) {
        $('body').addClass('no-page-title');
    }

    if ($('#gallery').length) {
        if ($('.cover-block_conteiner').length) {
            $('.cover-image').css({
                'background-image': 'url(' + $('.cover-block_conteiner a').attr('href') + ')'
            });
        } else {
            $('.cover-image').css({
                'background-image': 'url(' + $('.block_conteiner:first-child a').attr('href') + ')'
            });
        }
        $('body').addClass('no-page-title');
    }

    $(document).on('click', '.see-more .icon', function () {
        $('html, body').animate({scrollTop: ($('.block_conteiner_wrp').offset().top - 63)}, 500);
    });

    if ($('.another-projects').length) {
        $('.footer').before($('.another-projects'));
        $('.another-projects').wrapInner('<div class="another-projects-content"></div>');
        $('.another-projects .album .photo a').each(function () {
            $(this).wrapInner('<div class="photo-wrapper"></div>');
            $(this).find('.photo-wrapper').css({
                'background-image': 'url(' + $(this).find('img').attr('src') + ')'
            });
            var width = $(this).find('.photo-wrapper').closest('.photo').width(),
                    height = 3 - (3 * (((4 - width) * 100) / 4) / 100);
            $(this).find('.photo-wrapper').width(width).height(height);
            $(this).append($(this).closest('.album').find('.title'), $(this).closest('.album').find('.desc'));
        });
    }

    if ($('.block_conteiner_wrp').length) {
        $('body').append(
                '<div class="to-the-top" style="display: block;">' +
                '<a class="top-button"><svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="53px" height="20px" viewBox="0 0 53 20" enable-background="new 0 0 53 20" xml:space="preserve">' +
                '<g id="Ebene_3">' +
                '</g>' +
                '<g>' +
                '<polygon points="43.886,16.221 42.697,17.687 26.5,4.731 10.303,17.688 9.114,16.221 26.5,2.312 	"></polygon>' +
                '</g>' +
                '</svg>' +
                '</a>' +
                '</div>'
                );
        if (scrollVal < $('.block_conteiner_wrp').offset().top - $('header').outerHeight()) {
            $('header').addClass('c-transparent');
            $('.to-the-top').hide();
        }
        if ($('.social-share-module').length) {
            $('.block_conteiner_wrp').append($('.social-share-module'));
        }
    }
    
    $(document).on('click', '.top-button', function (e) {
        $('html, body').animate({scrollTop: 0}, 1000);
    });

    if ($('.social-widget-link').length) {
        $('.social-widget-link a').each(function () {
            $(this).append($('.footer-social-icons .fa-' + $(this).attr('id')));
            $(this).wrap('<li class="social_icon_' + ($(this).index() + 1) + '" />');
        });
        $('.follow-links').prepend($('.social-widget-link'));
    }

    if ($('.article_details.text').length) {
        if ($('.social-share-module').length) {
            $('.out-ext-info').append($('.social-share-module'));
        }
        $('body').append(
                '<div class="to-the-top" style="display: block;">' +
                '<a class="top-button"><svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="53px" height="20px" viewBox="0 0 53 20" enable-background="new 0 0 53 20" xml:space="preserve">' +
                '<g id="Ebene_3">' +
                '</g>' +
                '<g>' +
                '<polygon points="43.886,16.221 42.697,17.687 26.5,4.731 10.303,17.688 9.114,16.221 26.5,2.312 	"></polygon>' +
                '</g>' +
                '</svg>' +
                '</a>' +
                '</div>'
                );
        $('.to-the-top').on('click', function () {
            $('body').animate({scrollTop: 0}, 1000);
        });
        if (scrollVal < 500) {
            $('.to-the-top').fadeOut();
        } else {
            $('.to-the-top').fadeIn();
        }
        
        if ($('.article_details.text .lb-container:first-child .img-list').length) {
            $('.article_details.text').before(
                    '<div class="cover-24 fullscreen-cover article_details_cover" data-bg-type="image" data-cover-id="24">' +
                    '<div class="cover-image" data-bg-align="50% 50%" style="background-image: url(' + $('.article_details.text .lb-container:first-child .img-list img').attr("src-original") + ')"><img src="' + $('.article_details.text .lb-container:first-child .img-list img').attr("src-original") + '" /></div>' +
                    '</div>'
                    );

            if ($('.article_details.text .lb-container:first-child .la-section').attr('id')) {
                $('.article_details_cover').attr('id', $('.article_details.text .lb-container:first-child .la-section').attr('id'));
            }

            $('.article_details.text .lb-container:first-child').remove();

            $('.cover-image').css({
                'background-position': '0 0'
            });
        }
        if (scrollVal < winHeight - $('header').outerHeight()) {
            $('header').addClass('c-transparent');
        } else {
            $('header').removeClass('c-transparent');
        }
        $('.article_details.text').prepend($('.selected_filters_left'));
    }

    if ($('.albums-page-style-one').length) {
        $('.another-projects').remove();
        $('.to-the-top').remove();
        $('.albums').wrapInner('<div id="cover-slider" class="fullpage-wrapper"></div>');
        $('.album').each(function () {
            $(this).wrapInner('<div class="remove" />');
            $(this).prepend(
                    '<div class="section fp-section fp-table">' +
                    '<div class="view-project vp-112 regular "></div>' +
                    '<div class="cover-112 fullscreen-cover" data-bg-type="image" data-cover-id="112">' +
                    '<div class="cover-image" data-image-zoom="zoom"></div>' +
                    '</div>' +
                    '</div>'
                    );
            $(this).find('.cover-image').css({
                'background-image': 'url(' + $(this).find('.photo img').attr('src') + ')'
            });
            $(this).find('.view-project').append($(this).find('.photo a'));
            $(this).find('.view-project a').html($(this).find('.title').html());
            $(this).find('.remove').remove();
            $(this).find('.section').unwrap();
        });
        $('body').addClass('no-page-title');
        $('#content').html($('#cover-slider'));
    }

    if ($('.albums-page-style-two').length) {
        $('.another-projects').remove();
        $('.to-the-top').remove();
        var secondClass = '';
        if ($('.albums-page-style-two').hasClass('two-albums-in-line')) {
            secondClass = ' two-albums-in-line';
        } else if ($('.albums-page-style-two').hasClass('three-albums-in-line')) {
            secondClass = ' three-albums-in-line';
        } else if ($('.albums-page-style-two').hasClass('four-albums-in-line')) {
            secondClass = ' four-albums-in-line';
        }
        $('.albums').addClass('albums-wrp' + secondClass).wrapInner('<div class="albums-list"></div>');
        $('.album').each(function () {
            $(this).wrapInner('<div class="remove" />');
            $(this).find('.photo a').css({
                background: 'url(' + $(this).find($('img')).attr('src') + ') no-repeat',
                'background-size': 'cover',
                'background-position': 'center'
            }).append($(this).find('.title'));
            $(this).prepend($(this).find('.photo a'));
            $(this).find('.remove').remove();
            $(this).find('a').unwrap();
        });
        $('#content').html($('.albums-wrp'));
        $('.album_description_additional').css('padding', 0)
    }


    if ($('.article_details.article_details_news.short').length) {
        $('.article_details.article_details_news.short').each(function () {
            var width = $(this).find('.article_img').parent().outerWidth(true),
                height = 9 - (9 * (((16 - width) * 100) / 16) / 100);
            $(this).find('.article_img').width(width).height(height);
        });
    }


    if ($('.article_details.article_details_news.full').length) {
        $('.img-description').each(function () {
            if ($.trim($(this).text())) {
                $(this).wrapInner('<span />');
            }
        });

        if (!$('.blocks.metki a').length) {
            $('.blocks.metki').remove();
        }
        
        if (!$('.blocks.blocks_right h6').length) {
            $('.blocks.blocks_right').remove();
        }

        $('.article_details.article_details_news.full h2').wrapInner('<span />');
    }

    if ($('.article_details.article_details_news.full .last_news').length) {
        $('.article_details.article_details_news.full .last_news li .news_img_block .news_img').each(function (index, el) {
            $(this).css({
                'background': 'url(' + $(this).find('img').attr('src') + ') center center no-repeat',
                'background-size': 'cover'
            });
        });
    }


    $(document).on('focus', 'input[type=text], textarea', function () {
        if ($(this).val().length) {
            $(this).closest('.input_line').find('.label').css({'opacity': '1'});
        } else {
            $(this).closest('.input_line').find('.label').css({'opacity': '0'});
        }
        $(this).blur(function () {
            if ($(this).val().length) {
                $(this).closest('.input_line').find('.label').css({'opacity': '1'});
            } else {
                $(this).closest('.input_line').find('.label').css({'opacity': '0'});
            }
        });
        $(this).keydown(function () {
            if ($(this).val().length) {
                $(this).closest('.input_line').find('.label').css({'opacity': '1'});
            } else {
                $(this).closest('.input_line').find('.label').css({'opacity': '0'});
            }
        });
        $(this).keyup(function () {
            if ($(this).val().length) {
                $(this).closest('.input_line').find('.label').css({'opacity': '1'});
            } else {
                $(this).closest('.input_line').find('.label').css({'opacity': '0'});
            }
        });
    });



    $(window).on('load', function () {
        var winWidth = $(window).width(),
                winHeight = $(window).height();

        if ($('#cover-slider').length) {
            $('body').addClass('has-fullpage');

            $('#wrapper').height(winHeight);
            $('.cover-image').height(winHeight);

            var anchors = [];
            $('#cover-slider .view-project a').each(function (index) {
                var anchor = $(this).attr('href').slice(1, -1);
                anchor = anchor.split('/');
                anchor = anchor[anchor.length - 1]
                anchor = anchor.slice(0, -6);
                anchors.push(anchor || 'album' + index);
            });

            $('#cover-slider').fullpage({
                anchors: anchors,
                navigation: true,
                navigationPosition: 'right',
                animateAnchor: false,
                scrollingSpeed: 900,
                controlArrows: false,
                normalScrollElements: '#fullscreen-menu, #project-panel-header, .project-panel-thumbs'
            });
        }

        if ($('#gallery').length) {
            $('.fullscreen-cover').width(winWidth).height(winHeight);
        }

        if ($('.block_conteiner_wrp').length) {
            if (scrollVal < $('.block_conteiner_wrp').offset().top - $('header').outerHeight()) {
                $('header').addClass('c-transparent');
                $('.to-the-top').fadeOut();
            } else {
                $('header').removeClass('c-transparent');
                $('.to-the-top').fadeIn();
            }
        }

        if ($('.article_details.article_details_news.full .img-preview').length) {
            $('.img-preview').each(function () {
                if (winWidth > 767) {
                    if ($(this).closest('.images-2-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    } else if ($(this).closest('.images-3-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 3,
                            minColumns: 3
                        });
                    } else if ($(this).closest('.images-5-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 5,
                            minColumns: 5
                        });
                    } else if (!$(this).closest('.gallery-hard-line-2').length && !$(this).closest('.gallery-hard-line-3').length && !$(this).closest('.gallery-hard-line-4').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 4,
                            minColumns: 4
                        });
                    }
                } else if (winWidth > 567) {
                    if ($(this).closest('.images-2-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    } else if ($(this).closest('.images-3-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 3,
                            minColumns: 3
                        });
                    } else if ($(this).closest('.images-5-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 4,
                            minColumns: 4
                        });
                    } else if (!$(this).closest('.gallery-hard-line-2').length && !$(this).closest('.gallery-hard-line-3').length && !$(this).closest('.gallery-hard-line-4').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 4,
                            minColumns: 4
                        });
                    }
                } else if (winWidth > 480) {
                    if ($(this).closest('.images-2-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    } else if ($(this).closest('.images-3-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 3,
                            minColumns: 3
                        });
                    } else if ($(this).closest('.images-5-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 3,
                            minColumns: 3
                        });
                    } else if (!$(this).closest('.gallery-hard-line-2').length && !$(this).closest('.gallery-hard-line-3').length && !$(this).closest('.gallery-hard-line-4').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 3,
                            minColumns: 3
                        });
                    }
                } else {
                    if ($(this).closest('.images-2-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    } else if ($(this).closest('.images-3-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    } else if ($(this).closest('.images-5-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    } else if (!$(this).closest('.gallery-hard-line-2').length && !$(this).closest('.gallery-hard-line-3').length && !$(this).closest('.gallery-hard-line-4').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    }
                }
            });
        }

        $('.article_details.article_details_news.full .img-slider').each(function (index) {
            var slideList = [],
                    slideImgSrc = [];
            $(this).find('.swiper-slide:not(.swiper-slide-duplicate)').each(function () {
                $(this).wrapInner('<li class="swiper-slide" />');
                slideList.push($(this).html());
                slideImgSrc.push($(this).find('img').attr('src'));
            });

            var newSlideListHtml = "";
            for (var i = 0; i < slideList.length; i++) {
                newSlideListHtml += slideList[i];
            }

            $(this).before(
                    '<div class="img-list-wrapper img-slider new-img-slider swiper-container swiper-container-' + index + '">' +
                    '<ul class="img-list swiper-wrapper swiper-wrapper-' + index + '">' +
                    newSlideListHtml +
                    '</ul>' +
                    '<div class="swiper-pagination swiper-pagination-' + index + '"></div>' +
                    '<div class="swiper-button-next swiper-button-next-' + index + '"></div>' +
                    '<div class="swiper-button-prev swiper-button-prev-' + index + '"></div>' +
                    '</div>'
                    );

            $(this).remove();

            var swiper = new Swiper('.swiper-container-' + index, {
                pagination: '.swiper-pagination-' + index,
                paginationClickable: true,
                nextButton: '.swiper-button-next-' + index,
                prevButton: '.swiper-button-prev-' + index,
                spaceBetween: 30,
                observer: true
            });

            $('.swiper-pagination-' + index).after('<div class="new-swiper-pagination new-swiper-pagination-' + index + '"></div>');

            $('.swiper-pagination-' + index + ' .swiper-pagination-bullet').each(function (indexSlide) {
                $(this).clone().addClass('new-swiper-pagination-bullet').removeClass('swiper-pagination-bullet').appendTo($('.new-swiper-pagination-' + index));
            });
            $('.new-swiper-pagination-' + index + ' .new-swiper-pagination-bullet').each(function (indexPagination) {
                if ($(this).hasClass('swiper-pagination-bullet-active')) {
                    $(this).removeClass('swiper-pagination-bullet-active').addClass('new-swiper-pagination-bullet-active')
                }
                $(this).css({
                    "background": "url(" + slideImgSrc[indexPagination] + ") center center no-repeat",
                    "background-size": "cover"
                });
                $(this).on('click', function () {
                    $('.swiper-pagination-' + index + ' .swiper-pagination-bullet:nth-child(' + (indexPagination + 1) + ')').trigger('click');
                    $(this).parent().find('.new-swiper-pagination-bullet-active').removeClass('new-swiper-pagination-bullet-active');
                    $(this).addClass('new-swiper-pagination-bullet-active');
                });
            });
            if ($('.new-swiper-pagination-' + index + ' .new-swiper-pagination-bullet').length > 4) {
                $('.new-swiper-pagination-' + index).addClass('mobile-hide');
            }
        });
    });




    $(window).on('scroll', function () {
        var winWidth = $(window).width(),
                winHeight = $(window).height(),
                scrollVal = $(window).scrollTop();

        if ($('.block_conteiner_wrp').length) {
            if (scrollVal < $('.block_conteiner_wrp').offset().top - $('header').outerHeight()) {
                $('header').addClass('c-transparent');
                $('.to-the-top').fadeOut();
            } else {
                $('header').removeClass('c-transparent');
                $('.to-the-top').fadeIn();
            }
        }

        if ($('.article_details.text').length) {
            if (scrollVal < 500) {
                $('.to-the-top').fadeOut();
            } else {
                $('.to-the-top').fadeIn();
            }

            if ($('.article_details.text .lb-container:first-child .img-list').length) {
                $('.cover-image').css({
                    'background-position': '0 ' + (scrollVal * 100 / winHeight) + '%'
                });
                if (scrollVal < winHeight - $('header').outerHeight()) {
                    $('header').addClass('c-transparent');
                } else {
                    $('header').removeClass('c-transparent');
                }
            }
        }
    });




    $(window).on('resize', function () {
        var winWidth = $(window).width(),
                winHeight = $(window).height();

        if ($('#cover-slider').length) {
            $('#wrapper').height(winHeight);
            $('.cover-image').height(winHeight);
        }

        if ($('#gallery').length) {
            $('.fullscreen-cover').width(winWidth).height(winHeight);
        }

        if ($('.another-projects').length) {
            $('.another-projects .album .photo a').each(function () {
                var width = $(this).find('.photo-wrapper').closest('.photo').width(),
                        height = 3 - (3 * (((4 - width) * 100) / 4) / 100);
                $(this).find('.photo-wrapper').width(width).height(height);
            });
        }

        if ($('.article_details.article_details_news.short').length) {
            $('.article_details.article_details_news.short').each(function () {
                var width = $(this).find('.article_img').parent().outerWidth(true),
                        height = 9 - (9 * (((16 - width) * 100) / 16) / 100);
                $(this).find('.article_img').width(width).height(height);
            });
        }

        if ($('.img-preview').length) {
            $('.img-preview').each(function () {
                if (winWidth > 767) {
                    if ($(this).closest('.images-2-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    } else if ($(this).closest('.images-3-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 3,
                            minColumns: 3
                        });
                    } else if ($(this).closest('.images-5-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 5,
                            minColumns: 5
                        });
                    } else if (!$(this).closest('.gallery-hard-line-2').length && !$(this).closest('.gallery-hard-line-3').length && !$(this).closest('.gallery-hard-line-4').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 4,
                            minColumns: 4
                        });
                    }
                } else if (winWidth > 567) {
                    if ($(this).closest('.images-2-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    } else if ($(this).closest('.images-3-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 3,
                            minColumns: 3
                        });
                    } else if ($(this).closest('.images-5-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 4,
                            minColumns: 4
                        });
                    } else if (!$(this).closest('.gallery-hard-line-2').length && !$(this).closest('.gallery-hard-line-3').length && !$(this).closest('.gallery-hard-line-4').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 4,
                            minColumns: 4
                        });
                    }
                } else if (winWidth > 480) {
                    if ($(this).closest('.images-2-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    } else if ($(this).closest('.images-3-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 3,
                            minColumns: 3
                        });
                    } else if ($(this).closest('.images-5-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 3,
                            minColumns: 3
                        });
                    } else if (!$(this).closest('.gallery-hard-line-2').length && !$(this).closest('.gallery-hard-line-3').length && !$(this).closest('.gallery-hard-line-4').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 3,
                            minColumns: 3
                        });
                    }
                } else {
                    if ($(this).closest('.images-2-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    } else if ($(this).closest('.images-3-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    } else if ($(this).closest('.images-5-per-line').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    } else if (!$(this).closest('.gallery-hard-line-2').length && !$(this).closest('.gallery-hard-line-3').length && !$(this).closest('.gallery-hard-line-4').length) {
                        $(this).find('.photoswipe-slider').shapeshift({
                            autoHeight: true,
                            enableDrag: false,
                            enableCrossDrop: false,
                            align: 'left',
                            gutterX: 0,
                            gutterY: 0,
                            paddingX: 0,
                            paddingY: 0,
                            columns: 2,
                            minColumns: 2
                        });
                    }
                }
            });
        }

        $('.article_details.article_details_news.full .img-slider').each(function (index) {
            var slideImgSrc = [];
            $(this).find('.swiper-slide:not(.swiper-slide-duplicate)').each(function () {
                slideImgSrc.push($(this).find('img').attr('src'));
            });

            setTimeout(function () {
                $('.swiper-pagination-' + index + ' .swiper-pagination-bullet').each(function (indexSlide) {
                    $(this).css({
                        "background": "url(" + slideImgSrc[indexSlide] + ") center center no-repeat",
                        "background-size": "cover"
                    });
                });
            }, 1000);
        });
    });


    if ($('.img-list-wrapper.img-preview').length || $('.block_conteiner').length) {
        $(document).ready(function () {
            initPhotoSwipeFromDOM('.photoswipe-slider');
        });
    }
});