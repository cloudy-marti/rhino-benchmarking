/*
lien qui semblaient etre interessant :

https://stackoverflow.com/questions/21781992/how-can-i-implement-a-generic-interface-in-rhino-js

https://stackoverflow.com/questions/5863810/error-trying-to-access-class-members-using-rhino
*/

importClass(java.util.StringJoiner)
importClass(java.util.function.IntSupplier)

importClass(java.util.function.IntFunction)
//importClass(Packages.javafiles.I.A)
var typeA = Packages.javafiles.I.A;
var objs2 = java.lang.reflect.Array.newInstance(IntFunction, 500);
var sj2 = new StringJoiner(", ", "[", "]");
myGenericInterfaceImpl = new Object();
// Generic type is supposed to be <String> int calcStuff(String)
myGenericInterfaceImpl.calcStuff = function(input) {
        println("--- calcStuff called ---");
        println("input" + input);
        println("typeof(input):" + typeof(input));
        return input;
}

//Packages.java.CallInterfaceI.callMyInterface(new Packages.javafiles.I.A(myGenericInterfaceImpl)));


/*

dont work :
https://stackoverflow.com/questions/39771148/calling-java-function-from-rhino

try{
    Context rhino = Context.enter();
    }finally{
    Context.exit();
    }
    */
for(var i = 0; i < objs2.length; i++) {
	var r = Math.random() * 100;
	//objs2[i] = new Packages.javafiles.I.A({
	objs2[i] = new IntFunction({
    		apply: function(i) {
    			return i;
    		}
    	})
	//sj2.add(String(objs2[i]).value());
	sj2.add(String(objs2[i]).toString());
} 

print(sj2.toString());

