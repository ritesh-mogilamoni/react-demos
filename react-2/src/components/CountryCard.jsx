function CountryCard({country}) {

  return (

    <div className="bg-white rounded shadow hover:shadow-lg transition p-4">

      <img
        src={country.flags.png}
        alt="flag"
        className="w-full h-32 object-cover mb-3 rounded"
      />

      <h2 className="text-lg font-semibold">
        {country.name.common}
      </h2>

      <p className="text-sm">
        <span className="font-medium">Capital:</span> {country.capital?.[0]}
      </p>

      <p className="text-sm">
        <span className="font-medium">Population:</span> {country.population}
      </p>

      <p className="text-sm">
        <span className="font-medium">Region:</span> {country.region}
      </p>

    </div>

  )

}

export default CountryCard