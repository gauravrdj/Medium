import { useEffect, useState } from "react"
import axios from 'axios'
import { BACKEND_URL } from "../config";


export interface Blog{
    title:string,
    content:string,
    id:string,
    date:string,
    author:{
        name:string
    }
}
export const useBlogs=()=>{
 
    const [loading, setLoading]=useState(true);
    const [blogs, setBlogs]=useState<Blog[]>([]);
   
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then((response)=>{
            setBlogs(response.data.allBlogs),
            setLoading(false)
        })
    }, [])


    return ({
        loading,
        blogs,
    })
}

//for blog/:id
export const useBlog=({id}:{id:string})=>{

    const [loading, setLoading]=useState(true);
    const [blog, setBlog]=useState<Blog>();
   
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then((response)=>{
            setBlog(response.data.blog),
            setLoading(false)
        })
    }, [id])


    return ({
        loading,
        blog,
    })
}

export const useMyBlogs = ()=>{
    const [loading, setLoading]=useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/my`, {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then((res)=>{
            console.log(res)
             setBlogs(res.data.personalBlogs);
             setLoading(false);
        });
        
    }, []);
    
    return ({
        blogs,
        loading,
    })
}

