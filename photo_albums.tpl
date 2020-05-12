
<{extends 'layout/layout.tpl'}>

<{block name="template-name"}>
    /photo_albums.tpl
<{/block}>

<{block name=title}>
    <{$module.name|htmlspecialchars}>
<{/block}>

<{block name="head" append}>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.6.6/jquery.fullPage.min.js"></script>
<{/block}>

<{block name="module"}>

    <h1 class="selected_filters_left">
        <{$module.name|htmlspecialchars}>
    </h1>

    <{$module.text}>

    <div id="wrapper">
        <div id="content">
            <div id="cover-slider" class="fullpage-wrapper">
                <{foreach $photo_albums as $photo_album}>
                    <div class="section fp-section fp-table">
                        <div class="view-project vp-112 regular ">
                            <a href="<{$photo_album.relative_url}>" title="<{$photo_album.name|escape}>">
                                <{$photo_album.short_name|htmlspecialchars}>
                            </a>
                        </div>
                        <div class="cover-112 fullscreen-cover" data-bg-type="image" data-cover-id="112">
                            <a href="<{$photo_album.relative_url}>">
                                <div class="cover-image" data-image-zoom="zoom" <{if $photo_album.cover}>style="background-image: url(<{$photo_album.cover.photo_file}>);"<{/if}>></div>
                            </a>
                        </div>
                    </div>
                <{/foreach}>
            </div>
        </div>
    </div>

    <div class="row pagination_wrp">
        <{include 'misc/pagination.tpl'}>
    </div>

<{/block}>
