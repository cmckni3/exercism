//
//  Year.swift
//  Leap
//

import UIKit

class Year: NSObject
{
    var calendarYear: Int
    var isLeapYear: Bool
    {
        get
        {
            switch calendarYear % 4 == 0
            {
                case true where (calendarYear % 100 != 0 || calendarYear % 400 == 0):
                    return true
                default:
                    return false
            }
        }
    }

    init(calendarYear: Int)
    {
        self.calendarYear = calendarYear
    }

}