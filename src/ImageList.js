import  React from 'react';
import ImageCard from './ImageCard';

const ImageList = props =>{
    const newimages =  props.images.map((image) =>{
        return <ImageCard key= {image.id} image = {image} />;   
     })
  return(
   <div>
  <div class="row">
  <div class="col-md-4">
  <div class="thumbnail">
  {newimages}
  </div>
  </div>
  </div>
 </div>
  ) 
    }

export default ImageList;