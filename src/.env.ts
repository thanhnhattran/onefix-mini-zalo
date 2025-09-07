// src/env.ts
export function initEnv() {
  // Đẩy biến từ Vite env lên window để router.tsx dùng
  (window as any).APP_ID = import.meta.env.VITE_APP_ID;
  (window as any).BASE_PATH =
    import.meta.env.VITE_ROUTER_BASE || `/zapps/${import.meta.env.VITE_APP_ID}/`;
}
