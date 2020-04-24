import React from 'react'
// eslint-disable-next-line no-unused-vars
import { CSSProperties } from 'styled-components'

type DotProps = {
  selected?: boolean
}
const Dot: React.FC<DotProps> = ({ selected }) => (
  <span
    style={{
      display: 'inline-block',
      height: '8px',
      width: '8px',
      borderRadius: '4px',
      backgroundColor: 'white',
      margin: '7px 5px',
      opacity: selected ? '1' : '0.3',
      transitionDuration: '300ms'
    }}
  />
)

type IndicatorDotsProps = {
  index: number
  total: number
}

const IndicatorDots: React.FC<IndicatorDotsProps> = ({ index, total }) => {
  const wrapperStyle: CSSProperties = {
    position: 'absolute',
    width: '100%',
    zIndex: 100,
    bottom: '120px',
    textAlign: 'center'
  }

  if (total < 2) {
    // Hide dots when there is only one dot.
    return <div style={wrapperStyle} />
  } else {
    return (
      <div style={wrapperStyle}>
        {Array.apply(null, Array(total)).map((x, i) => {
          return <Dot key={i} selected={index === i} />
        })}
      </div>
    )
  }
}

export default IndicatorDots
