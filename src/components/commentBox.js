import React from 'react';
import serialize from 'form-serialize'
import uuidv1 from 'uuid/v1'

const CommentBox = (props) => {
  const submit = e => {
    e.preventDefault()
    let form = document.querySelector('#example-form');
    let data = serialize(form,{ hash: true })
    props.publishComment({...data, id: uuidv1(),parentId:props.post.id,timestamp: Date.now()})
    form.reset()
  }
  return (
    <form id="example-form">
      <div>
        <input type="text" name="author" className="form-control comment-box" rows="1" placeholder="Write your name .... "/>
      </div>
      <div>
        <textarea name="body" className="form-control comment-box" rows="3" placeholder="Write a comment .... "/>
      </div>
      <div>
        <button type="submit" className="publish-bttn" onClick={e => submit(e)}>Publish</button>
      </div>
    </form>
  )
}


export default CommentBox;