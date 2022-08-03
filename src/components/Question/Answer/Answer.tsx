import React, {FC} from 'react';

type Props = {
    text: string;
    handleClick: () => void;
    handleFocus?: () => void;
}

const Answer: FC<Props> = (props) => {
    return (
            <button onMouseMoveCapture={props.handleFocus} onClick={props.handleClick}>{props.text}</button>
    );
};

export default Answer;
