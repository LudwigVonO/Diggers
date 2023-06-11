import React, { useState, useEffect } from 'react';
import getMovies from '../Services/tmdb.api.service.ts';
import { Header } from 'antd/es/layout/layout.js';
import {PlusOutlined,UserOutlined} from '@ant-design/icons';
import { Switch, theme } from 'antd';

interface NavbarProps {
  toggleOverlay:Function;
  toggleTheme:Function;
  darkMode:boolean;
}


const Navbar: React.FC<NavbarProps> = ({toggleOverlay,toggleTheme,darkMode}:NavbarProps): JSX.Element => {
  const {
    token: { colorBgBase, colorPrimary },
  } = theme.useToken();
  

  
  return (
    <Header style={{backgroundColor: colorBgBase, position:'sticky', top:0, zIndex:5 ,display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 className="accent"><span className="secondary">Movie</span>DIGGERS</h2>
      <div className='Icons' style={{display:'flex',alignItems:'center'}}>
          <Switch checkedChildren="Dark" unCheckedChildren="Light" onChange={toggleTheme} defaultChecked />
          <PlusOutlined onClick={toggleOverlay} style={{ fontSize: '40px', color:colorPrimary }}/>
          <UserOutlined  style={{ fontSize: '40px', color:colorPrimary }}/>
      </div>
    </Header>
  )
}

export default Navbar