
import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PagePrincipale from './pages/PagePrincipale';
import PageLogin from './pages/PageLogin';
import PageInscription from './pages/PageInscription';
import PageVendeur from './pages/PageVendeur';
import PageAdmin from './pages/PageAdmin';
import PageMessages from './pages/PageMessages';
import PageFavorisation from './pages/PageFavorisation';

// _______________________________  components   _______________________________

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagePrincipale route="/" />} />
          <Route path="login" element={<PageLogin route="/login" />} />
          <Route path="register" element={<PageInscription route="/register" />} />
          <Route path="vendeur" element={<PageVendeur route="/vendeur" />} />
          <Route path="admin" element={<PageAdmin route="/admin" />} />
          <Route path="messages" element={<PageMessages route="/messages" />} />
          <Route path="favorisation" element={<PageFavorisation route="/favorisation" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;