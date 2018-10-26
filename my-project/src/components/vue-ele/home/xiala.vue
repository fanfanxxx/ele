<template>
  <div class="warp">
    <div class="title">
      <div class="h-fenlei">
        <div @click="fenlei">分类</div>
      </div>
      <div class="h-paixu">
        <div @click="paixu"> 排序</div>
      </div>
      <div class="h-shaixuan">
        <div @click="shaixuan"> 筛选</div>
      </div>
    </div>
    <!-- ---------------分类的下拉列表------------------- -->
    <div class="down">
      <div class="f-list">
        <div v-show="value1">
          <div v-for="(items,index) in menudata" :key="index">

            <div class="pandu" v-if="index==0">
              <div class="h-list1"    @click="list1(index)">
                <li class="yiguo">{{items.name}}</li>
                <li class="yorder">{{items.count}}</li>

              </div>
            </div>
            <div class="pandu" v-else-if="index==4">
              <div class="h-list1"   @click="list1(index)">
                <img  :src="'https://fuss10.elemecdn.com/'+items.image_url+'.jpeg'">
                <li class="menu">{{items.name}}</li>
                <li class="order">{{items.count}}</li>
                <li class="h-sign">></li>
              </div>
            </div>
            <div class="pandu" v-else-if="index==7">
              <div class="h-list1"  @click="list1(index)">
                <img  :src="'//elm.cangdu.org/img/default.jpg'">
                <li class="menu">{{items.name}}</li>
                <li class="order">{{items.count}}</li>
                <li class="h-sign">></li>
              </div> 
            </div>



            <div class="panduan" v-else>
              <div class="h-list1 "   @click="list1(index)">
                <img  :src="'https://fuss10.elemecdn.com/'+items.image_url+'.png'">
                <li class="menu">{{items.name}}</li>
                <li class="order">{{items.count}}</li>
                <li class="h-sign">></li>
              </div>
            </div>


          </div>

        </div>
        <!-- ---------------------------------- -->
       
      </div>
      <div v-show="value2">
        <div class="p-list">
          <li v-if="1">智能排序</li>
          <li v-if="1">距离最近</li>
          <li v-if="1">销量最高</li>
          <li v-if="1">起送价最低</li>
          <li v-if="1">配送速度最快</li>
          <li v-if="1">评分最高</li>
        </div>
      </div>
      <!-- ---------------------------------- -->
      <div v-show="value3">
        <div class="s-list">
          <div v-if="1">配送方式</div>
          <div v-if="1"> <span class="wen">蜂鸟专送</span></div>
        </div>
      </div>
      <!-- ---------------------------------- -->
      <div class="list-right">
        <div v-show="value4">
          <div   class="h-list2" v-for="(menudetail,index) in arr" :key="index">
                   <div>
                    <li >{{menudetail.name}}</li>
                    <li>{{menudetail.count}}</li>
                   </div>
             
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"xiala2",
    data: () => ({
      value1: false,
      value2: false,
      value3: false,
      value4: false,
      menudata:[],
      arr:[],
     
    }),
    methods: {
      fenlei: function() {
        this.value1 = !this.value1;
        this.value2 = this.value3 = this.value4=false;
        
      },
      paixu: function() {
        this.value2 = !this.value2;
        this.value1 = this.value4 = false;
        this.value3 = false;
      },
      shaixuan: function() {
        this.value3 = !this.value3;
        this.value2 = false;
        this.value2 = this.value4 = false;
      },
      list1: function(a) {
        this.value4 = false;
        this.value4 = !this.value4;
        console.log(a);
        this.arr=this.menudata[a].sub_categories;
        console.log(this.arr);
        this.isA=true;
      }
    },
    created(){
      var _this = this;

      // 接口8
      const api8="https://elm.cangdu.org/shopping/v2/restaurant/category"
      this.$http.get(api8).then(data=>{
        _this.menudata=data.data;
        console.log("获取到数据")
        console.log(_this.data8)
      })
    }
  };
</script>
<style scoped>
  .warp {
    background-color: #fff;
    position: relative;
    /* border: 1px solid black */

  }
  .title {
    height: 60px;
    display: flex;
    border-bottom: 1px solid gray;
    font-size: 0.15rem;
    line-height: 60px;
    width: 100%;
    text-align: center;

  }
  .title>div{
    width: 30%;
    height: 60px;
    line-height: 60px;
    font-size:0.2rem;
    border-right: 1px solid gray;
    text-align: center;
    /* padding: .02rem;
  } 
 
  .tu{
    width: 33%;
    text-align: center;
    padding: 0.3rem 0;
    /*margin: 0.6rem 0;*/
  }
  .down {
    background-color: #fff;
    width:100%;
    position: absolute;
    z-index: 1000;
  }
  .f-list {
    background-color: rgb(201, 201, 204);
    /* background-color:white; */
    
    width: 49%;
    float: left;
   

  }


  .h-list1 {
    /*margin: 1.4rem 0;*/
    font-size: 0.1rem;
    /*border: 1px solid green;*/
    height: 50px;
    width: 100%;
    position: relative;
    z-index:1000;
  }
  .h-list1 img{
    width: 30%;
    height: 50px;
    margin-top: 5px;


  }
  .menu{
    width: 40%;
    height: 50px;
    line-height: 60px;
    text-align: center;
    /* border: 1px solid red; */
    position: absolute;
    top: 0;
    left:35%;
    font-size:0.15rem;

  }
  .order{
    width: 20%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    /*border: 1px solid red;*/
    position: absolute;
    top: 5px;
    right:5%;
    font-size:0.15rem;

  }
  .yiguo{
    width: 40%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-left: 10%;
    font-size:0.15rem;
  }
.yorder{
  width: 20%;
  height: 50px;
  line-height:  50px;
  text-align: center;
  position: absolute;
  top:0 ;
  right:30%;
  font-size:0.15rem;
}
  .h-sign{
    width: 10%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    /*border: 1px solid red;*/
    position: absolute;
    top: 5px;
    right:0%;
    font-size:0.15rem;
  }
  .list-right{
    background-color: #fff;
    width: 48%;
    position: absolute;
    top:0;
    right: 0;
    z-index: 100;

  }
  .h-list2{
    width:100%;
    height: 50px;
    display: flex;
    /* border: 1px solid green; */
   
    z-index: 100;
  }
  .h-list2>div{
    height: 50px;
    width:100%;
    line-height: 50px;
    text-align: center;
    font-size: 0.15rem;
    border-bottom: 1px solid gray;
    display: flex;
  }
  .h-list2>div li{
    height: 50px;
    width:50%;
    line-height: 50px;
    text-align: center;
    font-size: 0.15rem;
    border-bottom: 1px solid gray;
  }
  .p-list, .s-list{
    position: absolute;
    left: 0;
    top:0;
    background-color: white;
    width: 100%;
    z-index: 1000;
  }
  .p-list li{
    height: 50px;
    width:100%;
    line-height: 50px;
   padding-left: 20%;
    font-size: 0.15rem;
    color: black;
    border-bottom: 1px solid gray;
   
  }
 
</style>
