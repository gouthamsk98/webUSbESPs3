import "./App.css";
import Dictaphone from "./mic";
import React, { useState, useContext, useCallback, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { SocketContext } from "./context/socket";
let ports;
function App() {
  // const socket = useContext(SocketContext);
  // const [val, setval] = useState("response");
  // const [url, setUrl] = useState("");
  // const [bytes, setBytes] = useState("Bytes:");
  // const [start, setStart] = useState(false);
  // const [p, setP] = useState();
  // const handleSendMessage = (e) => {
  //   if (e.code == "Enter") {
  //     console.log(e.target.value);
  //     socket.emit("send", e.target.value);
  //     socket.on("receiveTxt", (data) => {
  //       setval(data);
  //     });
  //     //encoded is the base64 string var
  //     // var decoded = atob(encoded);
  //     socket.on("receiveAudio", (data) => {
  //       console.log(data);
  //       setUrl("data:audio/mp3;base64," + data);
  //       setStart(true);
  //     });
  //     socket.on("receiveBytes", (data) => {
  //       console.log(data);
  //       setBytes(data);
  //     });
  //   }
  // };
  // function evaluateNodeCode(codeTypeArray, arrayIndexToInsert, bufView) {
  //   for (
  //     var eachStringValue = 0;
  //     eachStringValue < codeTypeArray.length;
  //     eachStringValue++
  //   ) {
  //     if (isNaN(codeTypeArray[eachStringValue])) {
  //       for (var i = 0; i < codeTypeArray[eachStringValue].length; i++) {
  //         if (isNaN(codeTypeArray[eachStringValue][i])) {
  //           arrayIndexToInsert = setBufView(
  //             codeTypeArray[eachStringValue][i].charCodeAt(0),
  //             arrayIndexToInsert,
  //             bufView
  //           );
  //         } else {
  //           arrayIndexToInsert = setBufView(
  //             parseInt(codeTypeArray[eachStringValue][i]),
  //             arrayIndexToInsert,
  //             bufView
  //           );
  //         }
  //       }
  //     } else {
  //       arrayIndexToInsert = setBufView(
  //         codeTypeArray[eachStringValue],
  //         arrayIndexToInsert,
  //         bufView
  //       );
  //     }
  //   }
  //   console.log("arrayIndexToInsert", arrayIndexToInsert, bufView);
  //   return arrayIndexToInsert;
  // }
  // function setBufView(value, arrayIndexToInsert, bufView) {
  //   // ////console.log( "setBufVioew---->",bufView[arrayIndexToInsert],value)
  //   bufView[arrayIndexToInsert] = value;
  //   return ++arrayIndexToInsert;
  // }
  // function stringToByteStream(str) {
  //   // // ////console.log("STRING",str);
  //   //RT$5$11SETAPOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000000000000000000000000o{:2;:18;:f1;}d00:1;:00;:26;>o{:2;:a;:19;}w:00;:00;:f2;:59;l00:1;o{:2;:5;:a4;}w:00;:38;:c7;:41;o{:2;:8;:82;}0ELo{:2;:3;:85;}0EDRST
  //   var buf = new ArrayBuffer(str.length); // 2 bytes for each char
  //   var bufView = new Uint8Array(buf);
  //   bufView[0] = 82; //R
  //   bufView[1] = 84; //T
  //   bufView[2] = 53; //5
  //   bufView[3] = 49; //1
  //   bufView[4] = 49; //1

  //   // setting time
  //   var arrayIndexToInsert = 5;
  //   var codeLen = 0;
  //   // ////console.log("string=", "RT5" + str);
  //   //RT511SETAPOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000000000000000000000000;
  //   //o{:2:39:104:};d:0:0:1:4:0:62;l00:1;o{:2:21:30:};0EL;w:0:226:62:139;0ED;RST
  //   console.log("some:DATA", stringArray);
  //   var stringArray = str.split(";");
  //   for (var eachCode = 0; eachCode < stringArray.length; eachCode++) {
  //     var codeTypeArray = stringArray[eachCode].split(":");
  //     // console.log("codeTypeArray------------------------->", codeTypeArray);

  //     arrayIndexToInsert = evaluateNodeCode(
  //       codeTypeArray,
  //       arrayIndexToInsert,
  //       bufView
  //     );
  //   }
  //   var currentTime = new Date();
  //   bufView[64] = 116;
  //   bufView[65] = currentTime.getHours();
  //   bufView[66] = currentTime.getMinutes();
  //   codeLen = arrayIndexToInsert; //78
  //   var codeView = new Uint8Array(codeLen);
  //   ////console.log("Bufview--->", currentTime.getHours(), currentTime.getMinutes(), bufView[64], bufView[65], bufView[67], bufView[68], bufView[69])
  //   for (var i = 0; i < codeLen; i++) {
  //     codeView[i] = bufView[i];
  //   }
  //   var sendString = codeView.join();
  //   //  ////console.log("byteStream=",sendString);
  //   // // ////console.log(codeView);
  //   return codeView;
  // }
  // const sendBytes = async (data, port) => {
  //   if (port === undefined) {
  //     console.log("Port undefined");
  //     return;
  //   }

  //   try {
  //     const writer = port.writable.getWriter();
  //     const bytes = new Uint8Array(data);
  //     await writer.write(bytes);
  //     console.log("Data sent : " + data);
  //     writer.releaseLock();
  //     return;
  //   } catch (err) {
  //     console.log("Data NOT sent : " + data);
  //     console.log(err);
  //   }
  // };
  // const send = async () => {
  //   let data = await stringToByteStream(bytes);
  //   console.log("p", p);
  //   await sendBytes(data, p);
  //   setTimeout(() => {
  //     sendBytes(
  //       [
  //         "R".charCodeAt(0),
  //         "E".charCodeAt(0),
  //         "S".charCodeAt(0),
  //         "T".charCodeAt(0),
  //       ],
  //       p
  //     );
  //   }, 500);
  // };
  return (
    <div className="App">
      <Dictaphone></Dictaphone>
    </div>
  );
}

export default App;
