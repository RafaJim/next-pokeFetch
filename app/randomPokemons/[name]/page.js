'use client'

import useFetch from '@/app/hooks/useFetch';
import styles from './PokeInfo.module.css'
import Image from 'next/image'
import { v4 as uuidv4 } from "uuid";

const PokeInfo = ({params}) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`
    const { data, loading, error } = useFetch(url)
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`

    return (
        <>
            { loading ? <div>Loading pokemon info...</div> : null }
            { error ? <div>{error}</div> :
            <div className={styles.body}>
                <div>
                    {data ? <Image alt={params.name} width={350} height={350} src={img} />:null }
                </div>
                <div className={styles.text}>
                    <h1 className={styles.title}>
                        Ataques del pokemon {params.name}
                    </h1>
                    {data ? data.abilities.map(abs => (
                        <h3 className={styles.info} key={uuidv4()} >
                            {abs.ability.name}
                        </h3>
                    )) : null}
                </div>
            </div>
            }
        </>
    )
}
 
export default PokeInfo
