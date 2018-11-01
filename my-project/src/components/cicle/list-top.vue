<template>
     <!--返回键模块-->
        <div class="z_top-return">
          <p>&lt;</p>
        </div>
</template>

<script>
export default {
        name: "list-top"
    }
</script>

<style scoped>
/*<!--返回键-->*/
.z_top-return {
  width: 3.75rem;
  height: 0.4688rem;
  color: white;
  /*border: 1px solid yellow;*/
  position: absolute;
  left: 0.1rem;
  top: 0.05rem;
  z-index: 9;
}
.z_top-return p {
  width: 0.9375rem;
  height: 0.4219rem;
  font-size: 0.28rem;
}
</style>
