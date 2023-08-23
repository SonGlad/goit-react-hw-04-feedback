import { ContainerStyle } from './Container.styled';

export const Container = ({children}) => {
    return (
        <ContainerStyle>
            {children}
        </ContainerStyle>
    )
};