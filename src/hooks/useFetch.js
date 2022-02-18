import {useState, useEffect} from 'react'
import axios from 'axios'

const headers = {
  'Authorization': `Bearer ${process.env.AIRTABLE_KEY}`
}

const useFetch = (url, dataType = [], id = null) => {
  const [data, setData] = useState(dataType)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    const source = axios.CancelToken.source()
    axios.get(id 
      ? `${process.env.URL_AIRTABLE_TOKEN}/${url}/${id}` 
      : `${process.env.URL_AIRTABLE_TOKEN}/${url}`,
       {headers}, 
       {cancelToken: source.token})
    .then(res => {
      res.data.records && setData(res.data.records)
      res.data.fields && setData(res.data.fields)
      setLoading(false)
    })
    .catch(err => {
      setLoading(false)
      setError(true)
    })
    return () => {
      source.cancel()
    }
  }, [url, id])

  return {
    data,
    loading,
    error
  }
}

export {useFetch}