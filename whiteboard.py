# Given an array of integers nums, 
# a lucky integer is an integer which has a frequency in the array equal to its value.
# Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.
# Example 1:
# Input: nums = [2,2,3,4]					
# Output: 2
# Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
# Example 2:
# Input: nums = [1,2,2,3,3,3]
# Output: 3
# Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

def solution(nums):
    num_count = {}
    for num in nums:
        num_count[num] = num_count.get(num, 0) + 1
    
    highest_lucky = -1
    for num, count in num_count.items():
        if num == count and num > highest_lucky:
            highest_lucky = num
    return highest_lucky
