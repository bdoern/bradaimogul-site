"use client";
import Image from "next/image";

export default function ModuleCard({ title, desc, href }: any) {
  return (
    <div className="glass" style={{padding:24}}>
      <h2>{title}</h2>
      <p style={{opacity:.7}}>{desc}</p>
      <button onClick={()=>location.href=href} style={{marginTop:16}}>Enter</button>
    </div>
  );
}
