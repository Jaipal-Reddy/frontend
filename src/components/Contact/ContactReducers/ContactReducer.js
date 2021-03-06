import { GET_CONTACTS } from "../ContactActions/type";

const initialState={
    contacts:[],
    contact:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_CONTACTS:
            return{
                ...state,
                contacts:action.payload
            }
            default:
                return state;
                
    }
}