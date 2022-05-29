
 const reducer = (state,action) =>{
     switch(action.type){
         case "AddNewUser" :
            
            return{
                ...state,
                item:[...state.item,action.payload]
            }
    }
}

export default reducer