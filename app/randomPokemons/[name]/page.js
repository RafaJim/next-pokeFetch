'use client'

import styles from './PokeInfo.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from 'react';

const PokeInfo = ({params}) => {

    const [pokeInfo, setPokeInfo] = useState()
    
    const pokeData = async() => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`, {cache: 'no-store'})  //id or name can be fetched
        return res.json()
    }
    
    useEffect(() => {
        const fetchInfo = async() => {
            const res = await pokeData()
            setPokeInfo(res)
        }
        fetchInfo()
    }, [])

    return (
        <>
            <div className={styles.body}>
                <div>
                    {pokeInfo ? <Image alt={params.name} width={350} height={350} src={pokeInfo.sprites.front_default} />:null }
                </div>
                <div className={styles.text}>
                    <h1 className={styles.title}>
                        Ataques del pokemon {params.name}
                    </h1>
                    {pokeInfo ? pokeInfo.abilities.map(abs => (
                        <h3 className={styles.info} key={uuidv4()} >
                            {abs.ability.name}
                        </h3>
                    )) : null}
                </div>
            </div>
        </>
    )
}
 
export default PokeInfo
