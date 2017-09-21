import React, { Component } from 'react';
import {connect} from 'react-redux'
import Notifications from 'react-notification-system-redux';

const Notif = (props) => {
  return <Notifications notifications={props.notifications} />
}

const mapStateToProps = (store,ownProps) => {
  return {
    notifications: store.notifications
  }

}

export default connect(mapStateToProps)(Notif)