import React, { Component, PropTypes } from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import classnames from 'classnames'

class DatePickerGroup extends Component {
  render () {
    const { field, value, placeholder, onChange, error, disabled, minDate, maxDate } = this.props

    return (
      <div className={classnames('form-group', { 'has-error': error })}>
        {error && <small className='help-block text-right'>{error}</small>}
        <DatePicker
          id='birthday-datepicker'
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          minDate={minDate}
          maxDate={maxDate} />
          <span className='statcard-desc'>{placeholder}</span>
      </div>
    )
  }
}

DatePickerGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string
}

export default DatePickerGroup
