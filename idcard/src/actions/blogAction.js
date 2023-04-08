// import { v4 as uuidv4 } from 'uuid';

// export const addblog=({photo, name, surname, fName, mName, gender, nationality,birthDate, cardNo, personalNo, blood })=>({
//     type:'ADD_BLOG',
//     blog:{
//         id:uuidv4(),
//         photo,
//         name,
//         surname,
//         fName,
//         mName,
//         gender,
//         nationality,
//         birthDate,
//         cardNo,
//         personalNo,
//         blood

//     }
// })

// export const editblog=(id,update)=>(
//     {
//         type:'EDIT_BLOG',
//         id,
//         update
//     }
// )

// export const deleteblog=({id})=>({
//     type:'DELETE_BLOG',
//     id:id
// })


import database from '../firebase/firebaseConfig';

export const addblog = (blog) => ({
    type: "ADD_BLOG",
    blog
})

export const addBlogToDatabase = (blogData = {}) => {
    return (dispatch) => {
        const { photo='', name='',surname='',fName='', mName='', gender='', nationality='',birthDate='', cardNo='', personalNo='', blood='' } = blogData;
        const blog = {photo,name,surname,fName, mName, gender, nationality,birthDate, cardNo, personalNo, blood};

        database.ref("blogs").push(blog).then((res) => {
            dispatch(addblog({
                id: res.key,
                ...blog
            }))
        })
    }
}

export const deleteblog = (id) => ({
    type: "REMOVE_BLOG",
    id: id
});

export const removeBlogFromDatabase = (id) => {
    return (dispatch) => {
        return database.ref('blogs').child(`${id}`).remove().then(() => {
            dispatch(deleteblog(id));
        })
    }   
}

export const editblog = (id,updates) => ({
    type: "EDIT_BLOG",
    id,
    updates
})

export const editBlogFromDatabase = (id, updates) => {
    return (dispatch) => {
        return database.ref(`blogs/${id}`).update(updates).then(() => {
            dispatch(editblog(id,updates));
        })
    }
}

export const setBlogs = (blogs) => ({
    type: "SET_BLOGS",
    blogs
})

export const getBlogsFromDatabase = () => {
    return (dispatch) => {
        return database.ref("blogs").once("value").then((snapshot) => {
            const blogs = [];

            snapshot.forEach((blog) => {
                blogs.push({
                    id: blog.key,
                    ...blog.val()
                })
            })

            dispatch(setBlogs(blogs));
        })
    }
}