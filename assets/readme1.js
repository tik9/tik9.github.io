'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked number ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

document.querySelectorAll('.like_button_container').forEach(domContainer=>{
    const commentID=parseInt(domContainer.dataset.commentid,10)
ReactDOM.render(e(LikeButton,{commentID:commentID}), domContainer)
})

let data = { count: 0 };
  
 const incrementCount = () => {
    console.log('da',data)
   data.cheesecakes++;
   window.document.getElementById('count')
     .innerHTML = data.cheesecakes;
 };
  
 const incrementButton = window.document.getElementById("increment-button");
 incrementButton.addEventListener('click', incrementCount);
  
