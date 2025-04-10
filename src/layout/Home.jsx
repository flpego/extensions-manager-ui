import ExtensionFilter from "../components/ExtensionFilter"
import ExtensionList from "../components/ExtensionList"
import ThemeToggle from "../components/ThemeToggle"

const Home = () => {
  return (
    <div>
      <ThemeToggle />
      <ExtensionList />
    </div>
  )
}

export default Home