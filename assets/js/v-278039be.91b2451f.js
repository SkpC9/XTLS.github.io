"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[7147],{32580:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-278039be",path:"/document/level-0/ch06-certificates.html",title:"【第 6 章】证书管理篇",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"6.1 申请 TLS 证书",slug:"_6-1-申请-tls-证书",children:[]},{level:2,title:"6.2 安装 acme.sh",slug:"_6-2-安装-acme-sh",children:[]},{level:2,title:"6.3 测试证书申请",slug:"_6-3-测试证书申请",children:[]},{level:2,title:"6.4 正式证书申请",slug:"_6-4-正式证书申请",children:[]},{level:2,title:"6.5 你的进度",slug:"_6-5-你的进度",children:[]}],filePathRelative:"document/level-0/ch06-certificates.md",git:{updatedTime:1633591937e3,contributors:[{name:"JimhHan",email:"50871214+JimhHan@users.noreply.github.com",commits:4},{name:"Arthur Morgan",email:"4637240+badO1a5A90@users.noreply.github.com",commits:1},{name:"hmol233",email:"82594500+hmol233@users.noreply.github.com",commits:1},{name:"ricuhkaen",email:"69312584+ricuhkaen@users.noreply.github.com",commits:1}]}}},17469:(n,s,e)=>{e.r(s),e.d(s,{default:()=>T});var a=e(66252),t=e(21468);const l=(0,a._)("h1",{id:"【第-6-章】证书管理篇",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#【第-6-章】证书管理篇","aria-hidden":"true"},"#"),(0,a.Uk)(" 【第 6 章】证书管理篇")],-1),c=(0,a._)("h2",{id:"_6-1-申请-tls-证书",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_6-1-申请-tls-证书","aria-hidden":"true"},"#"),(0,a.Uk)(" 6.1 申请 TLS 证书")],-1),o=(0,a._)("p",null,"接下来我们要做的，是为我们的域名申请一个真实的 TLS 证书，使网站具备标准 TLS 加密的能力及 HTTPS 访问的能力。这就是 Xray 等现阶段安全代理工具确保流量充分加密最重要的工具。",-1),p=(0,a._)("div",{class:"custom-container warning"},[(0,a._)("p",{class:"custom-container-title"},"注意"),(0,a._)("p",null,"请不要轻易使用自签证书。它并没有让操作简单太多，但增加了无谓的风险（如中间人攻击）。")],-1),r=(0,a.Uk)("这里我会使用一个叫做 "),_={href:"https://github.com/acmesh-official/acme.sh",target:"_blank",rel:"noopener noreferrer"},u=(0,a._)("code",null,"acme.sh",-1),k=(0,a.Uk)(" 的证书管理工具，它简单、轻量、高效，并可完成证书自动更新。"),i=(0,a._)("p",null,"另外，我相信，现在你已经逐渐熟悉了 Linux 的基础操作，所以已经多次出现的命令从本章开始不再重复截图、只做简单的描述。如果实在想不起来怎么用的话，就稍微复习一下前面的章节吧。",-1),m=(0,a._)("h2",{id:"_6-2-安装-acme-sh",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_6-2-安装-acme-sh","aria-hidden":"true"},"#"),(0,a.Uk)(" 6.2 安装 "),(0,a._)("code",null,"acme.sh")],-1),b=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,"小小白白 Linux 基础命令："),(0,a._)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{style:{"text-align":"center"}},"编号"),(0,a._)("th",{style:{"text-align":"center"}},"命令名称"),(0,a._)("th",{style:{"text-align":"center"}},"命令说明")])]),(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",{style:{"text-align":"center"}},[(0,a._)("code",null,"cmd-12")]),(0,a._)("td",{style:{"text-align":"center"}},[(0,a._)("code",null,"wget")]),(0,a._)("td",{style:{"text-align":"center"}},"访问（或下载）某个网页文件")]),(0,a._)("tr",null,[(0,a._)("td",{style:{"text-align":"center"}},[(0,a._)("code",null,"cmd-13")]),(0,a._)("td",{style:{"text-align":"center"}},[(0,a._)("code",null,"acme.sh")]),(0,a._)("td",{style:{"text-align":"center"}},"acme.sh 证书管理相关的命令")])])])]),(0,a._)("li",null,[(0,a._)("p",null,"运行安装脚本"),(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"wget"),(0,a.Uk)(" -O -  https://get.acme.sh "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"sh"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("让 "),(0,a._)("code",null,"acme.sh"),(0,a.Uk)(" 命令生效")]),(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token builtin class-name"},"."),(0,a.Uk)(" .bashrc\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("开启 "),(0,a._)("code",null,"acme.sh"),(0,a.Uk)(" 的自动升级")]),(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,"acme.sh --upgrade --auto-upgrade\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])])]),(0,a._)("li",null,[(0,a._)("p",null,"到这一步的完整流程如下图："),(0,a._)("p",null,[(0,a._)("img",{src:t,alt:"acme.sh安装演示"})])])],-1),U=(0,a._)("h2",{id:"_6-3-测试证书申请",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_6-3-测试证书申请","aria-hidden":"true"},"#"),(0,a.Uk)(" 6.3 测试证书申请")],-1),d=(0,a._)("p",null,[(0,a.Uk)("在正式申请证书之前，我们先用测试命令("),(0,a._)("code",null,"--issue --test"),(0,a.Uk)(")来验证是否可以成功申请，这样可以避免在本地配置有误时，反复申请证书失败，超过 Let's Encrypt 的频率上限（比如，每小时、每个域名、每个用户失败最多 5 次），导致后面的步骤无法进行。")],-1),h=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("测试证书申请的命令如下（本文均以 "),(0,a._)("code",null,"ECC"),(0,a.Uk)(" 证书为例，因为时至今日，实在没什么理由不用它）：")]),(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,"acme.sh --issue --server letsencrypt --test -d 二级域名.你的域名.com -w /home/vpsadmin/www/webpage --keylength ec-256\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])]),(0,a._)("div",{class:"custom-container warning"},[(0,a._)("p",{class:"custom-container-title"},"说明"),(0,a._)("p",null,[(0,a._)("code",null,"ECC"),(0,a.Uk)("证书的主要优势在于它的 Keysize 更小，意味着同等大小下安全性的提升和加密解密速度的加快。如 ECC-256bit 的强度大约相当于 RSA-3072bit，何乐而不为呢？当然，有人说 ECC 证书握手会明显更快，这我觉得就有些夸张了，因为 RSA 握手也没有太慢，就算有差别应该也是毫秒级，很难直接感知。")]),(0,a._)("p",null,[(0,a.Uk)("另外，如果有些网站确实需要兼容某些古老设备的，那也还是请按需选择"),(0,a._)("code",null,"RSA"),(0,a.Uk)("证书。")])])]),(0,a._)("li",null,[(0,a._)("p",null,"你最终应该看到类似这样的提示："),(0,a._)("div",{class:"language-log ext-log line-numbers-mode"},[(0,a._)("pre",{class:"language-log"},[(0,a._)("code",null,[(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:12"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(),(0,a._)("span",{class:"token property"},"Using ACME_DIRECTORY:"),(0,a.Uk)(),(0,a._)("span",{class:"token url"},"https://acme-staging-v02.api.letsencrypt.org/directory"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:13"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(),(0,a._)("span",{class:"token property"},"Using CA:"),(0,a.Uk)(),(0,a._)("span",{class:"token url"},"https://acme-staging-v02.api.letsencrypt.org/directory"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:13"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Create account key ok"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:13"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(),(0,a._)("span",{class:"token property"},"Registering account:"),(0,a.Uk)(),(0,a._)("span",{class:"token url"},"https://acme-staging-v02.api.letsencrypt.org/directory"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:13"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Registered\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:13"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" ACCOUNT_THUMBPRINT"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},"'CU6qmPKuRqhyTAIrF4swosR375194z_1ddUlWef8xDc'"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:13"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Creating domain key\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:13"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(),(0,a._)("span",{class:"token property"},"The domain key is here:"),(0,a.Uk)(),(0,a._)("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.key"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:13"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Single domain"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},"'二级域名.你的域名.com'"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:13"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Getting domain auth token for each domain\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:14"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Getting webroot for domain"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},"'二级域名.你的域名.com'"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:14"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(),(0,a._)("span",{class:"token property"},"Verifying:"),(0,a.Uk)(" 二级域名"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("你的域名"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("com\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:23"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Pending\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:25"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Success\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:25"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Verify finished"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" start to sign"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:25"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Lets finalize the order"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:25"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Le_OrderFinalize"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},"'https://acme-staging-v02.api.letsencrypt.org/acme/finalize/490205995/7730242871'"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:25"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Downloading cert"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"04:25:25"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Le_LinkCert"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},"'https://acme-staging-v02.api.letsencrypt.org/acme/cert/xujss5xt8i38waubafz2xujss5xt8i38waubz2'"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:21:52"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Cert success"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("\n"),(0,a._)("span",{class:"token operator"},"-"),(0,a._)("span",{class:"token operator"},"-"),(0,a.Uk)("BEGIN CERTIFICAT"),(0,a._)("span",{class:"token operator"},"-"),(0,a._)("span",{class:"token operator"},"-"),(0,a.Uk)("\nsxlYqPvWreKgD5b8JyOQX0Yg2MLoRUoDyqVkd31PthIiwzdckoh5eD3JU7ysYBtN\ncTFK4LGOfjqi8Ks87EVJdK9IaSAu7ZC6h5to0eqpJ5PLhaM3e6yJBbHmYA8w1Smp\nwAb3tdoHZ9ttUIm9CrSzvDBt6BBT6GqYdDamMyCYBLooMyDEM4CUFsOzCRrEqqvC\n2mTTEmhvpojo5rhdTSJxibozyNWTGwoTj0v9pTUeQcGqLIzqi4DowjBHD5guwRid\nSjAFnm6JT2xUQgWFm58A1gv1OhbH1TRPUUmtE1nFEN7YiSjI4xgxqAXT3CLD2EUb\nwXlUrO6c75zSsQP4bRMzgOjJUqHtSb6IEqELzt4M7KzL5iCOruCChCo2DZxUwvVX\ntOoaAyQJzCbTqE6aUqwiKi3gVyoxvDP9mI5JdRYzsDL6GVud7EHPnYeMl9ubLZAK\n0vg84mbMP3f6mYM4KRa1cqiyOIcQPT4AzGFYVv4sm049bZQg7sd0Bz9CaFvE7yDA\n1y17XlgCDnsjxl66bqI1vkENN9XT5xeFHONqc18b5fZEKSIvdX7iWPFWp1PyMPpG\n0pMCP1EymZNFxIMJLgbWqExwLWfPc5Ib3PjBaIqhXPnw6sT2MQSxXwDupq1UJVhV\n7E3hQRVlwI4CXi6WLHJMNvNRyyK87gCrLH1bKYsPeRVaz77poWBq49zwBCts6hPY\nIeF4ltGXyANNIOPEi8vy138fRU4LYh81d8FjOtFfJZogMjwhfNvapqxPMsioPlmX\nTnZu0n7setrVNUEfTMHWqPpDgk5MPrWLA4LapqaDfEX4pwnQJLMwMi6s94z165c0\niMRSKA1yU5zqv8aNsDfPoY4OkSPWs4MaXgRRSLBsUfZ15DwQXPk76kegHIyxWvwF\ntYw9HKR5QCMK66fa0z4aJoFVFLK0IIOGEZOanRFUCnkLUDd3QZ3YU8lEcrj7Uxos\nhaiRNICyC6UfsCJ94a8vcNyMosPv3xBLMp19WXgiFYqEFQkntkv1FLRI35fjeJmg\n0fmD9VG9bkzGPHihJgQLRlCHasGf6XrdfkSsODAyCUHUHJ0RzqF4YEZMcxDxzuQ2\nYO7bFwj7S3mUdVPZ6MPasjxdyBjJgEBMch2uy4AhmudXfEBQBye8W6ZI4ztZjLVV\nFmP4SIuaNUmMe20TjR8b9NVC96AhxOanWT3mRROsdokpKQGTJvl27EHH8KuAbUOc\nG6KtPy4wslNZNXWcBy9n63RcWak12r7kAIFn38tZxmlw2WUKoRSMAH64GcDTjRQd\nAm65hBHzvGrj93wEuVNIebvNIsJOlng3HFjpIxVqKGMCIfWIKGDE3YzK3p4LbGZ6\nNZFQWYJLNVf2M9CCJfbEImPYgvctrxl39H6KVYPCw1SAdaj9NneUqmREOQkKoEB0\nx6PmNirbMscHhQPSC0JQaqUgaQFgba1ALmzRYAnYhNb0twkTxWbY7DBkAarxqMIp\nyiLKcBFc5H7dgJCImo7us7aJeftC44uWkPIjw9AKH"),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)("\n"),(0,a._)("span",{class:"token operator"},"-"),(0,a._)("span",{class:"token operator"},"-"),(0,a.Uk)("END CERTIFICAT"),(0,a._)("span",{class:"token operator"},"-"),(0,a._)("span",{class:"token operator"},"-"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:21:52"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Your cert is in  "),(0,a._)("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.cer"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:21:52"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Your cert key is in  "),(0,a._)("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.key"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:21:52"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" The intermediate CA cert is in  "),(0,a._)("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/ca.cer"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:21:52"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(),(0,a._)("span",{class:"token property"},"And the full chain certs is there:"),(0,a.Uk)("  "),(0,a._)("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/fullchain.cer"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"12"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"13"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"14"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"15"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"16"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"17"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"18"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"19"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"20"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"21"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"22"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"23"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"24"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"25"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"26"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"27"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"28"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"29"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"30"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"31"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"32"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"33"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"34"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"35"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"36"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"37"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"38"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"39"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"40"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"41"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"42"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"43"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"44"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"45"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"46"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"47"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"48"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"49"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"50"),(0,a._)("br")])])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("注意：这里申请的是测试证书，没办法直接用的，只是用来证明你的域名、配置全都正确。仔细观察，你会发现给你发证书的域名是 "),(0,a._)("code",null,"https://acme-staging-v02.api.letsencrypt.org"),(0,a.Uk)("，这个 "),(0,a._)("code",null,"staging"),(0,a.Uk)(" 你就理解成【测试服】吧！")])]),(0,a._)("li",null,[(0,a._)("p",null,"如果这一步出错的话，你可以运行下面的命令，来查看详细的申请过程和具体的错误。（看不懂就隐藏掉敏感信息后，去 Xray 群里问吧）"),(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,"acme.sh --issue --server letsencrypt --test -d 二级域名.你的域名.com -w /home/vpsadmin/www/webpage --keylength ec-256 --debug\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])]),(0,a._)("p",null,[(0,a.Uk)("嗯没错，就是在命令的最后加了一个 "),(0,a._)("code",null,"--debug"),(0,a.Uk)(" 参数")])]),(0,a._)("li",null,[(0,a._)("p",null,"这一步确定成功之后，就可以申请正式的证书了。（测试证书不需要删除，它会自动被正式证书覆盖）")])],-1),g=(0,a._)("h2",{id:"_6-4-正式证书申请",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_6-4-正式证书申请","aria-hidden":"true"},"#"),(0,a.Uk)(" 6.4 正式证书申请")],-1),y=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("申请正式证书的命令如下（即删掉 "),(0,a._)("code",null,"--test"),(0,a.Uk)(" 参数，并在最后加入 "),(0,a._)("code",null,"--force"),(0,a.Uk)("参数）：")]),(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,"acme.sh --set-default-ca --server letsencrypt\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])]),(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,"acme.sh --issue -d 二级域名.你的域名.com -w /home/vpsadmin/www/webpage --keylength ec-256 --force\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])]),(0,a._)("div",{class:"custom-container warning"},[(0,a._)("p",{class:"custom-container-title"},"说明"),(0,a._)("p",null,[(0,a._)("code",null,"--force"),(0,a.Uk)(" 参数的意思就是，在现有证书到期前，手动（强行）更新证书。上一步我们从“测试服”申请的证书虽然不能直接用，但是它本身是尚未过期的，所以需要用到这个参数。")])])]),(0,a._)("li",null,[(0,a._)("p",null,"你最终应该看到跟上面很像的提示："),(0,a._)("div",{class:"language-log ext-log line-numbers-mode"},[(0,a._)("pre",{class:"language-log"},[(0,a._)("code",null,[(0,a.Uk)("vpsadmin"),(0,a._)("span",{class:"token operator"},"@"),(0,a.Uk)("vps"),(0,a._)("span",{class:"token operator"},"-"),(0,a.Uk)("server"),(0,a._)("span",{class:"token operator"},":"),(0,a._)("span",{class:"token operator"},"~"),(0,a._)("span",{class:"token operator"},"$"),(0,a.Uk)(),(0,a._)("span",{class:"token domain constant"},"acme.sh"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"-"),(0,a._)("span",{class:"token operator"},"-"),(0,a.Uk)("issue "),(0,a._)("span",{class:"token operator"},"-"),(0,a.Uk)("d 二级域名"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("你的域名"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("com "),(0,a._)("span",{class:"token operator"},"-"),(0,a.Uk)("w "),(0,a._)("span",{class:"token file-path string"},"/home/vpsadmin/www/webpage"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"-"),(0,a._)("span",{class:"token operator"},"-"),(0,a.Uk)("keylength ec"),(0,a._)("span",{class:"token operator"},"-"),(0,a._)("span",{class:"token number"},"256"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(),(0,a._)("span",{class:"token property"},"Using CA:"),(0,a.Uk)(),(0,a._)("span",{class:"token url"},"https://acme-v02.api.letsencrypt.org/directory"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Creating domain key\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(),(0,a._)("span",{class:"token property"},"The domain key is here:"),(0,a.Uk)(),(0,a._)("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.key"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Single domain"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},"'二级域名.你的域名.com'"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Getting domain auth token for each domain\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Getting webroot for domain"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},"'二级域名.你的域名.com'"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(),(0,a._)("span",{class:"token property"},"Verifying:"),(0,a.Uk)(" 二级域名"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("你的域名"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("com\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Pending\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Success\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Verify finished"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" start to sign"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Lets finalize the order"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Le_OrderFinalize"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},"'https://acme-v02.api.letsencrypt.org/acme/finalize/490205996/7730242872'"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Downloading cert"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Le_LinkCert"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},"'https://acme-v02.api.letsencrypt.org/acme/cert/vsxvk0oldnuobe51ayxz4dms62sk2dwmw9zhuw'"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:51"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Cert success"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("\n"),(0,a._)("span",{class:"token operator"},"-"),(0,a._)("span",{class:"token operator"},"-"),(0,a.Uk)("BEGIN CERTIFICAT"),(0,a._)("span",{class:"token operator"},"-"),(0,a._)("span",{class:"token operator"},"-"),(0,a.Uk)("\nsxlYqPvWreKgD5b8JyOQX0Yg2MLoRUoDyqVkd31PthIiwzdckoh5eD3JU7ysYBtN\ncTFK4LGOfjqi8Ks87EVJdK9IaSAu7ZC6h5to0eqpJ5PLhaM3e6yJBbHmYA8w1Smp\nwAb3tdoHZ9ttUIm9CrSzvDBt6BBT6GqYdDamMyCYBLooMyDEM4CUFsOzCRrEqqvC\n2mTTEmhvpojo5rhdTSJxibozyNWTGwoTj0v9pTUeQcGqLIzqi4DowjBHD5guwRid\nSjAFnm6JT2xUQgWFm58A1gv1OhbH1TRPUUmtE1nFEN7YiSjI4xgxqAXT3CLD2EUb\nwXlUrO6c75zSsQP4bRMzgOjJUqHtSb6IEqELzt4M7KzL5iCOruCChCo2DZxUwvVX\ntOoaAyQJzCbTqE6aUqwiKi3gVyoxvDP9mI5JdRYzsDL6GVud7EHPnYeMl9ubLZAK\n0vg84mbMP3f6mYM4KRa1cqiyOIcQPT4AzGFYVv4sm049bZQg7sd0Bz9CaFvE7yDA\n1y17XlgCDnsjxl66bqI1vkENN9XT5xeFHONqc18b5fZEKSIvdX7iWPFWp1PyMPpG\n0pMCP1EymZNFxIMJLgbWqExwLWfPc5Ib3PjBaIqhXPnw6sT2MQSxXwDupq1UJVhV\n7E3hQRVlwI4CXi6WLHJMNvNRyyK87gCrLH1bKYsPeRVaz77poWBq49zwBCts6hPY\nIeF4ltGXyANNIOPEi8vy138fRU4LYh81d8FjOtFfJZogMjwhfNvapqxPMsioPlmX\nTnZu0n7setrVNUEfTMHWqPpDgk5MPrWLA4LapqaDfEX4pwnQJLMwMi6s94z165c0\niMRSKA1yU5zqv8aNsDfPoY4OkSPWs4MaXgRRSLBsUfZ15DwQXPk76kegHIyxWvwF\ntYw9HKR5QCMK66fa0z4aJoFVFLK0IIOGEZOanRFUCnkLUDd3QZ3YU8lEcrj7Uxos\nhaiRNICyC6UfsCJ94a8vcNyMosPv3xBLMp19WXgiFYqEFQkntkv1FLRI35fjeJmg\n0fmD9VG9bkzGPHihJgQLRlCHasGf6XrdfkSsODAyCUHUHJ0RzqF4YEZMcxDxzuQ2\nYO7bFwj7S3mUdVPZ6MPasjxdyBjJgEBMch2uy4AhmudXfEBQBye8W6ZI4ztZjLVV\nFmP4SIuaNUmMe20TjR8b9NVC96AhxOanWT3mRROsdokpKQGTJvl27EHH8KuAbUOc\nG6KtPy4wslNZNXWcBy9n63RcWak12r7kAIFn38tZxmlw2WUKoRSMAH64GcDTjRQd\nAm65hBHzvGrj93wEuVNIebvNIsJOlng3HFjpIxVqKGMCIfWIKGDE3YzK3p4LbGZ6\nNZFQWYJLNVf2M9CCJfbEImPYgvctrxl39H6KVYPCw1SAdaj9NneUqmREOQkKoEB0\nx6PmNirbMscHhQPSC0JQaqUgaQFgba1ALmzRYAnYhNb0twkTxWbY7DBkAarxqMIp\nyiLKcBFc5H7dgJCImo7us7aJeftC44uWkPM"),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)("\n"),(0,a._)("span",{class:"token operator"},"-"),(0,a._)("span",{class:"token operator"},"-"),(0,a.Uk)("END CERTIFICAT"),(0,a._)("span",{class:"token operator"},"-"),(0,a._)("span",{class:"token operator"},"-"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:52"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Your cert is in  "),(0,a._)("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.cer"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:52"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" Your cert key is in  "),(0,a._)("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.key"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:52"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(" The intermediate CA cert is in  "),(0,a._)("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/ca.cer"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token date number"},"Wed 30"),(0,a.Uk)(" Dec "),(0,a._)("span",{class:"token number"},"2022"),(0,a.Uk)(),(0,a._)("span",{class:"token time number"},"15:22:52"),(0,a.Uk)(" AM EST"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(),(0,a._)("span",{class:"token property"},"And the full chain certs is there:"),(0,a.Uk)("  "),(0,a._)("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/fullchain.cer"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"12"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"13"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"14"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"15"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"16"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"17"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"18"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"19"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"20"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"21"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"22"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"23"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"24"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"25"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"26"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"27"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"28"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"29"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"30"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"31"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"32"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"33"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"34"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"35"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"36"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"37"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"38"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"39"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"40"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"41"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"42"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"43"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"44"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"45"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"46"),(0,a._)("br")])])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("仔细观察，你会发现这次给你发证书的域名是 "),(0,a._)("code",null,"https://acme-v02.api.letsencrypt.org"),(0,a.Uk)("，少了 "),(0,a._)("code",null,"staging"),(0,a.Uk)("，自然就是【正式服】了！")])])],-1),E=(0,a._)("h2",{id:"_6-5-你的进度",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_6-5-你的进度","aria-hidden":"true"},"#"),(0,a.Uk)(" 6.5 你的进度")],-1),M=(0,a._)("p",null,"至此，Xray 所需要的两个基础设施终于全部就位！千呼万唤始出来的 Xray 马上就要揭开面纱，我们终于要进入最激动人心章节啦！",-1),v=(0,a._)("blockquote",null,[(0,a._)("p",null,"⬛⬛⬛⬛⬛⬛⬜⬜ 75%")],-1),T={render:function(n,s){const e=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,c,o,p,(0,a._)("p",null,[r,(0,a._)("a",_,[u,(0,a.Wm)(e)]),k]),i,m,b,U,d,h,g,y,E,M,v],64)}}},21468:(n,s,e)=>{n.exports=e.p+"assets/img/ch06-img01-acme-install.b1bcf3bb.gif"}}]);