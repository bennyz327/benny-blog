import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o,c as t,e as d,a as e,b as a,d as s,f as l}from"./app-twqnMYKN.js";const r={},p=e("h1",{id:"nextcloud-aio-命令行升級維護筆記",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nextcloud-aio-命令行升級維護筆記","aria-hidden":"true"},"#"),a(" Nextcloud AIO 命令行升級維護筆記")],-1),u=e("p",null,"過年時除舊佈新整理房間時",-1),m=e("p",null,"因為移動了 Server 的位置，在重啟服務遇到需要手動更新的狀況",-1),h=l('<p>關機後重啟服務後，發現 Nextcloud 強制要求更新，我猜是因為我使用的 docker-compose 指定最新版本導致</p><p>因此 Nextcloud 直接進入維護鎖定模式，所以只能進入容器中使用 CLI 來手動更新了</p><h2 id="安裝背景" tabindex="-1"><a class="header-anchor" href="#安裝背景" aria-hidden="true">#</a> 安裝背景</h2><p>proxmox 平台中的一個 CT 中，用 Nextcloud AIO 自動部屬和控制所需的其他容器</p><h2 id="升級版本" tabindex="-1"><a class="header-anchor" href="#升級版本" aria-hidden="true">#</a> 升級版本</h2><p>27.XX (忘記紀錄) &gt; 27 版的最高版本 &gt; 28.0.2</p><h2 id="過程紀錄" tabindex="-1"><a class="header-anchor" href="#過程紀錄" aria-hidden="true">#</a> 過程紀錄</h2>',7),v={start:"0"},b=e("li",null,"在 porxmox 中選擇安裝 Nextcloud 的 CT ，進入命令行模式",-1),_={href:"https://github.com/nextcloud/all-in-one/discussions/2692",target:"_blank",rel:"noopener noreferrer"},x=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 進入跑 nextcloud 的 docker 容器中</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">--user</span> www-data <span class="token parameter variable">-it</span> nextcloud-aio-nextcloud <span class="token function">bash</span>

<span class="token comment"># Switch to the beta channel</span>
php occ config:system:set updater.release.channel <span class="token parameter variable">--value</span><span class="token operator">=</span>beta

<span class="token comment"># Run the update</span>
php updater/updater.phar --no-interaction --no-backup <span class="token operator">&amp;&amp;</span> php occ app:enable nextcloud-aio <span class="token parameter variable">--force</span>

<span class="token comment"># Switch back to the stable channel</span>
php occ config:system:set updater.release.channel <span class="token parameter variable">--value</span><span class="token operator">=</span>stable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依照 github 說明，第二步驟的 updater 可以多執行幾次</p><p>該命令一次只會升級一個小版本，等到不會升級後在進行下一步</p><p>但我這次只執行一次就升到版本 27 的最新版本了，第二次執行就會直接結束</p><ol start="2"><li>升級 app 如果要繼續升級到版本 28，這次需要先進行 app 升級</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以下指令需要在 nextcloud 的 docker 容器內執行</span>

php occ upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常會在這邊遇到錯誤，特別是如果安裝了一些有的沒有的額外 app</p><p>這時可以查看錯誤 log，鎖定沒辦法更新的 app 名稱，然後使用 occ 命令停用該 app</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以下指令需要在 nextcloud 的 docker 容器內執行</span>

<span class="token comment"># 列出所有 app 名單</span>
php occ app:list

<span class="token comment"># 停用特定 app</span>
php occ app:disable <span class="token variable">$appname</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>停用之後再次運行，應該就沒問題了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以下指令需要在 nextcloud 的 docker 容器內執行</span>

php occ upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>升級完成之後可以進行步驟 1 再次進行主程式升級</p><ol start="3"><li>反覆步驟 1~2，可以一步步將版本升級至最新版本</li><li>完成主程式的更新會自動解除維護模式，就可以正常使用 Nextcloud 了</li></ol><h2 id="補充資料" tabindex="-1"><a class="header-anchor" href="#補充資料" aria-hidden="true">#</a> 補充資料</h2>`,14),k={href:"https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/occ_command.html",target:"_blank",rel:"noopener noreferrer"};function g(f,N){const n=i("ExternalLinkIcon");return o(),t("div",null,[p,u,m,d(" more "),h,e("ol",v,[b,e("li",null,[a("先升級主程式 "),e("a",_,[a("命令參考 (github.com)"),s(n)])])]),x,e("ul",null,[e("li",null,[e("a",k,[a("Nextcloud 用 OCC 指令表 (ownCloud Console)"),s(n)])])])])}const w=c(r,[["render",g],["__file","Nextcloud AIO 命令行升級維護筆記.html.vue"]]);export{w as default};
