import React from 'react'
import { CardMedia } from '@mui/material'
import video from './video.mp4'

const Video = () => {
    return (
        <div style={{
            marginBottom:"20px"
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