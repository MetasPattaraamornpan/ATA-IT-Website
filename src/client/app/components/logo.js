import React, { Component, PureComponent } from 'react'
import { Motion } from 'data-driven-motion'

const WOBBLY_SPRING = { stiffness: 420, damping: 90 }

let DATA = []
for (let i = 0; i < 2; i++) {
  DATA[i] = {
    id: i + 1 + '',
    url: `./app/components/images/banner_label0${i}.png`
  }
}

class Slider extends PureComponent {
  state = {
    slide: 0
  };

  componentDidMount () {
    this.interval = window.setInterval(
      () => {
        this.setState(prev => ({ slide: (prev.slide + 1) % DATA.length }))
      },
      2000
    )
  }

  componentWillUnmount () {
    window.clearInterval(this.interval)
  }

  render () {
    return (
      <div
        style={{ overflow: 'hidden', height: '100%', width: '100%' }}
        onClick={() =>
          this.setState(prev => ({ slide: (prev.slide + 1) % DATA.length }))}
      >
        <Slides data={DATA} slide={this.state.slide} />
      </div>
    )
  }
}

class Slides extends Component {
  render () {
    return (
      <Motion
        data={this.props.data}
        component={
          <ul
            style={{
              position: 'relative',
              listStyle: 'none',
              height: '100%',
              width: '100%',
              margin: 0,
              padding: 0
            }}
          />
        }
        getKey={(data, i) => data.id}
        onComponentMount={(data, i) => {
          return {
            opacity: 1,
            x: this.props.slide * -100,
            textX: this.props.slide * -100
          }
        }}
        onRender={(data, i, spring) => {
          return {
            opacity: spring(1),
            x: spring(this.props.slide * -100, WOBBLY_SPRING),
            textX: spring(this.props.slide * -100, {
              stiffness: 200,
              damping: 80
            })
          }
        }}
        render={[this.renderSlide]}
      />
    )
  }

  renderSlide = (key, data, style, dataIndex, layerIndex) => {
    return (
      <li
        key={key + layerIndex}
        style={{
          position: 'absolute',
          top: 0,
          left: `calc(${dataIndex} * 100%)`,
          height: '100%',
          width: '100%',
          margin: 0,
          transform: `translate3d(${style.x}%, ${0}px, 0px)`
        }}
      >
        <img
          src={data.url}
          style={{
            height: '100%',
            width: '100%'
          }}
        />
      </li>
    )
  };
}

export default () => {
  return (
    <div>
      <Slider />
    </div>
  )
}
