import PropTypes from 'prop-types';
import { ButtonContainerStyle } from "./FeedbackOption.styled";
import {getRandomColor} from '../../utils/random-color/random-color';
import { nanoid } from 'nanoid';


export const ButtonContainer = ({changeOnClick, option}) => {
    return (
        <ButtonContainerStyle>
            {option.map(feedback => (
                <button className="button"
                type="button"
                key={nanoid()}  
                style={{backgroundColor: getRandomColor()}}
                onClick={() => changeOnClick(feedback)}
                >{feedback}</button>
            ))}
        </ButtonContainerStyle>
    )
};


ButtonContainer.propTypes ={
    changeOnCklick: PropTypes.func,
    option: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,        
};
