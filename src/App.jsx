import Header from "./components/layout/Header"
import Models from "./components/pages/Models"
import Navbar from "./components/layout/Navbar"
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
