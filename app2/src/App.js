import React from 'react';

const App = () => {
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
    >
      <h1>App 2 {React.version}</h1>
      <Inner />
      <InnerClass />
    </div>
  );
};

const Inner = () => <div>inner</div>;
class InnerClass extends React.Component {
  render() {
    return <div>class inner </div>;
  }
}

export default App;
