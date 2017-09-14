import React, {Component} from 'react'


class PostDetails extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <p>
            Faysal Ahmed
          </p>
          <p>
            September 17
          </p>
          <h3>
            Redux Thunk
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur enim obcaecati quasi, quisquam recusandae repudiandae voluptatum?
            Et saepe vitae voluptates? A ducimus maxime mollitia necessitatibus, nihil
            perferendis quis quisquam repudiandae sapiente similique veritatis voluptate.
            Ab aperiam delectus deleniti earum est eum maiores natus nisi nostrum omnis quam,
            rerum similique sint soluta suscipit. Accusantium asperiores aut cum fuga harum illo
            iure nostrum praesentium quaerat quas quisquam quod quos, reprehenderit sapiente voluptatem!
            Adipisci animi aperiam beatae consequatur cum cumque deserunt ea esse est exercitationem harum labore magnam,
            neque numquam officia optio praesentium quam quas quasi quia quod ratione repellendus, saepe totam voluptatibus.
          </p>
          <div>
            <div>
              <span>5</span><span><img src="" alt=""/></span>
            </div>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
          <div className="post-comment">
            <textarea name="" id="" rows="3"/>
            <div>
              {/*select*/}
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, iure!
              </p>
              <div>
                <div className="action-buttons">
                  <button>Like</button><button>Edit</button><button>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


export default PostDetails