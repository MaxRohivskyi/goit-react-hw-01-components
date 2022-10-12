import styled from "styled-components";

export const WrapperProfile = styled.div`
margin: 0 auto 30px;
width: 250px;

background-color: ${p => p.theme.colors.white};
border-radius: ${p => p.theme.radii.normal};
box-shadow: 2px 2px 5px ${p => p.theme.colors.secondary};
`;