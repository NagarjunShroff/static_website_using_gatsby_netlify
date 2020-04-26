import PropTypes from "prop-types";
import React from "react";
import siteConfig from '../../data/siteConfig';
import Social from './social';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#25303b`,
      marginBottom: `1.45rem`,
      height: '60px',
    }}
  >
    <div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          justifyContent: 'space-between',
          display: 'flex',

        }}
      >
        <h4 style={{ margin: 0 }}>
          <a
            href={siteConfig.githubLink}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </a>
        </h4>
       <Social />   
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
