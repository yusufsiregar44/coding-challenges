import java.util.Arrays;

public class Main {
  public static void main (String[] args) {
    int [][] array = {
      {1, 4, 5, 6, 1, 9},
      {1, 4, 5, 6, 1, 9},
      {1, 3, 5, 6, 1, 9},
      {1, 4, 5, 1, 1, 9},
      {1, 4, 4, 6, 1, 9},
      {1, 1, 5, 6, 8, 9},
    };
    hourGlassSum(array);
  }

  static void hourGlassSum(int[][] arr) {
    int biggestSum = 0;

    for (int i = 0; i < arr.length; i++) {
      if (i == 4) {
        break;
      }
      for (int j = 0; j < arr[i].length; j++) {
        if (j == 4) {
          break;
        }
        int [] a = {arr[i][j], arr[i][j + 1], arr [i][j + 2]};
        System.out.println(Arrays.toString(a) + "\n");
      }
    }
  }
}