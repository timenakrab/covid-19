import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const defaultMenu = [
  {
    url: '/',
    label: 'สถิติรายวัน',
  },
  {
    url: '/province',
    label: 'แยกจังหวัด/ภาค',
  },
];

const NavbarPage = ({ activeUrl }) => {
  return (
    <nav id="navbar-page" className="navbar sticky-top navbar-light bg-light">
      <div>
        {defaultMenu.map(menu => (
          <Link as={menu.url} href={menu.url} key={menu.label}>
            <a className={`navbar-brand${activeUrl === menu.url ? ' active' : ''}`} href={menu.url}>
              {menu.label}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

NavbarPage.defaultProps = {
  activeUrl: '/',
};

NavbarPage.propTypes = {
  activeUrl: PropTypes.string,
};

export default NavbarPage;
