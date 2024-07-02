import {useAppDispatch} from './stateStore'
import { IncGuardarServices } from './reducers/IncAgregar'

interface props {
  usuariosRedux: Array<Object>
}

export default function ListadoRedux ({ usuariosRedux }: props) {
  const dispatch = useAppDispatch()

  const listadoNombre = usuariosRedux.map((objs: any, index: number) => 
    <li key={index} style={{ display: 'flex' }}>
      <div>{objs.name}</div>
      <button onClick={() => dispatch(IncGuardarServices.actions.borrarNombre(index))}>Eliminar</button>
    </li>
  )
  return (
    <ul>{listadoNombre}</ul>
  )
}
