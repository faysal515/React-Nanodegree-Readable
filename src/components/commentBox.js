import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import moment from 'moment'
import {getReadableDate} from '../utils'
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
        <textarea name="author" className="form-control comment-box" rows="2" placeholder="Write your name .... "/>
      </div>
      <div>
        <textarea name="body" className="form-control comment-box" rows="4" placeholder="Write a comment .... "/>
      </div>
      <div>
        <button type="submit" className="publish-bttn" onClick={e => submit(e)}>Publish</button>
      </div>
    </form>
  )
}


export default CommentBox;