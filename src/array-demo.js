
/**
* // mutate
* // thêm phần tử
* // push(...) thêm 1 hoặc nhiều phần tử vào cuối mảng
* // unshift(...)thêm 1 hoặc nhiều phần tử vào đầu mảng
*
*
* // xoá phần tử
* // pop() lấy 1 phần tử cuối mảng ra khỏi mảng
* // shift() lấy 1 phần tử đầu mảng ra khỏi mảng
**
* // splice(2, 0, .........) thêm phần tử vào giữa mảng
* // splice(2, 1), splice(2)
 *
 * sắp xếp mảng
* // sort()
*
* // unmatate
 * cắt lát mảng
* // slice(...)
 * nối các mảng
* // concat
*/



/**
 * NẾU không truyền hàm để sort thì thứ tự sắp xếp theo UTF-16 theo tăng dần
 *
 * Nếu truyền hàm thì giá trị của hàm trả ra là số âm, 0, và số dương
 * nếu là số âm hoặc bằng 0 thì giữ nguyên
 * nếu là số dương thì đổi vị trí
 * */








/** mảng cơ bản
* số phần tử tối đa trong mảng phải được khai báo trước
 * tất cả các phẩn tử trong mảng phải cùng kiểu =>
 * nếu là kiểu nguyên thuỷ thì số bites của 1 phần tử đã biết trước
 *
 * mảng được cấp phát liên tục trong bộ nhớ
 * tất cả các phần tử trong mảng có cùng độ lớn
 * a[i] = size*i + 1 thì ra vị trí của phần tử
 *
 * javascipt: có 3 mode chính để làm việc với mảng:
 * truy vấn
 *
 * nếu là object User{}
 *
 * User1{} x,y
 * [0 = {x,y} ] 4-8 byte
 *
 *
 *
 * 0-1
 * bit = 0/1
 * boolean 1 bit
 * 2bits 00,01,10,11 4=2^2
 * 3bit 2^3
 * 8bit = 1byte, kilobyte = 1024 byte, megaByte = 1024 Kb, GigaByte = 1024 Mb
 * kbps: kilo bits / s
 * mb Mb
 *
 *
 * 1Byte = 8bit; 2^8 giá trị
 *
 *
 *
 * lập trình hàm: mute , unmute
 * mutate: đang thay đổi cái đầu vào
 * unmutate : không thay đổi đầu vaò
* */

const orders = [
    { id: 1, customer: "An", items: ["Apple", "Banana"], total: 50, status: "completed" },
    { id: 2, customer: "Bình", items: ["Orange", "Mango"], total: 120, status: "pending" },
    { id: 3, customer: "Chi", items: ["Apple", "Orange"], total: 80, status: "completed" },
    { id: 4, customer: "Duy", items: ["Banana", "Mango", "Kiwi"], total: 200, status: "completed" },
    { id: 5, customer: "An", items: ["Watermelon"], total: 30, status: "cancelled" },
    { id: 6, customer: "Hoa", items: ["Apple", "Kiwi"], total: 150, status: "pending" }
];
/**
 * Yêu cầu thực hành:
 * Bạn hãy sử dụng các phương thức của mảng (filter, map, reduce, find, forEach, some, every, flat, flatMap...) để thực hiện các nhiệm vụ sau:
 */
 /** 1. Lọc đơn hàng: Tạo một mảng mới chỉ chứa các đơn hàng có trạng thái (status) là "completed".
 */

 let Constant  = {
     COMPLETED: "completed",
     PENDING: "pending",
     CANCELLED: "cancelled"
 }

 function getOrderByStatus(filterStatus) {
     let predicate = (order, index, array) => {
         return order.status === filterStatus;
     }
     return orders.filter(predicate);

     // return orders.filter(order => order.status === filterStatus);
 }

console.log(getOrderByStatus(Constant.COMPLETED));

 /** 2. Lấy danh sách khách hàng: Tạo một mảng mới chứa tên của tất cả khách hàng.
 */
