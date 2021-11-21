import dayjs from 'dayjs';
import React from 'react';
import { useState, useEffect } from 'react';

function getRemainingTimeUntilMsTimestamp(timestampMs) {
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();
    if (timestampDayjs.isBefore(nowDayjs)) {
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        }
    }
    return {
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs),
        days: getRemainingDays(nowDayjs, timestampDayjs)
    };
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2);
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2);
}

function getRemainingHours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
}

function getRemainingDays(nowDayjs, timestampDayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days.toString();
}

function padWithZeros(number, minLength) {
    const numberString = number.toString();
    if (numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString;
}




const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CTimer = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div classNameName="" style={{marginLeft:'5%'}}>

            <div className="row pricing-tables">

                <div className="col-md-2 col-sm-2 col-xs-12">
                    <div className="pricing-table highlight-plan">
                        <div className="plan-name">
                            <h3>Days</h3>
                        </div>
                        <div className="plan-price">
                            <div className="price-value">{remainingTime.days}</div>

                        </div>


                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12">
                    <div className="pricing-table highlight-plan">
                        <div className="plan-name">
                            <h3>Hours</h3>
                        </div>
                        <div className="plan-price">
                            <div className="price-value">{remainingTime.hours}</div>

                        </div>


                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12" >
                    <div className="pricing-table highlight-plan" >
                        <div className="plan-name">
                            <h3>Minutes</h3>
                        </div>
                        <div className="plan-price" >
                            <div className="price-value">{remainingTime.minutes}</div>

                        </div>


                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12" >
                    <div className="pricing-table highlight-plan">
                        <div className="plan-name">
                            <h3>Seconds</h3>
                        </div>
                        <div className="plan-price">
                            <div className="price-value">{remainingTime.seconds}</div>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}

function Timer() {
    return (
        <div>
            <CTimer countdownTimestampMs={10000000} />
        </div>
    );

}

export default Timer;