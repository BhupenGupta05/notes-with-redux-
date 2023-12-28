import { filterChange } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const VisibilityFilter = (props) => {
    const dispatch = useDispatch()
    {/* In order to select only 1 option out of 3, i have given same name to all the inputs */}
  return (
    <div>        
        all          
        <input 
        type="radio" 
        name="filter" 
        onChange={() => dispatch(filterChange('ALL'))} />     

        important    
        <input 
        type="radio" 
        name="filter" 
        onChange={() => dispatch(filterChange('IMPORTANT'))} />   

        nonimportant 
        <input 
        type="radio" 
        name="filter" 
        onChange={() => dispatch(filterChange('NONIMPORTANT'))} />      
    </div>
  )
}

export default VisibilityFilter