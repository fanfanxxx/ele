export default{
    
    reduce(state, n = 1) {
       state.history = [];
       state.bol = false;
    },
    add(state,obj){
        if(state.history.indexOf(obj)== -1){
            state.history.push(obj);
        }
        state.bol = true;
    },
    questadd(state,arr){
        state.quesdeatail=arr;

    },
    getmessage(state,obj){
        
        state.usermessage = obj ;
        localStorage.id = obj.user_id;
        localStorage.name = obj.username;
        console.log('tag', state.usermessage);
        
    },
    username(state,name){
        if(state.usermessage){
            state.usermessage.username=name;
        }
          
    },
    clearuser(state){
         state.usermessage = "";
         localStorage.id = "";
        localStorage.name = "";
    },
    shizhi(state,obj){
        state.diobj =obj;
    },
    soudizhi(state,obj){
        state.dizhi.push(obj);
    },
    dell(state,index){
        state.dizhi.splice(index,1);
    },
    //底部路由部分
    wm:function(state){
        state.value1=false;
        state.value2=state.value4=state.value3=true
    },
    ss:function(state){
        state.value2=false;
        state.value1=state.value4=state.value3=true
    },
    fx:function(state){
        state.value3=false;
        state.value1=state.value2=state.value4=true
    },
    wd:function(state){
        state.value4=false;
        state.value1=state.value2=state.value3=true
    },
    //店铺详情模块
    addChange(state, num) {
        state.shopAdd = num;
    },
    addShop(state, a) {
        var numbers = 0
        state.shopAdd.filter(num => num.id == a.aa)[0].foods.filter(num => num.specfoods[0].food_id == a.bb)[0].specfoods[0].count++;
        if(state.arrss.indexOf(a.cc) != -1){
        }else{
            state.arrss.push(a.cc);
            console.log(state.arrss)
        }
        for(let i = 0; i<state.arrss.length;i++){
            numbers +=state.arrss[i].specfoods[0].count*state.arrss[i].specfoods[0].price
        }
        state.numbers=numbers
    },
    app(state, a) {
        var numbers = 0;
        state.shopAdd.filter(num => num.id == a.aa)[0].foods.filter(num => num.specfoods[0].food_id == a.bb)[0].specfoods[0].count--;
        for(let ii=0;ii<state.arrss.length;ii++){
           if(state.arrss[ii].specfoods[0].count==0) {
            state.arrss.splice(ii,1)
           }
        }
        for(let i = 0; i<state.arrss.length;i++){
            numbers +=state.arrss[i].specfoods[0].count*state.arrss[i].specfoods[0].price
        }
        state.numbers=numbers
    },
    jia(state, aaa){
        var numbers = 0
        state.arrss.filter(num=> num.specfoods[0].food_id==aaa)[0].specfoods[0].count++;
        for(let i = 0; i<state.arrss.length;i++){
            numbers +=state.arrss[i].specfoods[0].count*state.arrss[i].specfoods[0].price
        }
        state.numbers=numbers
    },
    jian(state, aaa){
        var numbers = 0
        state.arrss.filter(num=> num.specfoods[0].food_id==aaa)[0].specfoods[0].count--;
        for(let ii=0;ii<state.arrss.length;ii++){
            if(state.arrss[ii].specfoods[0].count==0) {
             state.arrss.splice(ii,1)
            }
         }
        for(let i = 0; i<state.arrss.length;i++){
            numbers +=state.arrss[i].specfoods[0].count*state.arrss[i].specfoods[0].price
        }
        state.numbers=numbers
    },
    yin(state){
            state.yin = !state.yin
    },
//添加联系人
handles(state,int){
  state.numss.push(int)
    console.log(state.numss)
}
    
}