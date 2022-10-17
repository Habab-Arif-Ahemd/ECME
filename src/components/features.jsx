export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col section-title mb-2'>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-4'>
                  {' '}
                  <img src={d.img} alt="" />
                  <h3>{d.title}</h3>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
