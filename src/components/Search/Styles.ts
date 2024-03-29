import styled from "styled-components";

// resolvi criar meu próprio componente de pesquisa
// não está funcional
export const SearchForm = styled.div`
    width: auto;
    height: 34px;
    background: #FAFAFA;
    border: 1px solid #EBEBEB;
    box-sizing: border-box;
    border-radius: 100px;
    font-weight: 500;
    font-size: 12px;
    line-height: 25px;
    color: #999999;
    display: flex;
    padding: 3px 15px;
    z-index: 0;
`;

export const SearchBar = styled.div`

	width: auto;
	height: 30px;
	background-color: #FAFAFA;
	border-radius: 0px;
    border-color: #FAFAFA;
	display: flex;
	align-items: center;
    border:none;
    margin-left: 2px;
    outline: none;
    font-size: 18px;
`;