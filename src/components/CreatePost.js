import {firestore} from '../firebase'
import {useFormInput} from '../hooks';
import styled from 'styled-components';


const StyledButton=styled.button`
height: 33px;
  background: #4caf50;
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
`


function CreatePost() {
  const title=useFormInput('');
  const subtitle=useFormInput('');
  const content=useFormInput('');



 function handleSubmit(e){
    e.preventDefault();
    firestore.collection('posts').add({
      title:title.value,
      subtitle:subtitle.value,
      content:content.value,
      createdAt:new Date()
    })
 }
    return (
      <div className='create-post'> 
      <h1>CreatePost </h1>
      <form onSubmit={handleSubmit}>

        <div className="form-field">
          <label>Title</label>
          <input {...title}></input>
        </div>

        <div className="form-field">
          <label>SubTitle</label>
          <input {...subtitle}></input>
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <StyledButton>CreatePost</StyledButton>

      </form>
      </div>
    );
}
export default CreatePost;