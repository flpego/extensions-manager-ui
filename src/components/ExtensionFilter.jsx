import "../styles/ExtensionFilter.css"
const ExtensionFilter = ({setFilter, filter}) => {
  return (
    <div className="extension-filter__container">
       <button
        className={filter === "All" ? "active" : ""}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      <button
        className={filter === "Active" ? "active" : ""}
        onClick={() => setFilter("Active")}
      >
        Active
      </button>
      <button
        className={filter === "Inactive" ? "active" : ""}
        onClick={() => setFilter("Inactive")}
      >
        Inactive
      </button>
      </div>
  )
}

export default ExtensionFilter