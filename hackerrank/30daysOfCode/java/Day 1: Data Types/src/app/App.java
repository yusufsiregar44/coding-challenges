package app;

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;


public class App {
	
    public static void main(String[] args) {
        int i = 4;
        double d = 4.0;
        String s = "HackerRank ";
		
        Scanner scan = new Scanner(System.in);

        /* Declare second integer, double, and String variables. */
        int j;
        double e;
        String t;

        /* Read and save an integer, double, and String to your variables.*/
        // Note: If you have trouble reading the entire String, please go back and review the Tutorial closely.

        Integer inputInteger = new Integer(scan.nextLine());
        Double inputDouble = new Double(scan.nextLine());
        t = scan.nextLine();
        
        /* Print the sum of both integer variables on a new line. */
        j = inputInteger.intValue() + i;

        /* Print the sum of the double variables on a new line. */
        e = inputDouble.doubleValue() + d;
		
        /* Concatenate and print the String variables on a new line; 
          the 's' variable above should be printed first. */
        s = s + t;

        System.out.println(j);
        System.out.println(e);
        System.out.println(s);

        scan.close();
    }
}