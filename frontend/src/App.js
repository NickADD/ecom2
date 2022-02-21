import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import FreebieScreen from './screens/FreebieScreen'
import CartScreen from './screens/CartScreen'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
        <main className="py-3">
          <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/freebie/:id' component={FreebieScreen} />
            <Route path='/cart/:id' component={CartScreen} />          
          
          
          </Container>
        </main>
      <Footer />  
    </Router>
  );
}

export default App;
