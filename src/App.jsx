import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import HomePage from "./pages/HomePage";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login"
import Navbar from './compoonent/Navbar';
import ProtectedRoute from "./pages/ProtectedRoute"
// import AppLayout from "./pages/AppLayout"
import "./index.css"
import CityList from './compoonent/CityList';
import CountryList from './compoonent/CountryList';
import City from "./compoonent/City"
import Form from './compoonent/Form';
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthContextProvider } from './contexts/AuthContext';

// making use of codesplitting called lazyload
const HomePage =lazy(()=>import("./pages/HomePage"))
const Product =lazy(()=>import("./pages/Product"))
const Pricing=lazy(()=>import("./pages/Pricing"))
const Login =lazy(()=>import("./pages/Login"))
const AppLayout =lazy(()=>import("./pages/AppLayout"))
const PageNotFound =lazy(()=>import("./pages/PageNotFound"))



const App = () => {

  
  return (
    <CitiesProvider>
    <AuthContextProvider>
 <BrowserRouter>

 <Suspense>
      <div>
   
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login/>}/>
          <Route path='app' element={<ProtectedRoute><AppLayout /></ProtectedRoute>} >
          <Route index 
          element={<Navigate replace to="cities" />} />
          {/* element={<CityList cities={cities}  isLoading={loading}/>}/> */}
          <Route path='cities' element={<CityList />}/>
          <Route path="cities/:id" element={<City  />}/> 
          <Route  path='countries' element={<CountryList />}/>
          <Route path="form" element={<Form />}/>
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      </Suspense>
    </BrowserRouter>
    </AuthContextProvider>
    </CitiesProvider>
   
  );
};

export default App;
