export default {

    reduce(state, n = 1) {
        state.history = [];
        state.bol = false;
    },
    add(state, obj) {
        if (state.history.indexOf(obj) == -1) {
            state.history.push(obj);
        }
        state.bol = true;
    },
    questadd(state, arr) {
        state.quesdeatail = arr;

    },
    getmessage(state, obj) {

        state.usermessage = obj;
        localStorage.id = obj.user_id;
        localStorage.name = obj.username;
        console.log('tag', state.usermessage);

    },
    username(state, name) {
        if (state.usermessage) {
            state.usermessage.username = name;
        }

    },
    clearuser(state) {
        state.usermessage = "";
        localStorage.id = "";
        localStorage.name = "";
    },
    shizhi(state, obj) {
        state.diobj = obj;
    },
    soudizhi(state, obj) {
        state.dizhi.push(obj);
    },
    dell(state, index) {
        state.dizhi.splice(index, 1);
    },
    //底部路由部分
    wm: function (state) {
        state.value1 = false;
        state.value2 = state.value4 = state.value3 = true
    },
    ss: function (state) {
        state.value2 = false;
        state.value1 = state.value4 = state.value3 = true
    },
    fx: function (state) {
        state.value3 = false;
        state.value1 = state.value2 = state.value4 = true
    },
    wd: function (state) {
        state.value4 = false;
        state.value1 = state.value2 = state.value3 = true
    },
    //下拉部分
    addnumber(state, n) {
        state.count1 += n
    },
    reducenumber(state, n) {
        state.count1 -= n
    },
    clearnumber(state) {
        state.count1 = 0;
    },
    //店铺详情模块
    addChange(state, num) {
        state.shopAdd = num;
    },
    addShop(state, a) {
        console.log(state.arrss.indexOf(a))
        a.count++;
        if (state.arrss.indexOf(a) == -1) {
            state.arrss.push(a);
        }
        state.numbers += a.price
    },
    app(state, a) {
        a.count--;
        for (let ii = 0; ii < state.arrss.length; ii++) {
            if (state.arrss[ii].count == 0) {
                state.arrss.splice(ii, 1)
            }
        }
        state.numbers -= a.price
    },
    yin(state) {
        state.yin = !state.yin
    },
    clear(state) {
        for (let i = 0; i < state.arrss.length; i++) {
            state.arrss[i].count = 0;
            state.arrss.splice(i, 1);
            i--
        }
        state.numbers = 0;
        for (let i = 0; i < state.numss.length; i++) {
            state.numss.splice(i, 1);
        }
    },
    submit(state,aaa){
        for(var i = 0 ; i < state.numss.length;i++)
        if(state.numss[i].name == aaa){
        state.submit = state.numss[i]
        console.log( state.submit);
        
        }
    },
    cangde(state){
            state.cangde = true;
            state.yinde = false
            console.log();
            
    },
    shopss(state,shopss){
                state.shopss = shopss
    },
    //添加联系人
    handles(state, int) {
        state.numss.push(int)
        console.log(state.numss)
    }

}