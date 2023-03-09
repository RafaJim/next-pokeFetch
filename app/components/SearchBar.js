import styles from './styles/SearchBar.module.css'

const SearchBar = () => {
    return (
        <>
            <input className={styles.bus} type="text" placeholder="Search for pokemon name"/>
        </>
    )
}
 
export default SearchBar