import React, { useState } from 'react';
import './style/SaveCachePost.scss';

function SaveCachePost(props) {
  const { useProfile } = props;

  return (
    <div className='save-cache-component'>
        <div className='content-text'>Draf in <b>{useProfile?.userName}</b></div>
    </div>
  )
}

export default SaveCachePost