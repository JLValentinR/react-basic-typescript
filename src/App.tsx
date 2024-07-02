import React, { useState, useEffect } from "react";
import axios from 'axios';
import Listado from "./Listado";
import Listado2 from "./Listado2";
import ListadoRedux from "./ListadoRedux";
import { useTypedSelector, useAppDispatch } from './stateStore';
import DecrementButton from './components/DecrementButton';
import IncrementButton from './components/IncrementButton';
import { IncNameServices } from './reducers/IncName'
import { IncGuardarServices } from './reducers/IncAgregar'

import { useMyHook } from './hooks/useMyHook';

export default function App () {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [usuarios, setUsuarios] = useState<Array<Object>>([]);
  const [productos, setProductos] = useState<Array<Object>>([]);

  const currentNumber = useTypedSelector((state) => state.IncDec.currentNumber) //getting data from store
  const [userNumber, setUserNumber] = useState<number>()

  const currentName = useTypedSelector((state) => state.nameUsuario.currentName) //getting data from store
  const [userName, setUserName] = useState<string>("")

  const usuariosRedux = useTypedSelector((state) => state.agregarName.currentAgregar) //getting data from store
  const [userAgregarName, setUserAgregarName] = useState<string>("")

  const [count, setCount] = useMyHook();

  const dispatch = useAppDispatch()

  useEffect(() => {
    const url: string = "https://api.mercadolibre.com/sites/MLA/search?q=Mario";
    axios.get(url)
    .then(data => setProductos(data.data.results))
    .catch(err => console.log(err))
  }, [])

  const handlerSend = () => {
    setUsuarios([...usuarios, { name: name, email: email }]);
    setName("");
    setEmail("");
  };

  const deleteUsuario = (index: number) => {
    const newArray = usuarios.filter((objs, index2) => index2 !== index);
    setUsuarios(newArray);
  };

  return (
    <>
      <div>
        <div className="fondoFormulario">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa un usuario"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa un usuario"
          />
        </div>
        <button type="submit" onClick={handlerSend} style={{ marginTop: "10px" }}>
          Guardar usuario
        </button>
        <div>
          <Listado usuarios={usuarios} borrarUsuario={deleteUsuario} />
        </div>
      </div>
      <div>
        <h2>{currentNumber}</h2>
        <div className='buttons'>
          <div className='button-div'>
            <IncrementButton value={userNumber} />
            <DecrementButton value={userNumber}/>
          </div>
        </div>
        <input type="number" value={userNumber ? userNumber : undefined} onChange={(e) => setUserNumber(+e.target.value)} />
        <h2>{currentName}</h2>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button onClick={() => dispatch(IncNameServices.actions.mostrarNombre(userName))}>Cambiar nombre</button>
      </div>
      <div>
        <input type="text" value={userAgregarName} onChange={(e) => setUserAgregarName(e.target.value)} placeholder="ingresa un nombre" />
        <button onClick={() => dispatch(IncGuardarServices.actions.agregarNombre({ name: userAgregarName }))}>Agregar nombre</button>
        <ListadoRedux usuariosRedux={usuariosRedux} />
      </div>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div style={{ display: 'none' }}>
        <Listado2 productos={productos}  />
      </div>
    </>
  );
}
