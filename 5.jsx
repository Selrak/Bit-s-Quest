#include "utils.jsx"

this.on('start', function() {
  go('d');
});

this.on('sensor:bottom', function(contact) {
  if(contact){
    go('r');
  }
});

this.on('sensor:right', function(contact) {
  if(contact){
    go('u');
  }
});

this.on('sensor:top', function(contact) {
  if(contact){
    go('l');
  }
});

this.on('sensor:left', function(contact) {
  if(contact){
    go('d');
  }
});

