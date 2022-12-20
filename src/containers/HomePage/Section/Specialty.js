import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";
import { getAllSpecialty } from '../../../services/userService';
import { withRouter } from 'react-router'

// import specialtyImg from '../../../assets/specialty/120331-co-xuong-khop.jpg'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        >
            123
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

class Specialty extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSpecialty: []
        }
    }
    async componentDidMount() {
        let res = await getAllSpecialty();
        console.log('>>>>>>> anh pham ceck speacialty res', res)
        if (res && res.errCode === 0) {
            this.setState({
                dataSpecialty: res.data ? res.data : []
            })
        }
    }

    changeLanguage = (language) => {
        this.props.changeLanguegaAppRedux(language)
    }
    handleViewDetailSpecialty = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail-specialty/${item.id}`)
        }
    }




    render() {
        let { dataSpecialty } = this.state;
        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            <FormattedMessage id="homepage.specialty-popular" />
                        </span>
                        <button className='btn-section'>

                            <FormattedMessage id="homepage.more-infor" />

                        </button>
                    </div>

                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            {dataSpecialty && dataSpecialty.length > 0 &&
                                dataSpecialty.map((item, index) => {
                                    return (
                                        <div className='section-customize specialty-child' key={index}
                                            onClick={() => this.handleViewDetailSpecialty(item)}

                                        >
                                            <div className='bg-image section-specialty'
                                                style={{ backgroundImage: `url(${item.image})` }} />
                                            <div className='specialty-name'>{item.name}</div>
                                        </div>
                                    )
                                })}



                        </Slider>
                    </div>

                </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty)); // kết nối react vs redux với nhau
