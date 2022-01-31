// Packages
import React from 'react'
import { Link } from 'gatsby'

// Components
import GithubIcon from '../img/github-icon.inline.svg'
import logo from '../img/logo.svg'

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
        bg-white
        drop-shadow-nav
        flex
        pb-3
        pt-5
        px-7
      ">
        <div
          id="PrimaryNavigation-brand"
          className="basis-2/7"
        >
          <Link
            to="/"
            className="
              text-xl
              tracking-wider
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
                group
                inline-block
                w-7
              "
              href="https://github.com/dfpera/"
              target="_blank"
            >
              <GithubIcon className="
                fill-black
                group-active:fill-primary
                group-focus:fill-primary
                group-hover:fill-primary
                transition-all
              "/>
            </a>
          </div>
          <div className="
            flex
            gap-6
            font-secondary
            text-xl
          ">
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default PrimaryNavigation
