from typing import List

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        number_of_occurrence = {}
        for i in nums:
            if i in number_of_occurrence:
                number_of_occurrence[i] += 1
            else:
                number_of_occurrence[i] = 1

        for i in number_of_occurrence:
            if number_of_occurrence[i] == 1:
                return i

trial_one = Solution()
print(trial_one.singleNumber([4, 1, 2, 1, 2]))
