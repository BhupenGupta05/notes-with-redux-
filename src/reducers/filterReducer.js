const filterReducer = (state = 'ALL', action) => {
    // console.log('ACTION: ', action)
    switch (action.type) {
      case 'SET_FILTER':
        return action.payload.filter
      default:
        return state
    }
}

//ACTION CREATOR
export const filterChange = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: { filter }
    }
}

export default filterReducer