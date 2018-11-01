<template>
    <section   class="f__alert">
        
                <div  class="f_alert_div">
                        <div class="f_alert_div_tu">
                            <span></span>
                            <span></span>
                        </div>
                        <slot></slot>
                       
                    </div>
        
        
        </section>
</template>

<script>
export default{
    name:'alert',

}

</script>


<style  scoped>
.f__alert{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* background-color: rgba(255, 255, 255, 0.5); */
    z-index: 100;
    text-align: center;
}
.f_alert_div{
    /* border: 1px solid red; */
    width:80%;
    margin: 2rem auto;
    background-color: #fff;
    border-radius: 0.08rem;
    
}
.f_alert_div_tu{
    height: 1rem;
    width: 1rem;
    border: 0.03rem solid #f8cb86;
    border-radius: 50%;
    margin: 0.12rem auto 0;
    

}
.f_alert_div_tu>span:nth-child(1){
    margin: 0.12rem auto 0;
    display: block;
    height: 0.5rem;
   width: 0;
    border: 0.02rem solid #f8cb86;
}
.f_alert_div_tu>span:nth-child(2){

    margin: 0.12rem auto 0;
    display: block;
    height: 0;
   width: 0;
    border: 0.02rem solid #f8cb86;
}
.f_alert_div>p{
  margin: 0.19rem 0.1rem;
  font-size: 0.18rem;
  line-height: 0.2rem;  
}



</style>