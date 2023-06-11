import './App.css';
import FilmsSection from './Components/FilmsSection.tsx';
import client from './ApolloClient.ts';
import { ApolloProvider } from '@apollo/react-hooks';
import Navbar from './Components/Navbar.tsx';
import Filters from './Components/Filters.tsx';


import { FiltersContextProvider } from './Context/FiltersContext.tsx';
import React, { useState } from 'react';
import FilmSearchBar from './Components/FilmSearchBar';

import { UserOutlined, LaptopOutlined, NotificationOutlined, PicLeftOutlined, CustomerServiceOutlined, VideoCameraOutlined } from '@ant-design/icons';

import { Button,ConfigProvider, Layout, Modal, Menu, Typography, theme, MenuProps, Space} from 'antd';

const {Header,Content,Sider} = Layout;
const {Text} = Typography;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const [searchModal, setSearchModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [pickedMovie,setPickedMovie] = useState(null);


  const darkTheme = {
    colorPrimary : 'RGB(181, 3, 136)',
    colorBgBase: 'RGB(0, 0, 9)',
    colorTextBase: 'RGB(219,219,219)',
    colorBgContainer : 'RGB(0,0,9)',
    algorithm: theme.darkAlgorithm,
  }

  const lightTheme = {
    colorPrimary : 'RGB(181, 3, 136)',
    colorTextBase: 'RGB(0, 0, 9)',
    colorBgBase: 'RGB(219,219,219)',
    colorBgContainer : 'RGB(219,219,219)',
    algorithm: theme.lightTheme,
  }

  const toggleOverlay = () => {
    setSearchModal(!isOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  const handlePickedMovie = (movie) => {
    setSearchModal(false);
    console.log(movie);
    setPickedMovie(movie);
    setFormModal(true);
  }

  const finalTheme = darkMode ? darkTheme : lightTheme;
  return (
    <ApolloProvider client={client}>
        <ConfigProvider
          theme={{
            token: finalTheme
          }}
        >
          <div className="App">
            <Navbar toggleOverlay={toggleOverlay} toggleTheme={toggleTheme}></Navbar>
            <Layout>
              <Modal
                title="Find a movie"
                style={{ top: 80 }}
                open={searchModal}
                onOk={() => setSearchModal(false)}
                onCancel={() => setSearchModal(false)}
                width={1000}
              >
                <FilmSearchBar handlePickedMovie={handlePickedMovie}/>
              </Modal>
              { pickedMovie && <Modal
                title="Recommend a movie"
                style={{ top: 80 }}
                open={formModal}
                onOk={() => setFormModal(false)}
                onCancel={() => setFormModal(false)}
                width={1000}
              >
              TEST  
              </Modal>
              }
              <Sider width={200} style={{backgroundColor: finalTheme.colorBgBase}}>
                <div style={{display:'flex', flexDirection:'column',alignItems:'flex-start',marginLeft:80}}>
                  <Space direction='horizontal'>
                    <PicLeftOutlined />
                    <Text type="secondary">Articles</Text>
                  </Space>
                  <Space  direction='horizontal'>
                    <CustomerServiceOutlined />
                    <Text type="secondary">Music</Text>
                  </Space>
                  <Space  direction='horizontal'>
                      <VideoCameraOutlined />
                      <Text type="primary">Movies</Text>
                  </Space>
                </div>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' , display: 'flex', flexDirection:'column',backgroundColor:finalTheme.colorBgBase}}>
                <Content
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    
                  }}
                >
              <FiltersContextProvider>
                <Filters />
                <FilmsSection />
              </FiltersContextProvider>
                </Content>
              </Layout>
            </Layout>
          </div>
        </ConfigProvider>
    </ApolloProvider>
  );
}

export default App;
