
const searchFilter = (state = "", action ) => {

    switch (action.type) {
        case "FILTER_POSTS":
            return action.value;
            break;
    
        default:
            return state;
            break;
    }

}

export default searchFilter;