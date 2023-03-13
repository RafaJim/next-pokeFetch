'use client'
import styles from './styles/SearchBar.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchBar = ({filter}) => {
    const [input, setInput] = useState('')
    
    const router = useRouter()

    const searchPoke = (event) => {
        if(event.key === 'Enter') {
            router.push(`/randomPokemons/${input.toLowerCase()}`)
        }
    }

    const change = (value) => {
        setInput(value)
        filter(value)
    }

    return (
        <>
            <input 
                className={styles.bus} 
                onChange={e => change(e.target.value)} 
                onKeyDown={searchPoke}
                type="text" 
                placeholder="Search pokemon + enter"
            />
        </>
    )
}
 
export default SearchBar