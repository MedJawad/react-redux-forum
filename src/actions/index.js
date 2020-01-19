import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const searchFilter = value => {
  return {
    type: "FILTER_POSTS",
    value: value
  };
};

export const handleLogin = formInfos => {
  return {
    type: "LOGIN_USER",
    user: {
      username: formInfos.username,
      password: formInfos.password,
      remember: formInfos.remember
    }
  };
};
export const logout = () => {
  cookies.remove("sessionId");
  return {type: "LOGOUT_USER",}
}

export function selectPost(post) {
  return {
    type: "SELECT_POST",
    post
  }
}

export function invalidatePost(post) {
  return {
    type: "INVALIDATE_POST",
    post
  }
}

export function requestComments(post) {
  return {
    type: 'REQUEST_COMMENTS',
    post
  }
}

export function receiveComments(post, json) {
    return {
      type: "RECEIVE_COMMENTS",
      post,
      comments: json.map(child => child.data),
      receivedAt: Date.now()
    }
  }

  export function fetchComments(post) {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
    return function(dispatch) {
      // First dispatch: the app state is updated to inform
      // that the API call is starting.
      dispatch(requestComments(post))
      // The function called by the thunk middleware can return a value,
      // that is passed on as the return value of the dispatch method.
      // In this case, we return a promise to wait for.
      // This is not required by thunk middleware, but it is convenient for us.
      return fetch(`http://localhost:8080/ForUs/Comments/Post?id=${post}`)
        .then(
          response => response.json(),
          // Do not use catch, because that will also catch
          // any errors in the dispatch and resulting render,
          // causing a loop of 'Unexpected batch number' errors.
          // https://github.com/facebook/react/issues/6895
          error => console.log('An error occurred.', error)
        )
        .then(json => {
          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.
          console.log(json)
          dispatch(receiveComments(post, json))
        }
        )
    }
  }

  export function fetchUser(user,session) {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
    return function(dispatch) {
      if(!session) { session = cookies.get('sessionId'); }
      // First dispatch: the app state is updated to inform
      // that the API call is starting.
      dispatch(requestUser(user))
      // The function called by the thunk middleware can return a value,
      // that is passed on as the return value of the dispatch method.
      // In this case, we return a promise to wait for.
      // This is not required by thunk middleware, but it is convenient for us.
      return fetch(`http://localhost:8080/ForUs/Login?username=${
        user.username
      }&password=${user.password}${
        user.remember ? "&remember=yes" : ""
      }${session  ? "&sessionId="+session : "" }`)
        .then(
          response => {
            console.log(response);
            if(response.ok) return response.json() ;
            return null;
          },
          // Do not use catch, because that will also catch
          // any errors in the dispatch and resulting render,
          // causing a loop of 'Unexpected batch number' errors.
          // https://github.com/facebook/react/issues/6895
          error => console.log('An error occurred.', error)
        )
        .then(json => {
          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.
          console.log(json)
          json && (json.sessionId && cookies.set("sessionId",json.sessionId));
          dispatch(receiveUser(user, json))
        }
        )
    }
  }

  export function selectUser(user) {
    return {
      type: "SELECT_USER",
      user
    }
  }
  
  export function invalidateUser(user) {
    return {
      type: "INVALIDATE_USER",
      user
    }
  }
  
  export function requestUser(user) {
    return {
      type: 'REQUEST_USER',
      user
    }
  }
  
  export function receiveUser(user, json) {
      return {
        type: "RECEIVE_USER",
        user,
        infos: json,
        receivedAt: Date.now()
      }
    }
  
// export const addPost = (title,text) => {
//     return {
//         type : 'ADD_POST',
//         title : title,
//         text : text,
//     }
// }

export const increment = () => {
  return { type: "INCREMENT" };
};
