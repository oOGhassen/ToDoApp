const initialState =[{
    id:0,
    TaskPhrase:"N9oum 7 mta3 sbe7",
    isDone:"True",},
    {
        id:1,
        TaskPhrase:"Nemchi Na9ra 9",
        isDone:"False",
    },

];

const taskReducer = (state = initialState, action)=> {
    switch(action.type){
        case "ADD_Task":
        state = [...state, action.payload];
        return state;
        case "UPDATE_TASK":
            const updateState =state.map(task=> task.id === action.payload.id? action.payload : task);
            state=updateState;
            return state;
        case "DELETE_TASK":
           const filterTasks = state.filter(task => task.id !== action.payload && task);
           state=filterTasks;
           return state;  
        default:
        return  state;
    }
};

export default taskReducer