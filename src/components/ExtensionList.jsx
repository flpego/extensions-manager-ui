import { useEffect, useState } from "react"
import fetchData from "../services/extensionService"
import ExtensionCard from "./ExtensionCard"
import "../styles/ExtensionList.css"
import ExtensionFilter from "./ExtensionFilter"


const ExtensionList = () => {

  const [extensions, setExtensions] = useState([])
  const [filter, setFilter] = useState('All');

  // get all extensions
  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        const data = await fetchData();
        setExtensions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };
    fetchExtensions();
  }, []);

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === 'Active') { return ext.isActive };
    if (filter === 'Inactive') { return !ext.isActive };
    if (filter === "All") return true;
  }
  );

  const toggleExtension = (name) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    )
  }

  const removeExtension = (name) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));

  }

  return (
    <div>
      <div className="extension__header">
        <h2>Extensions List</h2>
        <ExtensionFilter setFilter={setFilter} filter={filter} />

      </div>
      <div className="extension__list-container">

        {
          filteredExtensions.map((extension) => (
            <ExtensionCard key={extension.name}
              extension={extension}
              onToggle={toggleExtension}
              removeExtension={removeExtension}
            />
          ))
        }
      </div>

    </div>

  )
}

export default ExtensionList