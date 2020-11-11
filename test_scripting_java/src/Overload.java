
public class Overload {
	  public String f(Object o) { return "f(Object)"; }
	    public String f(String s) { return "f(String)"; }
	    public String f(int i)    { return "f(int)"; }

	    public String g(String s, int i) { return "g(String,int)"; }
	    public String g(int i, String s) { return "g(int,String)"; }

	    public static void main(String[] args) {
	        Overload o = new Overload();
	        Object[] a = new Object[] {3, "hi", Overload.class };
	        for (int i = 0; i != a.length; ++i)
	            System.out.println(o.f(a[i]));
	    }
}
