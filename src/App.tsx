import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { useAppDispatch, useAppSelector } from "./hooks/redux.hooks";
import { useEffect } from "react";
import { fetchShipments } from "./reducers/shipments";
import Loader from "./components/Loader";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchShipments());
  }, []);


  return (
    <div className="App">
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
