// Packages
import React from 'react'
import { Link } from 'gatsby'

// Components
import GithubIcon from '../img/github-icon.inline.svg'
import logo from '../img/logo.svg'


// Styles
import styles from './PrimaryNavigation.scss'

const PrimaryNavigation = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'display',
            })
          : this.setState({
              navBarActiveClass: 'hidden',
            })
      }
    )
  }

  render() {
    return (
      <nav className="
        flex
        bg-white
        pt-5
        pb-3
        px-7
        drop-shadow-nav
      ">
        <div
          id="PrimaryNavigation-brand"
          className="basis-2/7"
        >
          <Link
            to="/"
            className="
              font-secondary
              tracking-wider
              text-xl
              text-primary
              hover:text-black
              active:text-black
              focus:text-black
              transition-all
            "
            title="Logo"
          >
            <img src={logo} alt="DPerazzolo Logo" className="h-4 inline-block mr-1" />
            <span className="text-black">D</span>Perazzolo
          </Link>
          {/* Hamburger */}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`basis-4/7 ${this.state.navBarActiveClass}`}
        >
          <div
            className="float-right">
            <a
              className="
                w-7
                inline-block
                group
              "
              href="https://github.com/dfpera/"
              target="_blank"
            >
              <GithubIcon className="
                fill-black
                group-hover:fill-primary
                group-active:fill-primary
                group-focus:fill-primary
                transition-all
              "/>
            </a>
          </div>
          <div className="
            flex
            gap-6
            font-secondary
          ">
            <Link
              className="
                text-primary
                hover:text-black
                active:text-black
                focus:text-black
                transition-all
              "
              to="/resume"
            >
              Resume
            </Link>
            <Link
              className="
                text-primary
                hover:text-black
                active:text-black
                focus:text-black
                transition-all
              "
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="
                text-primary
                hover:text-black
                active:text-black
                focus:text-black
                transition-all
              "
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default PrimaryNavigation
