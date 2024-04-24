import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import CategoriesProvider from "./Provider/CategoriesProvider";
import NewsProvider from "./Provider/NewsProvider";
import SearchViaText from "./Provider/SearchViaText";

function App() {
  return (
    <>
      <SearchViaText>
        <CategoriesProvider>
          <NewsProvider>
            <Header />
            <Main />
            <Footer/>
          </NewsProvider>
        </CategoriesProvider>
      </SearchViaText>
    </>
  );
}

export default App;
