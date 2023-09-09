import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import socket from "../socketService";

const App = () => {
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState("");

  useEffect(() => {
    // Listen for "message" events from the server
    socket.on("message", (data) => {
      setReceivedMessage(data.message);
    });

    return () => {
      // Clean up event listeners when component unmounts
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    // Emit a "message" event to the server
    socket.emit("message", { message });
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/generalPublic"
            element={
              <>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={sendMessage}>Test</button>
              </>
            }
          />

          <Route
            path="/rescuer"
            element={
              <>
                <p>Received Message: {receivedMessage}</p>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
