// Packages
import React from 'react'
import { Link } from 'gatsby'

// Components

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='
        flex
        py-10
      '>
        <div className='basis-2/7' />
        <div className='basis-4/7'>
          <Link to='#'>
            Style Guide (TODO - StoryboardJS)
          </Link>
          <span> | </span>
          <a
            href='https://www.linkedin.com/in/dfpera/'
            target='_blank'
          >
            LinkedIn
          </a>
          <span> | </span>
          <a
            href='https://github.com/dfpera/portfolio-gatsby-frontend'
            target='_blank'
          >
            Repo (Front End)
          </a>
          <span> | </span>
          <a
            href='https://github.com/dfpera/portfolio-sanity-backend'
            target='_blank'
          >
            Repo (Content CMS)
          </a>
          <p>Daniele Perazzolo &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

export default Footer
