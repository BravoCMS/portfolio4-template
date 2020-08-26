
<{extends 'layout/html.tpl'}>

<{block name=title}>

<{/block}>

<{block name=favicon}>
<{if $site.favicon}>
    <link rel="shortcut icon" href="<{$site.favicon}>"/>
<{else}>
    <link rel="shortcut icon" href="<{file 'assets/favicon.ico'}>"/>
<{/if}>
<{/block}>

<{block name="head"}>
    <{custom_code "head_open"}>
    <{strip}>
        <script type="text/javascript">
            var t = {
                _codes: <{t cat="js" json}>,
                _get_suffix: function (count) {
                    if (count == 1) {
                        return "-1";
                    } else if (count % 10 == 1 && count > 20 && count % 100 != 11) {
                        return "-mod1n11";
                    } else if (count % 10 > 1 && count % 10 < 5 && count % 100 > 20 || count % 100 < 5 && count % 100 > 1) {
                        return "-mod234n1x";
                    } else {
                        return "-many";
                    }
                },
                text: function (key, count) {
                    var suffix = typeof count === "undefined" ? "" : this._get_suffix(count);
                    var t = "";

                    if (suffix === "" || typeof (t = this._codes[key + suffix]) === "undefined") {
                        if (typeof (t = this._codes[key]) === "undefined") {
                            t = "[js_text." + key + suffix + "]";
                        }
                    }

                    return t;
                }
            };

            var URL = "<{$site.url_part|escape}>";
        </script>
    <{/strip}>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link href="<{file 'assets/plugins/swiper/swiper.min.css'}>" rel="stylesheet" type="text/css"/>
    <link href="<{file 'assets/plugins/Article2/css/bootstrap.grid.css'}>" rel="stylesheet" />
    <link href="<{file 'assets/plugins/Article2/css/custom-article.css'}>" rel="stylesheet" />
    <link href="<{file 'assets/plugins/photoswipe/css/photoswipe.css'}>" rel="stylesheet">
    <link href="<{file 'assets/plugins/photoswipe/css/photoswipe-default-skin.css'}>" rel="stylesheet">
    <link href="<{file 'assets/plugins/photoswipe/css/photoswipe-style.css'}>" rel="stylesheet">
    <link href="<{file 'assets/css/style.css'}>" rel="stylesheet" type="text/css" />

    <script type="text/javascript" src="<{file 'assets/plugins/jquery-3.2.1.min.js'}>"></script>
    <script type="text/javascript" src="<{file 'assets/plugins/jquery.mousewheel.js'}>"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script type="text/javascript" src="<{file 'assets/plugins/jquery.link-submit.js'}>"></script>

    <script src="<{file 'assets/plugins//jquery.numeric.js'}>" type="text/javascript" charset="UTF-8"></script>
    <script type="text/javascript" src="<{file 'assets/plugins/jquery.form.js'}>" ></script>
    <script type="text/javascript" src="<{file 'assets/plugins/company_form.js'}>" ></script>
    <script type="text/javascript" src="<{file 'assets/plugins/jquery.lightbox-0.5.min.js'}>"></script> 
    <script type="text/javascript" src="<{file 'assets/plugins/swiper/swiper.min.js'}>"></script>
    <script type="text/javascript" src="<{file 'assets/plugins/Article2/js/custom-article.js'}>"></script>

    <script src="<{file 'assets/plugins/photoswipe/js/photoswipe.min.js'}>"></script>
    <script src="<{file 'assets/plugins/photoswipe/js/photoswipe-ui-default.min.js'}>"></script>
    <script src="<{file 'assets/plugins/photoswipe/js/photoswipe-index.js'}>"></script>

    <script type="text/javascript" src="<{file 'assets/plugins/jquery.shapeshift.js'}>"></script>
    <script type="text/javascript" src="<{file 'assets/js/script.js'}>"></script>
    
    <{if $is_web_admin}>
    <script type="text/javascript" src="<{file 'assets/js/web-admin.js'}>"></script>
    <link href="<{file 'assets/edit/edit.css'}>" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="<{file 'assets/edit/edit.js'}>"></script>
    <{/if}>
    <{custom_code "head_close"}>
