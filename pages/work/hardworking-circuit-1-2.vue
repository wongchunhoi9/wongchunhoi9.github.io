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
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/152048527" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

                    <p><a href="https://vimeo.com/152048527">hardworking circuit #1.2 (24VDC) @hardworking burning electricity (part1)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                    <figcaption class="figure-caption">  </figcaption>
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/152048528" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
                    <p><a href="https://vimeo.com/152048528">hardworking circuit #1.2 (24VDC) @hardworking burning electricity (part2)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

                    
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='9' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
                    </p>
                    
                          <h5>Page Content:</h5>
                          <p>
                            <ul>
                               
                                <li> <nuxt-link :to="{path: '#', hash: 'hardworkingBurningElectricity'}">Exhibition @ hardworking burning electricity : wongchunhoi solo exhibition 2016 JAN</nuxt-link></li>
                                <li> <nuxt-link :to="{path: '#', hash: 'schematicDraft'}">schematic draft</nuxt-link></li>
                                <li> <nuxt-link :to="{path: '#', hash: 'makingOf'}"> making of (assemble the repetitive circuit)</nuxt-link></li>
                                <li> <nuxt-link :to="{path: '#', hash: 'mereExistence'}"> Exhibition @Mere Existence 僅僅在場, Canton Gallery ,2016 March</nuxt-link></li>
                                <li> <nuxt-link :to="{path: '#', hash: 'projectRoomH'}"> Exhibition @ Microwave 2016: Project Room Exhibition 實驗H場</nuxt-link></li>
                                <li> <nuxt-link :to="{path: '#', hash: 'note'}"> 勤力電路＃1 後記 Afterword &ndash; after debugging hardworking circuit #1 series</nuxt-link></li>
                                
                                
                            </ul>
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

            
<hr id="hardworkingBurningElectricity" style="padding-top:30px;">
            <!-- WORK CONTENT -->
            <b-row>
                <b-col>
                   
                   <!--here to write-->
                    <h4>@ hardworking burning electricity : wongchunhoi solo exhibition 2016 JAN</h4>
                    <h5>IMAGE</h5>
                    
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/hardworkingcircuit1_24VDC_01_overview.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/hardworkingcircuit1_24VDC_01_overview2.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/hardworkingcircuit1_24VDC_02_relaysequence.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/hardworkingcircuit1_24VDC_03_endpoint_musicbox.jpg" fluid > </b-img>
                    <hr>
                    <h4> Flow on this set : </h4>
                    <p>
                        
                        <b-button>hidden black <b-badge variant="info">button</b-badge>   on broken piano</b-button>  
                    &rarr;
                    <b-button variant="info"> 360 pcs of DC 24V relays  <a href="http://https://www.se.com/ww/en/product/RXM2LB2BD/miniature-plug-in-relay---zelio-rxm2l---2-c-o---24-v-dc---5-a---with-led/" target="_blank" rel="noopener noreferrer">  <b-badge variant="light">(Schneider  RXM2LB2BD DC24V </b-badge>)</a></b-button> &rarr;
                    <b-button variant="success">120rpm motor</b-button>  &rarr;
                    <b-button variant="success">drive a music box <b-badge variant="light">天空の城ラピュタ LAPUTA ost</b-badge></b-button> &rarr;&rarr;&rarr;?'
                     </p>
                    

                </b-col>
            </b-row>
 <hr id="schematicDraft" style="padding-top:30px;">
            <b-row>
                <b-col> <h4>schematic draft</h4>
                    <b-img  src="~/assets/images/work/hardworkingcircuit12/hardworking-circuit-12VDC-output-trial-1.png" fluid > </b-img>
                    <b-img  src="~/assets/images/work/hardworkingcircuit12/hardworking-circuit-explain.gif" fluid-grow> </b-img>
                    <b-img src="~/assets/images/work/hardworkingcircuit12/hardworking-circuit-1-2-connectionsketch.svg" fluid-grow></b-img>
                </b-col>
            </b-row>
 <hr id="makingOf" style="padding-top:30px;">
            <b-row>
                <b-col md="6">
                   <h4>making of (assemble the repetitive circuit)</h4>
                    <div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/147564987" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
                    <p><a href="https://vimeo.com/147564987">hardworking circuit #1.2 (24VDC)  work in progress day 1</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                </b-col>

                <b-col md="6">
                   
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/148333350" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
                    <p><a href="https://vimeo.com/148333350">hardworking circuit #1.2 (24VDC) work in progress day 2</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/148517294" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
                    <p><a href="https://vimeo.com/148517294">hardworking circuit #1.2 (24VDC) work in progress day 3</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                </b-col>
            </b-row>

             <b-row>
                <b-col md="6">
                   
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/150010577" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
                    <p><a href="https://vimeo.com/150010577">hardworking circuit #1.2 (24VDC) work in progress day 4</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                </b-col>

                <b-col md="6">
                 
                   <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/150358928" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
                    <p><a href="https://vimeo.com/150358928">hardworking circuit #1.2 (24VDC) work in progress day 5</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/150610637" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
                    <p><a href="https://vimeo.com/150610637">hardworking circuit #1.2 (24VDC) work in progress day 6</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                     <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/24dc_WIP_1.jpg" fluid > </b-img>
                     <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/24dc_WIP_2.jpg" fluid > </b-img>
                     <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/24dc_WIP_3.jpg" fluid > </b-img>
                     <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/DSC05832-resize.jpg" fluid > </b-img>
                     <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/DSC05833.jpg" fluid > </b-img>
                    <br> <br>
                     <h5>Technical Spec of the 24VDC relay: <a href="https://pdf1.alldatasheet.net/datasheet-pdf/view/520598/ETC1/RXM2LB2BD.html" target="_blank" rel="noopener noreferrer">[here] <b-img style="width:400px;" thumbnail src="~/assets/images/work/hardworkingcircuit12/RXMLB-1.jpg" fluid > </b-img></a> </h5>
                     
                     
                </b-col>
            </b-row>
