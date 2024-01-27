import FeelsLikeIcon from '../../../assets/icons/thermometer-icon.svg';
import MinTempIcon from '../../../assets/icons/thermometer-minus-icon.svg';
import MaxTempIcon from '../../../assets/icons/thermometer-plus-icon.svg';
import './TodaysWeather.css';

/**
 * @typedef {Object} Props
 * @property {string} icon
 * @property {number} temperature
 * @property {number} feels_like
 * @property {number} min_temperature
 * @property {number} max_temperature
 * @property {string} city_name
 * @property {string} description
 */
/**
 * This component renders a today's weather info.
 * @param {Props} props
 * @returns
 */
const TodaysWeather = (props) => {
    /**
     * Get the current day's with time (AM/PM).
     * @returns {string}
     */
    const getCurrentDayAndTime = () => {
        return new Date().toLocaleDateString('en', {
            weekday: 'long',
            hour: 'numeric',
            hour12: true,
        });
    };

    return (
        <div className="todays-weather-temp-container">
            <div className="title">weather</div>
            <div className="d-flex align-items justify-content temp-and-icon-container">
                <div className="d-flex align-items justify-content icon-wrapper">
                    <img src={props.icon} width="200px" height="200px" />
                </div>
                <div className="d-flex align-items justify-content temperature-wrapper">{props.temperature}&deg;</div>
            </div>
            <div className="d-flex info-container">
                <div className="left-container">
                    <div className="d-flex align-items feels-like-wrapper">
                        <img src={FeelsLikeIcon} alt="feels like" width="24px" height="24px"/>
                        <span>feels like:&nbsp;{props.feels_like}&deg;</span>
                    </div>
                    <div className="d-flex align-items min-temp-wrapper">
                        <img src={MinTempIcon} alt="feels like" width="24px" height="24px"/>
                        <span>min:&nbsp;{props.min_temperature}&deg;</span>
                    </div>
                    <div className="d-flex align-items max-temp-wrapper">
                        <img src={MaxTempIcon} alt="feels like" width="24px" height="24px"/>
                        <span>max:&nbsp;{props.max_temperature}&deg;</span>
                    </div>
                </div>
                <div className="right-container">
                    <div className="city-name-wrapper">{props.city_name}</div>
                    <div className="day-time-wrapper">{getCurrentDayAndTime()}</div>
                    <div className="description-wrapper">{props.description}</div>
                </div>
            </div>
        </div>
    );
};
export default TodaysWeather;
