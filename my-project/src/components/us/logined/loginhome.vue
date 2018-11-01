<template>
    <div>
            <section class="f_id" >
                    <a href="#/profile/info" class="f_id_include">
                      <span class="f_id_hair">
                        <img :src="'https://elm.cangdu.org/img/'+getmessage.avatar" alt="">
                      </span>
              
                      <section class="f_id_login">
                          <p>{{getmessage.username}}</p>
                          <div>
                            <img  src="../imgs/手机.png" alt="">
                            <span>暂无绑定手机号</span>
                          </div>
                        </section>
                        <span class="el-icon-arrow-right"></span>
                    </a>
                    
                  </section>
                  <section class="f_info_messages">
                       <ul class="f_info_messages_ul">
                         <router-link tag="li" to="/balance">
                           <div>
                              <strong class="f_info_message1">{{getmessage.balance}}</strong><span>元</span>
                           </div>
                           <p>我的金额</p>
                           
                         </router-link>
                         <router-link tag="li" to="/benefit">
                            <div>
                                  <strong class="f_info_message2">{{getmessage.gift_amount}}</strong><span>个</span> 
                            </div>
                            <p>我的优惠</p>
                            
                          </router-link>
                          <router-link tag="li" to="/points">
                              <div>
                                 <strong class="f_info_message3">{{getmessage.__v}}</strong><span>分</span>
                              </div>
                              <p>我的积分</p>
                              
                            </router-link>
                       </ul>
              
                  </section >
    </div>
</template>

<script>
export default{
    name:'loginhome',
    computed:{
      getmessage(){
        return this.$store.state.usermessage
      }
    }
}


</script>


<style scoped>
 .f_id {
    padding-top: 0.45rem;
  }

  .f_id_include {
    background-color: #3190e8;
    padding: 0.15rem 0.12rem;
    display: flex;
    align-items: center;

  }

  .f_id_hair {
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
   
  }

  .f_id_hair>img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    vertical-align: top;
    
  }
  .f_id_login{
      margin-left: 0.12rem;
      flex-grow: 1;
      color: white;
  }
  .f_id_login>p{
     
      margin-bottom: 0.12rem;
      font-size: 0.2rem;
  }
  .f_id_login>div>span{
    font-size: 0.17rem;
  }

.f_id_login img{
    width: 0.2rem; 
    vertical-align: top;
}
.f_id_include>.el-icon-arrow-right{
    color: white;
    font-size: 0.18rem;
}
.f_info_messages{
  width: 100%;
  background-color: #fff;
}
.f_info_messages_ul{
  overflow: hidden;
}
.f_info_messages_ul>li{
  float: left;
  box-sizing: border-box;
  border-right: 1px solid #f1f1f1;
  width: 33.33%;
  padding: 0.2rem 0 0.1rem;
  text-align: center;
  
}

.f_info_messages_ul>li>div{
  font-size: 0.12rem;
  color: #333;
  padding: 0.18rem 0 0.1rem;
}
.f_info_message1{
  display: inline-block;
  font-size: 0.28rem;
  font-weight: 700;
  color: #f90;
 
}
.f_info_messages_ul>li>p{
  color: #333;
  font-size: 0.14rem;
  padding-bottom: 0.12rem;
}

.f_info_message2{
  display: inline-block;
  font-size: 0.28rem;
  font-weight: 700;
  color: #ff5f3e;
}
.f_info_message3{
  display: inline-block;
  font-size: 0.28rem;
  font-weight: 700;
  color: #6ac20b;
} 


</style>