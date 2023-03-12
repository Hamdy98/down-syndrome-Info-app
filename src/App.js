import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import EducationAndFamilyScreen from './screens/EducationAndFamilyScreen';
import ChildhoodScreen from './screens/ChildhoodScreen';
import SymptomsAndCausesScreen from './screens/SymptomsAndCausesScreen';
import ResourcesAndReferencesScreen from './screens/ResourcesAndReferencesScreen';
import MedicalCentersScreen from './screens/MedicalCentersScreen';

function App() {
  return (
    <Router>
      <Header/>
      <main className='Py-4'>
        <Routes>
          <Route path='/down-syndrome-Info-app' element={<HomeScreen/>}/>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/EducationAndFamilyScreen' element={<EducationAndFamilyScreen/>}/>
          <Route path='/ChildhoodScreen' element={<ChildhoodScreen/>}/>
          <Route path='/SymptomsAndCausesScreen' element={<SymptomsAndCausesScreen/>}/>
          <Route path='/MedicalCentersScreen' element={<MedicalCentersScreen/>}/>
          <Route path='/ResourcesAndReferencesScreen' element={<ResourcesAndReferencesScreen/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
