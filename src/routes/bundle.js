/**
 * content:路由懒加载包裹组件
 * description:在路由未跳转前可以让未路由区未null从而优化性能
 */
import React from 'react'
import PropTypes from 'prop-types'

class Bundle extends React.Component {
  static propTypes = {
    load: PropTypes.func,
    children: PropTypes.func
  }

  state = {
    mod: null
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    })
    props.load((mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}

export default Bundle
