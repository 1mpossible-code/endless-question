import React, {FC} from 'react';

type Props = {
    text: string;
}

const Text: FC<Props> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    );
};

export default Text;
