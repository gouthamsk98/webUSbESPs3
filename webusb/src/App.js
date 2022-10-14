import logo from "./logo.svg";
import "./App.css";
let data = [
  "<".charCodeAt(0),
  "S".charCodeAt(0),
  "1".charCodeAt(0),
  // "O".charCodeAt(0),
  ">".charCodeAt(0),
];
let receivedData = "";
function unicodeToChar(data) {
  let str = "";

  data.forEach((element) => {
    str = str.concat(String.fromCharCode(element));
  });

  console.log(str);

  return str;
}
function App() {
  const handleUsb = async () => {
    const filters = [];
    //serial testing
    // await navigator.serial.requestPort({ filters }).then(async (port) => {
    //   await port.open({ baudRate: 120000 });
    //   const writer = port.writable.getWriter();
    //   const bytes = new Uint8Array(data);
    //   await writer.write(bytes);

    //   console.log("Data sent : " + data);
    //   await writer.releaseLock();
    //   let reader = port.readable.getReader();
    //   const { value, done } = await reader.read();
    //   const data1 = unicodeToChar(value).trim();
    //   console.log("Received data : " + data1);
    //   receivedData = receivedData.concat(data1);
    //   console.log("Combined data: " + receivedData);
    // });
    //Usb testing
    let configNumber_ = 1;
    let interfaceNumber_ = 1;
    let endpointOut_ = 4;
    let endpointIn_ = 3;
    await navigator.usb.requestDevice({ filters }).then(async (port) => {
      await port.open();
      await port.selectConfiguration(configNumber_);
      await port.claimInterface(interfaceNumber_);
      console.log(port);
      const bytes = new Uint8Array(data);
      await port.transferOut(endpointOut_, bytes);
      console.log(port);
      await port.transferIn(endpointIn_, 64).then((result) => {
        console.log(result.data);
      });
      console.log(port);
    });
  };
  return (
    <div className="App">
      <button onClick={handleUsb}>hi</button>
    </div>
  );
}

export default App;
