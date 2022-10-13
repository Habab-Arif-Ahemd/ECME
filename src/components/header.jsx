export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
            
              <div className='col-xs-6 col-md-6  intro-text'>
                <p className="ps" style={{color:"#BB7222" }} >
                CELEBRATE YOUR ESSENCE
                </p>
                <span className="span">
                  {props.data ? props.data.title : 'Loading'}
                  <span> </span>
                </span>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                {/* <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '} */}
              </div>

              <div className="col-2 col-xs-4 col-md-4">
            {" "}
              
            <img src="img/homepagewomern.png" className="img-responsive-Header" alt="" />{" "}


          </div>
          <div className="col-xs-2 col-md-1">
          <img src="img/MATURE GLAM OH GLAM.png" className="img--GLAM" alt="" />{" "}

            {" "}
          </div>
          
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
