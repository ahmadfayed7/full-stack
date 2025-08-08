import BackgroundImage from "./components/BackgroundImage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ItemList from "./components/ItemList"
import SideBar from "./components/SideBar"


function App() {




  return (
    <>
      <BackgroundImage />
      <main>
        <Header />
        <ItemList />
        <SideBar />
      </main>
      <Footer/>
    </>
  )
}

export default App
