import { describe, expect } from 'vitest'
import { parseDateToLocaleString } from '@shared/utils/parse-date-to-locale-string.ts'

describe('parseDateToLocaleString', () => {
  it('should parse date to locale string', () => {
    const date = '2021-01-01T00:00:00Z'
    const expected = '1/1/2021'

    const result = parseDateToLocaleString(date)

    expect(result).toEqual(expected)
  })
})
