import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
       <div className='section-titlee mb-5'>
          <h2 style={{color:"#BB7222"   ,textAlign: "left"}}> Our exceptional Ingredients </h2>
        
        </div>
      <div className='container'>
       
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
      <div className='section-foteer'>
<button className="button"> Viwe More</button>        
        </div>
    </div>
  )
}
