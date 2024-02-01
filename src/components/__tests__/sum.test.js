import {sum} from "../sum"

test("Sum should return addition of two given numbers",()=>{
    const result = sum(5,2)

    expect(result).toBe(7)
});