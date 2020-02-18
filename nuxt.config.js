
import path from 'path'
 import FMMode from "frontmatter-markdown-loader/mode";
const baseUrl = 'https://wongchunhoi9.github.io';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title:'wongchunhoi9.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet' , href: "https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap"},
      { rel: 'stylesheet' , href: "https://fonts.googleapis.com/css?family=Cutive+Mono|Rajdhani:300|Raleway:200&display=swap" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  // pageTransition: {
  //   name: 'page',
  //   mode: 'out-in',
  //   type:"animation",
  //   beforeEnter (el) {
  //     console.log('Before enter...');
  //   }
  // },
  /*
  ** Global CSS
  */
  css: ['github-markdown-css' ,
        '~/assets/styles/main.css' ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader')
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      };
    
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
           include: path.resolve(__dirname, 'contents'),
          options: {
            // mode: [FMMode.VUE_COMPONENT],
            mode: [FMMode.VUE_COMPONENT, FMMode.META, FMMode.HTML],
            vue: {
              root: 'markdown-body'
            }
          }
        }
      );
      
    },

  

  }
}
