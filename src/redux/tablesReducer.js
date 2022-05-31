
//selectors
export const getPostById = ({ posts }, postId) => posts.find((post) => post.id === postId);
export const getAllPosts = ({ posts }) => posts;
export const getAllCategories = ({ categories }) => categories;
export const getPostsByCategoryName = ({ posts }, category) => posts.filter((post) => post.category === category);
// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
export const updateTables = payload => ({type: UPDATE_TABLES, payload});

// action creators
const UPDATE_TABLES = createActionName('UPDATE_TABLES');


export const fetchTables = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/api/tables')
            .then(res => res.json())
            .then(tables => dispatch(updateTables(tables)))
    }
};

const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_TABLES:
            return [...action.payload];
        default:
            return statePart;
    }
};




export default postsReducer;



//ACTION CREATORS