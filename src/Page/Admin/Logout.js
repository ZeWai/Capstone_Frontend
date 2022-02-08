import { useDispatch } from "react-redux";
import { logoutThunk } from '../../store/auth/action';

const Logout = () => {
    const dispatch = useDispatch()
    dispatch(logoutThunk());
}

export default Logout;