import React from 'react';
import { Link } from 'react-router-dom';
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
            <a href='https://github.com/zestefano'><img className='gitimg' src='https://res.cloudinary.com/zaf/image/upload/v1639385807/Screen_Shot_2021-12-13_at_3.56.22_AM_a552hm.png' /></a>
            <NavLink className='home' exact to="/"><img className='kndl' src='https://res.cloudinary.com/zaf/image/upload/v1639380392/Screen_Shot_2021-12-13_at_2.26.02_AM_nbx4go.png' /></NavLink>
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