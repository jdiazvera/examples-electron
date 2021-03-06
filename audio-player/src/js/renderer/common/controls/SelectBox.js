import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component for select-box control.
 */
export default class SelectBox extends React.Component {
  /**
   * Initialize instance.
   *
   * @param {Object} props Properties.
   */
  constructor (props) {
    super(props)

    this._onChangeBind = this._onChange.bind(this)
  }

  /**
   * Render for component.
   *
   * @return {ReactElement} Rendering data.
   */
  render () {
    const selectedValue = (typeof this.props.selectedValue === 'number' ? this.props.selectedValue : 0)
    return (
      <div className="selectbox">
        <div className="selectbox__dropdown">
          <select
            className="selectbox__dropdown__select"
            value={selectedValue}
            onChange={this._onChangeBind}>
            {this._renderOptions()}
          </select>
        </div>
      </div>
    )
  }

  /**
   * Render for options in select-box.
   *
   * @return {Array.<ReactElement>} Rendering data.
   */
  _renderOptions () {
    return this.props.options.map((option, index) => {
      return (<option key={index} value={index}>{option}</option>)
    })
  }

  /**
   * Occurs when the select-box is changed.
   *
   * @param {Event} ev Event data.
   */
  _onChange (ev) {
    if (this.props.onChange) {
      this.props.onChange(Number(ev.target.value))
    }
  }
}

SelectBox.propTypes = {
  selectedValue: PropTypes.number,
  options: PropTypes.array,
  onChange: PropTypes.func
}
