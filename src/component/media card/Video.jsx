import React from 'react'
import { CardMedia } from '@mui/material'
import video from './video.mp4'

const Video = () => {
    return (
        <div>
            <CardMedia
                component='video'
                image={video}
                autoPlay
            />
        </div>
    )
}

export default Video