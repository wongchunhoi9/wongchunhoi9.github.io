---
title: 勤力電路#1.0 -#1.4
date: 2019-12-15
excerpt: 我很肯定，勤力電路＃1 是源於我對現今媒體藝術極度封建、光鮮為大，那種「說了算」的態度令人火大，黑盒裡他們做什麼都可以，就是不讓你看見真理。我費解，決意創建一個較坦白的真理。 ....
hero: hardworking-circuit-1-early-sketch.jpg
tags: artnote 創作筆記
---


<!-- https://drive.google.com/open?id=18OAxNER9sGNSkEj-7QGNOXxLS3ghkUem -->

我很肯定，勤力電路＃1 是源於我對現今媒體藝術極度封建、光鮮為大，那種「說了算」的態度令人火大，黑盒裡他們做什麼都可以，就是不讓你看見真理。我費解，決意創建一個較坦白的真理。
但那只是我假想的敵人，我並沒有真的要宣戰，我只覺得我有向山谷咆哮的必要，而且不能光說，要身體力行帶著大聲公走到山谷附近，向谷底投下一顆小石。現在看起來真的是一個俗套的里程碑。但無論如何那是我著手認真看待冷冰冰的電路中的獨特生命力。

### 我在趕路，卻又強行把最便捷的路砍掉成崎嶇的路，
某天我拿起當時有份策展的宣傳海報，因為那是我工作室內最重磅數的紙張，手執一支幼身箱頭筆，一口氣繪畫了十多個簡單的電路圖 (schematic)，說簡單的意思是指我根本就只懂得最基本的電路概念，我只有一個命題作幾近automatic drawing 的推論：*「電路可以多愚蠢地運作？」*
不到一小時畫畢，鬆一口氣，會心傻笑，把紙本跟衣服掛在一起，每天曬太陽。紙上的其中一個電路圖就是勤力電路#1的藍本，也是唯一一個要以省略號的電路。

<figure style="display:block;" >
<img :src= "require('~/assets/images/blog/hardworking-circuit-1-early-sketch.jpg')"
     alt="早期草圖"  />
<figcaption style='color:#AAAAAA; float:right; width:100%'>早期草圖 </figcaption>     
</figure>
     
    




### 勤力電路#1.0 － hello world
容許我在此又再次解釋一次勤力電路#1 ：
勤力電路#1 由一連串繼電器以上一個啟動下一個的方式接駁，繼電器可以當成為一個用電來控制的開關制，當繼電器的左半邊電路通了電，裡面的電磁石就會把右半邊的電路的開關金屬片「搭橋」般接通了，於是就會一個開著下一個再開著下一個，好像骨脾似的，因為每個繼電器都需要反應時間，並會有「啪」一聲的。而我在一開始接了一個手動的開關，電路未端接了一個可被啟動的電器，當你按下第一個開關，電會先逐一經過所有繼電器，最後那電器就會啟動的了。
之後的因緣際會下刪一萬字，伯樂們鼓勵我蹣跚地首次以藝術家自居走進展廳，急忙回望一下那曬到有點變黃的電路草圖，實現這幅早已設計好的電路。

<figure style="display:inline-block; width:500px;">
<img :src= "require('~/assets/images/blog/2-Prototype-set-up-draft-20140914.jpg')" alt="勤力電路#1 原型 草圖" style="display:inline-block; width:500px;" />
<figcaption style='color:#AAAAAA; float:right; width:100%'>勤力電路#1 原型 草圖 </figcaption>  </figure>
<figure style="display:inline-block; width:500px;">   
<img :src= "require('~/assets/images/blog/3-hardworkingcircuit1_workinprogress_1.jpg')" alt="勤力電路#1 原型 試驗中" style="display:inline-block; width:500px;" />
<figcaption style='color:#AAAAAA; float:right; width:100%'>勤力電路#1 原型 試驗中 </figcaption>     
</figure>


