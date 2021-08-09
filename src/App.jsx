import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Verify Your Account</h2>
        <p>
          We emailed you the six digit code to example@email.com <br />
          Enter the code below to confirm your email address.
        </p>
        <div className="code-container">
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
          />
        </div>
        <small className="info">
          This is design only. We didn't actually send you an email as we don't
          have your email, right?
        </small>
      </div>
    </div>
  );
}

export default App;
