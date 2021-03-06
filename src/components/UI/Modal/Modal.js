import React, { Component } from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        //if(nextProps.show !== this.props.show){
        //    return true; 
        //}else{
        //    return false;
        //}
        return nextProps.show !== this.props.show 
                || nextProps.children !== this.props.children;
                //without that second line, <Modal /> will not listen to changes due to http calls
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }
} 

export default Modal; 