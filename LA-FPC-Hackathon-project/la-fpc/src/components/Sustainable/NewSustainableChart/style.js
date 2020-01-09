import styled from "styled-components"

const Canvas = styled.div`
  text-align: center;
  border-radius: 2.5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  width: 95vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .bg {
    display: inherit;
    flex-direction: inherit;
    height: 100%;
    width: 100%;
    justify-content: inherit;
    align-items: inherit;
    background-color: white;
  }

  .title-div {
    width: 95vw;
    display: flex;
    justify-content: space-evenly;
    margin: 1em 0;
    background-color: #ffffff;
  }

  .bottom-div {
    width: 80vw;
  }
  .scale {
    width: 2em;
    height: 2em;
  }
`
export default Canvas
