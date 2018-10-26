<template>
  <div class="h-shoplist">
    <router-link to="/htakeout"><div class="h-return" ><</div></router-link>
    <div class="h-listTop">{{this.$route.params.title}}</div>
    
    
   <Xiala class="h-xiala"></Xiala>

<Allshops class="h-allshop"></Allshops>
   <Htotal></Htotal>
  </div>
</template>
<script>
  import Allshops  from "./allshops";
  import Xiala from "./xiala";
  import Htotal from "../htotal.vue"
  export default {
    name: "shopslist",
    data() {
      return {
        shopData: null,
        shop:[],
        activeIndex: '1',
      }
    },
    components: {
      Allshops,
      Xiala,
      Htotal
    },
    created() {
      let api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
      this.$http.get(api).then((data) => {
        // console.log("有数据了")
        console.log(data.data);
        this.shopData = data.data;
        let index = null;
        let d = data.data.map((r,i)=>{
          index = i;
            return r.sub_categories;

        })
        this.shop = d;
        console.log("aaa"+index);
        console.log('123',this.shop);
        
      })
      
    },
   
    
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
     hlist2(index){
       this.index=index;
       console.log("............")
     },
     open(el){
       console.log(el,"...........................")
     }
    }
  }

</script>
<style scoped>
  .h-return{
    width: 20%;
    height: 40px;
    background-color: blue;
    position: absolute;
    top: 0;
    left: 0;
    /* border: 1px solid red; */
    line-height: 40px;
    font-size: 0.3rem;
    text-align: center;
    color:white;
  }
  

  .h-listTop {
    width: 100%;
    height: 40px;
    background-color: blue;
    text-align: center;
    line-height: 40px;
    color: white;
    font-size: 0.2rem;
  }
 .h-allshop{
   z-index: -100;
 }
  
  

</style>
<style>
   .h-template2 span{
    border-bottom: 1px solid red;
    font-size: 20px;
  }
</style>