一開始我對於那個理想的省略號毫無頭緒，基於成本，我先試了直流電12伏特的小型繼電器，落手接駁起來才發現電線的粗幼令電壓衰減影響極大，就算用上較粗的AWG 20電線，但接駁到大約第30個繼電器時已經開動不了，當時在煩惱如何繼續接下去的時侯，我不停在按下測試用的開關制，一接就連帶出30下「啪」的聲音，過程半夠半秒鐘，感覺真的很爽，是那種單純玩樂的那種爽，同時又在享受「發明」的喜樂。就這樣按了數十次，發覺半秒的通電過程中繼電器發出的聲音在變得漸弱和漸慢，「我撐不住…了」似的，那刻是我首次感到自己是找尋電路本身的生命。用科學一點的方法測了一下電壓，原來電壓下降到只有9.6V，低過了繼電器的最低運作電壓標示的10.8V才連不上，於是重新接上新的電力，又開始把另一組30個繼電器連在一起。雞手鴨腳地重重覆球編織了整整一個月，勉強把120個繼電路接駁好。完成試驗品的那刻的驚喜，到現在也很震撼。

<figure style="display:inline-block;" >
<img :src= "require('~/assets/images/blog/4-hc-1-completeschematic.jpg')"
     alt="勤力電路#1.0 電路圖 第二版"  />
<figcaption style='color:#AAAAAA; float:right; width:100%'>勤力電路#1.0 電路圖 第二版 </figcaption>     
</figure>

第一次展出是在油街實現的展廳，我在牆上放了一個接鈕以及一粒5毫米直徑的LED燈，小燈指向一個貼有”hello, world” 字樣透視遮光貼紙的放大鏡，燈亮會在牆上投影出一句模模的’hello, world” ，直接借編程的傳統來作為測試首次安裝成功的標示，至於整件作品的繼電器骨幹則全都放到天花的氣糟上。作品的外觀極度「簡潔」，按下開關後在頭頂上天花會前後左右地發出繼電器的聲響，大約一秒半左右，剛按下開關的手邊那個燈炮會亮起。
鬼掩眼，這次小試牛刀令我有點緊張，那時也許是在意作品是否有張力，裝置的設置是否已去蕪存菁，盡是一般的展示作品要關心的細節。到頭來一點也不享受，只成了一個有延遲的開關制，中間有點謎一般的聲音而已，說穿了我在建立起自己的黑盒子，而且收藏得更明顯。此外還要站在作品旁花大量唇舌去解釋繼電器的運作原理，不到三天又壞掉維修。但也沒妨，總算開了個頭，硬著頭皮繼續親近這個電路。
### 勤力電路#1.1 -> 1.2 － 找到了臭蟲！
<figure style="display:inline-block;" >
<img :src= "require('~/assets/images/blog/5-hwcimprove_1.jpg')"
     alt="勤力電路#1 電路修正 草圖"  />
<figcaption style='color:#AAAAAA; float:right; width:100%'>勤力電路#1 電路修正 草圖 </figcaption>     
</figure>
<figure style="display:inline-block;" >
<img :src= "require('~/assets/images/work/hardworkingcircuit13/hardworking-circuit-1p3sketch-03.svg')"
     alt="勤力電路#1 電路修正 草圖" style="width:100%;" />
<figcaption style='color:#AAAAAA; float:right; width:100%'>勤力電路#1 系列 電路圖  </figcaption>     
</figure>


重新審視了一輪勤力電路的初犒，我發現版本1.0 的不足之處，接駁了一百二十個左右後，關掉電路時會有固定的火花，繼而壞掉某幾個繼電器，那是每次累積的eddy current 在作怪。技術層面上，我很快就找到了損耗嚴重的原因，補完了一個忠於自我限制的系統：一段穩定地為了延長通電過程，消耗電力並帶有副產品（聲音）的通電裝置。
勤力電路#1.0 強調的是建基於某種實用性在過量地重覆同一個運作單元後，清楚展示東西的無用之處，同時生產另一種趣味，一場徒勞無功的鬧劇。
「據點・句點」成立初期，我自告奮勇做第一個個展「勤力費電」。做起大龍鳳，同一時間我埋手繼續以勞力延長起點和終點的時差，購入其他型號的繼電器築起#1.1 和 #1.2 ，思考著電路在實體空間的路線之餘，也在苦惱到底有什麼東西值得被勤力電路#1開啟，並作為電路終結的指示。理論上只要能被開啟的電路也是可以的，原則上我希望那些物件能呈現出一些不合比例的力度，小型LED燈也許是可以的，但總有點太理所當然。
音樂盒（天空之城主題曲）和（會擺尾的）玩具魚是在生產作品的勞動期間收到的小禮物，是某位句點藝術群體中的好友從他的無聊玩具庫中捐贈的。比起獨立抓爆頭去選一個物件，我傾向起拾起東西就試試看。目標只有一個：釋放電路本身的生命力。
第二次展示勤力電路#1 系列是一口氣三個版本，分別開啟了小型燈泡、音樂盒和玩具魚，電路的所有元件都是外露，甚至放在比那些物件更當眼的位置，按下開關制時，眼晴和耳朵也沒法迥避海量繼電器的骨牌效應。往後日子勤力電路#1 以裝置形式展示也是以該條玩具魚作結，到2019年，另一位好友才跟我說起她聯想到那些會自身發電的魚。
個展中同場我也實行了已發黃的電路圖中的另一個電路作品：一個永遠也磨不出火的火石機械臂。
### 勤力電路#1.3 - 燃燒的慾望，再數數按下多少次
進化為版本1.3 的契機是一個聲音演出的機會。那是2017年受現在音樂邀請的聲音下寨項目。說是版本1.3，其實只是把我擁有的不同電壓形號的繼電器全都接上，總共約900個左右，要由第一個去到第九百個，大概需要十秒的反應時間。

