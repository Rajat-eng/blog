import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {firestore} from '../firebase';
import styled from 'styled-components';

const BlogHeading=styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`

const PostSubTitle=styled.p`
  font-size: 20px;
`

const Post=styled.div`
  border: 1px solid #e1e1e1;
  padding: 10px 10px;
  border-radius: 5px;
  margin-top: 10px;
  background-color:grey;
  h3{
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-weight: bold;
    color: white;
    &:hover{
      color: red;
    }
  } 
  a{
    text-decoration: none;
  }
  button{
    background-color:yellow;
    font-weight:bold
  }
`

const box=styled.box

function Home() {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    firestore.collection('posts')
    .onSnapshot((snapshot)=>{
        const posts=snapshot.docs.map((doc)=>{
            return{
              id:doc.id,
              ...doc.data(),
            };
        })
        // console.log(posts);
        setPosts(posts);
    })  
  },[])

  const deletePost=(id)=>{
    // const newPostItems=posts.filter(post=>post.id!==id)
    // setPosts(newPostItems);
    firestore.collection('posts').doc(id).delete()
    .then(()=>{
      console.log("Post Deleted")
    })
    .catch((err)=>{
      console.log(err);
    })
  }

    return (
      <div className='home'> 
        <BlogHeading>Blog</BlogHeading>
        <div id='blog-by'>Rajat</div>

        {posts.map((post,index)=>{
          return(
            <Post key={`post-${index}`}> 
              <div style={{display:'flex',justifyContent:'space-between'}}>
              <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <button onClick={()=>deletePost(post.id)}>Delete</button>
              </div>
              <PostSubTitle>{post.subtitle}</PostSubTitle>
              
            </Post>
          )
        })}
        
      </div>
    );
}
export default Home;