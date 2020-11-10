import java.util.Random;

public class RhinoBenchMark2 {
      private static final int[] INT_ARRAY = new Random(0)
            .ints(1_000, 0, 100).toArray();
      
    static final I[] OBJ_ARRAY = new Random(0)
            .ints(1_000, 0, 100)
            .mapToObj(i -> i < 50? new A(i): new B(i)).toArray(I[]::new);

    public static int sum_int(int[] array) {
        var sum = 0;
        for (int j : array) {
            sum += j;
        }
        return sum;
    }

    public static int sum_int(I[] array) {
        var sum = 0;
        for (I value : array) {
            sum += value.value();
        }
        return sum;
    }

    /**
     * @param args
     */
    public static void main(String[] args) {
        System.out.println(sum_int(INT_ARRAY));
        System.out.println(sum_int(OBJ_ARRAY));
    }
}
