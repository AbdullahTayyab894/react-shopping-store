import React from 'react'
import { CardMedia } from '@mui/material'
import video from './video.mp4'

const Video = () => {
    return (
        <div style={{
            marginTop:"100px"
        }}>
            <CardMedia
                component='video'
                image={video}
                autoPlay
            />
        </div>
    )
}

export default Video