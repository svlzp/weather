import { useDispatch, useSelector } from "react-redux"
import { InputTextAction, ClickAction } from "../redux/ApiReducers"
import Weather from "./weather"




const WeatCont =()=>{
    const dispatch = useDispatch()
    const newText = useSelector( state => state.ApiPage.newText)
    const data = useSelector( state => state.ApiPage.data)

const addText = (text)=>{
dispatch(InputTextAction(text))
}
const ClickWeather =(city)=>{
    dispatch(ClickAction(city))

}

    return (
    <Weather addText={addText}
     ClickWeather={ClickWeather}
     newText ={newText} 
     data ={data}/>
    )
}

export default WeatCont;