<template>
    <div class="individual-work-page-container">
       
        <b-container  class="work-session-backgroundcolor">
            <b-row>
                <!-- Work Title -->
                <b-col> <h3> {{(WorkInfo[0].title)}}</h3> </b-col>
            </b-row>
            <b-row>
                <b-col>     
                    <!-- Feature Image : -->
                    <b-img fluid-grow src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-1p3sketch-03.svg" fluid > </b-img>
                    <figcaption class="figure-caption"> hardworking circuit #1 - the refined schematic on circuit concept</figcaption>
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='9' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
                    </p>
                    
                    

                </b-col>

                <b-col md="3"> 
                    <p> {{(WorkInfo[0].medium)}} 
                        <br>
                        {{(WorkInfo[0].year)}}
                    </p>                        
                    <hr>
                    <p> <small>tag:</small>
                        <br>
                        {{(WorkInfo[0].category)}}
                    </p>
                </b-col>
            </b-row>
            
            <b-row>
                
                <b-col> 
                <p>Page content:</p>
                <ul>
                    <li> <nuxt-link :to="{path: '#', hash: 'schematic'}">Schematic diagram 電路圖</nuxt-link></li>
                    <li> <nuxt-link :to="{path: '#', hash: 'installation-detour'}">installation version @ detour 2021</nuxt-link></li>
                    <li> <nuxt-link :to="{path: '#', hash: 'installation-rossirossi'}">installation version @rossi rossi big wind blow </nuxt-link></li>
                    <li> <nuxt-link :to="{path: '#', hash: 'installation-ifva'}">installation version @ 23rd ifva </nuxt-link></li>
                    <li> <nuxt-link :to="{path: '#', hash: 'performance'}">performance version</nuxt-link></li>
                    
                    <li> <nuxt-link :to="{path: '#', hash: 'statement'}">artist statement</nuxt-link></li>
                    
                </ul>


                </b-col>
            </b-row>
               
                <!-- Schematic and Principle -->
            <hr id="schematic" style="padding-top:30px;">
             <b-row>
                   <b-col>
                       <h5>Schematic diagram</h5>
                        <b-img fluid src="~/assets/images/work/hardworkingcircuit13/Schematic-V1.png"> </b-img>
                        <b-img src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-1-650x460-version4_15fps_loop.gif" fluid-grow></b-img>
                    </b-col>
            </b-row>


                <hr id="installation-detour" style="padding-top:30px;"></hr>
                <b-row>
                    <b-col>
                        <h4> Exhibition View @deTour 2021 , PMQ Hong Kong</h4>
                        <b-img src="/images/works/hardworkingCircuit1_detour/1K4A0151.JPG" fluid> </b-img>
                        <b-img src="/images/works/hardworkingCircuit1_detour/1K4A0106.JPG" fluid> </b-img>
                        <b-img src="/images/works/hardworkingCircuit1_detour/1K4A0143.JPG" fluid> </b-img>
                        <b-img src="/images/works/hardworkingCircuit1_detour/1K4A0097.JPG" fluid> </b-img>
                        <b-embed
                                        type="iframe"
                                        aspect="16by9"
                                        src="https://www.youtube.com/embed/GxqtWCML72Y"
                                        allowfullscreen
                                    ></b-embed>
                       
                        <b-embed
                                        type="iframe"
                                        aspect="16by9"
                                        src="https://www.youtube.com/embed/11qC7Bg3erE"
                                        allowfullscreen
                                    ></b-embed>
                    </b-col>
                </b-row>

                <hr id="installation-rossirossi" style="padding-top:30px;"></hr>
                <b-row>
                    <b-col>
                        <h4> Exhibition View @ Big Wind Blow , Rossi & Rossi Gallery , Hong Kong 2020</h4>
                        <b-embed
                            type="iframe"
                            aspect="16by9"
                            src="https://www.youtube.com/embed/R078VwY3Nbg"
                            allowfullscreen
                        ></b-embed>
                       
                        <b-img src="/images/works/hardworkingCircuit1_rossirossi/FSC_8530.jpg" fluid></b-img>
                        <b-img src="/images/works/hardworkingCircuit1_rossirossi/FSC_8558.jpg" fluid></b-img>
                        <b-img src="/images/works/hardworkingCircuit1_rossirossi/FSC_8559.jpg" fluid></b-img>
                        <b-img src="/images/works/hardworkingCircuit1_rossirossi/FSC_8560.jpg" fluid></b-img>
                        <b-img src="/images/works/hardworkingCircuit1_rossirossi/FSC_8561.jpg" fluid></b-img>
                        <b-img src="/images/works/hardworkingCircuit1_rossirossi/IMG_2103.JPG" fluid></b-img>
                        
                    </b-col>
                </b-row>
            
                  <hr id="installation-ifva" style="padding-top:30px;"> 

                                <b-row >
                                <b-col >
                                    <h4> Exhibition View @23rd IFVA Award - finalist exhibition  Media Art Category</h4>
                                <b-img src="~/assets/images/work/hardworkingcircuit13/DSC08661.jpg" fluid> </b-img>
                                <b-img src="~/assets/images/work/hardworkingcircuit13/DSC08651.jpg" fluid> </b-img>
                                <b-img src="~/assets/images/work/hardworkingcircuit13/DSC08663.jpg" fluid> </b-img>
                                <b-img src="~/assets/images/work/hardworkingcircuit13/DSC08607.jpg" fluid> </b-img>

                                <b-img src="~/assets/images/work/hardworkingcircuit13/DSC08640.jpg" fluid> </b-img>
                                
                                <b-img src="~/assets/images/work/hardworkingcircuit13/DSC08606.jpg" fluid> </b-img>
                                <b-img src="~/assets/images/work/hardworkingcircuit13/DSC08622.jpg" fluid> </b-img>
                                
                                
                                </b-col>
                            </b-row>

                            <b-row>
                                
                                <b-col class="scroll-container">
                                
                                <b-img fluid src="~/assets/images/work/hardworkingcircuit13/DSC08637.jpg"> </b-img>
                                <b-img fluid src="~/assets/images/work/hardworkingcircuit13/DSC08625.jpg"> </b-img>
                                <b-img fluid src="~/assets/images/work/hardworkingcircuit13/DSC08622.jpg"> </b-img>
                                <b-img fluid src="~/assets/images/work/hardworkingcircuit13/DSC08619.jpg"> </b-img>
                                <b-img fluid src="~/assets/images/work/hardworkingcircuit13/DSC08615.jpg"> </b-img>
                                <b-img fluid src="~/assets/images/work/hardworkingcircuit13/DSC086612.jpg"> </b-img>
                                <br> scroll to right  ----------------><br/>
                                    
                                
                                </b-col>
                            </b-row>

                            <b-row>
                                
                                <b-col >
                                
                                <b-img src="~/assets/images/work/hardworkingcircuit13/DSC08638.jpg" fluid> </b-img>
                                <b-img src="~/assets/images/work/hardworkingcircuit13/tally-count.jpg" fluid> </b-img> 
                                <p>The terminal has been activated for 2502 times during the exhibition period</p>
                                <b-img src="~/assets/images/work/hardworkingcircuit13/DSC08654.jpg" fluid> </b-img> 
                                <hr>
                                <h4>  hardworking circuit #1 is sponsered & supported by </h4>
                                <p>Andio Lai 
                                    <br>Angela Su 
                                    <br>Cheuk Wing Nam 
                                    <br>Dennis Wong (sin:ned) 
                                    <br>Eason Page 
                                    <br>Fiona Lee 
                                    <br> Floating Projects Collective
                                    <br>Gigi Leung Ching wan 
                                    <br>Hody Law Sin Yan 
                                    <br>Kel Lok 
                                    <br>Man Mei To
                                    <br>Pan Lau Yan 
                                    <br>Samson Cheung Choi Sang 
                                    <br>Self fish wild - Yukmui Law + So Wai Lam + Kwong Wing Ka
                                    <br>Solomon Yu
                                    <br>Susi Law
                                    <br>Vivian Fung
                                    <br>Zoiee Yung
                                    </p>                
                                
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="6">
                                
                                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/298215822" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/298215822">hardworking circuit #1,3 @ IFVA 2018 (1)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                                    <p><a href="https://youtu.be/yewkf8RlAd8" target="_blank" rel="noopener noreferrer">youtube version</a></p>
                                    
                                
                                </b-col>
                                <b-col md="6">
                                
                                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/298215944" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/298215944">hardworking circuit #1,3 @ IFVA 2018 (2)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                                    <p><a href="https://youtu.be/hncMIn7A4WE" target="_blank" rel="noopener noreferrer">youtube version</a></p>
                                    
                                
                                </b-col>
                                <b-col md="6">
                                
                                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/298228836" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/298228836">hardworking circuit #1,3 @ IFVA 2018 (3)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                                    <p><a href="https://youtu.be/4WBEtw0alus" target="_blank" rel="noopener noreferrer">youtube version</a></p>
                                    
                                
                                </b-col>
                                 <b-col md="6">
                                     PLAYLIST
                                     <b-embed
                                        type="iframe"
                                        aspect="16by9"
                                        src="https://www.youtube.com/embed/videoseries?list=PLCEj7r8U6CrMjqxi30KIYfHGgpRNZWTaw"
                                        allowfullscreen
                                    ></b-embed>
                                 
                                </b-col>
                        
                                
                            </b-row>

                            <b-row>
                                <b-col md="6">
                                    <h5>making of</h5>
                                    <div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/293201786" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/293201786">Tally counter triggered by hardworking circuit #1.3</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                                    <p><a href="https://youtu.be/ypU0ClPO7Bg" target="_blank" rel="noopener noreferrer">youtube version</a></p>
                                </b-col>

                               
                            </b-row>
                        

                   <hr id="performance" style="padding-top:30px;">
                           <b-row>
                                <b-col >
                                    <h2>Performance in Sonic Anchor by hardworking circuit</h2>
                                    <p>A live event for discovering and extending the possibilities of hardworking circuit #1. [hardworking circuit #1.0] [hardworking circuit #1.1] [hardworking circuit #1.2]</p>
                                    <p> performance: 19th Feb, 2017 | <a href="http://www.cmhk.org/2017/03/15/online-archive-sonic-anchor-29-part-ii-31/">Sonic Anchor #29 Part II </a>- Second Coming Series: Hardworking Circuit #1.3 | Public Open Space, Comix Home Base , Organized by 
                                    Contemporary Musiking Hong Kong (CMHK)  & Hong Kong Arts Centre</p>
                                    <h4> Performance - video documentation</h4>
                                   <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/205106411" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/205106411">hardworking circuit #1.3 @ Sonic Anchor #29</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

                                </b-col>
                           </b-row>

                             <b-row> 
                                <b-col> <h4> Performance Video (fragment)</h4></b-col>
                           </b-row>

                             <b-row>
                                <b-col md="6">
                                        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/210588597" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                        <p><a href="https://vimeo.com/210588597">hardworking circuit #1.3 @ Sonic Anchor #29 (fragment 1)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

                                </b-col>
                                  

                                <b-col md="6">
                                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/210588604" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/210588604">hardworking circuit #1.3 @ Sonic Anchor #29 (fragment 2)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                                </b-col>
                           </b-row>

                           <b-row>
                                <b-col md="6">
                                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/210588572" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/210588572">hardworking circuit #1.3 @ Sonic Anchor #29 (fragment 3)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>   


                                </b-col>
                                    
                                <b-col md="6">
                                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/210588517" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/210588517">hardworking circuit #1.3 @ Sonic Anchor #29 (fragment 4)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                                </b-col>
                           </b-row>

                           <b-row>
                                <b-col md="6">
                                   <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/210588485" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/210588485">hardworking circuit #1.3 @ Sonic Anchor #29 (fragment 5)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>  


                                </b-col>
                                    
                                <b-col md="6">
                                    <b-img src="~/assets/images/work/hardworkingcircuit13/hardworkingcircuit1p3_sonicanchor29_firetrial.gif" fluid-grow></b-img>
                                </b-col>
                           </b-row>

                            <b-row>
                                <b-col>
                                    <h6><a href="https://www.youtube.com/embed/videoseries?list=PLCEj7r8U6CrP1261v3ztZy6uSEMMZUgjF" target="_blank" rel="noopener noreferrer"> youtube playlist</a></h6>
                                
                                     <b-embed
                                        type="iframe"
                                        aspect="16by9"
                                        src="https://www.youtube.com/embed/videoseries?list=PLCEj7r8U6CrP1261v3ztZy6uSEMMZUgjF"
                                        allowfullscreen
                                    ></b-embed>
                                </b-col>
                               
                            </b-row>

                           <b-row>
                               <b-col>
                                    
                                    <h4> On site view </h4>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-13-onsite-view-1.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-sonic-anchor-01.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-sonic-anchor-02.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-sonic-anchor-03.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-sonic-anchor-04.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-sonic-anchor-05.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-sonic-anchor-06.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-sonic-anchor-07.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-sonic-anchor-08.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-sonic-anchor-09.jpg" fluid> </b-img>
                                   
                                   
                                    
                                </b-col>
                            </b-row>
                            
                            <b-row>
                               <b-col>
                                    
                                    <h4 class=""> sketches </h4>
                                   
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-1p3sketch-03-copyweb.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-13-onsite-map.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-13-sketch-draft.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/sonic-anchor-29-tentative-floorplan-20160705.jpg" fluid> </b-img>
                                    
                                </b-col>
                            </b-row>
