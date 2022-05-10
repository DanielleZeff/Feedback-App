import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedBackProvider } from './context/FeedBackContext';

function App() {
 
    return (
        <FeedBackProvider>
        <Router>
            <Header />
            <div className='container'>
                
                <Route exact path='/'>
            
                
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList  />
               
            
                </Route>

                <Route path='/about' element={<AboutPage/>}/>
               
                <AboutIconLink />
            </div>
        </Router>
        </FeedBackProvider>
    )
    }

    
export default App;
