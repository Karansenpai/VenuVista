import React from 'react'
import { Grid } from '@mui/material'
import HotelCard from './HotelCard' 

const hotelsData = [
  {
    id: 1,
    title: 'Hotel 1',
    img: 'https://assets.architecturaldigest.in/photos/63733ec2a2dd6ea6560eb6da/16:9/w_1615,h_908,c_limit/Ditas%20Interior%20Image%20-%201%20(8).png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt quis elit vel varius. Sed finibus risus porttitor, dignissim leo feugiat, eleifend felis. Vestibulum malesuada urna sapien.',
  },
  {
    id: 2,
    title: 'Hotel 2',
    img: 'https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt quis elit vel varius. Sed finibus risus porttitor, dignissim leo feugiat, eleifend felis. Vestibulum malesuada urna sapien.',
  },
  {
    id: 3,
    title: 'Hotel 3',
    img: 'https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt quis elit vel varius. Sed finibus risus porttitor, dignissim leo feugiat, eleifend felis. Vestibulum malesuada urna sapien.',
  },
  {
    id: 4,
    title: 'Hotel 4',
    img: 'https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt quis elit vel varius. Sed finibus risus porttitor, dignissim leo feugiat, eleifend felis. Vestibulum malesuada urna sapien.',
  },
  {
    id: 5,
    title: 'Hotel 5',
    img: 'https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt quis elit vel varius. Sed finibus risus porttitor, dignissim leo feugiat, eleifend felis. Vestibulum malesuada urna sapien.',
  },
  {
    id: 6,
    title: 'Hotel 6',
    img: 'https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt quis elit vel varius. Sed finibus risus porttitor, dignissim leo feugiat, eleifend felis. Vestibulum malesuada urna sapien.',
  },
  {
    id: 7,
    title: 'Hotel 7',
    img: 'https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt quis elit vel varius. Sed finibus risus porttitor, dignissim leo feugiat, eleifend felis. Vestibulum malesuada urna sapien.',
  },
  {
    id: 8,
    title: 'Hotel 8',
    img: 'https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt quis elit vel varius. Sed finibus risus porttitor, dignissim leo feugiat, eleifend felis. Vestibulum malesuada urna sapien.',
  },
  {
    id: 9,
    title: 'Hotel 9',
    img: 'https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt quis elit vel varius. Sed finibus risus porttitor, dignissim leo feugiat, eleifend felis. Vestibulum malesuada urna sapien.',
  },
];

const MasterCard = () => {
  return ( 
  <div style={{marginTop: '16px', marginBottom: '16px'}}>
    <Grid container spacing={3} >
      {hotelsData.map((hotel) => (
        <Grid item xs={12} sm={6} md={4} key={hotel.id} display="flex" direction="column" alignItems="center">
          <HotelCard title={hotel.title} img={hotel.img} description={hotel.description} id={hotel.id}/>
        </Grid>
      ))}
    </Grid>
  </div>
  );
};

export default MasterCard