<figure style="display:inline-block; " >
<img :src= "require('~/assets/images/work/hardworkingcircuit13/Schematic-V1.png')"
     alt="勤力電路#1.3 電路圖 （電腦繪畫）"  />
<figcaption style='color:#AAAAAA; float:right; width:100%'>勤力電路#1.3 電路圖 （電腦繪畫）  </figcaption>     
</figure>
其實我不喜歡踩台板，我在想像一個絕對的壓縮（同時又澎脹）的劇目，整個演出起承轉合在10秒內完成，好讓我快快完成演出，不，是讓電路演出。
十秒期間，我在電路的中段接駁了所有我幾年來封在箱內的東西，包括一個手持香蕉的猩猩、摩打帶動衣架支的手套、數十條玩具魚、強力電筒、椰子殼、羊鈴、電腦散熱風扇和一卷廁紙。電路的未端連接了一顆破掉外殼的烏絲燈膽，我以魔術火綿包好，所以供電給這個燈膽時，外露空氣的鳥絲會立即自燃斷開，剎那的火種點燃起魔術火綿，會有一瞬間的大火球。這是我為了在安全地在展場以電力放火而想出來的。 火是以燈膽自爆的方法製做的，每放一次火就要更換另一個外露烏絲的燈膽。 演出場地是在灣仔動漫基地的庭園，勤力電路＃1 圍繞了4個直徑六米的圈，貫穿了觀眾席的椅子。

<br>
<figure style="display:inline-block; width:500px;">
<img :src= "require('~/assets/images/work/hardworkingcircuit13/hardworking-circuit-13-onsite-view-1.jpg')" alt="勤力電路#1.3 ＠聲音下寨29" style="display:inline-block; width:500px;" />
<figcaption style='color:#AAAAAA; float:right; width:100%'>勤力電路#1.3 ＠聲音下寨29</figcaption>  </figure>
<figure style="display:inline-block; width:500px;">   
<img :src= "require('~/assets/images/work/hardworkingcircuit13/sonic-anchor-29-hw13-fire.jpg')" alt="勤力電路#1.3 ＠聲音下寨29" style="display:inline-block; width:500px;" />
<figcaption style='color:#AAAAAA; float:right; width:100%'>勤力電路#1.3 ＠聲音下寨29 </figcaption>     
</figure>

有幾個繼電器被入場的觀眾踼鬆了，我在演出開始之時才發現，即場花了四十多秒去檢查和修理，結果花了一分鐘才成功引火。其後主辨單位嫌演出太短，他們未能拍攝足夠的照片和錄像交差，我只好開放手上的開關扣扳，讓現場的觀眾再演數十次。
再過了一年多，勤力電路#1.3 很幸運地擇下了第廿三屆ifva媒體藝術組金獎，有評審形容它原始 、粗糙，沒有任何光鮮感，而是混亂不堪。我似乎在某個美學戰爭場所吐了一口烏氣。有些中學生來訪問得獎感受，更說這些是珍貴的「無厘頭」。
在這階段我最好奇的是其他人有多願意去把玩這個作品，我組裝了一個土炮的機械控制的手動數人數機，電路未端的玩具魚啟動之時，人數計的數字會加一，展覽完結後，上面的數字是2502，展期間起碼有四十分鐘時間，勤力電路#1.3 是在激活狀態的。

<figure style="display:inline-block;" >
<img :src= "require('~/assets/images/work/hardworkingcircuit13/DSC08651.jpg')"
     alt="勤力電路#1.3 ＠第23屆Ifva 獨立短片及影像媒體比賽"  />
