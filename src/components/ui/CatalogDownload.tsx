"use client";
import { Download, FileText } from "lucide-react";

interface CatalogDownloadProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  label?: string;
  fileName?: string;
  className?: string;
}

export default function CatalogDownload({
  variant = "primary",
  size = "md",
  label = "제품 카탈로그 다운로드",
  fileName = "ecosa-catalog.pdf",
  className = ""
}: CatalogDownloadProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-green-600 to-cyan-600 text-white hover:from-green-700 hover:to-cyan-700 shadow-md hover:shadow-lg",
    secondary: "bg-white text-green-600 border-2 border-green-600 hover:bg-green-50",
    outline: "bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-green-500"
  };

  return (
    <a
      href={`/catalogs/${fileName}`}
      download
      className={`
        inline-flex items-center gap-2 rounded-lg font-semibold
        transition-all duration-300 transform hover:scale-105
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      <Download size={size === "sm" ? 14 : size === "md" ? 16 : 18} />
      <span>{label}</span>
    </a>
  );
}

// 카탈로그 카드 컴포넌트
interface CatalogCardProps {
  title: string;
  description: string;
  fileName: string;
  fileSize?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function CatalogCard({
  title,
  description,
  fileName,
  fileSize,
  icon,
  className = ""
}: CatalogCardProps) {
  return (
    <div className={`
      group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6
      hover:shadow-xl hover:border-green-400 transition-all duration-500
      ${className}
    `}>
      {/* 배경 그라디언트 효과 */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        {/* 아이콘 */}
        <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-green-100 to-cyan-100 text-green-600 group-hover:scale-110 transition-transform duration-300">
          {icon || <FileText size={32} />}
        </div>

        {/* 제목 & 설명 */}
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gradient transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        {/* 파일 정보 */}
        {fileSize && (
          <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
            <FileText size={14} />
            <span>PDF · {fileSize}</span>
          </div>
        )}

        {/* 다운로드 버튼 */}
        <CatalogDownload
          variant="primary"
          size="md"
          label="다운로드"
          fileName={fileName}
          className="w-full justify-center"
        />
      </div>
    </div>
  );
}
