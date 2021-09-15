"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[8028],{39974:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-41ade9da",path:"/config/api.html",title:"API 接口",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"ApiObject",slug:"apiobject",children:[]},{level:2,title:"相关配置",slug:"相关配置",children:[]},{level:2,title:"支持的 API 列表",slug:"支持的-api-列表",children:[{level:3,title:"HandlerService",slug:"handlerservice",children:[]},{level:3,title:"LoggerService",slug:"loggerservice",children:[]},{level:3,title:"StatsService",slug:"statsservice",children:[]}]}],filePathRelative:"config/api.md",git:{updatedTime:1616738467e3,contributors:[{name:"JimhHan",email:"50871214+JimhHan@users.noreply.github.com",commits:6},{name:"Jim Han",email:"50871214+JimhHan@users.noreply.github.com",commits:1}]}}},41463:(n,s,a)=>{a.r(s),a.d(s,{default:()=>g});var e=a(66252);const p=(0,e._)("h1",{id:"api-接口",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#api-接口","aria-hidden":"true"},"#"),(0,e.Uk)(" API 接口")],-1),t=(0,e.Uk)("API 接口配置提供了一些基于 "),o={href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("gRPC"),l=(0,e.Uk)("的 API 接口供远程调用。"),c=(0,e.Uk)("可以通过 api 配置模块开启接口. 当 api 配置开启时，Xray 会自建一个出站代理，须手动将所有的 API 入站连接通过 "),i=(0,e.Uk)("路由规则配置"),u=(0,e.Uk)(" 指向这一出站代理。"),d=(0,e.uE)('<p>请参考本节中的 <a href="#%E7%9B%B8%E5%85%B3%E9%85%8D%E7%BD%AE">相关配置</a></p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>大多数用户并不会用到此 API，新手可以直接忽略这一项。</p></div><h2 id="apiobject" tabindex="-1"><a class="header-anchor" href="#apiobject" aria-hidden="true">#</a> ApiObject</h2><p><code>ApiObject</code> 对应配置文件的 <code>api</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;services&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;HandlerService&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;LoggerService&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;StatsService&quot;</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>出站代理标识。</p><blockquote><p><code>services</code>: [string]</p></blockquote><p>开启的 API 列表，可选的值见 <a href="#%E6%94%AF%E6%8C%81%E7%9A%84-api-%E5%88%97%E8%A1%A8">API 列表</a>。</p><h2 id="相关配置" tabindex="-1"><a class="header-anchor" href="#相关配置" aria-hidden="true">#</a> 相关配置</h2><p>可以在 inbounds 配置中增加一个 api 的 inbound</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10085</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dokodemo-door&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在路由配置中增加针对 api inbound 的路由规则</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token string">&quot;api&quot;</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rules&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="支持的-api-列表" tabindex="-1"><a class="header-anchor" href="#支持的-api-列表" aria-hidden="true">#</a> 支持的 API 列表</h2><h3 id="handlerservice" tabindex="-1"><a class="header-anchor" href="#handlerservice" aria-hidden="true">#</a> HandlerService</h3><p>一些对于入站出站代理进行修改的 API，可用的功能如下：</p><ul><li>添加一个新的入站代理；</li><li>添加一个新的出站代理；</li><li>删除一个现有的入站代理；</li><li>删除一个现有的出站代理；</li><li>在一个入站代理中添加一个用户（仅支持 VMess、VLESS、Trojan、Shadowsocks（v1.3.0+））；</li><li>在一个入站代理中删除一个用户（仅支持 VMess、VLESS、Trojan、Shadowsocks（v1.3.0+））；</li></ul><h3 id="loggerservice" tabindex="-1"><a class="header-anchor" href="#loggerservice" aria-hidden="true">#</a> LoggerService</h3><p>支持对内置 Logger 的重启，可配合 logrotate 进行一些对日志文件的操作。</p><h3 id="statsservice" tabindex="-1"><a class="header-anchor" href="#statsservice" aria-hidden="true">#</a> StatsService</h3>',21),k=(0,e.Uk)("内置的数据统计服务，详见 "),b=(0,e.Uk)("统计信息"),h=(0,e.Uk)("。"),g={render:function(n,s){const a=(0,e.up)("OutboundLink"),g=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[t,(0,e._)("a",o,[r,(0,e.Wm)(a)]),l]),(0,e._)("p",null,[c,(0,e.Wm)(g,{to:"/config/routing.html"},{default:(0,e.w5)((()=>[i])),_:1}),u]),d,(0,e._)("p",null,[k,(0,e.Wm)(g,{to:"/config/stats.html"},{default:(0,e.w5)((()=>[b])),_:1}),h])],64)}}}}]);