import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
        
        <div className='col-md-3  contact-info'>
            <div className='contact-item'>
              <h3>Contact </h3>
              
              <i className='fa fa-map-marker'></i>
Email Adress              
            </div>
            <div className='contact-item'>
              <p>
                  <i className='fa fa-phone'></i>contact Telephone
              </p>
            </div>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-md-offset-1'>
            <div className='contact-item'>
              <div className='section-title'>
                <img src="img/footer.png" alt="" />
                
              </div>
             
              <span style={{textAlign: "center" ,}}>
                Lorem ipsum dolor sit amet. Ut aspernatur reprehenderit in voluptatibus voluptatem aut accusamus dolorum ea deserunt 
                </span>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3 style={{  textAlign: "right"}}> USEFULL LINKS</h3>
              <ul className='contact-item li'> <li>
                shop
                </li>
                <li>Our Promise
                  </li>
                  <li> Our inspiration </li>
                  <li> We are Unique </li>
                  <li> ESMW World </li>
                  <li> Loyaltiy </li>
                  <li>  Blogs</li>
                  <li>  Faqs</li>

                  </ul>
        
            </div>
            
          
          </div>


          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                   <span>PRIVACY POLICY</span>
                  </li>
                   <li><span> RETURN POLICY</span></li>
                   <li><span> REFUND POLICY</span></li>
                   <li> <span>DESIGNED AND MANAGED BY PRISM</span></li>
                  <li><span>TERMS AND CONDITIONS</span></li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
