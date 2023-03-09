import { useState, useEffect } from "react"

const useFetch = (url) => {
    
    const [data, setData] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const fetchData = async() => {
        let data
        try {
            setLoading(true)
            const res = await fetch(url, {cache: 'no-store'})
            if(!res.ok)
                throw new Error('Bad response', {
                    cause: { res }
                })
            data = await res.json()

        } catch (err) {
            setError(err)
            console.log(error)
        }

        setLoading(false)
        return data
    }

    useEffect(() => {
        const getData = async() => {
            setData(await fetchData())
        }
        getData()
    }, [])

    return { data, loading, error }
}
 
export default useFetch