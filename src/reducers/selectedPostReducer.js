


export function selectedPost(state = '', action) {
    switch (action.type) {
      case 'SELECT_POST':
        return action.post
      default:
        return state
    }
  }