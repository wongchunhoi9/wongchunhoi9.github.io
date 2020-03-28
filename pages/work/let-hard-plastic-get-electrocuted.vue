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
                    <b-img  src="~/assets/images/work/lethardplasticbeelectrocuted/lethardplastic-feature.jpg" fluid > </b-img>
                    
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

            <!-- WORK CONTENT -->
            <b-row>
                <b-col>
                   
                    <h3>Game instruction</h3>
                    <p>2 players in one game. Each player will have a push button on hand and one set of massage pad on face (or other body part)</p>
                    <p>When Player A pressed A&rsquo;s button, this will connect the circuit to make therapy pulse [attack] to player B through the massage pad from the therapy massage machine. Player B can press the push button to cancel the circuit connection [defense] ,</p>
                    <p>and vice versa.</p>
                    <p>When Player B pressed B&rsquo;s button, this will connect the circuit to make therapy pulse [attack] to player B through the massage pad from the therapy massage machine. Player A can press the push button to cancel the circuit connection [defense] , and vice versa.</p>
                    <p>** The circuit completion is done by electronic relay controlled by a micro processor. It is not identifical to an instant attack which the timing of pulse generation depended on the mode of massage therapy machine.</p>
                    <p>When both player A and player B pressed and hold the buttons for 3 seconds, both sets of massage pad circuit will be connected for 1 seconds.</p>
                    <p>When no one is pressing button for 5 seconds, both sets of massage pad circuit will be connected for 1 seconds.</p>
                    <p>After the preparation, turn on the digital therapy massage machine and select the mode and straightness of massage pulse to start the game.</p>
                    <p>No time limit for the game. The game stop until any one surrender. or please decide the winning condition before game start.</p>
                </b-col>
                <b-col>
                    <h3>遊戲玩法：</h3>
                    <p>雙方各有一粒按扭，雙方臉部（或其他）地方貼上經絡治療器貼片。</p>
                    <p>當A君按下按扭，會接通B君上的電（攻擊），B君可按自己手上的按扭來關電（防守），如是者<br />當B君按下按扭，會接通A君臉上的電（攻擊），A君可按自己手上的按扭來關電（防守）<br />**上面所講的接上電，其實只是用繼電器把供電貼片的電路接上，並不代表立即被電，是關取決於經絡治療器的模式（如按摩、搥擊、針灸、推拿等）。</p>
                    <p>當雙方同時按下維持三秒，將雙方的的貼片會同時供電一秒</p>
                    <p>當沒有任何按扭事件發生維持五秒，將雙方的的貼片會同時供電一秒</p>
                    <p>當雙方準備完畢，即可閞動經駱治療器，選擇按摩的模式及強度。</p>
                    <p>時限沒有，直到任何一方投降為止，或於開賽前想好一個分勝負的方法。</p>
                  
                </b-col>
            </b-row>
             <b-row>
                <b-col>
                    <h4> Schematic diagram</h4>
                    <b-img src="~/assets/images/work/lethardplasticbeelectrocuted/lethardplasticbeelectrocuted_connectionweb.png" fluid></b-img>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <h4>讓硬塑料被電吧 大戰 } Open Battle &ndash; Let hard plastic get electrocuted</h4>
                    <p>mistruths 15.01.2016 (五｜Fri) 7:30pm</p>
                    <p>賽制：目標有16位玩家，以淘汰賽進行。<br />最後勝利將獲增<br />請留名或pm報名，或於當晚七時二十九分前即場報名<br />**心臟病、高血壓、有膽但淆底之人仕不宜參戰，請移玉步到花生席。</p>
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/181967968" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                    
                   <a href=" https://youtu.be/uBOELZIKYY4" target="_blank" rel="noopener noreferrer">youtube version</a>
                </b-col>
            </b-row>
            
            <b-row> 
                <b-col md="6">
                   <b-img fluid src="~/assets/images/work/lethardplasticbeelectrocuted/openballte1.jpg"> </b-img>
                </b-col>
                <b-col md="6">
                   <b-img fluid src="~/assets/images/work/lethardplasticbeelectrocuted/openballte2.jpg"> </b-img>
                </b-col>
            </b-row>
            <b-row> 
                <b-col md="6">
                   <b-img fluid src="~/assets/images/work/lethardplasticbeelectrocuted/openballte3.jpg"> </b-img>
                </b-col>
                <b-col md="6">
                   <b-img fluid src="~/assets/images/work/lethardplasticbeelectrocuted/openballte4.jpg"> </b-img>
                </b-col>
            </b-row>
            <b-row> 
                <b-col md="6">
                   <b-img fluid src="~/assets/images/work/lethardplasticbeelectrocuted/lethardplastic-chansiul.jpg"> </b-img>
                </b-col>
                <b-col md="6">
                   <b-img fluid src="~/assets/images/work/lethardplasticbeelectrocuted/lethardplastic-annac.jpg"> </b-img>
                </b-col>
            </b-row>
            <b-row> 
                <b-col>
                   <b-img fluid src="~/assets/images/work/lethardplasticbeelectrocuted/annavssiulung.jpg"> </b-img>
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
                    title: "Let hard plastic get electrocuted ！讓硬塑料被電吧！",
                    previewText: "",
                    thumbnail:
                        "lethardplasticbeelectrocuted_connectionweb.svg",
                    medium:"electronics | game ",
                    year:"2011-2016",
                    category: "Micro Processor, relay, push button, digital massage therapy machine"
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