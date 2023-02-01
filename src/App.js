import {BrowserRouter} from 'react-router-dom'
import NavDesktop from './components/NavDesktop';
import HeaderAbout from './components/HeaderAbout';
import SectionMarcas from './components/SectionMarcas';
import SectionReparto from './components/SectionReparto';
import Footer from './components/Footer';
import NavMobile from './components/NavMobile';
import { HashLink } from 'react-router-hash-link';

// const viewport = () => {
//   window.visualViewport.addEventListener("resize", () =>{
//     if (window.visualViewport.width > 750) {
//       return true
//     }else {
//       return false
//     }
//   })
// }

function App() {
  return (
    <>
      <BrowserRouter>
        {/* {window.visualViewport.width > 800 ? <NavDesktop></NavDesktop> : <NavMobile></NavMobile>} */}
        {/* {viewport === true ? "desktop" : "mobile"} */}
        {/* { window.visualViewport.addEventListener("resize", () => console.log("b", window.visualViewport.width))} */}

        <NavDesktop></NavDesktop>
        <NavMobile></NavMobile>
        <HeaderAbout></HeaderAbout>
        <SectionMarcas></SectionMarcas>
        <SectionReparto></SectionReparto>
        <Footer></Footer>
        <div className='go-up'>

          <HashLink smooth to="#">
            <img src="./assets/arrow.png" alt="go up" />
          </HashLink>
        </div>
      
      </BrowserRouter>
    </>
  );
}

export default App;
