import './Todolist.css'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { GetTodoThunk } from '../../../../store/Todo/actions';

export default function Todolist(props) {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.TodoStore.Todo)
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = parseInt(`${yyyy}${mm}${dd}`);

  useEffect(() => {
    dispatch(GetTodoThunk(props.location,props.currentview))
  }, [dispatch, props.location, props.currentview])

  const checkwork = (sowing, harvest, harvest_date, irrigate, sowing_date) => {
    if (sowing === "false")
      return "Sow 🌱"
    else if (harvest === "false" && harvest_date > today) {
      if ((today - sowing_date) % irrigate === 0) {
        return "Irrigate 💧"
      }     }
    else if (harvest === "false" && harvest_date <= today) {
      return "Harvest 🎑"
    }
  }



  return (
    < div className="todolist"><div className='todo-title'>{props.currentview === "Overview" ? `Todo ${props.currentview}` : `Zone ${props.currentview} Todo `} </div>
      {todo && todo[0] !== undefined ? todo.map((data) => <div key={data.area.name} className="todolist-card">
        <div className='todo-zone'>Zone <br/>{data.area}</div>
        <div className='todo-detail'>
        Crop Name &nbsp;: {data.name} 
        <br/>
        Work Today : {checkwork(`${data.sowing}`, `${data.harvest}`, `${parseInt(`${data.harvest_date.slice(0, 4)}${data.harvest_date.slice(5, 7)}${data.harvest_date.slice(8, 10)}`)}`, `${data.irrigation_period}`,`${parseInt(`${data.sowing_date.slice(0, 4)}${data.sowing_date.slice(5, 7)}${data.sowing_date.slice(8, 10)}`)}`,)}
        </div>
      </div>) : <div className="noworkcard"><span>No work today</span></div>}
    </div>
  )
}
