import ExtensionFilter from "../components/ExtensionFilter"
import ExtensionList from "../components/ExtensionList"
import ThemeToggle from "../components/ThemeToggle"

const Home = () => {
  return (
    <div>
      <ThemeToggle />
      <div>
        <h2>Extensions List</h2>
        <ExtensionFilter />

      </div>
      <ExtensionList />
    </div>
  )
}

export default Home