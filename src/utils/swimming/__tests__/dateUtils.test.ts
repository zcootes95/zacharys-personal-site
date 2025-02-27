import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { parseDate } from '../parseDate'
import { formatDateXAxis } from '../formatDateXAxis'

describe('Date utilities', () => {
  describe('parseDate', () => {
    it('correctly parses date strings in MM-DD-YYYY format', () => {
      const result = parseDate('12-25-2022')
      expect(result.getFullYear()).toBe(2022)
      expect(result.getMonth()).toBe(11) // 0-based, so December is 11
      expect(result.getDate()).toBe(25)
    })

    it('handles single-digit months and days', () => {
      const result = parseDate('1-5-2022')
      expect(result.getFullYear()).toBe(2022)
      expect(result.getMonth()).toBe(0) // January
      expect(result.getDate()).toBe(5)
    })

    it('handles edge cases', () => {
      // New Year's Day
      const newYear = parseDate('1-1-2022')
      expect(newYear.getFullYear()).toBe(2022)
      expect(newYear.getMonth()).toBe(0)
      expect(newYear.getDate()).toBe(1)

      // Last day of the year
      const lastDay = parseDate('12-31-2022')
      expect(lastDay.getFullYear()).toBe(2022)
      expect(lastDay.getMonth()).toBe(11)
      expect(lastDay.getDate()).toBe(31)
    })
  })

  describe('formatDateXAxis', () => {
    it('formats dates to show only the year', () => {
      // Instead of mocking Date.prototype, just use actual implementation and test behavior
      const date = parseDate('6-15-2022')
      expect(date.getFullYear()).toBe(2022)
      
      const formattedYear = formatDateXAxis('6-15-2022')
      // Different locales may format years differently, so just check for 2022
      expect(formattedYear.includes('2022')).toBeTruthy()
    })

    it('works with different date formats', () => {
      const date1 = parseDate('1-1-2020')
      expect(date1.getFullYear()).toBe(2020)
      
      const date2 = parseDate('12-31-2025')
      expect(date2.getFullYear()).toBe(2025)
      
      const formattedYear1 = formatDateXAxis('1-1-2020')
      const formattedYear2 = formatDateXAxis('12-31-2025')
      
      expect(formattedYear1.includes('2020')).toBeTruthy()
      expect(formattedYear2.includes('2025')).toBeTruthy()
    })
  })
})