<hr id="statement" style="padding-top:30px;">
                            <b-row>
                               <b-col>
                                    
                                    <h4 class=""> Artist Statement </h4>
                                 <h3>About hardworking circuit #1 series</h3>
                                    <p>hardworking circuit#1 is a realization of a schema of monotonous, repetitive circuit, using as many units as possible of relay switch to bridge up the sequential extension of cables, merely for the purpose of electricity connection.</p>
                                    <h4>The initiation of making hardworking circuit #1</h4>
                                    <p>My work is invoked by my dissatisfaction with the overly spectacular appearance and total black-boxing of the algorithm and internal mechanisms in many media art works nowadays.</p>
                                    <p>Trained in a media art curriculum, I have a strong, even desperate, urge to maximize the potential of tools and raw materials in my hands, to push them in order to feel their limits. &ldquo;How dumb can an electronic circuit function?&rdquo; This question has always been lingering in my mind. Conventions of circuit design predicate primarily upon functionality and economic return. In response, in hardworking circuit #1, I have created an overtly excessive, and almost unnecessary circuit system, just to turn on some LED lights.</p>
                                    <p>I begin with plotting a schema of monotonous, repetitive circuit, using as many units as possible of relay switch to bridge up the sequential extension of cables, merely for the purpose of electricity connection. As I advance the connections and reach the 50th relay switch, the intensifying resistance of the growing cables and disorder in the relay switch cause the whole system to break down. Forced to stop by the circuit I have made, I review the &lsquo;paper concept&rsquo; to reconsider what has happened by calculation, measurement and analysis, followed by a series of trial and error. Numbers and hardware &ndash; cold and inhuman they are &ndash; tell me a lot: why the system needs warming up, how much jam I have created, how much energy I have wasted, and when and where I should stop. Driven by the need to compensate for the wastage I have generated which I have also meant to critique, I make the next work. I turn to sound, an amazing by-product of my excessive, doomed-to-fail generative circuit machine.</p>
                                    <p>The circuit system I have made gives off patterns of sound as a result of the domino effect of the bridging-up connections processing. These sounds, generated by electronics in the circuit, and the mechanically accumulated delay time are valuable to me. This machine of mine is no longer as monotonous as it looks on paper. The apparent &lsquo;waste&rsquo; and &lsquo;excess&rsquo; force open its (often forgotten) functional purpose (i.e. the blackbox of an electronic circuit) to generate a 2nd-generation schematic state. By opening the blackbox of the electronic circuit, I call attention to what lies between the input and output state. It seems the algorithm and intense soldering exercises I have done present a surprising artistic meaning.</p>
                                    <h3>勤力電路＃1</h3>
                                    <p>概念始於對現今媒體藝術的華麗外殼及背後黑盒子運作規則的不滿。</p>
                                    <p>一直以來在媒體藝術學院受訓、浮游,絕望的總想把手上的材料和工具推到不知哪一個極限。「電路可以有多愚蠢地運作」是老是常出現在腦海的問題。由於電路的設計似乎多是以經濟效益為原則,我才想製作一個過量、沒必要得顯然易見的電路來開啟一些發光二極管(LED),作為回應先前提及的不滿。</p>
                                    <p>首先是繪畫了一個圖面上重複單調的電路圖,在單一電線管道用上了海量的繼電器作為橋樑來延續電線的長度而已。當要把 電路圖變成實體,接駁第五十個繼電器時,愈來愈長的電線內的電阻和繼電器的失效令整個電路「功能」報廢,我不得不停下來審視自己在之前的紙上談兵,從一輪考量實際情況的計算、量度和試錯反省,算式上數字和冰冷的電子零件的姿態在告訴我 更多這件作品的事實:為什麼他們運作前要熱身,製造了多少混帳,浪費了多少能量,而我什麼時候在哪裡就好要停。一時間有感自己根本在製造本來要批判的對象。</p>
                                    <p>同一時間我卻又發覺這電路衍生的「副產品」是很有價值的,骨牌般的繼電器聲音有點搔得著耳朵癢處,每個繼電器運作時累積耽擱的時間好像出奇地珍貴。這個電路在實體化後好像沒有本來在紙上的單調。</p>
                                    <p>我只是用大量焊接填補了在輸入和輸出中間黑盒子般的轉化法則而已,而這也偶然帶來了一點驚喜的美學 。</p>
                                </b-col>
                            </b-row>

                            <b-row>
                               <b-col>
                                    
                                   <h4> Related Link </h4>
                                   <p> <a href="http://www.academy.arts-news.net/artsnap/%E3%80%8A%E5%8B%A4%E5%8A%9B%E9%9B%BB%E8%B7%AF13%E3%80%8B-%E2%80%94-%E7%8E%8B%E9%8E%AE%E6%B5%B7-wong-chun-hoi" target="blank">[interview[ Art News 藝頻 訪尋藝術作品我的作品（藝術家視頻獨白）《勤力電路#1.3》 — 王鎮海 (Wong Chun Hoi) </a>
                                   <p><nuxt-link to="/blog/article?name=2019-12-15-hardworking_circuit_1to4">[Blog] Art Note: 勤力電路#1.0 -#1.4</nuxt-link></p>
                                   <p><nuxt-link to="/work/hardworking-circuit-1-4">hardworking circuit #1.4 勤力電路#1.4</nuxt-link></p>
                                   <p><nuxt-link to="/work/hardworking-circuit-1-2">hardworking circuit #1.4 勤力電路#1.2</nuxt-link></p>
                                   <p><nuxt-link to="/work/hardworking-circuit-1-1">hardworking circuit #1.4 勤力電路#1.1</nuxt-link></p>
                                   <p><nuxt-link to="/work/hardworking-circuit-1-0">hardworking circuit #1.4 勤力電路#1.0</nuxt-link></p>
                                </b-col>
                            </b-row>
                  
             
            
           
            
            
                  

        </b-container>
           
            
            
    </div>
</template>

<script>
export default {
    data() {
        return {
            WorkInfo: [
                {
                    title: "hardworking circuit #1.3 勤力電路＃1.3 ",
                    previewText: "hardworking circuit#1 is a realization of a schema of monotonous, repetitive circuit, using as many units as possible of relay switch to bridge up the sequential extension of cables, merely for the purpose of electricity connection 勤力電路#1 實現了一個單調、重複的電路系統，以大量繼電器連接，順序延長成極長的電線，只不過就是為了通電。",
                    thumbnail:
                        "hardworking-circuit-1p3sketch-03-770x232.png",
                    medium:"electronics",
                    year:"2017-2019",
                    category: "nstallation | electronics | stupid  | toy | performance"
                }
            ]
        }
    },
    head() {
        return{
            title: this.WorkInfo[0].title,
            meta: [
                { hid: 'description', name: this.WorkInfo[0].title , content: this.WorkInfo[0].previewText },
                { hid: 'keywords', name: this.WorkInfo[0].medium , content: this.WorkInfo[0].category }
      
            ]
        }
    }
}
</script>

<style scoped>
.scroll-container { 
    overflow: auto;
  white-space: nowrap;
  padding: 2px;
  height: auto;
  
}

.session-title { 
    background-color: rgba(149, 226, 200, 0.954);
}
</style>