import TableInfo from '../features/Table/TableInfo';
import { getAllTables } from '../../redux/tablesReducer';
import { useSelector } from 'react-redux';

function Home() {
  const tablesData = useSelector(getAllTables);

  return (
    <div>
      <h1 className="mb-5">All tables</h1>
      {tablesData.map((table, index) => (
        <TableInfo
          key={index}
          id={table.id}
          number={table.id}
          status={table.status}
          people={table.people}
          maxPeople={table.maxPeople}
          bill={table.bill}
        />
      ))}
    </div>
  );
}

export default Home;
