import React, {useRef} from 'react';
import Answer from './Answer/Answer';
import classes from './Question.module.css'

const Question = () => {
    const endlessBtn = useRef<HTMLDivElement>(null);

    const handleNoAnswerFocus = () => {
        const width = 400;
        const height = 300;
        if (endlessBtn.current && endlessBtn.current.style) {
            endlessBtn.current.style.left = `${Math.floor(Math.random() * width)}px`
            endlessBtn.current.style.top = `${Math.floor(Math.random() * height)}px`
        }
    }

    return (
        <div className={classes.container}>
            <div>This is a question with only one correct answer, isn't it?</div>
            <div className={classes.endlessContainer}>
                <Answer text="Yes"/>
                <div className={classes.endless}>
                    <div className={classes.endlessBtn} ref={endlessBtn}>
                        <Answer text="No" handleFocus={handleNoAnswerFocus}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
