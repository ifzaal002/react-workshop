import React from "react";
import {connect} from "react-redux";
import {updateTimerAction} from "./TimerActions";


const mapStateToProps = state => ({
  time: state.timer.time
});

class Timer extends React.Component {

  componentWillMount(){
    setInterval(()=>{
      this.props.dispatch(updateTimerAction(new Date().getTime()))
    }, 1000)

  }

  render() {
    const {time} = this.props;
    const formattedTime = new Date(time);
    return (
        <span><strong>I am timer component </strong><small>{formattedTime.toLocaleTimeString('en-US')}</small></span>
    )
  }

}

export default connect(mapStateToProps)(Timer)
