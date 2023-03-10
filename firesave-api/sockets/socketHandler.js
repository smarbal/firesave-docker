let i = 0 

global.alert = false; // Global because it needs to be shared with all the files. Necessary so that user presence is only fetchable in alert mode, for confidentiality reasons. 

module.exports = (io, socket) => {
    const alertUsers = (payload) => {
      i+=1
      if(i>3){
        global.alert = true;
        console.log("alert", alert);
        socket.emit('alert'); // to all connected clients. https://socket.io/fr/docs/v3/emit-cheatsheet/
      };
      setTimeout(function() {
        i = 0;
        alert = false
        console.log(alert)
    }, 900 * 1000);

        
    }
  
    socket.on("alert", alertUsers);
  }