import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NewPerfil } from "./Pages/NewPerfil.jsx"
import { DataPerfil } from "./Pages/DataPerfil.jsx"
import { ProtectedPages } from "./Pages/ProtectedPages.jsx"
import { Login } from "./Pages/Login.jsx"
import { Registration } from "./Pages/Registration.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Registration /> } />
          <Route path="/login/enter" element={ <Login /> } />
          <Route element={<ProtectedPages/>}>
            <Route path="/perfil/see/:id" element={ <DataPerfil /> } />
            <Route path="/perfil/updated/:id" element={ <NewPerfil /> } />  
          </Route>          
        </Routes>  
      </BrowserRouter>     
    </>
  )
}

export default App
