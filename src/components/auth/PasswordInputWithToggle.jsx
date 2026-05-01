"use client";

import { Eye, EyeOff } from "lucide-react";
import { useId, useState } from "react";

/**
 * Accessible password input with show/hide toggle (react-hook-form compatible).
 */
const PasswordInputWithToggle = ({
  id: idProp,
  "aria-invalid": ariaInvalid,
  "aria-describedby": ariaDescribedBy,
  registerProps,
  autoComplete,
  placeholder = "••••••••",
  className = "",
}) => {
  const generatedId = useId();
  const inputId = idProp ?? generatedId;
  const [visible, setVisible] = useState(false);
  const toggleId = `${inputId}-toggle`;

  const baseInputClass =
    "w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-4 pr-11 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-slate-500";

  return (
    <div className="relative">
      <input
        id={inputId}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedBy}
        autoComplete={autoComplete}
        className={`${baseInputClass} ${className}`.trim()}
        {...registerProps}
      />
      <button
        id={toggleId}
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        aria-label={visible ? "Hide password" : "Show password"}
        aria-controls={inputId}
        aria-pressed={visible}
      >
        {visible ? <EyeOff className="h-4 w-4" aria-hidden /> : <Eye className="h-4 w-4" aria-hidden />}
      </button>
    </div>
  );
};

export default PasswordInputWithToggle;
