const blogState = [];

export const blogReduser = (state=blogState, action)=>{
     switch (action.type) {
        case 'ADD_BLOG':
            return [...state,action.blog];
            case 'EDIT_BLOG':
                return state.map(item=>{
                    if (item.id === action.id) {
                        return {
                            ...item,
                            ...action.update
                        }
                    }else{
                        return item;
                    }
                })
                case 'DELETE_BLOG':
                    return state.filter(({id})=>{
                        return id !== action.id
                    });
        default:
            return state;
     }
}
