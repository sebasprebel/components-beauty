import React from 'react'
// import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

const CSS_HANDLES = ['header-brands__container']

const alphabet = String.fromCharCode(...Array(123).keys())
  .slice(97)
  .toUpperCase()
  .split('')

const HeaderBrands = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles['header-brands__container']}`}>
      {alphabet.map((letter, i) => {
        return (
          <a key={`alphabet_${i}`} href={`#${letter}`}>
            {letter}
          </a>
        )
      })}
    </div>
  )
}

export default HeaderBrands
