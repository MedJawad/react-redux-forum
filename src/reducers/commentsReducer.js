function comments(
    state = {
      isFetching: false,
      didInvalidate: false,
      items: []
    },
    action
  ) {
    switch (action.type) {
      case 'INVALIDATE_POST':
        return Object.assign({}, state, {
          didInvalidate: true
        })
      case 'REQUEST_COMMENTS':
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false
        })
      case 'RECEIVE_COMMENTS':
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          items: action.comments,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
  }
  export function commentsByPost(state = {}, action) {
    switch (action.type) {
      case 'INVALIDATE_POST':
      case 'RECEIVE_COMMENTS':
      case 'REQUEST_COMMENTS':
        return Object.assign({}, state, {
          [action.post]: comments(state[action.post], action)
        })
      default:
        return state
    }
  };