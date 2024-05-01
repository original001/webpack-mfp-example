import React, { Suspense, useState } from 'react';
const RemoteApp = React.lazy(() => import('app2/App'));
const RemoteApp3 = React.lazy(() => import('app3/App'));

const App = () => {
  const [shown, setShown] = useState(true);
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App1 {React.version}</h1>
        <button onClick={() => setShown((state) => !state)}>click</button>
      </div>
      <Suspense fallback={'loading...'}>{shown && <RemoteApp />}</Suspense>
      <Suspense fallback={'loading...'}>
        <RemoteApp3 />
      </Suspense>
    </div>
  );
};

export default App;
