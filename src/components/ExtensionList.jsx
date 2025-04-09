import { useEffect, useState } from "react"
import fetchData from "../services/extensionService"
import ExtensionCard from "./ExtensionCard"
import "../styles/ExtensionList.css"

const ExtensionList = () => {

  const [extensions, setExtensions] = useState([])

  useEffect(() => { 
    const fetchExtensions = async () => {
      await fetchData()
        .then((data) => {
          console.log(data)
          setExtensions(data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }

    fetchExtensions()
  }, [])


  return (
    <div className="extension__list-container">
      {
        extensions.map((extension) => (
          <ExtensionCard key={extension.name} extension={extension} />
        ))
      }
    </div>
  )
}

export default ExtensionList