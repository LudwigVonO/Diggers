import logo from './logo.svg';
import './App.css';
import Films from './Components/Films.tsx';
import client from './ApolloClient.ts';
import { ApolloProvider } from '@apollo/react-hooks';

function App() {
  return (
    <ApolloProvider client={client}>      
    <div className="App">
      <header className="App-header">
        <Films></Films>
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;
