<template>
  <div>

    <Head>
      <span>
        {{msg}}
      </span>
      <p v-if="!bool" class="f_bianji" slot="bianji" @click="didi">
        {{bianji}}
      </p>
      <p v-else class="f_bianji" slot="bianji" @click="didi">
            {{wancheng}}
          </p>
      
    </Head>

    <ul class="f_liebiao">
      <li v-for="(item,index) in dizhilis" :key="index">
        <div class="f_content">
          <p>{{item.name}}</p>
          <p>{{item.phone}}</p>
        </div>
        <span class="el-icon-close" v-if="bool" @click = "del(index)"></span>
      </li>
    </ul>

    <a href="#/profile/info/address/add" class="f_xinzeng">
      <span>新增地址</span>
      <span class="el-icon-arrow-right
         "></span>
    </a>

  </div>



</template>


<script>
  import Head from '../header.vue'

  export default {
    name: "dizhi",
    data() {
      return {
        msg: "编辑地址",
        bianji: "编辑",
        wancheng:"完成",
        bool:false,
        jilu:[]
      }
    },
    components: {
      Head
    },
    methods:{
        didi(){
            this.bool=!this.bool;
        },
        del(index){
          this.$store.commit('dell',index);
        }
    },
    computed:{
      dizhi(){
        return this.$store.state.diobj;
      },
      dizhilis(){
        return this.$store.state.dizhi
      }
    }
  }

</script>




<style scoped>
  .f_bianji {
    position: absolute;
    top: 50%;
    right: 0.12rem;
    transform: translateY(-50%);
    font-size: 0.17rem;

  }

  .f_liebiao {
    margin-top: 0.55rem;
  }

  .f_liebiao>li {
    height: 0.4rem;
    background-color: #ff883f;
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .f_content>p:nth-child(1) {
    color: #333;
    font-size: 0.12rem;
    margin-bottom: 0.1rem;

  }

  .f_content>p:nth-child(2) {
    color: #333;
    font-size: 0.15rem;
  }

  .el-icon-close {
    font-size: 0.16rem;
    color: #333;
  }

  .f_xinzeng {
    height: 0.3rem;
    background-color: #fff;
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.12rem;

  }
  .f_xinzeng>span{
      color: #666;
      font-size: 0.17rem;
  }
  .f_xinzeng>.el-icon-arrow-right{
      font-size: 0.2rem;

  }
</style>
