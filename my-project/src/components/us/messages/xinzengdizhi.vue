<template>
  <div>

    <Head>
      <span>
        {{msg}}
      </span>
    </Head>
    <section class="f_content">

      <div>
        <input v-model="c1" type="text" placeholder="请填写你的姓名">
        <p v-if="b1" class="f_tishi">请填写你的姓名</p>

      </div>
      <div>
        <a href="#/profile/info/address/add/addDetail">
          <input type="text" placeholder="小区/写字楼/学校等" :value="dizhi.name">
        </a>
      </div>
      <div>
        <input v-model="c3" type="text" placeholder="请填写详细送餐地址">
        <p v-if="b2" class="f_tishi">{{songcan}}</p>
      </div>
      <div>
        <input v-model="c4" type="text" placeholder="请填写能够联系到你的手机号">
        <p v-if="b3" class="f_tishi">{{tishi}}</p>
      </div>
      <div>
        <input v-model="c5" type="text" placeholder="备用联系电话(选填)">
        <p v-if="b4" class="f_tishi">请输入正确的手机号</p>
      </div>
    </section>
    <div class="f_button" @click="submit">
      新增地址
    </div>


  </div>

</template>


<script>
  import Head from '../header'

  export default {
    name: "xinzeng",
    data() {
      return {
        msg: "新增地址",
        b1: false,
        b2: false,
        b3: false,
        b4: false,
        tishi: "手机号不能为空",
        songcan: "请详细填写送餐地址",
        c1: "",
        c2: "",
        c3: "",
        c4: "",
        c5: "",

      }
    },
    components: {
      Head
    },
    computed: {
      dizhi() {
        return this.$store.state.diobj;

      },
      usermes() {
        return this.$store.state.usermessage;
      }
    },
    watch: {
      c1() {
        if (this.c1.length < 1) {
          this.b1 = true;
        } else {
          this.b1 = false;
        }
      },
      c3() {
        if (this.c3.length < 3) {
          this.b2 = true;
          if (this.c3.length >= 1) {
            this.songcan = "送餐地址太短了,不能辨识"
          } else {
            this.songcan = "请详细填写送餐地址";
          }
        } else {
          this.b2 = false;
        }
      },
      c4() {
        let r4 = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        let s4 = r4.test(this.c4);
        if (!s4) {
          this.b3 = true;
          if (this.c4.length >= 1) {
            this.tishi = '请输入正确的手机号'
          } else {
            this.tishi = '手机号不能为空'
          }

        } else {
          this.b3 = false;
        }
      },
      c5() {
        let r5 = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        let s5 = r5.test(this.c5);
        if (!s5) {
          this.b4 = true;
        } else {
          this.b4 = false;
        }
      }
    },
    methods: {
      submit() {
        if(this.b1 || this.b2 || this.b3 || this.b4 || !this.c1 || !this.c2 || !this.c3 || !this.c4 || !this.c5 ){
          return;
        }
        var url = 'https://elm.cangdu.org/v1/users/' + this.usermes.id + '/addresses';
        this.$http({
          method: 'post',
          url: url,
          data: {
            address: this.dizhi.address,
            address_detail: this.c3,
            geohash: this.dizhi.geohash,
            name: this.c1,
            phone: this.c4,
            tag: 'aaa',
            sex: 1,
            phone_bk: this.c5,
            tag_type: 2
          }

        }).then((res) => {
          console.log(res);
          var obj = {
            address: this.dizhi.address,
            address_detail: this.c3,
            geohash: this.dizhi.geohash,
            name: this.c1,
            phone: this.c4,
            phone_bk: this.c5
          };
          this.$store.commit('soudizhi',obj);
          this.$router.push('/profile/info/address');
        })
      }
    }
  }

</script>


<style scoped>
  .f_content {
    margin-top: 0.55rem;
    background-color: white;
    padding: 0.1rem 0.12rem 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .f_content>div {
    /* border: 1px solid red; */
    width: 100%;
    margin-bottom: 0.1rem;


  }

  .f_content input {
    width: 100%;
    height: 0.4rem;
    background-color: #f2f2f2;
    color: #333;
    font-size: 0.15rem;
  }

  .f_button {
    height: 0.4rem;
    background-color: #3190e8;
    width: 94%;
    margin: 0.2rem auto 0;
    text-align: center;
    line-height: 0.4rem;
    border-radius: 0.06rem;
    color: #999;
    font-size: 0.16rem;
  }

  .f_tishi {
    color: red;
    margin-top: 0.06rem;
    font-size: 0.12rem;
  }

</style>
