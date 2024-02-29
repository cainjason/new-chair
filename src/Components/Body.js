import React from 'react';
import styled from 'styled-components';

function Body() {
  return (
    <BodyContainer>
      <card>
        frist chair
      </card>
      <br/>
      <card>
        second chair
      </card>
      <br/>
      <card>
        third chair
      </card>
    </BodyContainer>
  )
}

export default Body;

const BodyContainer = styled.div``;
