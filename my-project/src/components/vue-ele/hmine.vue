<template>
    
    <div>
            <Ushome></Ushome>
            <Htotal></Htotal>
    </div>
</template>
<script>
    import  Ushome from "../us/ushome"
    import Htotal from "./htotal"
    export default{
        name:"hmine",
        components:{
            Htotal ,
            Ushome
        }
    }
</script>