function mappingCustomerName() {
    return orders.map(order => order.customer)
 }

console.log(mappingCustomerName());
 /** 3. Tính tổng doanh thu: Tính tổng tiền (total) của tất cả các đơn hàng đã "completed".
 */
sumTotalUnit = (orders) => {
      return orders.map(order => order.total)
          .reduce(
              (previousValue, currentValue) => {
                  previousValue += currentValue;
                  return previousValue;
              },
              0
          )
  }

sumTotalUnitByStatusCompleted = () => {
      let completedOrder = getOrderByStatus(Constant.COMPLETED);
      return sumTotalUnit(completedOrder);
  }
console.log(sumTotalUnitByStatusCompleted());

/** 4. Tìm kiếm đơn hàng: Tìm đơn hàng đầu tiên của khách hàng tên là "An".
 */
let name = 'An';
function findFirstOrderByCustomer(customerName) {
    let predicate = (order, index, array) => {
        return order.customer === name
    };
    return orders.find(predicate, this);
}

console.log('----------------------------')
console.log(findFirstOrderByCustomer('An'));

/* 5. Kiểm tra đơn hàng lớn: Kiểm tra xem có đơn hàng nào có tổng tiền (total) trên 500 hay không? (Trả về true/false).
 */

 /* 6. Kiểm tra tính hợp lệ: Kiểm tra xem có phải tất cả đơn hàng đều có ít nhất một sản phẩm trong danh sách items hay không? (Trả về true/false).
 *
 * 7. Danh sách sản phẩm độc nhất: Tạo một mảng chứa tất cả các sản phẩm có trong tất cả đơn hàng, nhưng mỗi sản phẩm chỉ xuất hiện một lần (không trùng lặp).
 *
 * 8. Thống kê theo khách hàng: Tạo một đối tượng (object) thống kê số lượng đơn hàng của từng khách hàng.
 *
 * Ví dụ: { An: 2, Bình: 1, ... }
 *
 * Gợi ý hướng dẫn giải:
 * Dưới đây là một số gợi ý về phương thức bạn nên sử dụng cho từng câu:
 *
 * Câu 1: Dùng .filter()
 *
 * Câu 2: Dùng .map()
 *
 * Câu 3: Kết hợp .filter() và .reduce()
 *
 * Câu 4: Dùng .find()
 *
 * Câu 5: Dùng .some()
 *
 * Câu 6: Dùng .every()
 *
 * Câu 7: Dùng .flatMap() (hoặc .map() + .flat()) kết hợp với new Set()
 *
 * Câu 8: Dùng .reduce()
 *
 */


// class InventoryManager {
//     constructor(threshold) {
//         this.threshold = threshold;
//     }
//
//     isLowStock(item) {
//         console.log(this);
//         return item.quantity < this.threshold;
//     }
//
//     findEmergencyItem(items) {
//         // Nếu không truyền 'this', hàm isLowStock sẽ bị lỗi vì không thấy 'this.threshold'
//         return items.find(this.isLowStock, this);
//     }
// }
//
// const manager = new InventoryManager(5);
// const stock = [{ name: "Pen", quantity: 10 }, { name: "Paper", quantity: 2 }];
// console.log(manager.findEmergencyItem(stock)); // { name: "Paper", quantity: 2 }

// js luôn truyền ngầm định this là tại scope nơi được khai báo nếu không chỉ định tường minh
// const validator = {
//     minPrice: 100,
//     isExpensive(order) {
//         // 'this' ở đây sẽ trỏ tới 'validator' nhờ tham số thisArg
//         console.log(this);
//         return order.total > this.minPrice;
//     }
// };
//
// const orders1 = [
//     { id: 1, total: 50 },
//     { id: 2, total: 150 }
// ];
//
// // Truyền 'validator' làm thisArg ở tham số thứ 2 của .find()
// const expensiveOrder = orders1.find(validator.isExpensive, validator);
//
// console.log(expensiveOrder); // { id: 2, total: 150 }










