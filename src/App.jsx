import { useState } from "react"
import { LoadingPage } from "./pages";
import AppRouter from "./router";

const App = () => {

  const [loading, setLoading] = useState(false);

  return <>
  {
    loading ? <LoadingPage/> : <AppRouter/>
  }
  </>
};

export default App;
