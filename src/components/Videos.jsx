import { Box, Grid } from '@mui/material'
import { VideoCard, ChannelCard } from './'

const Videos = ({videos, xs }) => {
  if(!videos?.length) return 'Loading...';
  return (
    <Grid container spacing={2}>
      {videos.map((item, idx) => (
        <Grid item xs={xs || 3} >
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
        </Grid>
      ))}  
    </Grid>
  )
}

export default Videos