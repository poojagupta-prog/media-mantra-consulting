"use client";

import { useState } from "react";
import { countryCodes } from "@/lib/contact-phone";

export function ContactPhoneFields({ inputClassName = "" }: { inputClassName?: string }) {
  const [countryCode, setCountryCode] = useState("+91");

  return (
    <div className="grid min-w-0 grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 sm:col-span-2">
      <label className="block min-w-0 text-[11px] font-semibold">
        Country code *
        <select
          className={inputClassName}
          style={{
            appearance: "none",
            paddingRight: "36px",
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2319181b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
          }}
          name="countryCode"
          autoComplete="tel-country-code"
          value={countryCode}
          onChange={(event) => setCountryCode(event.target.value)}
          required
        >
          {countryCodes.map(([country, code]) => (
            <option key={code} value={code}>{country} ({code})</option>
          ))}
        </select>
      </label>
      <label className="block min-w-0 text-[11px] font-semibold">
        Phone number *
        <input
          className={inputClassName}
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder="9876543210"
          required
          minLength={6}
          maxLength={16 - countryCode.length}
          pattern={`[0-9]{6,${16 - countryCode.length}}`}
          title="Enter at least 6 digits without the country code, spaces, or punctuation."
        />
      </label>
    </div>
  );
}
