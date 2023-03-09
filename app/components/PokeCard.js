import useFetch from "../hooks/useFetch"
import styles from '../randomPokemons/Pokes.module.css'
import Link from "next/link"
import Image from "next/image"

const PokeCard = ({name, id}) => {    
    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id+2}.png`
    
    let nameNew = name[0].toUpperCase() + name.slice(1)
    return (
      <>
        <Link href={`/randomPokemons/${name}`} >
          <div className={styles.card} >
            <h2 className={styles.title}>{nameNew}</h2>
            <Image className={styles.image} alt={name} width={150} height={150} src={pokemonImage} />
          </div>
        </Link>
      </>
    )
}
 
export default PokeCard