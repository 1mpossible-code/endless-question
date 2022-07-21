import React, {FC} from 'react';

type Props = {
    text: string;
    handleFocus?: () => void;
}

const Answer: FC<Props> = (props) => {
    return (
            <button onMouseMoveCapture={props.handleFocus}>{props.text}</button>
    );
};

export default Answer;
