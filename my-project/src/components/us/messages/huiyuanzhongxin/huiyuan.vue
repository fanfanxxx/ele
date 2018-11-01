<template>
    <div>
    <Head>
        <span>
            {{msg}}
        </span>
    </Head>
    <section class="f_app">
        <p class="f_header">为账户 <strong> {{name}} </strong> 购买会员</p>
        <section class="f_center_top">
            <span>会员特权</span>
            <router-link tag="div" to="/vipcard/vipDescription">
                <span>会员说明</span>
                <span class="el-icon-arrow-right
                "></span>
            </router-link>
        </section>
        <section class="f_center_center">
            
            <img src="../../imgs/业务图标—省.png" alt="">
            <div>
                <h4>减免配送费</h4>
                <p>每月减免30单,每日可减免3单,每单最高减4元</p>
                <p>蜂鸟专送专享</p>
            </div>
        </section>
        <section class="f_center_center">
            
                <img src="../../imgs/c1-减免.png" alt="">
                <div>
                    <h4>减免配送费</h4>
                    <p>每月减免30单,每日可减免3单,每单最高减4元</p>
                    <p>蜂鸟专送专享</p>
                </div>
            </section>
        
        <section class="f_center_bottom">
            <p >开通会员</p>
            <div class="f_center_bottom_div">
                <div>
                    <span>1个月</span>
                    <strong>￥20</strong>
                </div>
                <router-link tag="div" to="/confirmOrder/payment">
                    购买
                </router-link>
            </div>
        </section>
        <router-link tag="div" to="/vipcard/useCart" class="f_bottom">
            <span>兑换会员</span>
            <div>
                <span>使用卡号卡密</span>
                <span class="el-icon-arrow-right"></span>
            </div>
        </router-link>
        <router-link tag="div" to="/vipcard/invoiceRecord" class="f_bottom">
                <span>购买记录</span>
                <div>
                    <span>开发票</span>
                    <span class="el-icon-arrow-right"></span>
                </div>
            </router-link>

    </section>

    </div>
    
</template>

<script>
    import Head from '../../header.vue'
    export default{
        name:'huiyuan',
        data(){
            return{
               msg:"会员中心",
               name:"fan000"
            }
        },
        components:{
            Head
        },
        created(){
             this.name = localStorage.name;
            
        }
    }


</script>

<style scoped>
.f_app{
    margin-top:0.45rem;
}
.f_header{
   padding: 0.13rem 0 0.13rem 0.12rem;
   color: #999;
   font-size: 0.14rem; 
   box-sizing: border-box;
}
.f_header>strong{
    font-weight: bold;
    color: #333;
}
.f_center_top{
   padding: 0.1rem 0.12rem;
   background-color: white;
   box-sizing: border-box;
   display: flex;
   justify-content: space-between;
}
.f_center_top>span{
    font-size: 0.17rem;
    color: #333;
}
.f_center_top>div{
    color: #999;
    font-size: 0.14rem;
}
.f_center_center{
    background-color: white;
    padding: 0.12rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-top: 1px solid #999;
    height: 1.2rem;
}
.f_center_center>img{
    width: 0.5rem;
    height: 0.5rem;
    
}
.f_center_center>div{
    margin-left: 0.08rem;
    color:#999;
    font-size: 0.12rem;
}
.f_center_center>div>h4{
    color: #333;
    font-size: 0.16rem;
    margin-bottom: 0.05rem;
}
.f_center_bottom{
    margin-top: 0.14rem;
    padding-left: 0.12rem;
    background-color: white;
}
.f_center_bottom>p{
    color: #333;
    font-size: 0.17rem;
    border-bottom: 1px solid #f5f5f5;
    line-height: 0.4rem;
}
.f_center_bottom_div{
    padding: 0.14rem 0.12rem 0.14rem 0;
    height: 0.7rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.f_center_bottom_div>div:nth-child(1){
    /* line-height: 0.5rem; */
    color: #333;
    font-size: 0.15rem;
}
.f_center_bottom_div>div:nth-child(1) strong{
    font-weight: bold;
    color: #f60;
}
.f_center_bottom_div>div:nth-child(2){
    padding: 0.1rem;
    border: 1px solid #f60;
    color: #f60;
    border-radius: 0.06rem;
}
.f_bottom{
    background-color: white;
    margin-top: 0.12rem;
    padding: 0.12rem;
    box-sizing: border-box;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999;
    font-size: 0.14rem;

}
.f_bottom>span{
    color:#333;
    font-size: 0.17rem;
}
</style>