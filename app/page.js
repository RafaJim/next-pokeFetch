'use client'
import { useState, useEffect } from 'react'
import styles from './randomPokemons/Pokes.module.css'
import PokeCard from './components/PokeCard'
import { v4 as uuidv4 } from "uuid";

const Home = () => {

    const [pokemons, setPokemons] = useState([])

    const pokeData = async() => {
        let data = []
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200&offset=1', {cache: 'no-store'})
            if(!res.ok){
                throw new Error('Bad response', {
                    cause: { res }
                })
            }

            data = await res.json()
        } catch (err) {
            console.log(err)
        }
        
        return data
    }

    
    useEffect(() => {
        const fetchPokemons = async() => {
            const res = await pokeData()
            setPokemons(res.results)
        }

        fetchPokemons()
    }, [])

    return (
        <div className={styles.main}>
            {pokemons.map(({name, url}, index) => (
                <PokeCard id={index} name={name} key={uuidv4()} />
            ))}

        </div>
    )
}
 
export default Home