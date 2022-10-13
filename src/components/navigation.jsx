export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Home Page </span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' style={{color:"#BB7222" }} href='#page-top'>
ecme          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Shop
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
              YOUR CONCERN
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
              EFFECTIVENESS
                            </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
              INNOVATIONS
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
              OUR STORY
              </a>
            </li>
            <li>
              <a>
              <button href='#team' className='headerButton' style={{}}>
              JOIN OUR COMMUNITY
              </button>
              </a>
          
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
              <button type="button" class="btn btn-outline-primary"> BUY NOW</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
