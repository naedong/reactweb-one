import React from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './DateDropdown.scss';
import 'react-calendar/dist/Calendar.css'; 
import { FcCalendar, FcInternal } from 'react-icons/fc';
import { height } from '@mui/system';

export default class DateDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('MM / DD / YYYY'),
      isToggleOn: false,
    };
    this.onClickDay = this.onClickDay.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  onClickDay(e) {
    this.setState((prevState) => ({
      date: moment(e).format('MM / DD / YYYY'),
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const { date, isToggleOn } = this.state;
    const { dropWidth, disabled } = this.props;
    const iconStyle = {
      backgroundImage: 'url(/assets/images/component/1.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    const arrowStyle = {
      backgroundImage: 'url(/assets/images/component/2.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div className='date-calender'>
        {disabled ? (
          <div className="date-dropdown disabled">
            <button
              type="button"
              className="date-dropdown__button"
              style={{ width: dropWidth }}
              onClick={this.handleClick}
            >
              <div style={iconStyle} className="date-dropdown__icon">
                <span className="a11y"><FcCalendar/> </span>
              </div>
              <span className="date-dropdown__data">{date}</span>
              <div style={arrowStyle} className="date-dropdown__arrow">
                <span className="a11y">아래 화살표 아이콘</span>
              </div>
            </button>
          </div>
        ) : (
          <div className="date-dropdown">
            <button
              type="button"
              className={
                isToggleOn
                  ? 'date-dropdown__button active'
                  : 'date-dropdown__button'
              }
              style={{ width: dropWidth }}
              onClick={this.handleClick}
            >
              <div style={iconStyle} className="date-dropdown__icon">
                  <span className="a11y"><FcCalendar style={{
                    width: '100%',
                    height : '100%'
                }}/></span>
              </div>
              <span className="date-dropdown__data">{date}</span>
              <div style={arrowStyle} className="date-dropdown__arrow">
                <span className="a11y"><FcInternal/> </span>
              </div>
            </button>
            {isToggleOn ? (
              <Calendar
                onClickDay={this.onClickDay}
                calendarType="US"
                locale="KO"
                showNeighboringMonth={false}
              />
            ) : null}
          </div>
        )}
      </div>
    );
  }
}