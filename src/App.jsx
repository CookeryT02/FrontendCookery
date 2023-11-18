import { useEffect, useState } from "react"
import { LoadingPage } from "./pages";
import AppRouter from "./router";
import { services } from "./services";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "./store/slice/auth/auth-slice";

const App = () => {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      const token = services.encryptedLocalStorage.getItem("ctToken");

      if (token) {
        const userData = await services.user.getUser();
        dispatch(loginSuccess(userData));
      }
    } catch (error) {
      dispatch(loginFailure());
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return <>
    {
      loading ? <LoadingPage /> : <AppRouter />
    }
  </>
};

export default App;
