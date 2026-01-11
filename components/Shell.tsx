import Link from "next/link";

export default function Shell({ title, subtitle, children }: any) {
  return (
    <div className="container">
      <header className="glass" style={{padding:20,marginBottom:20,display:'flex',justifyContent:'space-between'}}>
        <Link href="/">Brad<span style={{color:'#6cf0ff'}}>AI</span>Mogul</Link>
        <span>{subtitle}</span>
      </header>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}
