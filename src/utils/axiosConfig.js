// utils/axiosConfig.js
import axios from 'axios';

const axiosInstance  = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance .interceptors.request.use(
    (config) => {
        // Điều gì đó trước khi gửi yêu cầu
        // Ví dụ: Thêm thông tin đăng nhập, xử lý token, ...

        return config;
    },
    (error) => {
        // Xử lý lỗi request
        return Promise.reject(error);
    }
);

// Axios Interceptors - Response
axiosInstance .interceptors.response.use(
    (response) => {
        // Điều gì đó sau khi nhận phản hồi
        // Ví dụ: Kiểm tra lỗi trong phản hồi, chuyển đổi dữ liệu, ...

        return response;
    },
    (error) => {
        // Xử lý lỗi response
        return Promise.reject(error);
    }
);

export default axiosInstance ;
