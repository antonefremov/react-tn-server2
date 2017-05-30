import React, { DOM } from 'react';
import _ from 'lodash';
import BlogItem from './../ui/BlogItem';

const blogs = [
  {
    imageProps : {
      src: 'http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg',
      width: '260px',
      height: '160px',
      altText: 'A cat picture'
    },
    spanText : {
      text: 'A kitten says Hello'
    }
 },
 {
   imageProps : {
      src: 'https://www.cdc.gov/features/dog-bite-prevention/dog-bite-prevention_456px.jpg',
      width: '270px',
      height: '180px',
      altText: 'A dog picture'
    },
    spanText : {
      text: 'A doggy says Bye-bye'
    }
 },
 {
   imageProps : {
      src: 'https://ih1.redbubble.net/image.77561382.6850/raf,750x1000,075,t,101010:01c5ca27c6.u2.jpg',
      width: '270px',
      height: '320px',
      altText: 'Terminator picture'
    },
    spanText : {
      text: "Arnie says he'd be back"
    }
 }
]

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs };
  }

  render() {
    const { blogs } = this.state;
    return React.createElement(BlogList, { blogs });
  }
}

const BlogList = ({ blogs }) => {
  return DOM.ul(
      null,
      _.map(
        blogs,
        (blog, key) => (
          <BlogItem key={key} imageProps={blog.imageProps} spanText={blog.spanText}/>
        )
      )
    )
}

export default BlogContainer;
