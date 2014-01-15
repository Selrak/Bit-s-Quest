# 1 "5.jsx"
# 1 "<built-in>" 1
# 1 "<built-in>" 3
# 161 "<built-in>" 3
# 1 "<command line>" 1
# 1 "<built-in>" 2
# 1 "5.jsx" 2
# 1 "./utils.jsx" 1
// Utilities for Bit's Quest
// Charles THIN, Jan 2014

bit = this;

function stop() {
	bit.thrusters.left(false);
	bit.thrusters.right(false);
	bit.thrusters.top(false);
	bit.thrusters.bottom(false);
}


function go(dir1, dir2, dir3, dir4) {
	stop();
	thrust(dir1, dir2, dir3, dir4);
}

function thrust(dir1, dir2, dir3, dir4) {

	dir = [dir1, dir2, dir3, dir4];

	for(i=0; dir[i] != null; i++) {
		switch(dir[i]) {
			case 'left':
			case 'l':
				bit.thrusters.right(true);
				break;
			case 'right':
			case 'r':
				bit.thrusters.left(true);
				break;
			case 'up':
			case 'u':
				bit.thrusters.bottom(true);
				break;
			case 'down':
			case 'd':
				bit.thrusters.top(true);
				break;
			default:
				alert("Unknown direction : "+dir[i]);
				break;
		}
	}
}

# 2 "5.jsx" 2

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


