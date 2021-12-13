import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import UploadSong from '../CreateSong';
import SignupFormModal from '../SignupFormPage/signupModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <li>
          <ProfileButton user={sessionUser} />
        </li>
        <li>
          <UploadSong className='upload' />
        </li>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <li>
          <LoginFormModal />
        </li>
        <li>
          {/* <NavLink to="/signup">sign up</NavLink>
           */}
           <SignupFormModal />
        </li>
      </>
    );
  }

  return (
    <div className='navBarContainer'>
      <div className='navBarContent'>
        <ul className='narBarLeft'>
          <li>
            <NavLink className='home' exact to="/">home</NavLink>
          </li>
        </ul>
        <ul className='navBarRight'>
          {isLoaded && sessionLinks} 
        </ul>
      </div>
    </div>
  );
}

export default Navigation;