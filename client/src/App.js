import './App.css';
import FilmsSection from './Components/FilmsSection.tsx';
import client from './ApolloClient.ts';
import { ApolloProvider } from '@apollo/react-hooks';
import Navbar from './Components/Navbar.tsx';
import Filters from './Components/Filters.tsx';

function App() {
  return (
    <ApolloProvider client={client}>      
    <div className="App">
      <Navbar></Navbar>
      <section id="scrollableSection">
        <Filters></Filters>
        <FilmsSection></FilmsSection>
      </section>
    </div>
    </ApolloProvider>
  );
}

export default App;