<{/block}>

<{block name="body"}>
    <div class="body-wrapper">
        <{custom_code "body_open"}>

        <{*<div class="container" style="padding-top: 70px; position: fixed; left: 0; right: 0; top: 0; z-index: 2;">
            <div class="alert alert-dark" role="alert">
                <{t "Template:" escape}>
                <strong>
                    <{block name="template-name"}>
                        /layout.tpl
                    <{/block}>

                    <{if $__tf}>
                        <a href="?__tf=">
                            <b><{$__tf}></b>
                            - Вернуться к стандартному шаблону
                        </a>
                    <{/if}>
                </strong>

                <{if $smarty.get.template_debug === '1'}>
                    <a href="?" class="btn btn-sm btn-info float-right">
                        <{t "close_debug" escape}>
                    </a>

                    <{debug}>
                <{else}>
                    <a href="?template_debug=1" class="btn btn-sm btn-info float-right">
                        <{t "open_debug" escape}>
                    </a>
                <{/if}>
            </div>
        </div>*}>

        <header>
            <{custom_code "site_header"}>
            <div id="navbar-bg" class="navbar" data-navbar-opacity="1"></div>
            <div id="navbar">
                <div class="container">
                    <div class="row">
                        <div class="span12 navbar-inner <{if $template.template_customization.logo_position == 'center'}>logo_center<{/if}>">
                            <div class="logo twenty">
                                <a class="logo" href="<{$site.home_url}>" >
                                    <{if $site.logo.type === 'image'}>
                                        <div class="logo_img">
                                            <img src="<{$site.logo.image}>" alt="">
                                        </div>
                                    <{else}>
                                        <div class="text-logo">
                                            <{$site.logo.text|htmlspecialchars}>
                                        </div>
                                        <style>
                                            .text-logo {
                                                <{if $site.logo.text_color}>color:<{$site.logo.text_color}>;<{/if}>
                                                <{if $site.logo.text_size}>font-size:<{$site.logo.text_size}>pt;<{/if}>
                                                <{if $site.logo.text_font}>font-family:'<{$site.logo.text_font|escape}>';<{/if}>
                                            }
                                        </style>
                                    <{/if}>
                                </a>
                            </div>
                            <{if $site.languages|count > 1}>
                                <div class="language-select-form">
                                    <div class="language-active">
                                        <{$site.active_language.name|htmlspecialchars}>
                                    </div>
                                    <div class="block_language">
                                        <{foreach $site.languages as $language}>
                                            <a class="<{if $language.language_id == $site.active_language.language_id}>active<{/if}>" href="<{$language.page_url}>">
                                                <{$language.name|htmlspecialchars}>
                                            </a>
                                        <{/foreach}>
                                    </div>
                                </div>
                            <{/if}>
                            <div class="nav-wrapper">
                                <div class="controls">
                                    <a class="open-nav">
                                        <span class="nav-icon"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>


        <div id="fullscreen-menu" class="full-height">
            <div class="menu-inner">
                <nav class="fs-46px light">
                    <{get_menu "top" "top_menu"}>

                    <{if $top_menu.0|count}>
                        <ul class="header_menu_top menu" id="menu-roxana">
                            <{foreach $top_menu.0 as $page}>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page<{if $page.is_active}> active<{/if}>" data-page-id="<{$page.id}>">
                                    <a href="<{$page.href}>">
                                        <span class="menu-item-text">
                                            <{$page.page_name|htmlspecialchars}>
                                        </span>
                                    </a>
                                </li>
                            <{/foreach}>
                        </ul>
                    <{/if}>
                </nav>
                <div class="follow-links"></div>
            </div>
            <header>
                <div id="navbar-bg" class="navbar" data-navbar-opacity="1"></div>
                <div id="navbar">
                    <div class="container">
                        <div class="row">
                            <div class="span12 navbar-inner <{if $template.template_customization.logo_position == 'center'}>logo_center<{/if}>" style="margin-left: 24px;">
                                <div class="logo twenty">
                                    <a class="logo" href="<{$site.home_url}>">
                                        <{if $site.logo.type === 'image'}>
                                            <div class="logo_img">
                                                <img src="<{$site.logo.image}>" alt="">
                                            </div>
                                        <{else}>
                                            <span class="text-logo">
                                                <{$site.logo.text|htmlspecialchars}>
                                            </span>
                                            <style>
                                                .text-logo {
                                                    <{if $site.logo.text_color}>color:<{$site.logo.text_color}>;<{/if}>
                                                    <{if $site.logo.text_size}>font-size:<{$site.logo.text_size}>pt;<{/if}>
                                                    <{if $site.logo.text_font}>font-family:'<{$site.logo.text_font|escape}>';<{/if}>
                                                }
                                            </style>
                                        <{/if}>
                                    </a>
                                </div>
                                <{if $site.languages|count > 1}>
                                    <div class="language-select-form">
                                        <div class="language-active">
                                            <{$site.active_language.name|htmlspecialchars}>
                                        </div>
                                        <div class="block_language">
                                            <{foreach $site.languages as $language}>
                                                <a class="<{if $language.language_id == $site.active_language.language_id}>active<{/if}>" href="<{$language.page_url}>">
                                                    <{$language.name|htmlspecialchars}>
                                                </a>
                                            <{/foreach}>
                                        </div>
                                    </div>
                                <{/if}>
                                <div class="nav-wrapper">
                                    <div class="controls">
                                        <a class="open-nav">
                                            <span class="nav-icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

        <{block name="module"}>
        <{/block}>

        <footer class="footer">
            <{custom_code "footer"}>
            <div class="footer_container">
                <div class="copyright">
                    <p class="copyright_link"><{$site.name|htmlspecialchars}></p>
                    <p class="copyright_year">© <span class="year"><{$site.date_founded}> - <{0|as_date:"Y"}></span></p>
                </div>
                <div class="main_who_make">
                    <a href="http://artweb.red/" title="создание сайтов портфолио для фотографов, художников, моделей, дизайнеров и всех творческих людей">Создано на платформе artweb.red</a>
                </div>
                <div class="who_make">
                    <a href="http://artweb.red/" title="создание сайтов портфолио для фотографов, художников, моделей, дизайнеров и всех творческих людей">Создано на платформе</a>
                </div>

                <div class="counters">
                    <{custom_code "counters"}>
                </div>
            </div>
            <div class="footer-social-icons hidden">
                <i class="fa fa-facebook"></i>
                <i class="fa fa-instagram"></i>
                <i class="fa fa-vk"></i>
                <i class="fa fa-pinterest"></i>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-heart"></i>
                <i class="fa fa-google-plus"></i>
                <i class="fa fa-tumblr"></i>
                <i class="fa fa-linkedin"></i>
            </div>
        </footer>


        <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="pswp__bg"></div>
            <div class="pswp__scroll-wrap">
                <div class="pswp__container">
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                </div>
                <div class="pswp__ui pswp__ui--hidden">
                    <div class="pswp__top-bar">
                        <div class="pswp__counter"></div>
                        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                        <button class="pswp__button pswp__button--share" title="Share"></button>
                        <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                        <div class="pswp__preloader">
                            <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div class="pswp__share-tooltip"></div>
                    </div>
                    <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                    </button>
                    <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                    </button>
                    <div class="pswp__caption">
                        <div class="pswp__caption__center"></div>
                    </div>
                </div>
            </div>
        </div>

        <{custom_code "body_close"}>
    </div>
<{/block}>
