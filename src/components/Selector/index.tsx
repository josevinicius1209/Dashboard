import React, {useState} from 'react'
import { Ellipse, Options, EllipseDiv } from './styles';
import { LittleTitle } from '../Text/styles';
import { FaAngleDown } from 'react-icons/fa';

//resolvi criar meu próprio componente seletor
//não está funcional, mas poderia estar, talvez com mais tempo
const Selector: React.FC = () => {
    const[opened, setState] = useState(false);
    return (
        <EllipseDiv>
            <Ellipse onClick={() => setState(!opened)} height = {opened? 120:28}>  
                <Options>
                    <LittleTitle >seletor</LittleTitle>
                    <LittleTitle>a</LittleTitle>
                    <LittleTitle>b</LittleTitle>
                    <LittleTitle>c</LittleTitle>
                </Options>
                <FaAngleDown size="20px"/>  
            </Ellipse>
       </EllipseDiv>
    )
}

export default Selector;