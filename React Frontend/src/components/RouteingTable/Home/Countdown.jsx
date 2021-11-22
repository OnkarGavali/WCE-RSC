import React, { Component } from 'react'


class CountDown extends Component {
    constructor(props) {
        super(props)
        this.count = this.count.bind(this)
        this.state = {
            days: 0,
            minutes: 0,
            hours: 0,
            secounds: 0,
            time_up: ""
        }
        this.x = null
        this.deadline = null
    }
    count() {
        var now = new Date().getTime();
        var t = this.deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        this.setState({ days, minutes, hours, seconds })
        if (t < 0) {
            clearInterval(this.x);
            this.setState({ days: 0, minutes: 0, hours: 0, seconds: 0, time_up: "TIME IS UP" })
        }
    }
    componentDidMount() {
        this.deadline = new Date("mar 29, 2022 21:00:00").getTime();

        this.x = setInterval(this.count, 1000);
    }

    render() {
        const { days, seconds, hours, minutes, time_up } = this.state
        return (
            <div>
                <br/>
                <div className="big-title text-center classic-title " data-animation="fadeInDown" data-animation-delay="01">
                            <h1><span><strong>Symposium Countdown</strong></span></h1>
                        </div>
                <div classNameName="" style={{ marginLeft: '25%' }}>

                    <div className="row pricing-tables">

                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <div className="pricing-table highlight-plan">
                                <div className="plan-name">
                                    <h3>Days</h3>
                                </div>
                                <div className="plan-price">
                                    <div className="price-value">{days}</div>

                                </div>


                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <div className="pricing-table highlight-plan">
                                <div className="plan-name">
                                    <h3>Hours</h3>
                                </div>
                                <div className="plan-price">
                                    <div className="price-value">{hours}</div>

                                </div>


                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-12" >
                            <div className="pricing-table highlight-plan" >
                                <div className="plan-name">
                                    <h3>Minutes</h3>
                                </div>
                                <div className="plan-price" >
                                    <div className="price-value">{minutes}</div>

                                </div>


                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-12" >
                            <div className="pricing-table highlight-plan">
                                <div className="plan-name">
                                    <h3>Seconds</h3>
                                </div>
                                <div className="plan-price">
                                    <div className="price-value">{seconds}</div>

                                </div>


                            </div>
                        </div>
                    </div>

                </div>

                
                

            </div>
        )
    }
}

export default CountDown