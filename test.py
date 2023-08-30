from unittest import TestCase, main

from whiteboard import solution

class MatchTestCase(TestCase):
    def test_example_one(self):
        self.assertEqual(solution([2,2,3,4]), 2)
    def test_example_two(self):
        self.assertEqual(solution([1,2,2,3,3,3]), 3)
    def test_no_luck(self):
        self.assertEqual(solution([2,3,4,5]), -1)
    def test_big_luck(self):
        self.assertEqual(solution([2,7,5,8,12,10,10,10,6,2,10,10,8,10,15,10,2,22,10,10,10]), 10)
    def test_all_but_one(self):
        self.assertEqual(solution([1,4,4,4,4,5]),4)
    def test_empty(self):
        self.assertEqual(solution([]),-1)