import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPendig, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController() // OPCIONOOOOO

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data for that recourse')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch((err) => {
          setIsPending(false)
          setError(err.message)
        })
    }, 1000)
  }, [url])

  // moze biti bilo koji tip podatka, array, object,boolean, string... sada je obj
  return { data, isPendig, error }
}

export default useFetch

// importuje se useFetch gde  nam treba
// radimo destructure npr u home
// const { data:blogs ,isPending, error} = useFetch("http://localhost:8000/blogs")

// return (
// <div>
//{error && <div>{error}</div>}
//{isPending && <div>Loading...</div>}
//{blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
// </div>
//)
