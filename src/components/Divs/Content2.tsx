import React from 'react'
import { RightDiv } from './styles';
import Data5 from './DataContent/Data5';
import Data6 from './DataContent/Data6';
import Data2 from './DataContent/Data2';
import Data3 from './DataContent/Data3';

const Content2: React.FC = () => {
    return (
        <>
            <RightDiv>
                <Data5 />
                <Data2 />
                <Data3 />
                <Data6 />
            </RightDiv>
            <RightDiv>
                <Data5/>
                <Data2 />
                <Data3 />
                <Data6 />
            </RightDiv>
        </>
    );
}

export default Content2;