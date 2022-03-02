import React from "react";
import UserContextProvider from "./context/UserContext";
import Routes from "./routes/Routes";
import { ToastContainer } from 'react-toastify';
import SideNavigationContextProvider from "./context/SideNavigationContext";

export default function App() {
  return (
    <UserContextProvider>
      <SideNavigationContextProvider>
        <Routes/>
        <ToastContainer />
      </SideNavigationContextProvider>
    </UserContextProvider>
  );
}
