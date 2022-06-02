//selectors
export const getTableById = ({ tables }, tableId) => tables.find((table) => table.id === tableId);
export const getAllTables = ({ tables }) => tables;

export const getAllCategories = ({ categories }) => categories;
export const getPostsByCategoryName = ({ posts }, category) =>
  posts.filter((post) => post.category === category);
// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });

// action creators
const UPDATE_TABLES = createActionName("UPDATE_TABLES");

export const fetchTables = () => {
  return (dispatch) => {
    fetch("http://localhost:3131/api/tables")
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};



const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default tablesReducer;

