const allCases = [
  { id:"VG-2025-00058", name:"Omar Al Rashidi",    type:"Individual", service:"Employment History Verification",   status:"review",    date:"Apr 24, 2025", sla:3, flag:false },
  { id:"VG-2025-00057", name:"Sarah Johnson",       type:"Individual", service:"Degree & Certificate Verification", status:"action",    date:"Apr 23, 2025", sla:1, flag:true  },
  { id:"VG-2025-00056", name:"Raj Patel",           type:"Individual", service:"Professional Licence Verification",  status:"progress",  date:"Apr 22, 2025", sla:8, flag:false },
  { id:"VG-2025-00055", name:"Fatima Al Zaabi",     type:"Individual", service:"Identity Document Verification",   status:"submitted", date:"Apr 22, 2025", sla:5, flag:false },
  { id:"VG-2025-00054", name:"Chen Wei",            type:"Individual", service:"Good Standing Certificate",        status:"complete",  date:"Apr 20, 2025", sla:0, flag:false },
  { id:"VG-2025-00053", name:"TechCorp LLC",        type:"Employer",   service:"Employment Verification ×12", status:"progress",  date:"Apr 19, 2025", sla:6, flag:false },
  { id:"VG-2025-00052", name:"GlobalHire Ltd",      type:"Employer",   service:"Degree Verification ×5", status:"issued", date:"Apr 15, 2025", sla:0, flag:false },
  { id:"VG-2025-00051", name:"Ahmed Khalil",        type:"Individual", service:"Employment History Verification",   status:"progress",  date:"Apr 20, 2025", sla:4, flag:false },
  { id:"VG-2025-00050", name:"Maria Santos",        type:"Individual", service:"Degree & Certificate Verification", status:"action",    date:"Apr 19, 2025", sla:0, flag:true  },
  { id:"VG-2025-00049", name:"BuildCo Dubai",       type:"Employer",   service:"Identity Verification ×8",          status:"issued",    date:"Apr 17, 2025", sla:0, flag:false },
];

const statusConfig: Record<string, { label:string; cls:string; dot:string }> = {
  submitted:{ label:"Submitted",               cls:"badge-submitted", dot:"#5A6A7E" },
  review:   { label:"Under Review",            cls:"badge-review",    dot:"#C8810A" },
  action:   { label:"Action Required",         cls:"badge-action",    dot:"#B84040" },
  progress: { label:"Verification In Progress",cls:"badge-progress",  dot:"#1E5BAF" },
  complete: { label:"Completed",               cls:"badge-complete",  dot:"#2E7A5B" },
  issued:   { label:"Report Issued",           cls:"badge-issued",    dot:"#C8A45A" },
};

