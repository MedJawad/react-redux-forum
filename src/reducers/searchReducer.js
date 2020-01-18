
const searchFilter = (state = "", action ) => {

    switch (action.type) {
        case "FILTER_POSTS":
            return action.value;    
        default:
            return state;
    }

}

export default searchFilter;