export const searchFilter = (value) => {
    return {
        type : 'FILTER_POSTS',
        value : value,
    }
}


// export const addPost = (title,text) => {
//     return {
//         type : 'ADD_POST',
//         title : title,
//         text : text,
//     }
// }

export const increment = ()=>{
    return {type:"INCREMENT"}
}