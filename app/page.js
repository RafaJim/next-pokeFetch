'use client'
import { useState, useEffect } from 'react'
import styles from './randomPokemons/Pokes.module.css'
import PokeCard from './components/PokeCard'
import SearchBar from './components/SearchBar';

const Home = () => {

    const [pokemons, setPokemons] = useState([])
    const [filteredPokemons, setFilteredPokemons] = useState([])

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
    
    const fetchPokemons = async() => {
        const res = await pokeData()
        let arr = []

        res.results.forEach((poke, index) => (
            arr.push({
                name: poke.name,
                id: index + 2
            })
        ))
        
        setPokemons(arr)
        setFilteredPokemons(arr)
    }

    const filter = (name) => {
        const filteredPokes = pokemons.filter(poke => (
            poke.name.includes(name)
        ))
        setFilteredPokemons(filteredPokes)
    }

    
    useEffect(() => {
        fetchPokemons()
    }, [])

    return (
        <div className={styles.body}>
            <SearchBar filter={filter} />

            <div className={styles.main}>
                {filteredPokemons.map(({name, id}) => (
                    <PokeCard name={name} id={id} key={id} />
                ))}

            </div>
        </div>
    )
}
 
export default Home