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
        console.log('tag', state.usermessage);
        
    }
}