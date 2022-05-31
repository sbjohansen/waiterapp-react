import Header from "./components/views/Header/Header";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchTables} from "./redux/tablesReducer";

function App() {
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;