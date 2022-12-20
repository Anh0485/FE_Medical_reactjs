import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';





class HomeFooter extends Component {


    render() {
        return (
            <div className='home-footer'>
                <p>&copy; 2022 Nguyễn Trần Gia Huy - Phạm Vân Anh More Information. <a target="_blank" href="https://github.com/Anh0485/user-reactjs.git">&#8594; Click here &#8592; </a></p>

            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {

    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter); // kết nối react vs redux với nhau
