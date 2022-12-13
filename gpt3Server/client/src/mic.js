import React, { useEffect, useContext, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { SocketContext } from "./context/socket";
const Dictaphone = () => {
  const socket = useContext(SocketContext);
  const [receiveTxt, setReceiveTxt] = useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  socket.on("receiveTxt", (data) => {
    console.log("recived", data);
    setReceiveTxt(data);
  });
  useEffect(() => {
    if (!listening && transcript) {
      console.log("transcript", transcript, listening);
      socket.emit("send", transcript);
    }
  }, [transcript, listening]);
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div>
        <p>Microphone: {listening ? "on" : "off"}</p>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
        <div>{receiveTxt}</div>
      </div>
    </>
  );
};
export default Dictaphone;
