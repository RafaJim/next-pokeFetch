import styles from './Pokes.module.css'
import Image from 'next/image'
import Link from 'next/link'

const pokeData = async() => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 101)}`, {cache: 'no-store'})  //id or name can be fetched
  return res.json()
}

export default async function Home() {

  let data = []

  for(let i=0;i<20;i++){
    data.push(await pokeData())
  }

  return (
    <div className={styles.main}>

      {data.map(poke => (
        <Link href={`/randomPokemons/${poke.name}`} key={poke.id}>
          <div className={styles.card} >
            <h2 className={styles.title}>{poke.name}</h2>
            <Image className={styles.image} alt={poke.name} width={150} height={150} src={poke.sprites.front_default} />
          </div>
        </Link>
      ))}

    </div>
  )
}
