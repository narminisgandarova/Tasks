import { v4 as uuidv4 } from 'uuid';

export const addblog=({title, desc, photo})=>({
    type:'ADD_BLOG',
    blog:{
        id:uuidv4(),
        title,
        desc,
        photo
    }
})

export const editblog=(id,update)=>(
    {
        type:'EDIT_BLOG',
        id,
        update
    }
)

export const deleteblog=({id})=>({
    type:'DELETE_BLOG',
    id:id
})