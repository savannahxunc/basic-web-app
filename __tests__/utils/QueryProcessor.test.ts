import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "savannah"
          ));
    })

    test('should return Andrew ID', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "savannax"
          ));
    })

    test('should return sum of two numbers', () => {
        const query = "27 plus 96";
        const response: string = QueryProcessor(query);
        expect(response).toBe("123");
    });

    
 


    test('should return difference of two numbers', () => {
        const query = "What is 67 minus 40?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("27");
    });

    test('should return the result of a number to the power of another number', () => {
        const query = "What is 90 to the power of 19?";
        const response: string = QueryProcessor(query);
        expect(response).toBe(Math.pow(90, 19).toString());
    });

    test('should return sum of multiple numbers', () => {
        const query = "What is 35 plus 75 plus 95?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("205");
    });


});