<hr id="mereExistence" style="padding-top:30px;">
            <b-row align-h="center">
                <b-col>
                    <h5>@<a href="http://cantongallery.com.cn/exhibition.php?exhibition=2" target="_blank" >Mere Existence 僅僅在場</a>, Canton Gallery ,2016 March</h5> 
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/162643185" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                    <p><a href="https://vimeo.com/162643185">hardworking circuit #1.2 (24VDC) @ Mere existence, Canton Gallery</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_2607.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_2608.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_2610.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_2615.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_2616.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_2618.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_2619.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_2621.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_2622.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_2624.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_2625.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_2626.jpg" fluid > </b-img>

                    <p> // ...  艺术家以继电器这个初代电子元件，制造一个低科技的小革命。当电流通过大量电路组，继电器就会如多米诺骨牌一样，开始向后倒，因为电量能量有限，到后面越来越慢。而发出的声音如室内雷暴，是低科技对理所当然的样板房的一个小怒吼。</p> 
                    <a href="http://cantongallery.com.cn/works.php?works=18">Canton Gallery Website</a>
                    <a href="https://news.artron.net/20160320/n823483.html"> event news</a>

                    <hr>
                    <h4> Flow on this set : </h4>
                    <p>
                        <b-button> <b-badge variant="info">button</b-badge>   </b-button>  
                    &rarr;
                    <b-button variant="info"> 360 pcs of DC 24V relays  <a href="http://https://www.se.com/ww/en/product/RXM2LB2BD/miniature-plug-in-relay---zelio-rxm2l---2-c-o---24-v-dc---5-a---with-led/" target="_blank" rel="noopener noreferrer">  <b-badge variant="light">(Schneider  RXM2LB2BD DC24V </b-badge>)</a></b-button> &rarr;
                    <b-button variant="success">Toy fish</b-button>  &rarr;
                   
                     </p>
                    
                </b-col>
            </b-row>
