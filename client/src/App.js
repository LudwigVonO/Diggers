import './App.css';
import FilmsSection from './Components/FilmsSection.tsx';
import client from './ApolloClient.ts';
import { ApolloProvider } from '@apollo/react-hooks';
import Navbar from './Components/Navbar.tsx';
import Filters from './Components/Filters.tsx';


import { FiltersContextProvider } from './Context/FiltersContext.tsx';
import Overlay from "./Components/Overlay.tsx";
import { useState } from 'react';
import FilmSearchBar from './Components/FilmSearchBar';

import { Button,ConfigProvider, Modal, theme } from 'antd';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const toggleOverlay = () => {
    setModal1Open(!isOpen);
  };
  return (
    <ApolloProvider client={client}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#00b96b',
            },
          }}
        >
          <div className="App">
            <Navbar toggleOverlay={toggleOverlay}></Navbar>
            <section id="scrollableSection">
              <Modal
                title="Recommend a movie"
                style={{ top: 20 }}
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
                width={1000}
              >
                <FilmSearchBar />
              </Modal>
              <FiltersContextProvider>
                <Filters />
                <FilmsSection />
              </FiltersContextProvider>
            </section>
          </div>
        </ConfigProvider>
    </ApolloProvider>
  );
}

export default App;
