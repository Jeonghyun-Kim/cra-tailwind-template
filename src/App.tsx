import React from 'react';

import Toggle from 'components/Toggle';
import Modal from 'components/Modal';

const App: React.FC = () => {
  const [enabled, setEnabled] = React.useState<boolean>(false);

  return (
    <>
      <div className="max-w-7xl mx-auto p-2">
        <Toggle enabled={enabled} onChange={setEnabled} srLabel="test toggle" />
      </div>
      <Modal
        show={enabled}
        title="hello"
        content="world"
        actionButton={{ label: 'ok', onClick: () => setEnabled(false) }}
        cancelButton={{ label: 'cancel', onClick: () => setEnabled(false) }}
      />
    </>
  );
};

export default App;
