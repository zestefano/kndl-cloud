import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import UploadSong from '../CreateSong';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='pro'>
        <ProfileButton user={sessionUser} />
        <UploadSong />
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className='sign' to="/signup">sign up</NavLink>
      </>
    );
  }

  return (
    <div className='nav'>
      <ul>
        <li className='li'>
          <NavLink className='home' exact to="/">home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;