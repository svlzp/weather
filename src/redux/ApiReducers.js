const INPUTTEXT = "INPUT-TEXT"
const GETWEATHER = "GET-WEATHER"
const CLICK = "CLICK"
let initialState = {
    data :[],   
    newText:''
}

const ApiReducer = (state = initialState , action) =>{
 //console.log(state.data.weather)

  switch(action.type){
    case INPUTTEXT :
      let stateCopy = {...state}  
      stateCopy.newText = action.text
      
      return stateCopy;
      case GETWEATHER:{
        return{...state , data:{
          ...state.data ,
           ...action.data}, newText: '' }
      }

     
      default: return state
    }
   
}


export const InputTextAction =(text)=>{
    return {type: INPUTTEXT , text}
}
export const WeatherAction =(data)=>{
    return{type: GETWEATHER , data}
  }
  export const ClickAction =(city)=>{
    return{type: CLICK , city}
  }




export default ApiReducer;



