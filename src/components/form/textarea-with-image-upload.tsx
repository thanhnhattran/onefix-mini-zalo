import { ChangeEvent, useState } from 'react';
import { Input } from 'zmp-ui';
import { PlusIcon } from '../icons/plus-icon';
import { chooseImage } from 'zmp-sdk';
import { TextAreaProps } from 'zmp-ui/input';

interface TextareaWithImageUploadProps {
  textarea: {
    value: string;
    onChange: (value: string) => void;
  } & TextAreaProps;
  images: {
    values: string[];
    onChange: (values: string[]) => void;
  };
}

function TextareaWithImageUpload({ textarea, images }: TextareaWithImageUploadProps) {
  const [charCount, setCharCount] = useState(0);
  const MAX_CHARS = 500;
  const MIN_CHARS = 10;

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCharCount(value.length);
    textarea.onChange(value);
  };

  const handleImageUpload = async () => {
    const { filePaths } = await chooseImage({
      count: 5,
    });
    images.onChange(images.values.concat(filePaths));
  };

  return (
    <div className="flex flex-grow flex-col space-y-4 rounded-[10px] border border-black/10 px-3 py-4 text-sm text-[darkgray]">
      <Input.TextArea
        className="p-0"
        autoHeight
        showCount
        maxLength={MAX_CHARS}
        {...textarea}
        value={textarea.value}
        onChange={handleTextareaChange}
      />
      <hr className="border-t border-black/10" />

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex h-[60px] w-[60px] flex-col items-center justify-center rounded-lg bg-teal-500/10 p-[18px] cursor-pointer hover:bg-teal-500/20 transition-colors"
          onClick={handleImageUpload}
        >
          <PlusIcon />
        </button>
        <p className="flex-1">
          Tải lên hình ảnh liên quan (phiếu kiểm tra, CT, hồ sơ bệnh án, vùng bị bệnh, thuốc men,
          v.v.)
        </p>
      </div>

      {images.values.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {images.values.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Uploaded image ${index + 1}`}
                className="h-20 w-20 object-cover rounded-lg"
              />
              <button
                onClick={() => images.onChange(images.values.filter((_, i) => i !== index))}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TextareaWithImageUpload;
