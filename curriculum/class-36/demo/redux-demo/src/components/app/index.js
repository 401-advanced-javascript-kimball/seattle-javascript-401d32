import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Name from '../name';
import Changer from '../changer';

export default props => {
  return (
    <>
      <Header title="Cool App" />
      <Name />
      <Changer />
      <Footer>
        <a href="">Cool footer link that doesn't work</a>
      </Footer>
    </>
  )
}