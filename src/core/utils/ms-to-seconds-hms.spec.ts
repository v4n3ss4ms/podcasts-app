import { describe, expect, it } from 'vitest'
import { millisecondsToHoursMinutesSeconds } from '@core/utils/ms-to-seconds-hms.ts'

describe('millisecondsToHoursMinutesSeconds', () => {
  it('should convert milliseconds to hours, minutes and seconds', () => {
    const milliseconds = 86_400_000
    const result = millisecondsToHoursMinutesSeconds(milliseconds)
    expect(result).toBe('24:00:00')
  })
})
