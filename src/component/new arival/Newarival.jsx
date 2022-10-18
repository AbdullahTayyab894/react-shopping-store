import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const images = [
    "images/mens/shoe1.png",
    "images/mens/shoe2.png",
    "images/women/women1.png",
    "images/women/women2.png",
    "images/kids/kid1.png",
    "images/kids/kid2.png",
];

export default function WovenImageList() {
    return (
        <div style={{
            margin:"50px",
        }}>
            <ImageList sx={{ width: "100%", height: 500 }} variant="woven" cols={3} gap={8}>
                {images.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item}?w=161&fit=crop&auto=format`}
                            srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}