<hr id="projectRoomH" style="padding-top:30px;">
            <b-row >
                <b-col >
                    <h5>@Microwave 2016: Project Room Exhibition 實驗H場</h5>
                    <p>2016 May</p>
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/168784743" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                    <p><a href="https://vimeo.com/168784743">hardworking circuit #1.2  @Mcrowave project room  , floating projects</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/169444907" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                    <p><a href="https://vimeo.com/169444907">hardworking circuit #1.2  (close up) @Mcrowave project room  , floating projects</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

                    <iframe width="315" height="560" src="https://www.youtube.com/embed/e27c03bwSNw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_7225.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_7226.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_7238.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_7247.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_7249.jpg" fluid > </b-img>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit12/IMG_7252.jpg" fluid > </b-img>
                   
                        <h4> Flow on this set : </h4>
                    <p>
                        <b-button> <b-badge variant="info">button</b-badge>   </b-button>  
                    &rarr;
                    <b-button variant="info"> 360 pcs of DC 24V relays  <a href="http://https://www.se.com/ww/en/product/RXM2LB2BD/miniature-plug-in-relay---zelio-rxm2l---2-c-o---24-v-dc---5-a---with-led/" target="_blank" rel="noopener noreferrer">  <b-badge variant="light">(Schneider  RXM2LB2BD DC24V </b-badge>)</a></b-button> &rarr;
                    <b-button variant="success">Toy fish</b-button>  &rarr;
                   
                   
                     </p>
                </b-col>
            </b-row>
        <hr id="note" style="padding-top:30px;">
            <b-row>
                <b-col>
                    <h4>勤力電路＃1 後記</h4>
                    <p>在勤力電路＃1.0面世後，還是面對著很多電路上的臭蟲和物理上的限制，雖然盡是有趣之事，卻又帶來不少執行上的苦惱。回歸基本的電路圖上，重新畫過幾條線，就這樣又把勤力電路＃1本來已經簡單到不能再簡單的基本結構做了一點加固，繼而開關的節奏變了，電力在電線上的能量消耗似乎減少了。</p>
                    <p>談完紙上的兵，把勤力電路＃1實體化的過程只是漫長的生產線事宜，結構上是不停重覆的開關，功能上仍是開關，但在考慮被開動的物件時，勤力電路打開了我一直視開關制作為一個物理上的因果關係的界限，那個電路的未端單純是個指示已經通了電的符號。我想還是留待它們緣在好了，反正好像就是什麼都可以。更重要的是電路和電子本身的極限才是我最關心的事情。</p>
                    <p>王鎮海／二零一六年三月</p>
                    <h4>Afterword &ndash; after debugging hardworking circuit #1 series</h4>
                    <p>After launching hardworking circuit #1.0, there were still quite a lot of "bugs" and physical limitation I needed to encounter within the circuitry of hardworking circuit #1. Although those issue were sometimes surprising, the execution of the circuit was not as smooth as it was. I went back to the schematic diagram (paper concept) I had drafted from the very beginning, and then re-drew a few dots and lines, in order to &ldquo;debug&rdquo; the circuitry so as to consolidate the execution of the domino structure of electronic relays, also to tackle such a cannot-be-simpler circuit&rsquo;s realization problems. The rhythm of the mechanical sound of the circuit changed, the energy loss from the cables decreased. Some &ldquo;bugs&rdquo; were killed.</p>
                    <p>Other than the &ldquo;paper concept&rdquo;, it is all about the life-span needed to spend on the assembly line. Turn out the actual function of the repetitive relay sequence was still mere another on/off switch if we considered it in terms of functionality and economic return. However, when I considered the endpoint of the circuit, which was the thing that to be turned on, the hardworking circuit #1 somehow opened up the world of &ldquo;what can be turned on by a switch&rdquo; by just looking on the pure physical causal relationship. For me, the endpoint of the circuit was mere an indicator of &ldquo;something is turned on&rdquo;. I didn&rsquo;t intentionally look for the specific endpoint after several trial in the assemble of hardworking circuit #1. What I concern was probably the presence and the limitations of the electronic circuit itself.</p>
                    <p>Wong Chun-hoi / March 2016</p>
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
                    title: "hardworking circuit #1.2 24VDC  勤力電路＃1.2 直流電24伏特 ",
                    previewText: "version 1.2 of hardworking circuit #1",
                    thumbnail:
                        "hardworking-circuit-1-2-connectionsketch.svg",
                    medium:"electronics",
                    year:"2016",
                    category: "electronics | toy fish | music box "
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

</style>