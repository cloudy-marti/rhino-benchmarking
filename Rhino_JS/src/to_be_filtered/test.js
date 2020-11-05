var x = 2;
var y = 3.4;

function test() {
	var version = String(java.lang.System.getProperty("java.version"));
	print(version)
	print(x+y);
}

test();