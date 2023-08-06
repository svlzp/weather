import {call, put, takeEvery} from 'redux-saga/effects'
import * as axios from 'axios';


 const Api=(city)=> {
  
    const url = "656acd8c83398a1e21daba4317784937";
    return(
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=${url}&lang=ru&units=metric`)
        .then (response => response.data )
        
    )
    }
    
 
 

export function* workerSaga (city){
   try{
    const data = yield call(Api,city)
    yield put ({type:"GET-WEATHER" , data})   
   }
   catch {alert("вы ввели неправильный город")}
}


export function* watchClickSaga(){
    yield takeEvery("CLICK" , workerSaga)

}


export default function* rootSaga (){
   yield watchClickSaga();
}