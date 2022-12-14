import React, {useRef, useState} from 'react';
import Answer from './Answer/Answer';
import Text from './Text/Text';
import classes from './Question.module.css'

const Question = () => {
    const endlessBtn = useRef<HTMLDivElement>(null);
    const [text, setText] = useState('This is a question with only one correct answer, isn\'t it?');

    const handleNoAnswerFocus = () => {
        const width = 400;
        const height = 300;
        if (endlessBtn.current && endlessBtn.current.style) {
            endlessBtn.current.style.left = `${Math.floor(Math.random() * width)}px`
            endlessBtn.current.style.top = `${Math.floor(Math.random() * height)}px`
        }
    }

    const handleYesButtonClick = () => {
        setText('Yeah, I knew it)')
    }

    const handleNoButtonClick = () => {
        setText('You are a cheater!')
    }

    return (
        <div className={classes.container}>
            <Text text={text}/>
            <div className={classes.endlessContainer}>
                <Answer text="Yes" handleClick={handleYesButtonClick}/>
                <div className={classes.endless}>
                    <div className={classes.endlessBtn} ref={endlessBtn}>
                        <Answer text="No" handleFocus={handleNoAnswerFocus} handleClick={handleNoButtonClick}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
