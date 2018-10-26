<template>
    <div>
  
      <div class="h-block">
  
        <el-carousel trigger="click" height="2.42rem" overflow="hidden">
          <el-carousel-item v-for="item in 2" :key="item">
            <!-- 轮播图 -->
              <ul>
                  <router-link to="/shopslist">
                <li  v-for="(srcData,index) in imgsData"   :key="index">
                  <!--https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg -->
                  
                    <div @click="goParam(index,imgsData[index].title)">
                      <img :src="'https://fuss10.elemecdn.com'+srcData.image_url" alt="">
                  
                      <p    class="h-ptitle">{{srcData.title}}
                        
                      </p>
                    </div>
                 
                  
                 
                </li>
              </router-link>
              </ul>
            
             
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- <Shopsdetail></Shopsdetail> -->
      <!-- <router-view ></router-view> -->
    </div>
  </template>
  <script>
    // import  Shopsdetail from '../components/vue-ele/home/shopsdetail' 
    export default {
      name: "header",
      data() {
        return {
  
          imgsData: [],
             index:[]
        }
      },
    //  components:{
    //   Shopsdetail
    //  },
      created() {
        let api = "https://elm.cangdu.org/v2/index_entry";
        this.$http.get(api).then((data,index) => {
          //成功后的回调
          console.log('成功了..');
          console.log(data.data);
          this.imgsData = data.data;

         let d = data.data.map((r,i)=>{
          this.index = i;
           console.log(this.index,"hhhhhccccfffff")
        })
        })
       
      },
      methods:{
        // alert(index){
        //   alert(index);
        // } 
       
        goParam:function(index,title){
          this.index=index;        
          this.title=title;
          this.$router.push({name:'shopslist',params:{id:this.index,title:this.title}});
}       
      }
  
    }
  
  </script>
  <style scoped>
    .el-carousel ul{
      margin-top: 0.45rem;
    }
    .el-carousel li {
      float: left;
      font-size: 0.15rem;
      color: gray;
      opacity: 0.75;
      width: 20%;
      margin-left: 4%;
      list-style: none;
    }
  
    .el-carousel li img {
  
      width: 100%;
    }
  .h-ptitle{
    text-align: center;
  }
  </style>
  