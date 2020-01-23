function posts(
    state = {
      isFetching: false,
      didInvalidate: false,
      posts: [],
      lastUpdated : null
    },
    action
  ) {
    switch (action.type) {
      case 'INVALIDATE_POST':
        return Object.assign({}, state, {
          didInvalidate: true
        })
      case 'REQUEST_POSTS':
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false
        })
      case 'RECEIVE_POSTS':
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          posts: action.posts,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
  }
  export function loadPosts(state = {}, action) {
    switch (action.type) {
      case 'INVALIDATE_POST':
      case 'RECEIVE_POSTS':
      case 'REQUEST_POSTS':
        return Object.assign({}, state, 
            posts(state[action.posts], action)
        )
      default:
        return state
    }
  };
