import Header from "./components/Header"
import Menu from "./components/Menu"
import Footer from "./components/Footer"

// const handleScroll = () => {
//   if (window.scrollY > 20) {
//     document.querySelector(".navbar").className = "bg-primary";
//     console.log("Something");
//   } else {
//     document.querySelector(".navbar").className = "bg-transparent";
//     console.log("Another thing");
//   }
// };

function App() {
  return (
    <div>
        <Header />
        <Menu />
        <Footer />
    </div>
  )
}

export default App;
