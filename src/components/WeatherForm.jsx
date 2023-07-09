import { useState } from "react";
import styles from './WeatherForm.module.css'

export default function WeatherForm({onChangeCity}){
    const [city, setCity] = useState("");

    function onChange(e){

        if(e.target.value!==""){
            
            setCity(e.target.value)
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        onChangeCity(city);
    }
    
    return(
        <form onSubmit={handleSubmit} className={styles.container}>
            <input type="text" onChange={onChange} className={styles.input}/>
        </form>
    )
}