const names = ["iPhone 15", "Samsung S23", "Oppo Reno", "Xiaomi 13", "Nokia C20"];
let prices = [1200, 900, 450, 600, 80];
const stocks = [10, 5, 0, 8, 15];

const showMenu = () => prompt(`--- HỆ THỐNG QUẢN LÝ KHO HÀNG ---
1. Lọc sản phẩm cao cấp (>500)
2. Kiểm định trạng thái dữ liệu
3. Phân tích giá trị vốn hóa
4. Chiết khấu 10%
5. Tìm kiếm sản phẩm
6. Báo cáo tồn kho
7. Thoát

Nhập lựa chọn (1-7):`);

const filterHighEnd = () => {
  const result = names.filter((_, i) => prices[i] > 500);
  alert("Sản phẩm cao cấp (>500):\n" + (result.join(", ") || "Không có"));
};

const checkStatus = () => {
  const outOfStock = stocks.some(s => s === 0);
  const allAbove100 = prices.every(p => p > 100);
  alert(`Kiểm định:
- Có sản phẩm hết hàng: ${outOfStock ? "Có" : "Không"}
- Tất cả giá > 100: ${allAbove100 ? "Đúng" : "Sai"}`);
};

const calcTotal = () => {
  const total = prices.reduce((sum, p, i) => sum + p * stocks[i], 0);
  alert(`Tổng giá trị kho: ${total.toLocaleString()} USD`);
};

const applyDiscount = () => {
  prices = prices.map(p => p * 0.9);
  alert("Đã giảm giá 10% toàn bộ!");
};

const searchProduct = () => {
  let keyword = prompt("Nhập tên sản phẩm cần tìm:").toLowerCase();
  let results = [];

  names.forEach((name, index) => {
    if (name.toLowerCase().includes(keyword)) {
      results.push(
        `${name} - Giá: ${prices[index]} - Kho: ${stocks[index]}`
      );
    }
  });
  alert(results.length ? "Kết quả:\n" + results.join("\n") : "Không tìm thấy");
};

const showReport = () => {
  const report = stocks.map((qty, i) => 
    `${names[i]}: ${qty > 0 ? "Còn hàng" : "Hết hàng"} (${qty})`
  );
  alert("Báo cáo tồn kho:\n" + report.join("\n"));
};

let running = true;
while (running) {
  const choice = showMenu();
  
  if (choice === null) 
    break;

  switch (Number(choice)) {
    case 1: 
      filterHighEnd(); 
      break;
    case 2: 
      checkStatus(); 
      break;
    case 3: 
      calcTotal(); 
      break;
    case 4: 
      applyDiscount(); 
      break;
    case 5: 
      searchProduct(); 
      break;
    case 6: 
      showReport(); 
      break;
    case 7: 
      running = false; alert("Tạm biệt!"); 
      break;
    default: 
      alert("Lựa chọn không hợp lệ (1-7)");
  }
}
