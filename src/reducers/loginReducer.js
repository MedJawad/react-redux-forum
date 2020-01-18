// export const loginUser = async (state = {
//   id: null,
//   username : "gkgklgfklfglkgffglgfl",
//   email : "",
//   nbrOfPosts : null
// }, action) => {
//   switch (action.type) {
//     case "LOGIN_USER":
//       // let response = await fetch(`http://localhost:8080/ForUs/Login?username=${action.infos.username}&password=${action.infos.password}&${action.infos.remember?"remember=yes":""}`);

//      let response = await fetch(
//         `http://localhost:8080/ForUs/Login?username=${
//           action.infos.username
//         }&password=${action.infos.password}&${
//           action.infos.remember ? "remember=yes" : ""
//         }`
//         // ,
//         // {
//         //   method: "GET", // *GET, POST, PUT, DELETE, etc.
//         //   mode: "cors", // no-cors, *cors, same-origin
//         //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//         //   credentials: "same-origin", // include, *same-origin, omit
//         //   headers: {
//         //     "Content-Type": "application/json"
//         //     // 'Content-Type': 'application/x-www-form-urlencoded',
//         //   },
//         //   redirect: "follow", // manual, *follow, error
//         //   referrerPolicy: "no-referrer" // no-referrer, *client
//         //   // body data type must match "Content-Type" header
//         // }
//       );

//       console.log(response);

//       if (response.ok) {
//         // if HTTP-status is 200-299
//         // get the response body
//         let json = await response.json();
//         console.log(json);
//         alert("yay it worked");

//         return json;
//       } else {
//         alert("HTTP-Error: " + response.status);
//         return state;
//       }
//       break;

//       case "LOGOUT_USER":
//         let res = await fetch(
//           `http://localhost:8080/ForUs/Logout`
//         );

//         console.log(res);

//         if (res.ok) {
//           return null;
//         } else {
//           alert("HTTP-Error: " + res.status);
//           return state;
//         }
//     default:
//       return state;
//       break;
//   }
// };

function user(
  state = {
    sessionId : "",
    isFetching: false,
    didInvalidate: false,
    currentUser: null
  },
  action
) {
  switch (action.type) {
    case "INVALIDATE_USER":
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case "REQUEST_USER":
      return Object.assign({}, state, {
        isFetching: true
      });
    case "RECEIVE_USER":
      return Object.assign({}, state, {
        sessionId : action.infos?action.infos.sessionId:"",
        isFetching: false,
        currentUser: action.infos?action.infos.user:null,
        lastUpdated: action.receivedAt
      });
    case "LOGOUT_USER":
      return Object.assign({}, state, {
        isFetching: false,
        currentUser: null
      });
    default:
      return state;
  }
}
export function loginUser(state = {}, action) {
  switch (action.type) {
    case "INVALIDATE_USER":
    case "RECEIVE_USER":
    case "REQUEST_USER":
      return Object.assign({}, state, user(state[action.user], action));
    case "LOGOUT_USER":
      return Object.assign({}, state, user(state[action.user], action));
    default:
      return state;
  }
}
