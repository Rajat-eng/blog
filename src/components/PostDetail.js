import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import {firestore} from '../firebase';
import styled from 'styled-components';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';


function PostDetail(){
    const [post,setPost]=useState('');
    const[updateText,setUpdateText]=useState('');
    const [isUpdating,setIsUpdating]=useState('');
    const{postId}=useParams();

    useEffect(()=>{
        firestore.collection('posts').doc(postId)
        .onSnapshot((snapshot)=>{
            const post=snapshot.data()
            setPost(post);
        })
    },[postId])

    const renderUpdateForm=()=>{
        return(
            <form onSubmit={(e)=>{updatePost(e)}}>
                <textarea style={style.textarea}  type="text" onChange={e=>{setUpdateText(e.target.value)}} value={updateText} />
                <button>Update</button>
            </form>
        );   
    }

    const updatePost=(e)=>{
        e.preventDefault();
        firestore.collection('posts').doc(postId).update({
            content:updateText
        })
        .then(()=>{
            setUpdateText('');
            setIsUpdating('');
            console.log('post updated')
        })
        .catch(()=>{
            console.log('post cannot be updated')
        })
    }

    return (
        <div className='post-detail'> 
         <h1>{post.title}</h1>
        {
        postId===isUpdating? 
           renderUpdateForm():
        <>
        <h4>Content</h4>
        <p style={style.p}>{post.content}</p>
        <button onClick={()=>setIsUpdating(postId)}>Edit</button>
        </>
        } 
        </div>     
    );
}

const style={
    textarea:{
        width:'100%',padding:10,fontSize:20
    },
    p:{
        border:'1px solid black',
        padding:10
    }
}
    

export default PostDetail;