import { describe, it, expect } from 'vitest'
import { formatSeconds } from '../formatSeconds'

describe('formatSeconds', () => {
  it('formats whole seconds correctly', () => {
    expect(formatSeconds(90)).toBe('1:30.00')
    expect(formatSeconds(135)).toBe('2:15.00')
  })

  it('formats decimal seconds correctly', () => {
    expect(formatSeconds(90.5)).toBe('1:30.50')
    expect(formatSeconds(135.75)).toBe('2:15.75')
  })

  it('adds leading zero to seconds less than 10', () => {
    expect(formatSeconds(65)).toBe('1:05.00')
    expect(formatSeconds(305)).toBe('5:05.00')
  })

  it('handles edge cases', () => {
    expect(formatSeconds(0)).toBe('0:00.00')
    expect(formatSeconds(60)).toBe('1:00.00')
    expect(formatSeconds(3600)).toBe('60:00.00') // One hour
  })

  it('handles precision with decimal places', () => {
    expect(formatSeconds(90.123)).toBe('1:30.12')
    expect(formatSeconds(135.789)).toBe('2:15.79')
  })
})