import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
// import { render } from 'react-dom';
// import axios from 'axios';

class ImageRender extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         gallery: []
    //     }
    // }
    // componentDidMount(){
    //     axios.get('http://res.cloudinary.com/christekh/image/list/xmas.json')
    //         .then(res => {
    //             console.log( 'res.data',res.data.resources);
    //             this.setState({gallery: res.data.resources});
    //         });
    // }
    
    render(){
        return (
            <div className="main">
                <h1>Galleria</h1>
                <div className="gallery">

                {/* <img src="../"/> */}
                    {/* <CloudinaryContext cloudName="christekh">
                        {
                            this.state.gallery.map(data => {
                                return (
                                    <div className="responsive" key={data.public_id}>
                                        <div className="img">
                                            <a target="_blank" rel="noopener noreferrer" href={`http://res.cloudinary.com/christekh/image/upload/${data.public_id}.jpg`}>
                                                <Image publicId={data.public_id}>
                                                <Transformation
                                                        crop="scale"
                                                        width="300"
                                                        height="200"
                                                        dpr="auto"
                                                        responsive_placeholder="blank"
                                                    />
                                                </Image>
                                            </a>
                                            <div className="desc">Created at {data.created_at}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext> */}
                    <div className="clearfix"></div>
                </div>
            </div>

        );
    }
}

export default connect()(ImageRender);
