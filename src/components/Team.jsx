import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import UploadIcon from '@mui/icons-material/Upload';
import CommentIcon from '@mui/icons-material/Comment';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});
export const Team = (props) => {

  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 '>
          <h2 className=''>Media</h2>
          <h6 >
          At vero eos et accusamus et iusto ?
          </h6>
       
        </div>
        <div className="col-md-8 col-md-offset-2 ">
            <label className="catBytoon l" style={{color:"white"}}> all   </label>
            <label htmlFor="" className='l'>  Category 01  </label>
            <label htmlFor="" className='l' >   Category 02   </label>
            

          </div>
        <div className='row'> 
   

           {props.data ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className="cardde">

                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                      <div className='contentIcon'>
                      <label className='labaleicon'>
                        <Box l={{ '& > legend': { mt: 2 },}}> <StyledRating
                            max={1}
                              name="customized-color"
                              defaultValue={1}
                              getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                              precision={1}
                              icon={<FavoriteIcon fontSize="inherit" />}
                              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                            />
                          </Box> 
                          </label>
                          <label className='labaleicon'>
                          <CommentIcon color="gray" />

                          </label>
                          <label className='labaleicon margein'>
                          <UploadIcon color="gray" />

                          </label>

                          </div>
                    </div>
                    </div>
                  
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
        
        <div className='row section-title margin-top'>
        <hr/>

    <div className="col-md-5">
<h4>STAY IN TOUCH</h4>
  <div className='social'>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook socialsize'></i>
                    </a>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter socialsize'></i>
                    </a>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube socialsize'></i>
                    </a>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-instagram socialsize'></i>
                    </a>
              </div>
<label className='lab '>Lorem ipsum dolor sit amet. Ut aspernatur reprehenderit in voluptatibus voluptatem aut accusamus dolorum ea deserunt </label>

    </div>
    <div className='hrV col-md-1' ></div>
    <div className="col-md-5">
<h4>NEVER MISS AN EMAIL</h4>
<div className=' form-group'>
<TextField sx={{ m: 1, width: '36ch' }} label="Your E-Mail" id="fullWidth" />
 <button className='TeamButton'>SUBSCRIBE</button>
<label className='lab '>Lorem ipsum dolor sit amet. Ut aspernatur reprehenderit in voluptatibus voluptatem aut accusamus dolorum ea deserunt </label>

        </div>
        </div>
      </div>
      </div>
      </div>

  )
}
