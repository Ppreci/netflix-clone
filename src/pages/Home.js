import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../request'

const Home = () => {
  return (
    <>
    <Main />
    <Row title='Popular' fetchURL= {request.requestPopular} rowID= {1}/>
    <Row title='Top Rated' fetchURL= {request.requestTopRated} rowID= {2} />
    <Row title='Upcoming' fetchURL= {request.requestUpcoming} rowID= {3}/>
    </>
  )
}

export default Home