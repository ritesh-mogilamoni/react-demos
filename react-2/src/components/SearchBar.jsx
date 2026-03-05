let timer

function SearchBar({onSearch}) {

  const handleChange = (e)=>{

    const value = e.target.value

    clearTimeout(timer)

    timer = setTimeout(()=>{
      onSearch(value)
    },500)

  }

  return (

    <div className="flex justify-center mb-6">

      <input
        type="text"
        placeholder="Search country..."
        autoFocus
        onChange={handleChange}
        className="border p-2 rounded w-72 shadow"
      />

    </div>

  )

}

export default SearchBar