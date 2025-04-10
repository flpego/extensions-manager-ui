import "../styles/ExtensionCard.css"

const ExtensionCard = ({ extension, onToggle, removeExtension }) => {
  return (
    <div className='extension__card-container'>
      <div className='extension__info-container'>
        <img src={extension.logo} alt={extension.name} />
        <div>
          <h4>{extension.name}</h4>
          <p>{extension.description}</p>
        </div>
      </div>
      <div className='extension__action-container'>
        <button onClick={() => removeExtension(extension.name)}>Remove</button>
        <label class="switch">
          <input
            type="checkbox"
            checked={extension.isActive}
            onChange={() => onToggle(extension.name)}
          />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  )
}

export default ExtensionCard