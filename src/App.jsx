import { useEffect, useRef } from 'react';
import './App.scss';

function App() {
  const ref = useRef();

  useEffect(() => {
    const codes = ref.current.childNodes;

    codes[0].focus();

    codes.forEach((code, index) => {
      code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
          codes[index].value = '';
          setTimeout(() => codes[index + 1]?.focus(), 10);
        } else if (e.key === 'Backspace') {
          setTimeout(() => codes[index - 1]?.focus(), 10);
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h2>Verify Your Account</h2>
        <p>
          We emailed you the six digit code to example@email.com <br />
          Enter the code below to confirm your email address.
        </p>
        <div ref={ref} className="code-container">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="number"
              className="code"
              placeholder="0"
              min="0"
              max="9"
              required
            />
          ))}
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
