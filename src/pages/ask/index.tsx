import FabForm from "@/components/form/fab-form";
import toast from "react-hot-toast";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * ONEFIX – Form Sửa gấp
 * UI rút còn 1 bước, dùng đúng component có sẵn (FabForm).
 * Chưa gọi API, Bước 10 sẽ nối SDK + backend ở onSubmit.
 */

type UrgentForm = {
  category: "electricity" | "water" | "other" | "";
  description: string;
  images: File[];
  address: string;
  phone: string;
};

const CATEGORIES: Array<{ key: UrgentForm["category"]; label: string }> = [
  { key: "electricity", label: "Điện" },
  { key: "water", label: "Nước" },
  { key: "other", label: "Khác" },
];

export default function AskPage() {
  const [form, setForm] = useState<UrgentForm>({
    category: "",
    description: "",
    images: [],
    address: "",
    phone: "",
  });

  const navigate = useNavigate();

  const canSubmit = useMemo(() => {
    return (
      !!form.category &&
      form.description.trim().length >= 10 && // mô tả tối thiểu
      !!form.address.trim() &&
      !!form.phone.trim()
    );
  }, [form]);

  function update<K extends keyof UrgentForm>(key: K, value: UrgentForm[K]) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  function onPickImages(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files ? Array.from(e.target.files).slice(0, 3) : [];
    update("images", files);
  }

  return (
    <FabForm
      fab={{
        children: "Gửi yêu cầu khẩn cấp",
        disabled: !canSubmit,
        onDisabledClick() {
          toast.error("Vui lòng điền đầy đủ thông tin!");
        },
      }}
      onSubmit={async () => {
        // BƯỚC 10 sẽ nối SDK + API tại đây (getAccessToken, getPhoneNumber, POST /bookings)
        // Tạm thời chỉ demo:
        console.log("URGENT_FORM", form);
        toast.success("Đã ghi nhận yêu cầu. 1FIX sẽ liên hệ ngay!");
        navigate("/", { viewTransition: true });
      }}
    >
      {/* Nhóm: Loại sự cố */}
      <div className="bg-white p-4">
        <div className="text-base font-semibold mb-2">Loại sự cố</div>
        <div className="flex gap-8">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              className={`ofx-chip ${form.category === c.key ? "is-selected" : ""}`}
              onClick={() => update("category", c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Nhóm: Mô tả */}
      <div className="bg-white p-4 mt-2">
        <label className="block text-base font-semibold mb-2">Mô tả ngắn</label>
        <textarea
          rows={4}
          placeholder="Ví dụ: Rò rỉ nước dưới bồn rửa, đã khóa van tổng..."
          className="w-full zaui-input zaui-textarea"
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
        />
        <div className="form-helper mt-1">Tối thiểu 10 ký tự.</div>
      </div>

      {/* Nhóm: Ảnh hiện trường */}
      <div className="bg-white p-4 mt-2">
        <div className="flex items-center justify-between">
          <label className="text-base font-semibold">Ảnh hiện trường (tối đa 3)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={onPickImages}
            style={{ width: 140 }}
          />
        </div>
        {form.images.length > 0 && (
          <div className="mt-3 grid grid-cols-3 gap-8">
            {form.images.map((f, i) => (
              <img
                key={i}
                src={URL.createObjectURL(f)}
                alt={`upload-${i}`}
                className="w-full h-28 object-cover rounded-lg"
              />
            ))}
          </div>
        )}
      </div>

      {/* Nhóm: Địa chỉ */}
      <div className="bg-white p-4 mt-2">
        <label className="block text-base font-semibold mb-2">Địa chỉ</label>
        <input
          type="text"
          placeholder="Số nhà, đường, phường/xã…"
          className="w-full zaui-input"
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
        />
      </div>

      {/* Nhóm: Số điện thoại */}
      <div className="bg-white p-4 mt-2">
        <label className="block text-base font-semibold mb-2">Số điện thoại</label>
        <input
          type="tel"
          inputMode="tel"
          placeholder="09xx xxx xxx"
          className="w-full zaui-input"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
        <div className="form-helper mt-1">
          Bước 10 sẽ tự động điền bằng Zalo (getPhoneNumber) khi bạn bấm Gửi.
        </div>
      </div>

      {/* CTA phụ: Gọi ngay */}
      <div className="bg-white p-4 mt-2">
        <a href="tel:0842532023" className="ofx-chip is-selected">Gọi 1FIX: 0842 532 023</a>
      </div>
    </FabForm>
  );
}
