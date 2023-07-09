import { useState, useEffect } from "react"
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";

import styles from './WeatherApp.module.css'

export default function WeatherApp(){

    const [weather, setWeather] = useState(null)

    //Si el array del use effect está vacio solo se ejecutará una vez al cargar el co,ponente
    useEffect(()=>{
        loadInfo();
    },[])

    //Este useEffect es el titulo de la pestaña de la pagina
    useEffect(()=>{
        document.title= `Weather | ${weather?.location.name ?? ""}`
    })

    async function loadInfo(city='london'){
        try{
            const response = await fetch(`${import.meta.env.VITE_URL}&key=${import.meta.env.VITE_KEY}&q=${city}`)
            const data = await response.json();
            console.log(data)
            setWeather(data);

        } catch(error){
            console.log(error)
        }
    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    return(
        <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity}/>
            <WeatherMainInfo weather={weather}/>
        </div>
    )
}