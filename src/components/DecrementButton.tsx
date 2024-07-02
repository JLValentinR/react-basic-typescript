import {useAppDispatch} from './../stateStore'
import { IncDecServices } from './../reducers/IncDecSlice'

const DecrementButton = ({value}: {value: number | undefined}) => {
  const dispatch = useAppDispatch()

  return (
    <button onClick={() => !value ? dispatch(IncDecServices.actions.decrementNumber()) : dispatch(IncDecServices.actions.decrementUserValue(value)) }>
      Decrement
    </button>
  )
}

export default DecrementButton