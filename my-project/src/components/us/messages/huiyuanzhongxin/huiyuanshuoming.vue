<template>
        <div>
           <Head>
               <span>
                   {{msg}}
               </span>
           </Head>
           <section class="f_content">
               <p id="f_head">
                    尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
               </p>
               <h3>Q1:特权介绍</h3>
               <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
               <p>
                    减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。
                    更多特权，敬请期待！
               </p>
               <h3>
                    Q2: 资费介绍 
               </h3>
               <p>
                    饿了么会员卡：20元 
               </p>
               
               <h3>
                    Q3: 使用说明 
               </h3>
               <p>
                    自绑定之日起超过31天；
               </p>
               <p>
                    在31天内累计使用减免配送费的蜂鸟订单数量达到30单；
               </p>
               <h3>
                    Q4: 购卡说明
               </h3>
               <p>
                    
                    在线购买：饿了么App>我的>饿了么会员卡
               </p>
               <h3>
                    
                    Q5: 温馨提示
               </h3>
               <p>
                    用户在当前会员服务失效前，无法购买新卡。
               </p>
               <p>
                    请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。  
               </p>
    
           </section>
    
    
        </div>
        
    
    </template>
    
    <script>
        import Head from '../../header.vue'
        export default{
            name:'huiyuanshuoming',
            data(){
                return{
                    msg:"我的优惠"
                }
            },
            components:{
                Head
            }
        }
    
    
    
    </script>
    
    
    <style scoped>
    .f_content{
        margin-top: 0.45rem;
        padding-left: 0.12rem;
        box-sizing: border-box;
    }
    #f_head{
        text-align: center;
        color: #333;
        font-size:0.14rem; 
        width: 70%;
        margin: 0 auto;
    }
    .f_content>h3{
        color: #666;
        font-size: 0.17rem;
        line-height: 0.4rem;
    }
    .f_content>p{
        color: #999;
        font-size: 0.14rem;
        line-height: 0.24rem;
    }
    
    </style>