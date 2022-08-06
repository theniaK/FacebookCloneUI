import './App.css';
import {Header} from './Header/Header'
import { LogIn } from './LogInPage/LogIn';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>

      <div>
       <LogIn/>
      </div>


      <div>
       <Footer/>
      </div>
    </div>
  );
}

export default App;
