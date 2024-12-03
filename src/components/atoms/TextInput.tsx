import { FC, InputHTMLAttributes, useState } from "react";
import { ColorSelectIcon, FontSizeIcon } from "@components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  handleInput: (value: string) => void;
  handleFontSizeChange: (value: number) => void;
  handleColorChange: (value: string) => void;
  resetInput?: boolean;
  error?: boolean;
}

const TextInput: FC<Props> = (props: Props) => {
  const {
    handleInput,
    error = false,
    handleFontSizeChange,
    handleColorChange,
    className,
    resetInput,
    ...componentProps
  } = props;

  const [value, setValue] = useState<string>();
  const [selectedFontSize, setSelectedFontSize] = useState<10 | 14 | 18>(14);

  const charLim: number = 254; //254 is the max length for email addresses

  //add max length check
  const onInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const val = (event.target as HTMLInputElement).value;
    setValue(val);
    handleInput(val);
  };

  const updateFontSize = (size: number) => {
    handleFontSizeChange(size);
    setSelectedFontSize(size as 10 | 14 | 18);
  };

  return (
    <div className="text-options-container">
      <div className=" relative flex w-[525px] h-[40px] divide-x-[1px] divide-[#C4C4C4]">
        <input
          className={`h-full w-full bg-transparent outline-none focus:outline-none active:outline-none text-xs pl-4 placeholder:text-[#808080] ${className} ${
            value && (value.length >= charLim || error)
              ? "text-theme-red"
              : "text-black"
          } ${componentProps.disabled ? "" : ""}`}
          onInput={(e) => onInput(e)}
          placeholder={"Add text here"}
          type={componentProps.type ?? "text"}
          maxLength={charLim}
          disabled={componentProps.disabled}
          name={componentProps.name}
          required={componentProps.required}
        />
        <div className="flex items-end px-3 pb-1.5 gap-2">
          <FontSizeIcon
            size={10}
            handleClick={updateFontSize}
            selectedSize={selectedFontSize}
          />
          <FontSizeIcon
            size={14}
            handleClick={updateFontSize}
            selectedSize={selectedFontSize}
          />
          <FontSizeIcon
            size={18}
            handleClick={updateFontSize}
            selectedSize={selectedFontSize}
          />
        </div>
        <div className="flex items-end px-3 pb-1.5 gap-2">
          <ColorSelectIcon color="black" handleClick={handleColorChange} />
          <ColorSelectIcon color="white" handleClick={handleColorChange} />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
