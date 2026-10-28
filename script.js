// Hàm cập nhật hiển thị khi hover hoặc focus vào ảnh
function upDate(previewPic) {
  console.log("Sự kiện upDate/focus được kích hoạt!");
  console.log("Mô tả Alt:", previewPic.alt);
  console.log("Đường dẫn Src:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Hàm khôi phục lại trạng thái ban đầu khi rời chuột hoặc blur khỏi ảnh
function undo() {
  console.log("Sự kiện undo/blur được kích hoạt!");

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Di chuột qua hoặc dùng phím Tab để chọn ảnh bên dưới.";
}

// Hàm chạy tự động khi trang tải xong (onload)
function addTabIndex() {
  console.log("Trang web đã tải xong (onload). Đang thêm thuộc tính tabindex...");

  // Lấy danh sách tất cả các ảnh xem trước có class là 'preview'
  const images = document.querySelectorAll(".preview");

  // Vòng lặp for duyệt qua từng hình ảnh để gán tabindex="0"
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Đã thêm tabindex='0' cho ảnh thứ " + (i + 1));
  }
}
