# Vibe Code Web Demo - Local Storage Explorer

Đây là một ứng dụng web demo đơn giản được xây dựng bằng **React** và **Vite**. Ứng dụng tập trung vào việc minh họa cách quản lý và lưu trữ dữ liệu trên trình duyệt bằng cách sử dụng `localStorage`.

## Tính Năng Chính

- **Lưu trữ dữ liệu**: Nhập văn bản và lưu trực tiếp vào `localStorage` của trình duyệt.
- **Hiển thị dữ liệu**: Tự động lấy và hiển thị dữ liệu đã lưu mỗi khi tải lại (refresh) trang.
- **Xóa dữ liệu**: Cung cấp tùy chọn nhanh chóng để xóa dữ liệu hiện có khỏi `localStorage`.

## Công Nghệ Sử Dụng

- [React 19](https://react.dev/) - Thư viện UI
- [Vite](https://vitejs.dev/) - Công cụ Build & Phát triển tốc độ cao
- CSS thuần cho việc tạo kiểu (Styling)

## Bắt Đầu Dễ Dàng

Làm theo các bước sau để chạy dự án trên máy cá nhân của bạn:

### 1. Cài đặt thư viện

Mở terminal tại thư mục gốc của dự án và chạy:

```bash
npm install
```

### 2. Khởi chạy Server Development

Sau khi cài đặt xong, hãy chạy lệnh sau:

```bash
npm run dev
```

### 3. Xem kết quả

Mở trình duyệt và truy cập vào đường dẫn mà Vite cung cấp (thường là `http://localhost:5173`).

## Các Lệnh Hữu Ích (Scripts)

- `npm run dev`: Chạy ứng dụng ở môi trường phát triển (Development).
- `npm run build`: Tạo bản Build tối ưu hóa để triển khai (Production).
- `npm run preview`: Chạy thử bản Build vừa được tạo ở máy cục bộ.
- `npm run lint`: Chạy công cụ ESLint để phát hiện lỗi trong code.

## Cấu Trúc File Chính

- `src/App.jsx`: Component gốc (Root Component) của ứng dụng.
- `src/components/DataInput.jsx`: Component xử lý biểu mẫu nhập liệu và giao tiếp tương tác trực tiếp với `localStorage`.
