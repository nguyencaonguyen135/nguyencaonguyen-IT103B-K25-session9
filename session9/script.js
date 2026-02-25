let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500 ,2800, 1200, -500, 3200];

let orderReports = [];
for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < revenues.length; j++) {
        if(i == j){
            orderReports[i] = orders[i] + " mang về " + revenues[j] + " USD";
        }
    }
}
console.log(orderReports);
let sum = 0;
for (let i = 0; i < revenues.length; i++) {
    if(revenues[i] >= 0){
        sum = sum + revenues[i];
    }
}
console.log("Tổng doanh thu hợp lệ là: ", sum);