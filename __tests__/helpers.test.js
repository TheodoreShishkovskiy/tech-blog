const {format_date} = require('../utils/helpers');

// Created by the help of David Kravchuk looking at a similar project
// Creating a test to format_date() take Date() objects and returns the date in MM/DD/YYYY format
test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
  
    expect(format_date(date)).toBe('3/20/2020');
  });

const {format_plural} = require('../utils/helpers')

// Plural comments and point
test('format_plural() returns a pluralized word', () => {
      const plural = format_plural('tiger', 2);
      const single = format_plural('lion', 1);
      
      expect(plural).toBe('tigers');
      expect(single).toBe('lion');
});

const {format_url} = require('../utils/helpers');

// For shortening the URLS
test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});