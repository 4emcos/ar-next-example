import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .ar-model {
    max-width: 600px;
    background-color: ${props => props.theme.colors.mainBackground};
    box-shadow: 3px 2px 6px rgba(0, 0, 0, 0.5);
  }
  model-viewer {
    width: 500px;
    height: 500px;
  }
`
