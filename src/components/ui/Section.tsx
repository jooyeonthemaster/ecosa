import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  variant?: "default" | "hero";
};

export default function Section({ id, title, subtitle, children, variant = "default" }: SectionProps) {
  const isHero = variant === "hero";
  
  return (
    <section 
      id={id} 
      className={`relative mx-auto max-w-7xl px-6 ${isHero ? 'py-32' : 'py-24'}`}
    >
      {/* Decorative Background Elements */}
      {isHero && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>
      )}
      
      <div className={isHero ? "text-center" : ""}>
        {/* Decorative Line */}
        {isHero && (
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full" />
          </div>
        )}
        
        <h2 className={`font-bold tracking-tight ${
          isHero 
            ? 'text-4xl sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-cyan-600 to-emerald-600' 
            : 'text-3xl text-gray-900'
        }`}>
          {title}
        </h2>
        
        {subtitle && (
          <p className={`mt-6 text-lg leading-8 ${
            isHero 
              ? 'text-gray-600 max-w-2xl mx-auto' 
              : 'text-gray-600 max-w-3xl'
          }`}>
            {subtitle}
          </p>
        )}
      </div>
      
      {children && (
        <div className={isHero ? "mt-16" : "mt-10"}>
          {children}
        </div>
      )}
    </section>
  );
}




