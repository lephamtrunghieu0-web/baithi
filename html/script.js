$(document).ready(function() {
    
    // 1. Hiệu ứng di chuột đổi màu nhẹ cho các card tin tức ở trang chủ
    $('.card').hover(
        function() { $(this).css('border', '1px solid #d32f2f'); },
        function() { $(this).css('border', 'none'); }
    );

    // 2. Xử lý logic Đăng nhập bằng jQuery
    $('#loginForm').on('submit', function(e) {
        e.preventDefault(); // Ngăn trang bị reload lại
        
        let username = $('#username').val().trim();
        let password = $('#password').val().trim();
        
        // Kiểm tra validation thô sơ
        if(username === "admin" && password === "123456") {
            $('#loginMessage').css('color', 'green').text('🎉 Đăng nhập thành công! Đang chuyển hướng...');
            setTimeout(function() {
                window.location.href = "index.html";
            }, 1500);
        } else {
            $('#loginMessage').css('color', 'red').text('❌ Sai tên đăng nhập hoặc mật khẩu! (Thử: admin / 123456)');
        }
    });

    // 3. Xử lý gửi Phản hồi/Comments bằng jQuery ở trang chi tiết
    $('#commentForm').on('submit', function(e) {
        e.preventDefault();
        
        let user = $('#commentUser').val().trim();
        let content = $('#commentContent').val().trim();
        
        if(user !== "" && content !== "") {
            // Tạo cấu trúc thẻ comment mới
            let newComment = `
                <div class="comment-item" style="display:none;">
                    <strong>${user}:</strong> ${content}
                </div>
            `;
            
            // Đẩy vào danh sách và tạo hiệu ứng hiện dần (fadeIn) theo thế mạnh của jQuery
            $('#commentList').prepend(newComment);
            $('.comment-item').first().fadeIn(500);
            
            // Xóa sạch form sau khi comment thành công
            $('#commentUser').val('');
            $('#commentContent').val('');
        }
    });
});