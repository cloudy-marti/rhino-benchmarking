importClass(java.util.function.IntSupplier)
importClass(java.util.StringJoiner)

var objs = java.lang.reflect.Array.newInstance(IntSupplier, 500);
var sj = new StringJoiner(", ", "[", "]");

for(var i = 0; i < objs.length; i++) {
	var r = Math.random() * 100;
	objs[i] = new IntSupplier({
		getAsInt: function() {
			return r;
		}
	})
	sj.add(String(objs[i].getAsInt()));
} 

print(sj.toString());