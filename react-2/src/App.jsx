import { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar"
import CountryList from "./components/CountryList"

function App() {

  const [countries,setCountries] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  const [query,setQuery] = useState("")

  useEffect(()=>{

    const fetchCountries = async ()=>{

      setLoading(true)

      try{

        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
        )

        if(!res.ok){
          throw new Error("Failed to fetch countries")
        }

        const data = await res.json()

        setCountries(data)

      }
      catch(err){
        setError(err.message)
      }
      finally{
        setLoading(false)
      }

    }

    fetchCountries()

  },[])

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  )

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        Country Explorer
      </h1>

      <SearchBar onSearch={setQuery} />

      {loading && (
        <p className="text-center mt-10 text-lg">
          Loading countries...
        </p>
      )}

      {error && (
        <p className="text-center text-red-500 mt-10">
          {error}
        </p>
      )}

      {!loading && !error && (
        <CountryList countries={filteredCountries}/>
      )}

    </div>

  )
}

export default App