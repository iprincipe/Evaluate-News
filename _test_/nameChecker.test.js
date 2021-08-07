import { checkForName } from '../src/client/js/nameChecker';

describe ('check Url', () => {
    test ('should return true', () => {
        const url='https://en.wikipedia.org/wiki/Olympic_Games'
        expect (checkForName(url)).toBe(true)
    });
    test("should return false", () => {
    	const url = "wikipedia . org";
    	expect(checkForName(url)).toBe(false);
  });
});