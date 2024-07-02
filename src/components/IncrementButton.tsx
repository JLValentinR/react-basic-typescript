import {useAppDispatch} from './../stateStore'
import { IncDecServices } from './../reducers/IncDecSlice'

const IncrementButton = ({value}: {value: number | undefined}) => {
  const dispatch = useAppDispatch()

  return (
    <button onClick={() => !value ? dispatch(IncDecServices.actions.incrementNumber()) : dispatch(IncDecServices.actions.incrementUserValue(value))}>
      Increment
    </button>
  )
}

export default IncrementButton