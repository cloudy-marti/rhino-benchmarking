importClass(java.util.StringJoiner)

var sj = new StringJoiner(", ", "[", "]");

var ints = java.lang.reflect.Array.newInstance(java.lang.Integer.TYPE, 500);

for(var i = 0; i < ints.length; i++) {
	ints[i] = Math.random() * 100;	
	sj.add(String(ints[i]));
} 

print(sj.toString());