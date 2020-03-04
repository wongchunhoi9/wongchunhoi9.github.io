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
                    <b-img fluid-grow src="~/assets/images/hardworking-circuit-1p3sketch-03.svg" fluid > </b-img>
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
            

               
                <!-- Schematic and Principle -->
             <b-row>
                   <b-col>
                       <h5>Schematic diagram</h5>
                        <b-img fluid src="~/assets/images/work/hardworkingcircuit13/Schematic-V1.png"> </b-img>
                        <b-img src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-1-650x460-version4_15fps_loop.gif" fluid-grow></b-img>
                    </b-col>
            </b-row>


            
            <b-row>
                <b-col>
                   <br/>
                  <b-tabs content-class="mt-3" fill pills active-nav-item-class="font-weight-bold text-uppercase text-danger">
                        <b-tab title="installation @ 23rd IFVA" active><!-- WORK CONTENT -->
                            <b-container>
                                <b-row>
                                <b-col>
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
                                    
                                
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="6">
                                
                                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/298215822" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/298215822">hardworking circuit #1,3 @ IFVA 2018 (1)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                                    
                                
                                </b-col>
                                <b-col md="6">
                                
                                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/298215944" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/298215944">hardworking circuit #1,3 @ IFVA 2018 (2)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                                    
                                
                                </b-col>
                                <b-col md="6">
                                
                                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/298228836" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/298228836">hardworking circuit #1,3 @ IFVA 2018 (3)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                                    
                                
                                </b-col>
                        
                                
                            </b-row>

                            <b-row>
                                <b-col md="6">
                                    <h5>making of</h5>
                                    <div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/293201786" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/293201786">Tally counter triggered by hardworking circuit #1.3</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                                    
                                </b-col>
                            </b-row>
                        </b-container>
                    </b-tab>

                    <b-tab title="Performance @Sonic Anchor #29">
                        <b-container>
                           <b-row>
                                <b-col >
                                    <p>A live event for discovering and extending the possibilities of hardworking circuit #1. [hardworking circuit #1.0] [hardworking circuit #1.1] [hardworking circuit #1.2]</p>
                                    <p> performance: 19th Feb, 2017 | <a href="http://www.cmhk.org/2017/03/15/online-archive-sonic-anchor-29-part-ii-31/">Sonic Anchor #29 Part II </a>- Second Coming Series: Hardworking Circuit #1.3 | Public Open Space, Comix Home Base , Organized by 
                                    Contemporary Musiking Hong Kong (CMHK)  & Hong Kong Arts Centre</p>
                                    <h4> Performance - video documentation</h4>
                                   <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/205106411" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    <p><a href="https://vimeo.com/205106411">hardworking circuit #1.3 @ Sonic Anchor #29</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

                                </b-col>
                           </b-row>

                             <b-row> 
                                <b-col>  Performance Video (fragment)</b-col>
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
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/DSC08638.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/DSC08638.jpg" fluid> </b-img>
                                    
                                </b-col>
                            </b-row>

                            <b-row>
                               <b-col>
                                    
                                    <h4> sketches </h4>
                                   
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-1p3sketch-03-copyweb.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-13-onsite-map.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/hardworking-circuit-13-sketch-draft.jpg" fluid> </b-img>
                                   <b-img thumbnail src="~/assets/images/work/hardworkingcircuit13/sonic-anchor-29-tentative-floorplan-20160705.jpg" fluid> </b-img>
                                    
                                </b-col>
                            </b-row>
                        </b-container>

                    </b-tab>
                       
                    </b-tabs>
                  
                </b-col>
            </b-row>
            
            <!-- WORK CONTENT -->
            
            
                  

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
</style>