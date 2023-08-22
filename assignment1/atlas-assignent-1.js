/**
 * 
 * @param input
 * {ให้เขียนฟังก์ชั่นที่รับข้อมูลเป็น Array ของ number จากนั้น Return เป็น Array ที่ถูก +1 
    * ตัวอย่าง
    * input [2,3] return [2,4]
    * input [9] return [1,0]
    * input [9,9,9] return [1,0,0,0]
    * input [7,8,8] return [7,8,9]}  
 */
const atlasAssignment1 = (input) => {

   let number = 1
   const result = []

   for ( let = input.length - 1; i >= 0; i--) {
      const total = input[i] + number;
      number = Math.floor(total / 10);
      result.unshift(total % 10);
   }

   while (number > 0) {
      result.unshift(carry % 10);
      carry = Math.floor(carry / 10);
   }

   return result;
}

console.log(atlasAssignment1([2, 3]));
console.log(atlasAssignment1([9]));
console.log(atlasAssignment1([9, 9, 9]));
console.log(atlasAssignment1([7, 8, 8]));