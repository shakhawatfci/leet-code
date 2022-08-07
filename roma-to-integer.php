<?php 
class Solution {

    /**
     * @param string $s
     * @return integer
     */
    function romanToInt($s) {
        
        $roman_value = [
            "I" => 1,
            "V" => 5,
            "X" => 10,
            "L" => 50,
            "C" => 100,
            "D" => 500,
            "M" => 1000
          ];

        $s = str_split($s); 

        $sum = 0;
        $prev = 0;
        foreach ($s as $key => $value) {
            $sum += $roman_value[$value];
            if($roman_value[$value] > $prev) {
                $sum -= 2 * $prev;
            }
            $prev = $roman_value[$value];
        }
        return $sum;
        
        
    }
}



echo((new Solution())->romanToInt("XXIX"));