export default function CasesPage() {
  return (
    <div style={{ display:"flex", minHeight:"100vh", fontFamily:"'DM Sans',sans-serif" }}>

      {/* SIDEBAR */}
      <aside style={{ width:"240px", background:"#162E4D", display:"flex", flexDirection:"column", flexShrink:0 }}>
        <div style={{ padding:"24px 20px", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <div style={{ width:"30px", height:"30px", background:"#C8A45A", borderRadius:"6px", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#1E3A5F"/></svg>
            </div>
            <div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"14px", fontWeight:"700", color:"#fff" }}>TrueValidate</div>
              <div style={{ fontSize:"9px", color:"#C8A45A", letterSpacing:"1.5px", textTransform:"uppercase" }}>Admin Panel</div>
            </div>
          </div>
        </div>
        <nav style={{ padding:"16px 0", flex:1 }}>
          {[
            { icon:"📊", label:"Dashboard", href:"/admin", active:false },
            { icon:"📋", label:"All Cases",  href:"/admin/cases", active:true },
            { icon:"⚠️",  label:"Requires Action", href:"#", active:false, badge:"9" },
            { icon:"👥", label:"User Accounts", href:"#", active:false },
            { icon:"📈", label:"Reports & SLA", href:"#", active:false },
            { icon:"🔒", label:"Audit Log", href:"#", active:false },
            { icon:"⚙️",  label:"Settings", href:"#", active:false },
          ].map((item,i) => (
            <a key={i} href={item.href} style={{
              display:"flex", alignItems:"center", gap:"10px", padding:"10px 20px",
              fontSize:"13px", fontWeight: item.active ? "600" : "400",
              color: item.active ? "#C8A45A" : "rgba(255,255,255,0.55)",
              background: item.active ? "rgba(200,164,90,0.1)" : "transparent",
              borderLeft: item.active ? "3px solid #C8A45A" : "3px solid transparent",
              textDecoration:"none"
            }}>
              <span>{item.icon}</span>
              <span style={{ flex:1 }}>{item.label}</span>
              {item.badge && <span style={{ background:"#B84040", color:"#fff", fontSize:"10px", fontWeight:"700", padding:"1px 7px", borderRadius:"10px" }}>{item.badge}</span>}
            </a>
          ))}
        </nav>
        <div style={{ padding:"16px 20px", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
            <div style={{ width:"30px", height:"30px", background:"#C8A45A", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:"11px", fontWeight:"700", color:"#1E3A5F" }}>SA</span>
            </div>
            <div>
              <div style={{ fontSize:"12px", fontWeight:"600", color:"#fff" }}>System Admin</div>
              <div style={{ fontSize:"10px", color:"rgba(255,255,255,0.35)" }}>Full Access</div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div style={{ flex:1, overflow:"auto", background:"#F0F4F8" }}>
        <header style={{ background:"#fff", borderBottom:"1px solid #EEF3F8", padding:"0 32px", height:"60px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"20px", fontWeight:"700", color:"#1E3A5F" }}>All Cases</h1>
            <p style={{ fontSize:"11px", color:"#8899AA" }}>247 total cases · 38 active</p>
          </div>
          <button style={{ background:"#1E3A5F", color:"#C8A45A", border:"none", borderRadius:"8px", padding:"8px 16px", fontSize:"12px", fontWeight:"600", cursor:"pointer" }}>
            Export CSV
          </button>
        </header>

        <div style={{ padding:"24px 32px" }}>

          {/* FILTER BAR */}
          <div style={{ background:"#fff", borderRadius:"12px", padding:"16px 20px", border:"1px solid #D6E4F0", marginBottom:"20px", display:"flex", alignItems:"center", gap:"12px", flexWrap:"wrap" }}>
            <div style={{ flex:1, minWidth:"200px", display:"flex", alignItems:"center", gap:"8px", background:"#F0F4F8", borderRadius:"8px", padding:"8px 12px", border:"1px solid #D6E4F0" }}>
              <span style={{ fontSize:"14px" }}>🔍</span>
              <input placeholder="Search by case number, name, or service..." style={{ border:"none", background:"transparent", fontSize:"13px", color:"#1A2535", outline:"none", flex:1 }}/>
            </div>
            {["All Status","Submitted","Under Review","Action Required","In Progress","Completed","Report Issued"].map((s,i) => (
              <button key={s} style={{
                padding:"7px 14px", borderRadius:"20px", fontSize:"12px", fontWeight:"500", cursor:"pointer",
                background: i===0 ? "#1E3A5F" : "#EEF3F8",
                color: i===0 ? "#C8A45A" : "#5A6A7E",
                border: i===0 ? "none" : "1px solid #D6E4F0"
              }}>{s}</button>
            ))}
            <button style={{ padding:"7px 14px", borderRadius:"8px", fontSize:"12px", fontWeight:"500", cursor:"pointer", background:"#EEF3F8", color:"#5A6A7E", border:"1px solid #D6E4F0" }}>
              ⚡ SLA Risk
            </button>
          </div>

          {/* TABLE */}
          <div style={{ background:"#fff", borderRadius:"12px", border:"1px solid #D6E4F0", overflow:"hidden" }}>
            <table style={{ width:"100%", borderCollapse:"collapse" }}>
              <thead>
                <tr style={{ background:"#F8FAFB" }}>
                  <th style={{ padding:"12px 16px", width:"24px" }}>
                    <input type="checkbox" style={{ cursor:"pointer" }}/>
                  </th>
                  {["Case Number","Applicant / Company","Type","Service","Status","Submitted","SLA","Actions"].map(h => (
                    <th key={h} style={{ padding:"12px 14px", textAlign:"left", fontSize:"10px", fontWeight:"600", color:"#8899AA", letterSpacing:"0.5px", textTransform:"uppercase", borderBottom:"1px solid #EEF3F8", whiteSpace:"nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allCases.map((c,i) => {
                  const s = statusConfig[c.status];
                  const slaColor = c.sla === 0 ? "#8899AA" : c.sla === 1 ? "#B84040" : c.sla <= 3 ? "#C8810A" : "#2E7A5B";
                  return (
                    <tr key={i} style={{ borderBottom:"1px solid #F4F7FB", cursor:"pointer" }}>
                      <td style={{ padding:"13px 16px" }}><input type="checkbox" style={{ cursor:"pointer" }}/></td>
                      <td style={{ padding:"13px 14px" }}>
                        <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                          {c.flag && <span style={{ color:"#B84040", fontSize:"12px" }}>🚨</span>}
                          <span style={{ fontSize:"12px", fontWeight:"600", color:"#1E3A5F", fontFamily:"monospace" }}>{c.id}</span>
                        </div>
                      </td>
                      <td style={{ padding:"13px 14px" }}>
                        <div style={{ fontSize:"13px", fontWeight:"500", color:"#1A2535" }}>{c.name}</div>
                      </td>
                      <td style={{ padding:"13px 14px" }}>
                        <span style={{ padding:"2px 8px", borderRadius:"4px", fontSize:"10px", fontWeight:"600", letterSpacing:"0.5px",
                          background: c.type==="Employer" ? "rgba(30,58,95,0.08)" : "#EEF3F8",
                          color: c.type==="Employer" ? "#1E3A5F" : "#5A6A7E"
                        }}>{c.type.toUpperCase()}</span>
                      </td>
                      <td style={{ padding:"13px 14px", fontSize:"12px", color:"#5A6A7E" }}>{c.service}</td>
                      <td style={{ padding:"13px 14px" }}>
                        <span className={`badge ${s.cls}`}>
                          <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:s.dot, display:"inline-block" }}/>
                          {s.label}
                        </span>
                      </td>
                      <td style={{ padding:"13px 14px", fontSize:"12px", color:"#8899AA" }}>{c.date}</td>
                      <td style={{ padding:"13px 14px", fontSize:"12px", fontWeight:"600", color:slaColor }}>
                        {c.sla > 0 ? `${c.sla}d left` : "—"}
                      </td>
                      <td style={{ padding:"13px 14px" }}>
                        <div style={{ display:"flex", gap:"6px" }}>
                          <a href="/admin/cases/detail" style={{ fontSize:"11px", color:"#1E3A5F", fontWeight:"600", textDecoration:"none", padding:"4px 10px", background:"#EEF3F8", borderRadius:"5px" }}>Open</a>
                          {c.status === "action" && (
                            <button style={{ fontSize:"11px", color:"#B84040", fontWeight:"600", border:"1px solid #F0C4C4", borderRadius:"5px", padding:"4px 8px", background:"#FEF0F0", cursor:"pointer" }}>Request</button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* PAGINATION */}
            <div style={{ padding:"14px 20px", borderTop:"1px solid #EEF3F8", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ fontSize:"12px", color:"#8899AA" }}>Showing 10 of 247 cases</span>
              <div style={{ display:"flex", gap:"4px" }}>
                {["←","1","2","3","...","25","→"].map((p,i) => (
                  <button key={i} style={{
                    width:"30px", height:"30px", borderRadius:"6px", border:"1px solid",
                    fontSize:"12px", cursor:"pointer",
                    background: p==="1" ? "#1E3A5F" : "#fff",
                    color: p==="1" ? "#C8A45A" : "#5A6A7E",
                    borderColor: p==="1" ? "#1E3A5F" : "#D6E4F0",
                    fontWeight: p==="1" ? "700" : "400"
                  }}>{p}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
