// Packages
import React from 'react'

// Styles
import * as styles from './Banner.module.css'

const Banner = (props) => {
  return (
    <div className={`flex ${styles.banner}`} data-parallax="scroll" data-img-src="img/Background.jpg">
      <div className='basis-2/7' />
      <div className={`basis-4/7 ${styles.intro}`}>
        <p>portfolio:~ daniele$ hostname -s</p>
        <h1>Daniele-Perazzolo</h1>
        <p>portfolio:~ daniele$ ioreg -b -d 3</p>
        <p>+-o Root &lt;class IOregistry&gt;</p>
        <p>&nbsp;&nbsp;+-o<span> Web_Development </span>&lt;class&gt;</p>
        <p>&nbsp;&nbsp;+-o<span> Android-iOS_Development </span>&lt;class&gt;</p>
        <p>&nbsp;&nbsp;+-o<span> UX_Design </span>&lt;class&gt;</p>
        <p className={styles.cursor}>portfolio:~ daniele$</p>
      </div>
    </div>
  )
}

export default Banner
