import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Component/Header';
import Data from './Component/Data';
import { Routes } from 'react-router-dom';
import { Route, BrowserRouter as Router ,Link} from 'react-router-dom'
import ContactDetail from './ContactDetail';


function App() {

  const [dir, setDir] = useState([]);
  const STORE_VAR = "dir"

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem(STORE_VAR));

    if (contacts) {
      setDir(contacts);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORE_VAR, JSON.stringify(dir))
  }, [dir])

  function removeContact(id) {
    const NewCont = dir.filter((contact) => {
      return contact.id !== id;
    })

    setDir(NewCont);
  }
  return (
    <Router>


      <Header />

      <Routes>

        <Route path='/add' element={<Data dir={dir} setDir={setDir} />} />
      </Routes>



      <Routes>
        <Route path='/' element=
          {<div style={{minWidth:"100vw"}}>
            <h2 className='Det'>Contact
            <Link to="/add">
            <button className='ui button blue right btn1'>Add Contact</button> 
            </Link>
            </h2>
            {
              dir.map((detais, key) => {

                return <ContactDetail
                  name={detais.Contact.name}
                  email={detais.Contact.email}
                  id={detais.id}
                  removeContact={removeContact}
                  key={key}
                />
              })
            }

          </div>


          } />
      </Routes>

    </Router>


  );
}

export default App;
