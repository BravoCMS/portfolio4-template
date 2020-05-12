jQuery(function ($) {
    console.log('can edit');

    // edit
    // $(window).on('load', function () {
        // change logo api
        $('<a class="change-logo-btn"><i class="material-icons">mode_edit</i></a>').on('click', function (e) {
            e.preventDefault();

            $.ajax({
                url: URL + 'ajax/web_admin/logo/',
                dataType: 'jsonp',
                success: function (data) {
                    // console.log(data);
                    var activeTextLogoClass = data.settings.type_logo == 'text' ? ' active' : '',
                        activeImageLogoClass = data.settings.type_logo == 'image' ? ' active' : '',
                        selectedTextLogoClass = data.settings.type_logo == 'text' ? ' selected="selected"' : '',
                        selectedImageLogoClass = data.settings.type_logo == 'image' ? ' selected="selected"' : '';
                    $('body').append(
                        '<div class="popup change-logo">'+
                            '<div class="popup__container">'+
                                '<div class="popup__header">'+
                                    '<div class="popup__header-top">'+
                                        '<span class="popup__header-title">'+
                                            'Логотип'+
                                        '</span>'+
                                        '<span class="close-popup"><i class="material-icons">close</i></span>'+
                                    '</div>'+
                                    '<div class="popup__header-settings">'+
                                        '<div class="logo-toggle-btns">'+
                                            '<a class="logo-toggle-btn'+activeTextLogoClass+'" data-logo-type="text">'+
                                                '<span>Тт</span>'+
                                                'Текст'+
                                            '</a>'+
                                            '<a class="logo-toggle-btn'+activeImageLogoClass+'" data-logo-type="image">'+
                                                '<span><i class="material-icons">photo_size_select_actual</i></span>'+
                                                'Изображение'+
                                            '</a>'+
                                        '</div>'+
                                        '<div class="logo-select hide hidden">'+
                                            '<select name="type_logo" id="logo-select">'+
                                                '<option value="image"'+selectedImageLogoClass+'>'+
                                                    'Изображение'+
                                                '</option>'+
                                                '<option value="text"'+selectedTextLogoClass+'">'+
                                                    'Текст'+
                                                '</option>'+
                                            '</select>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="popup__body">'+
                                    '<div class="logo-image logo-toggle'+activeImageLogoClass+'">'+
                                        '<div class="logo-image-img">'+
                                            '<img src="'+data.settings.logo+'">'+
                                        '</div>'+
                                        '<div class="logo-img-btns">'+
                                            '<a class="logo-img-btn">'+
                                                'Выбрать изобржение'+
                                            '</a>'+
                                            '<input type="file" class="hide" name="logo">'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="logo-text logo-toggle'+activeTextLogoClass+'">'+
                                        '<div class="logo-text-input">'+
                                            '<input type="text" class="text_logo" name="text_logo" value="'+data.settings.text_logo+'" autofocus="" style="font-family: '+data.settings.text_logo_font+' !important; font-size: '+data.settings.text_logo_size+'pt; color: '+data.settings.text_logo_color+';">'+
                                        '</div>'+
                                        '<div class="logo-text-settings">'+
                                            '<div class="logo-text-font">'+
                                                '<div class="input-name">Шрифт</div>'+
                                                '<div class="logo-text-font-select">'+
                                                    '<select class="text_logo_font" name="text_logo_font"></select>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="logo-text-size">'+
                                                '<div class="input-name">Размер</div>'+
                                                '<div class="logo-text-size-select">'+
                                                    '<select class="text_logo_size" name="text_logo_size"></select>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="logo-text-color">'+
                                                '<div class="input-name">Цвет</div>'+
                                                '<div class="logo-text-color-input">'+
                                                    '<input type="text" class="js-colorpicker text_logo_color" name="text_logo_color" value="'+data.settings.text_logo_color+'" style="background-color: '+data.settings.text_logo_color+';">'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="popup__footer">'+
                                    '<a class="popup__submit-btn">'+
                                        'OK'+
                                    '</a>'+
                                    '<div style="display: inline-block; padding-left: 10px;"></div>'+
                                    '<a class="popup__cansel-btn">'+
                                        'Отмена'+
                                    '</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
                    );

                    for (var prop in data.fonts) {
                        if (data.fonts[prop] == data.settings.text_logo_font) {
                            $('.text_logo_font').append('<option value="'+prop+'" selected="selected">'+data.fonts[prop]+'</option>');
                        } else {
                            $('.text_logo_font').append('<option value="'+prop+'">'+data.fonts[prop]+'</option>');
                        }

                    }

                    for (var prop in data.font_sizes) {
                        if (data.font_sizes[prop] == data.settings.text_logo_size) {
                            $('.text_logo_size').append('<option value="'+prop+'" selected="selected">'+data.font_sizes[prop]+'</option>');
                        } else {
                            $('.text_logo_size').append('<option value="'+prop+'">'+data.font_sizes[prop]+'</option>');
                        }
                    }

                    $('.close-popup, .popup__cansel-btn').on('click', function (e) {
                        e.preventDefault();
                        $(this).closest('.popup').remove();
                    });

                    $('.logo-toggle-btn').on('click', function (e) {
                        e.preventDefault();
                        $(this).addClass('active').siblings().removeClass('active');
                        $('.logo-select option[value="'+$(this).attr('data-logo-type')+'"]').prop('selected', true);
                        $('.logo-'+$(this).attr('data-logo-type')).addClass('active').siblings().removeClass('active');
                    });

                    $('.logo-img-btn').on('click', function (e) {
                        e.preventDefault();
                        $(this).siblings('[type="file"]').trigger('click');
                    });

                    $('.text_logo_font').on('change', function (e) {
                        e.preventDefault();
                        $('.logo-text-input input').css('font-family', $(this).val());
                    });

                    $('.text_logo_size').on('change', function (e) {
                        e.preventDefault();
                        $('.logo-text-input input').css('font-size', ($(this).val()+'pt'));
                    });

                    $('.text_logo_color').on('change', function (e) {
                        e.preventDefault();
                        $('.logo-text-input input').css('color', $(this).val());
                    });

                    var files;
                    $('.change-logo input[type=file]').change(function(){
                        files = this.files;
                    });

                    $('.change-logo .popup__submit-btn').on('click', function(event) {
                        event.stopPropagation();
                        event.preventDefault();

                        var data = new FormData();
                        data.append($('#logo-select').attr('name'), $('#logo-select').val());
                        if (files) data.append('logo', files[0]);
                        data.append('text_logo', $('.text_logo').val());
                        data.append('text_logo_font', $('.text_logo_font').val());
                        data.append('text_logo_size', $('.text_logo_size').val());
                        data.append('text_logo_color', $('.text_logo_color').val());

                        $.ajax({
                            url: URL + 'ajax/web_admin/logo/',
                            type: 'POST',
                            data: data,
                            cache: false,
                            dataType: 'jsonp',
                            processData: false,
                            contentType: false,
                            success: function (response, textStatus, jqXHR) {
                                if (typeof response.error === 'undefined') {
                                    // window.location.reload();
                                    if (response.settings.type_logo == 'image') {
                                        $('a.logo').html('<img src="'+response.settings.logo+'">');
                                    } else {
                                        $('a.logo').html(
                                            '<div class="text-logo">'+response.settings.text_logo+'</div>'+
                                            '<style>'+
                                                '.text-logo {'+
                                                    'color: '+response.settings.text_logo_color+';'+
                                                    'font-size: '+response.settings.text_logo_size+'pt;'+
                                                    'font-family: "'+response.settings.text_logo_font+'";'+
                                                '}'+
                                            '</style>'
                                        );
                                    }
                                    $('.popup.change-logo').remove();
                                } else {
                                    console.log('ОШИБКИ ОТВЕТА сервера: ' + response.error);
                                }
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                console.log('ОШИБКИ AJAX запроса: ' + textStatus);
                            }
                        });
                    });
                }
            });

        }).appendTo('div.logo');


        // change language codes api
        $('.view-project a').wrapInner('<span class="language-code-value" />');
        $('<span class="change-language-codes-btn"><i class="material-icons">mode_edit</i></span>').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            var languageCode = $(this).parent().data('language-code'),
              $language_code_value = $('[data-language-code="' + languageCode + '"]').find('.language-code-value');

            $.ajax({
                url: URL + 'ajax/web_admin/interface_code/?code=' + languageCode,
                type: 'GET',
                cache: false,
                dataType: 'jsonp',
                success: function (data) {
                    console.log(data);
                    isHide = data.code[0].hide == "1" ? 'checked="checked" ' : '';
                    $('body').append(
                        '<div class="popup change-language-codes-popup">'+
                            '<div class="popup__container">'+
                                '<div class="popup__header">'+
                                    '<div class="popup__header-top">'+
                                        '<span class="popup__header-title">'+
                                            'Перевод интерфейса'+
                                        '</span>'+
                                        '<span class="close-popup"><i class="material-icons">close</i></span>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="popup__body">'+
                                    '<div class="language-codes-prop">'+
                                        '<div class="language-codes-label">'+
                                            'Значение'+
                                        '</div>'+
                                        '<div class="language-codes-input">'+
                                            '<input type="text" name="language_code" value="'+data.code[0].meaning+'" />'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="language-codes-prop">'+
                                        '<div class="language-codes-label">'+
                                            'Не показывать'+
                                        '</div>'+
                                        '<div class="language-codes-input">'+
                                            '<input type="checkbox" name="language_code_hide" '+ isHide +'/>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="popup__footer">'+
                                    '<a class="popup__submit-btn">'+
                                        'OK'+
                                    '</a>'+
                                    '<div style="display: inline-block; padding-left: 10px;"></div>'+
                                    '<a class="popup__cansel-btn">'+
                                        'Отмена'+
                                    '</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
                    );

                    $('.close-popup, .popup__cansel-btn').on('click', function (e) {
                        e.preventDefault();
                        $(this).closest('.popup').remove();
                    });

                    $('.change-language-codes-popup .popup__submit-btn').on('click', function(event) {
                        event.stopPropagation();
                        event.preventDefault();

                        var data = {
                          code: [{
                            code: 'more_photos',
                            hide: $('[name="language_code_hide"]').prop('checked') ? '1' : '0',
                            meaning: $('[name="language_code"]').val()
                          }]
                        };

                        $.ajax({
                            url: URL + 'ajax/web_admin/interface_code/',
                            type: 'POST',
                            data: data,
                            cache: false,
                            dataType: 'jsonp',
                            success: function (response, textStatus, jqXHR) {
                                if (typeof response.error === 'undefined') {
                                    // window.location.reload();
                                    console.log('response', response);
                                    if (response.success) {
                                      $language_code_value.text(response._post.code[0].meaning);
                                    }

                                    $('.change-language-codes-popup').remove();
                                } else {
                                    console.log('ОШИБКИ ОТВЕТА сервера: ' + response.error);
                                }
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                console.log('ОШИБКИ AJAX запроса: ' + textStatus);
                            }
                        });
                    });
                }
            });
        }).appendTo('.view-project a');

        $('.view-project a')
          .addClass('change-language-codes')
          .attr('data-language-code', 'more_photos');
























        // change menu api
        $('.menu-item a').addClass('change-menu-item')
        $('<span class="change-menu-item-btn"><i class="material-icons">mode_edit</i></span>').on('click', function (e) {
              e.preventDefault();
              e.stopPropagation();

            var pageId = $(this).closest('li').data('page-id'),
                $menuItemText = $(this).closest('a').find('.menu-item-text'),
                menuItemText = $(this).closest('a').find('.menu-item-text').text().trim();

            $('body').append(
                '<div class="popup change-menu-item-popup">'+
                    '<div class="popup__container">'+
                        '<div class="popup__header">'+
                            '<div class="popup__header-top">'+
                                '<span class="popup__header-title">'+
                                    'Управление меню (страницами)'+
                                '</span>'+
                                '<span class="close-popup"><i class="material-icons">close</i></span>'+
                            '</div>'+
                        '</div>'+
                        '<div class="popup__body">'+
                            '<div class="menu-item-prop">'+
                                '<div class="menu-item-label">'+
                                    'Значение'+
                                '</div>'+
                                '<div class="menu-item-input">'+
                                    '<input type="text" name="page_name_value" value="'+menuItemText+'" />'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="popup__footer">'+
                            '<a class="popup__submit-btn">'+
                                'OK'+
                            '</a>'+
                            '<div style="display: inline-block; padding-left: 10px;"></div>'+
                            '<a class="popup__cansel-btn">'+
                                'Отмена'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'
            );

            $('.close-popup, .popup__cansel-btn').on('click', function (e) {
                e.preventDefault();
                $(this).closest('.popup').remove();
            });

            $('.change-menu-item-popup .popup__submit-btn').on('click', function(event) {
                event.stopPropagation();
                event.preventDefault();

                var data = {
                    page: {
                        page_name: $('[name="page_name_value"]').val()
                    }
                };

                $.ajax({
                    url: URL + 'ajax/web_admin/page/?id=' + pageId,
                    type: 'POST',
                    data: data,
                    cache: false,
                    dataType: 'jsonp',
                    success: function (response, textStatus, jqXHR) {
                        if (typeof response.error === 'undefined') {
                            console.log('response', response);
                            if (response.success) {
                                $menuItemText.text(response._post.page.page_name);
                            }

                            $('.change-menu-item-popup').remove();
                        } else {
                            console.log('ОШИБКИ ОТВЕТА сервера: ' + response.error);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log('ОШИБКИ AJAX запроса: ' + textStatus);
                    }
                });
            });
        }).appendTo('.menu-item a');

    // });
});
