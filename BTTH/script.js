const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];

const displayPlayerList = (listPlayer) => {
    console.log("\n=> DANH SÁCH CẦU THỦ:");
    listPlayer.forEach((player) => {
        console.log(`- ${player[0]} (${player[2]}): ${player[1]} bàn thắng`);
    });
    if (findUser) {
        console.log("Không tìm thấy cầu thủ này");
    } else {
        console.log(`${findUser[0]} (${findUser[2]}) : ${findUser[1]}`);
        
    }
};

const filterPlayer = (searchPlayer, listPlayer) => {
    let findUser = listPlayer.find((player) => {
        return player[0].toLowerCase.include(searchPlayer.toLowerCase().trim());
    });
}

const filterByPosition = () => {
    const position = prompt("Nhập vị trí muốn lọc (FW/MF/DF/GK):");
    const filtered = squad.filter((player) => player[2].toUpperCase() === position.toUpperCase());
    
    if (filtered.length > 0) {
        console.log("\n=> KẾT QUẢ LỌC:");
        filtered.forEach((player) => {
            console.log(`- ${player[0]} (${player[1]} bàn)`);
        });
    } else {
        console.log("\n=> Không có cầu thủ nào ở vị trí này!");
    }
};

const totalGoals = () => {
    const total = squad.reduce((sum, player) => sum + player[1], 0);
    console.log(`\n=> Tổng số bàn thắng toàn đội: ${total} bàn`);
};


const checkPerformance = () => {
    console.log("\n=> KIỂM TRA HIỆU SUẤT:");
  
    const hasPlayerWithNoGoal = squad.some((player) => player[1] === 0);
    if (hasPlayerWithNoGoal) {
        console.log("- Có cầu thủ chưa ghi bàn");
    }

    const allPlayersScored = squad.every((player) => player[1] > 0);
    if (allPlayersScored) {
        console.log("- Tất cả cầu thủ đều đã ghi bàn");
    } else {
        console.log("- Chưa phải tất cả cầu thủ đều đã ghi bàn");
    }
};

let choice;
const showMenu = () => {
    choice = +prompt(`
        --- QUẢN LÝ ĐỘI BÓNG ---
    1. Xem danh sách
    2. Tìm kiếm (Find)
    3. Lọc vị trí (Filter)
    4. Tổng bàn thắng (Reduce)
    5. Kiểm tra hiệu suất (Some/Every)
    0. Thoát`);
};

do {
    showMenu();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    switch (choice) {
        case "1":
            displayPlayerList(squad);
            break;
        case "2":
            let searchName = prompt("Mời bạn nhập tên cầu thủ");
            filterPlayer(searchName, squad);
            break;
        case "3":
            filterByPosition();
            break;
        case "4":
            totalGoals();
            break;
        case "5":
            checkPerformance();
            break;
        case "0":
            console.log("\n=> Hẹn gặp lại!");
            break;
        default:
            console.log("\n=> Lựa chọn không hợp lệ!");
    }
} while (choice != 0);