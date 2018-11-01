let getters ={
    shaixuan(state){
        
         var s1 = new RegExp("!\\[\\]\\(",'g'); 
          
         var s2 = new RegExp('\\)',"g");
         var s3 = new RegExp('##',"g");
        // state.quesdeatail = state.quesdeatail.replace(s1,"<img src='");
        // state.quesdeatail = state.quesdeatail.replace(s2,'" >');
        return state.quesdeatail.replace(s1,"<img src='").replace(s2,"'>").replace(s3,"</br></br>  ##");
    }
};
export {getters} ;