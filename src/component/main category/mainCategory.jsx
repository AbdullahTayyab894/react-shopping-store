import React,{useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ArivalData from './CategoryApi';
import CategoryApi from './CategoryApi'
import {Link} from 'react-router-dom'

export default function WovenImageList() {
    const [myCetegoryData, setMyCategoryData] = useState(CategoryApi);

    return (
        <div style={{
            margin: "100px 30px 0px 30px",
        }}>
            cursor: "pointer"
            <ImageList sx={{
                width: "100%",
                height: 850,
                cursor: "pointer",
            }} variant="masonry" cols={2} gap={8}>
                {ArivalData.map((item) => (
                    <ImageListItem key={item.img} className="img-hover-zoom img-hover-zoom--point-zoom">
                        <Link to={`/detail${item.id}`} style={{ textDecoration: "none" }}>
                            <img
                                src={`${item.img}?w=161&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}

                                style={{
                                    border: "1px solid #F0E4CE",
                                    height: "400px"
                                }} />
                        </Link>
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}
