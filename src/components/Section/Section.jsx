import PropTypes from 'prop-types';
import {SectionStyle} from './Section.styled';

export const Section = ({title, children}) => {
    return (
        <SectionStyle>
            <h2 className='title'>{title}</h2>
            {children}
        </SectionStyle>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

