
<{extends 'layout/layout.tpl'}>

<{block name="template-name"}>
    /article.tpl
<{/block}>

<{block name="head" append}>
    <meta property="og:image" content="<{absolute_url $article.cover.photo_file_small}>"/>
    <meta property="og:image:width" content="<{$article.cover.photo_small_width}>" />
    <meta property="og:image:height" content="<{$article.cover.photo_small_height}>" />
    <meta property="og:image:alt" content="<{if $article.cover.photo_title}><{$article.cover.photo_title}><{else}>Обложка <{$article.name|htmlspecialchars}><{/if}>"/>
<{/block}>

<{block name=title}>
    <{$article.title|htmlspecialchars}>
<{/block}>

<{block name="module"}>
    <div class="full_news_content">
        <div class="article_details article_details_news full">
            <h5 class="date"><span><{$article.publish_date|htmlspecialchars}></span></h5>

            <h1>
                <{$article.name|htmlspecialchars}>
            </h1>

            <span class="article_full_img_block">
                <span class="article_full_img">
                    <img src="<{$article.cover.photo_file}>" alt="<{if $article.cover.photo_title}><{$article.cover.photo_title}><{else}>Обложка <{$article.name|htmlspecialchars}><{/if}>">
                </span>
            </span>

            <article class="full_desc_news out-ext-info">
                <{$article.text}>
            </article>
        </div>
    </div>
    <img id="handler_img" src="<{$article.cover.photo_file}>" alt="<{$article.cover.photo_title}>" style="width: 0; height: 0; visibility: hidden;">
<{/block}>
