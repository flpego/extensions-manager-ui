import "../styles/ExtensionCard.css"

const ExtensionCard = ({ extension }) => {
  return (
    <div className='extension__card-container'>
      <div className='extension__info-container'>
        <img src={extension.logo} alt={extension.name} />
        <h4>{extension.name}</h4>
        <p>{extension.description}</p>
      </div>
      <div>
        <button>Remove</button>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  )
}

export default ExtensionCard