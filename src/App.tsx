import React from 'react';

import Toggle from 'components/Toggle';

const App: React.FC = () => {
  const [enabled, setEnabled] = React.useState<boolean>(false);

  return (
    <div className="max-w-7xl mx-auto p-2">
      <Toggle enabled={enabled} onChange={setEnabled} srLabel="test toggle" />
    </div>
  );
};

export default App;
