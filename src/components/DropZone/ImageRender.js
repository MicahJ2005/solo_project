import React, { Component } from 'react'
import { connect } from 'react-redux';
// import Dropzone from 'react-dropzone'
// import request from 'superagent';
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

// const CLOUDINARY_UPLOAD_PRESET = 'ullpa5il';
// const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dugsgmfj6/image/upload';

class ImageRender extends Component {
//     state = { videos: [] };

//   getVideos() {
//     axios.get('http://res.cloudinary.com/dugsgmfj6/image/list/miniflix.json')
//           .then(res => {
//             console.log(res.data.resources);
//             this.setState({ videos: res.data.resources});
//     });
//   }

//   componentDidMount() {
//     this.getVideos();
//   }


    
//   render () {
      
//     return (
//       <div>
//        const { videos }  = this.state;

// return (
//   <div>
//     <Nav />
//     <h3 className="text-center"> Latest Videos on Miniflix </h3>
//     <hr/>

//     <div className="col-sm-12">
//       <CloudinaryContext cloudName="<cloud-name>">
//         { videos.map((data, index) => (
//             <div className="col-sm-4" key={index}>
//               <div className="embed-responsive embed-responsive-4by3">
//                 <Video publicId={data.public_id} width="300" height="300" controls></Video>
//               </div>
//               <div> Created at {data.created_at} </div>

//             </div>
//           ))
//         }
//       </CloudinaryContext>
//     </div>
    
//   </div>


     

//     </div> 
//       </div>
//     )
//   }
}

export default connect() (ImageRender);
