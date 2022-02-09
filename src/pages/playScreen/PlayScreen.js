import React from 'react';
import Sidebar from 'components/sidebar/Sidebar';
import Midbar from 'components/midbar/Midbar';
import './PlayScreen.scss';

function PlayScreen() {
  return (
    <>
        <div className='play-screen'>
          <Midbar />
          <Sidebar />
        </div>
    </>
  )
}

export default PlayScreen