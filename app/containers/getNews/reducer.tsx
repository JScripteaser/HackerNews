const initialState = {
   news: []
};


const dataReducer = (state = initialState, action: any) => {
    console.log(action);
    switch (action.type) {
        case 'GET_DATA_NEWS':
            return { ...state, news: action.payload };
        default:
            return state
    }
};


export default dataReducer
