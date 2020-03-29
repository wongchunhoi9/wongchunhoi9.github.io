import Vue from 'vue'


import workPreviewList from "@/components/workPreview/workPreviewList"
import HeroSessionImageSlider from "~/components/HeroSessionImageSlider"
import soundDesignGrid from "@/components/soundPreview/soundDesignGrid"
import albumGrid from '@/components/soundPreview/albumGrid'
import modelPreviewList from '@/components/modelPreview/modelPreviewList'

Vue.component('workPreviewList', workPreviewList)
Vue.component('HeroSessionImageSlider', HeroSessionImageSlider)
Vue.component('soundDesignGrid', soundDesignGrid)
Vue.component('albumGrid', albumGrid)
Vue.component('modelPreviewList', modelPreviewList)