<figcaption style='color:#AAAAAA; float:right; width:100%'>勤力電路#1.3 ＠第23屆Ifva 獨立短片及影像媒體比賽 </figcaption>     
</figure>

### 勤力電路#1.4 － 開著了的投影機：自製時差，空間
勤力電路#1的骨幹 已經成為一個有系統的系統（哈），眼晴跟得上了。自己都覺得玩到有點爛，到底下一步玩什麼好？ 那時我已經對做裝置作品感到有點力不從心，又要找地方儲藏，又製做了大量垃圾，不如去做表面上輕量一點的錄像創作？但已經花了很多錢在這個作品上，吝嗇的本能令我再次延伸勤力電路#1的生命。
在這個單向的關關時序上，我開始想像每個繼電器為電影術語中的一格，就像是一格菲林般的單元，一秒鐘大約有80個繼電器順序開啟，假如這是一個投影機，每秒可以投出80格。勤力電路#1 可以試試在空間上做一個「剪接」，也用盡電路本身的時間性去建構一段短暫但多變的敍事方法。也啟發了自己利用電路中的時差和不穩定性去開發一個真正隨機的種子。
勤力電路#1.4的未端接駁著一個摩打，轉軸連在一個揭牌時鐘(flip clock)的轉軸上，我畫了60格的定格動畫描繪繼電器中的電力流向，貼在那個揭牌時鐘的分鐘格上。到最後，我仍然希望可以把勤力電路#1的初心說清楚。

<figure style="display:inline-block;" >
<img :src= "require('~/assets/images/blog/9-2-hw1p4-flipclock.jpg')"
     alt="勤力電路#1.4 ＠文字機器創作集第6輯"  />
<figcaption style='color:#AAAAAA; float:right; width:100%'>勤力電路#1.4 ＠文字機器創作集第6輯  </figcaption>     
</figure>

### 勤力電路#2.0 ? - 正視自己的懶惰，人人都有創造的慾望
我一定要活下去，做藝術與否不重要，創造力才是重點，我想開五金鋪和小型餐廳。
謝謝一直以來在創作路上的伙伴。
2019-12-15



---
#### 補充(一) 勤力電路#1 系列展出記錄
年.月     | 版本                     | 展覽 ／ 活動                                                           |
|---------|------------------------|-------------------------------------------------------------------|
| 2015.02 | 勤力電路#1.0               | Sparkle! Regarding lightness: On Life’s Way Oi!, LCSD ,Hong Kong  |
| 2016.01 | 勤力電路#1.0 , #1.1 , #1.2 | Hardworking burning electricity – wong chun hoi solo exhibition , Floating Projects, Hong Kong    |
| 2016.03 | 勤力電路#1.2               | 僅僅在場 Mere Existence , Canton Gallery , GuangZhou , China          |
| 2016.05 | 勤力電路#1.2               | Microwave International New Media Art Festival 2016 -Project Room 微波國際新媒體藝術節-實驗 H 場, Floating Projects, Hong Kong|
| 2016.11 | 勤力電路#1.2               | 上海西岸藝術與設計博覽會，西岸藝術中心，上海                                            |
| 2017.02 | 勤力電路#1.3 （演出）          | Sonic Anchor #29 – hardworking circuit #1.3 Contemporary Musiking,Comix Home Base , Hong Kong                         |
| 2018.03 | 勤力電路#1.3               | The 23nd ifva Awards – Media Art Category Finalist Exhibition  ,Hong Kong Arts Centre, Hong Kong       |
| 2018.1  | 勤力電路#1.4               | 假如速度與跑姿換腳幅度無關    Running, Walking, Jogging along the timeline with the same speed    ,Writing Machine Collective Edition 6, Hong Kong                                                 |


#### 補充(二) ｜ 評論
Hardworking burning electricity – Review By Yang Yeung / issue 120 (May 2016) of a.m.post, Hong Kong

陳子傑 : 《勤力費電》不求人展小感 /  The Stand News 立場新聞 , 2016. 02.19

Floating Projects: Wong Chun Hoi “Hardworking Burning Electricity”  /  east contemporary ,2016 Jan

藝術家無厘頭得獎作 展科技率真/ 2018 三月 ｜明報校園記者報

#00 《號外：數字的浪漫》 / 2018 一月 | Christy Man 個人網誌

第二十三屆ifva 獨立短片及影像媒體比賽媒體藝術組評審會議紀錄 / 2019 | ifva Hong Kong



