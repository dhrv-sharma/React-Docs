//  design custom hook
import  {useEffect,useState} from"react"

function UseCurrencyInfo(currency){
    let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_XXgziWP0xKPQvMx0eCOuWUEYH6fuOarrTSomN0eY"
    // intial empty
    const [data,setData]=useState({});

    useEffect(()=>{
        fetch(url).then((response)=>response.json()).then((res)=>setData(res["data"]));
    },[currency])
    
    console.log(data);
    return data;

}


export {UseCurrencyInfo}