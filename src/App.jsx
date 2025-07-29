import Header from "./components/Layout/Header"
import Models from "./components/pages/Models"
import Navbar from "./components/Layout/Navbar"
import Testdrive from "./components/pages/Testdrive"

function App() {

  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden">
        <Navbar />
        <Header />
        <Testdrive />
        <Models />
      </div>
    </>
  )
}

export default App
