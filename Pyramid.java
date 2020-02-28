package DataStructures;

import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;

public class Pyramid {
    public static boolean isPyramid(String str){
        HashMap<Character, Integer> hash = new HashMap<>();
        char[] c = str.toCharArray();
        int ci, cv, k;
        Collection<Integer> vals;
        Iterator<Integer> iter;
        int[] pyramid;

        for(char i : c){
            if(hash.containsKey(i)){
                ci = hash.get(i);
                hash.replace(i, ci+1);
            } else {
                hash.put(i, 1);
            }
        }
        pyramid = new int[hash.size()];
        vals = hash.values();
        iter = vals.iterator();
        k = 0;
        while(iter.hasNext()){
            cv = iter.next();
            pyramid[k++] = cv;
        }
        Arrays.sort(pyramid);
        for(int n = 0; n < pyramid.length; n++){
            if(pyramid[n] != (n+1)){
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args){
        System.out.println(isPyramid("abbbccdddd"));
    }
    // true
}
