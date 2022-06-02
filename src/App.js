import Header from "./components/views/Header/Header";
import Home from "./components/pages/Home";
import EditTable from "./components/features/Table/EditTable";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesReducer";
import { fetchStatus } from "./redux/statusReducer";

import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);
  useEffect(() => dispatch(fetchStatus()), [dispatch]);

  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:tableId" element={<EditTable />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
