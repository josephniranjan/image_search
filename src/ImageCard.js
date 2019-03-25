import  React from 'react';

class ImageCard extends React.Component{
render(){
   const {descripton, urls} = this.props.image;
   console.log(this.props.image);
   return( 
     <div>
    <div><img alt ={descripton} src= {urls.regular} /></div>
    </div>
    )
}
}

export default ImageCard;