import { ReactElement, MouseEvent, useCallback, useRef, useState } from "react";

import { typedMemo } from "src/shared/lib";
import { useOnClickOutside } from "src/shared/hooks";
import { Label } from "src/shared/ui";
import { Arrow, Inner, Options, Option, Prefix, SelectBody, ValueButton } from "./Select.styled";

interface Option<T> {
  value: T;
  label: string;
}

interface Props<T> {
  title?: string;
  prefix?: string;
  value: T;
  placeholder?: string;
  leftTitle?: boolean;
  options: Option<T>[];
  onChange: (value: T) => void;
}

export const Select = typedMemo(function Select<T extends string | number | undefined>({
  prefix,
  title,
  value,
  placeholder,
  options,
  onChange,
}: Props<T>): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const selectedLabel = options?.find((option) => option?.value === value)?.label ?? placeholder;

  const [open, setOpen] = useState(false);

  const handleBodyClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    setOpen((prev) => !prev);
  };

  const handleOptionClick = (newValue: T) => {
    if (newValue !== value) {
      onChange(newValue);
    }
    setOpen(false);
  };

  const handleClose = useCallback(() => setOpen(false), []);

  useOnClickOutside(ref, handleClose);

  return (
    <div ref={ref}>
      {!!title && <Label label={title} />}
      <Inner>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <SelectBody>
          <ValueButton type="button" onClick={handleBodyClick}>
            {selectedLabel ?? " "}
            <Arrow $reverse={open} />
          </ValueButton>

          {open && (
            <Options>
              {options.map(({ value: optionValue, label }, idx) => {
                const active = value === optionValue;
                return (
                  <Option $active={active} onClick={() => handleOptionClick(optionValue)} key={idx}>
                    {label}
                  </Option>
                );
              })}
            </Options>
          )}
        </SelectBody>
      </Inner>
    </div>
  );
});
