<template>
      <div>
        <!-- <Top></Top> -->
        <Header1></Header1>
        <Header></Header>
        <Shopsdetail></Shopsdetail>
        <Htotal></Htotal>
      </div>
</template>
<script>
    // import Top from "../vue-ele/home/top"
    import Header1 from "../us/header"
    import Header from "../vue-ele/home/header"
    import Shopsdetail from "../vue-ele/home/shopsdetail"
    import Htotal from "./htotal"
  export default{
      name:"htakeout",
      components:{
          Header1,
        //   Top,
          Header,
          Shopsdetail,
          Htotal
      }
  }
</script>
<style scoped>

</style>