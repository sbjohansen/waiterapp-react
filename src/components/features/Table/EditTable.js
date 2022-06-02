import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTableById } from "../../../redux/tablesReducer";
import TableForm from "./TableForm";
import { editTable } from "../../../redux/tablesReducer";
const EditTable = () => {
  const dispatch = useDispatch();
  const { tableId } = useParams();
  const tableData = useSelector((state) => getTableById(state, tableId));

  const navigate = useNavigate();

  console.log(tableId);
  const handleSubmit = (table) => {
    dispatch(editTable({ ...table, tableId }));
    navigate("/");
  };
  if (!tableData) return <Navigate to="/" />;
  return (
    <TableForm
      action={handleSubmit}
      actionText="Edit table"
      id={tableData.id}
      people={tableData.people}
      maxPeople={tableData.maxPeople}
      status={tableData.status}
      bill={tableData.bill}
    />
  );
};

export default EditTable;
