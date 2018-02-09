<{extends 'layout/layout.tpl'}><{block name="template-name"}>    /articles.tpl<{/block}><{block name=title}>    <{$module.name|htmlspecialchars}><{/block}><{block name="module"}>    <h1>        <{$module.name|htmlspecialchars}>    </h1>    <{$module.text}>    <div class="row">        <{foreach $articles as $article}>            <div class="col-6">                <{if $article.cover}>                    <a href="<{$article.relative_url}>" title="<{$article.name|escape}>">                        <img src="<{$article.cover.photo_file_small}>" style="width: 100%;" />                    </a>                <{/if}>                <a href="<{$article.relative_url}>" title="<{$article.name|escape}>">                    <{$article.short_name|htmlspecialchars}>                </a>            </div>        <{/foreach}>    </div>    <div class="row">        <{include 'misc/pagination.tpl'}>    </div><{/block}>