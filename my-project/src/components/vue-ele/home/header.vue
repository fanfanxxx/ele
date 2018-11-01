<template>
  <div>

    <div class="h-block">

      <!-- <el-carousel trigger="click" height="2.42rem" overflow="hidden"> -->
      <!-- <el-carousel-item v-for="item in 2" :key="item"> -->
      <!-- 轮播图 -->
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper1">
          <router-link to="/shopslist">
            <li v-for="(srcData1,index) in imgsData1" :key="index">
              <!--https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg -->

              <div @click="goParam(index,imgsData1[index].title)">
                <img :src="'https://fuss10.elemecdn.com'+srcData1.image_url" alt="">

                <p class="h-ptitle">{{srcData1.title}}

                </p>
              </div>
            </li>
          </router-link>
        </swiper-slide>
        <!-- 第二页 -->
        <swiper-slide class="swiper2">
          <router-link to="/shopslist">
            <li v-for="(srcData2,index) in imgsData2" :key="index">
              <!--https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg -->

              <div @click="goParam(index,imgsData2[index].title)">
                <img :src="'https://fuss10.elemecdn.com'+srcData2.image_url" alt="">

                <p class="h-ptitle1">{{srcData2.title}}
                </p>
              </div>
            </li>
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>



    </div>

  </div>
</template>
<script>
  // import  Shopsdetail from '../components/vue-ele/home/shopsdetail' 
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    name: "headertop",
    data() {
      return {

        imgsData: [],
        index: [],
        imgsData1: [],
        imgsData2: [],
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          autoplay: {
            disableOnInteraction: true,
            stopOnLastSlide: true
          },
          // loop: true,
          effect: 'coverflow',
          pagination: {
            el: '.swiper-pagination',
            // type : 'progressbar', //分页器形状
            clickable: true, //点击分页器的指示点分页器会控制Swiper切换
          },

        }
      }
    },
    //  components:{
    //   Shopsdetail
    //  },
    created() {
      let api = "https://elm.cangdu.org/v2/index_entry";
      this.$http.get(api).then((data, index) => {
        //成功后的回调
        console.log('成功了..');
        console.log(data.data);
        this.imgsData = data.data;
        this.imgsData1 = data.data.splice(0, 8);
        this.imgsData2 = data.data.splice(0, 8);
        // console.log(imgsData1, "hahahah")
        let d = data.data.map((r, i) => {
          this.index = i;
          console.log(this.index, "hhhhhccccfffff")
        })
      })

    },
    methods: {
      // alert(index){
      //   alert(index);
      // } 

      goParam: function (index, title) {
        this.index = index;
        this.title = title;
        this.$router.push({
          name: 'shopslist',
          params: {
            id: this.index,
            title: this.title
          }
        });
        var keeptitle=localStorage.setItem('keeptitle',title);
      },
    
    }

  }

</script>
<style scoped>
  .swiper1 {
    padding-top: 0.2rem;
    padding-bottom: 0.25rem;
    display: flex
  }

  .swiper1 li {
    float: left;
    font-size: 0.15rem;
    color: gray;
    opacity: 0.75;
    width: 20%;
    margin-left: 4%;
    list-style: none;
  }

  .swiper1 li img {

    width: 100%;
  }

  .h-ptitle {
    text-align: center;
  }

  .swiper2 {
    padding-top: 0.2rem;;
    display: flex;
    padding-bottom: 0.25rem;
  }

  .swiper2 li {
    float: left;
    font-size: 0.15rem;
    color: gray;
    opacity: 0.75;
    width: 20%;
    margin-left: 4%;
    list-style: none;
  }

  .swiper2 li img {

    width: 100%;
  }

  .h-ptitle1 {
    text-align: center;
    color: #666;
  }

</style>
<style>


</style>
