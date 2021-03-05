import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

const Root = styled.div``;

const App: React.FC = () => {
  return (
    <Root className="max-w-7xl mx-auto p-2">
      <div>hello world</div>
      <div>
        <Button size="lg">click me!</Button>
      </div>
      <div>
        <Button size="lg" disabled>
          disabled
        </Button>
      </div>
    </Root>
  );
};

export default App;
