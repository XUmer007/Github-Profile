// CSS
import './style.css';

// Icons
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Fragment } from 'react';

export default function Footer() {
  return (
    <Fragment>
      <div className='divider'></div>
      <footer className='mt-30 mb-50'>
        <div className='content'>
          <div className='legal-meta'>
            <a className='logo-link' href='/'>
              <Logo />
            </a>
            <span className='text-gray text-sm ml-10'>© 2022 GitHub, Inc.</span>
          </div>
          <div className='nav-links'>
            <a className='blue-link' href='/'>
              Terms
            </a>
            <a className='blue-link' href='/'>
              Privacy
            </a>
            <a className='blue-link' href='/'>
              Security
            </a>
            <a className='blue-link' href='/'>
              Status
            </a>
            <a className='blue-link' href='/'>
              Docs
            </a>
            <a className='blue-link' href='/'>
              Contact GitHub
            </a>
            <a className='blue-link' href='/'>
              Pricing
            </a>
            <a className='blue-link' href='/'>
              API
            </a>
            <a className='blue-link' href='/'>
              Training
            </a>
            <a className='blue-link' href='/'>
              Blog
            </a>
            <a className='blue-link' href='/'>
              About
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
