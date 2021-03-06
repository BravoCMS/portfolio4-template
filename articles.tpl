
<{extends 'layout/layout.tpl'}>

<{block name="template-name"}>
    /articles.tpl
<{/block}>

<{block name=title}>
    <{$module.name|htmlspecialchars}>
<{/block}>

<{block name="module"}>

    <h1>
        <{$module.name|htmlspecialchars}>
    </h1>

    <div class="articles_desc">
        <div class="out-ext-info">
            <{$module.text}>
        </div>
    </div>


    <div class="articles_container">
        <div class="articles_container_wrp">>
            <{foreach $articles as $article}>
                <div class="article_details article_details_news short">
                    <div class="article-desc">
                        <a href="<{$article.relative_url}>" title="<{$article.name|escape}>">
                            <span class="article_img" style="background: url(<{$article.cover.photo_file_small}>) center center / cover no-repeat;">
                                <img src="<{$article.cover.photo_file_small}>" alt="img">
                            </span>
                        </a>
                        <h5 class="date">
                            <{$article.publish_date|htmlspecialchars}>
                        </h5>
                        <h3>
                            <a href="<{$article.relative_url}>">
                                <{$article.short_name|htmlspecialchars}>
                            </a>
                        </h3>
                        <p class="desc_short_news">
                            <{$article.intro|htmlspecialchars}>
                        </p>
                    </div>
                </div>
            <{/foreach}>
        </div>
    </div>

    <div class="row pagination_wrp">
        <{include 'misc/pagination.tpl'}>
    </div>

<{/block}>
