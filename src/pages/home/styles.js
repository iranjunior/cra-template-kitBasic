import styled from 'styled-components';

import background from '../../assets/background.jpg';

export default styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-image: url(${background});
    background-position: center;
`;
