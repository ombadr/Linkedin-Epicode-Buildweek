import { MAIN_PROFILE } from "../action";

const initialState={
    profilo:[],
}

const profiloReducer=(state=initialState,action)=>{
    switch(action.type){
        case MAIN_PROFILE:
            return{
                profile:action.payload
            }
            default:
                return state
    }
}

export default profiloReducer