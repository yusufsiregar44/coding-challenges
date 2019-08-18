public class VeryBigSum {
  public static void main(String[] args) {
    long[] params = {1.91919191, 2.11191919};
    veryBigSumCalc(params);
  }

  static long veryBigSumCalc(long[] ar) {
    long result = 0;


    for(int i = 0; i < ar.length; i++) {
      result += ar[i];
    }

    System.out.println(result);
    return result;
  }
}