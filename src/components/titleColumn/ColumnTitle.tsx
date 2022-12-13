import styled from "styled-components"

const StyledTitle = styled.h3`
color: #FFFFFF;
text-align: center;
margin-bottom: 0.7em;
`

interface TitleProps {
    title: string,
    onClick: () =>void,
}

const ColumnTitle: React.FC<TitleProps> = ({ title, onClick}) => {
    
    return <StyledTitle onClick={onClick}>{title}</StyledTitle>
}

export default ColumnTitle