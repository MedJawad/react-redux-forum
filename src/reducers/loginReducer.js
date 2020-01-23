
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
      return {
        ...state,
        isFetching: true
      };
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
      const newstate = user(state, action);
      return {
        ...state,
        ...newstate,
      };
      //Object.assign({}, state, user(state[action.user], action));
    case "LOGOUT_USER":
      return Object.assign({}, state, user(state[action.user], action));
    default:
      return state;
  }
}
