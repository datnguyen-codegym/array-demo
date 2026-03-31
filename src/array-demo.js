


let array = new Array(10);


console.log(array.reduce(
    (previousValue, currentValue) => {
        return previousValue.concat(currentValue.toString());
    }, ""
))


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
 *
 * 1. Lọc đơn hàng: Tạo một mảng mới chỉ chứa các đơn hàng có trạng thái (status) là "completed".
 *
 * 2. Lấy danh sách khách hàng: Tạo một mảng mới chứa tên của tất cả khách hàng.
 *
 * 3. Tính tổng doanh thu: Tính tổng tiền (total) của tất cả các đơn hàng đã "completed".
 *
 * 4. Tìm kiếm đơn hàng: Tìm đơn hàng đầu tiên của khách hàng tên là "An".
 *
 * 5. Kiểm tra đơn hàng lớn: Kiểm tra xem có đơn hàng nào có tổng tiền (total) trên 500 hay không? (Trả về true/false).
 *
 * 6. Kiểm tra tính hợp lệ: Kiểm tra xem có phải tất cả đơn hàng đều có ít nhất một sản phẩm trong danh sách items hay không? (Trả về true/false).
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











