import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import RecipesContainer from "./components/RecipesContainer/RecipesContainer";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <RecipesContainer></RecipesContainer>
           <Footer></Footer>
        </div>
    );
}

export default App;
