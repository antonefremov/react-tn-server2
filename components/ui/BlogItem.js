import React, { DOM } from 'react';
import TextBox from './../ui/TextBox';
import Image from './../ui/Image';

function BlogItem(props) {
  const {imageProps, spanText} = props
  return <div>
      <Image src={imageProps.src} width={imageProps.width} height={imageProps.height} alt={imageProps.altText}/>
      <br/>
      <TextBox text={spanText.text}/>
    </div>
}

export default BlogItem;
