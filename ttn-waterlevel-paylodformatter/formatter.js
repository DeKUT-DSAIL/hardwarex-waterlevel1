function Decoder(bytes,port) {
    var height = (bytes[0]<< 8)+ bytes[1];
    var battery_voltage = (bytes[2]<< 8)+ bytes[3];
    return{
      field1:height,
      field2:battery_voltage * 0.000091553,
    }
  }