import { describe, it, expect } from 'vitest'
import { convertTimeToSeconds } from '../convertTimeToSeconds'

describe('convertTimeToSeconds', () => {
  it('converts minutes and seconds correctly', () => {
    expect(convertTimeToSeconds('1:30')).toBe(90)
    expect(convertTimeToSeconds('2:15')).toBe(135)
  })

  it('handles single-digit minutes correctly', () => {
    expect(convertTimeToSeconds('0:45')).toBe(45)
    expect(convertTimeToSeconds('5:05')).toBe(305)
  })

  it('handles decimal seconds correctly', () => {
    expect(convertTimeToSeconds('1:30.5')).toBe(90.5)
    expect(convertTimeToSeconds('2:15.75')).toBe(135.75)
  })

  it('handles edge cases', () => {
    expect(convertTimeToSeconds('0:00')).toBe(0)
    expect(convertTimeToSeconds('0:00.00')).toBe(0)
    expect(convertTimeToSeconds('10:00')).toBe(600)
  })
})