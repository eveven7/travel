import { useState } from 'react'

import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import { Container, Row, Col } from 'react-bootstrap'

import { BsSearch } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { BiDownArrowAlt } from 'react-icons/bi'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import { imageGallery } from '../data'


const Home = () => {

  const [show, setShow] = useState(9)

  const loadMore = () => {
    setShow((prevValue) => prevValue + 3)
  }


  // Masonry instagram Image Gallery
  const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }));


  return (
    <div className='bg-light'>

      <header className='bg-img'>
        <code>
          <h1 className='text-white text-center' style={{ paddingTop: '235px', textShadow: '1px 2px #000' }}>
            Go wherever
            <Typewriter
              words={[' your heart desires',]}
              loop={50}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </code>

        <div className="col-md-6 m-auto mt-5 pt-3">
          <small className="form-text text-white">Search our trips and tours</small>
          <div className="input-group mb-2 ">

            <input type="text" className="form-control py-2 " id="inlineFormInputGroup" placeholder="Search..." />

            <div className="input-group-prepend ">
              <button className="btn btn-outline-success rounded-right py-2   mx-2">
                Search
              </button>
            </div>
          </div>
        </div>

      </header>

      <Container className='text-muted'>
        <h1 style={{ fontFamily: 'Open Sans' }} className='display-5 py-3 text-center'>Popular tours</h1>
        <Row className='m-auto'>
          <div className='col-md-4 mb-2'>
            <Link to="/">
              <img src="https://images.unsplash.com/photo-1583498968875-eae945a1f4d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" className='img-fluid images_shadow' alt="" />
            </Link>
            <div class="px-6 py-4">
              <a href="#" class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Amsterdam, Amsterdam, Pays-Bas</a>
              <p class="text-gray-500 text-sm">
                Body of wate under white sky
              </p>
              <div class="px-6 py-4 flex flex-row items-center">
                <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" /></svg>
                  <span class="ml-1">6 mins ago</span></span>
              </div>
            </div>

          </div>
          <div className='col-md-4 mb-2'>
            <Link to="/">
              <img src="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className='img-fluid images_shadow' alt="" />
            </Link>
            <div class="px-6 py-4">
              <a href="#" class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best View in Newyork City</a>
              <p class="text-gray-500 text-sm">
                The city that never sleeps
              </p>
              <div class="px-6 py-4 flex flex-row items-center">
                <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" /></svg>
                  <span class="ml-1">2 mins ago</span></span>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-2'>
            <Link to="/">
              <img src="https://images.unsplash.com/photo-1541777490254-a50eb9045486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className='img-fluid images_shadow' alt="" />
            </Link>
            <div class="px-6 py-4">
              <a href="#" class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Piazza Pretoria, Palermo, Italy</a>
              <p class="text-gray-500 text-sm">
                Amazing
              </p>
              <div class="px-6 py-4 flex flex-row items-center">
                <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" /></svg>
                  <span class="ml-1">10 mins ago</span></span>
              </div>
            </div>
          </div>
        </Row>
      </Container>










      <section>
        <Container className='text-muted ms-auto'>
          <h1 style={{ fontFamily: 'Open Sans' }} className='display-5 py-3 text-center'>Where would you like to go?</h1>
          <Row className='mb-4 m-auto'>
            <div className='col-md-2'></div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='img-fluid images_shadow' alt="" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=908&q=80" className='img-fluid images_shadow' alt="countries_widget4.jpg" />
              </Link>
            </div>
            <div className='col-md-2'></div>
          </Row>

          <Row className='mb-4 m-auto'>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" className='img-fluid images_shadow' alt="" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="https://images.unsplash.com/photo-1523212307269-b5645414b985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='img-fluid images_shadow' alt="" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to='/'>
                <img src="https://images.unsplash.com/photo-1496531693211-31c5234a5ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='img-fluid images_shadow' alt="" />
              </Link>
            </div>
          </Row>
          <Row className='m-auto'>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='img-fluid images_shadow' alt="countries_widget12.jpg" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="https://images.unsplash.com/photo-1612810436541-336b73fbcf9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" className='img-fluid images_shadow' alt="" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" className='img-fluid images_shadow' alt="" />
              </Link>
            </div>
            <button className='btn btn-outline-success rounded-pill col-md-4 my-4 m-auto'>Explore all our tours</button>
          </Row>
          <hr className='w-25 hr m-auto mt-4' />
        </Container>
      </section>


      <section>
        <Container className='text-muted'>
          <h1 style={{ fontFamily: 'Open Sans' }} className='display-5 py-3 text-center'>Explore more</h1>
          <Row className='m-auto'>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" className='img-fluid images_shadow' alt="" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" className='img-fluid images_shadow' alt="" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="https://images.unsplash.com/photo-1490921045028-16ab0b47b757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" className='img-fluid images_shadow' alt="" />
              </Link>
            </div>
          </Row>
        </Container>
      </section>


      <section>
        <Container className='my-4'>
          <h1 style={{ fontFamily: 'Open Sans' }} className='display-5 mt-5 mb-3 text-center'>#tours</h1>
          <Row>
            <Box sx={{ width: 1200, minHeight: 829 }} className='m-auto'>
              <Masonry columns={3} spacing={2}>
                {imageGallery.slice(0, show).map((item, index) => (
                  <div key={index}>
                    <a href="https://www.instagram.com/" className='text-success' target="_blank">
                      <Label><FaInstagram className='text-success' /></Label>
                      <img
                        src={`${item.img}?w=162&auto=format`}
                        srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        className='images_shadow'
                        style={{
                          borderBottomLeftRadius: 4,
                          borderBottomRightRadius: 4,
                          display: 'block',
                          width: '100%',
                        }}
                      />
                    </a>
                  </div>
                ))}
              </Masonry>
            </Box>
            <button className="btn btn-outline-success col-sm-3 m-auto" onClick={loadMore}>
              See More
              <BiDownArrowAlt className="ml-1" />
            </button>
          </Row>
        </Container>
      </section>


    </div>
  )
}

export default Home
