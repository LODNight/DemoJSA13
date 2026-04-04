// Kiểm tra nếu đã có user đang đăng nhập
if (localStorage.getItem("currentUser")){
    // Nếu có thì chuyển về trang chính
    location.href = "/index.html"
}

// Lấy thẻ form
let form = document.querySelector("form");

// Lắng nghe sự kiện khi submit form
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Ngăn form reload trang

    // Lấy dữ liệu từ input và bỏ khoảng trắng đầu/cuối
    let username = document.getElementById("username").value.trim()
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()

    // Regex kiểm tra ký tự
    let lowerCase = /[a-z]/g; // có chữ thường
    let uperCase = /[A-Z]/g;  // có chữ hoa
    let numbers = /[0-9]/g;   // có số

    // Kiểm tra username phải >= 6 ký tự
    if (username.length < 6){
        alert("Username must be > 6")
    } else {

        // Nếu đã có danh sách users trong localStorage
        if(localStorage.getItem("users")){
            // Lấy ra và chuyển từ JSON -> object
            let users = JSON.parse(localStorage.getItem("users"))

            // Thêm user mới vào mảng
            users.push({
                username,
                email,
                password
            })

            // Lưu lại vào localStorage
            localStorage.setItem("users", JSON.stringify(users))

        } else {
            // Nếu chưa có thì tạo mới mảng users
            localStorage.setItem(
                "users",
                JSON.stringify([
                    {
                        email,
                        password,
                        username
                    }
                ])
            )
        }

        // Thông báo thành công
        alert("Created")

        // Chuyển sang trang đăng nhập
        location.href = "./login.html"
    }
})