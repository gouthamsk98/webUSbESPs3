import "./App.css";
import React, { useState, useContext, useCallback, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { SocketContext } from "./context/socket";
import { SOCKET_URL } from "./context/config";
function App() {
  const socket = useContext(SocketContext);
  const [val, setval] = useState("response");
  const [url, setUrl] = useState("");
  const [start, setStart] = useState(false);
  const handleSendMessage = (e) => {
    if (e.code == "Enter") {
      console.log(e.target.value);
      socket.emit("send", e.target.value);
      socket.on("receiveTxt", (data) => {
        setval(data);
      });
      //encoded is the base64 string var
      // var decoded = atob(encoded);
      socket.on("receiveAudio", (data) => {
        console.log(data);
        setUrl("data:audio/mp3;base64," + data);
        setStart(true);
      });
    }
  };

  return (
    <div className="App">
      <br />
      <br />
      <ReactAudioPlayer
        src={url}
        autoPlay={true}
        controls
        play={start}
        style={{ visibility: "hidden" }}
        // onEnded={setStart(false)}
      />

      <br />
      <br />
      <label for="send">send </label>
      <input
        type="text"
        id="send"
        name="send"
        onKeyDownCapture={(e) => handleSendMessage(e)}
      />
      <br />
      <br />
      {val}
      <br />
      <br />
    </div>
  );
}

export default App;
