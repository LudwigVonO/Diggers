import React, { createContext, useState } from 'react';
import { App } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import type { NotificationInstance } from 'antd/es/notification/interface';


interface Props {
  children: React.ReactNode;
}


// const FilmsContext: AntContext = {showDropDown, selectDisplay , displays}

export const AntContext = createContext<any>(null);

export const AntContextProvider: React.FC<Props> = ( {children}) => {
  

  let message: MessageInstance;
  let notification: NotificationInstance;
  let modal: Omit<ModalStaticFunctions, 'warn'>;
  
  const staticFunction = App.useApp();
  message = staticFunction.message;
  modal = staticFunction.modal;
  notification = staticFunction.notification;

  const antContextObject = {
    staticFunction,
    message,
    modal,
    notification
  }
  
  return (
    <AntContext.Provider value={antContextObject}>
      {children}
    </AntContext.Provider>
  );
}

