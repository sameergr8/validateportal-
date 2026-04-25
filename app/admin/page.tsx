const cases = [
  { id:"VG-2025-00058", name:"Omar Al Rashidi",     service:"Employment History Verification",  status:"review",    sla:"3 days",  flag:false },
  { id:"VG-2025-00057", name:"Sarah Johnson",        service:"Degree &amp; Certificate Verification", status:"action",  sla:"1 day",   flag:true  },
  { id:"VG-2025-00056", name:"Raj Patel",            service:"Professional Licence Verification",  status:"progress",  sla:"8 days",  flag:false },
  { id:"VG-2025-00055", name:"Fatima Al Zaabi",      service:"Identity Document Verification",  status:"submitted", sla:"5 days",  flag:false },
  { id:"VG-2025-00054", name:"Chen Wei",             service:"Good Standing Certificate",     status:"complete",  sla:"—",       flag:false },
];

const statusConfig: Record<string, { label:string; cls:string; dot:string }> = {
  submitted:{ label:"Submitted",             cls:"badge-submitted", dot:"#5A6A7E" },
  review:   { label:"Under Review",          cls:"badge-review",    dot:"#C8810A" },
  action:   { label:"Action Required",       cls:"badge-action",    dot:"#B84040" },
  progress: { label:"Verification In Progress", cls:"badge-progress", dot:"#1E5BAF" },
  complete: { label:"Completed",             cls:"badge-complete",  dot:"#2E7A5B" },
  issued:   { label:"Report Issued",         cls:"badge-issued",    dot:"#C8A45A" },
};

const stats = [
  { label:"Total Cases",       value:"247", delta:"+12 this week",  color:"#1E3A5F", icon:"📁" },
  { label:"Active Cases",      value:"38",  delta:"6 overdue SLA",  color:"#C8810A", icon:"⚡" },
  { label:"Awaiting Docs",     value:"9",   delta:"Needs attention", color:"#B84040", icon:"📎" },
  { label:"Reports This Month",value:"34",  delta:"+8 vs last month", color:"#2E7A5B", icon:"✅" },
];

export default function AdminDashboard() {
  return (
    <div style={{ display:"flex", minHeight:"100vh", fontFamily:"'DM Sans',sans-serif" }}>

      {/* SIDEBAR */}
      <aside style={{ width:"240px", background:"#162E4D", display:"flex", flexDirection:"column", flexShrink:0 }}>
        <div style={{ padding:"24px 20px", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
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
            { icon:"📊", label:"Dashboard",       active:true  },
            { icon:"📋", label:"All Cases",        active:false },
            { icon:"⚠️",  label:"Requires Action", active:false, badge:"9" },
            { icon:"👥", label:"User Accounts",    active:false },
            { icon:"📈", label:"Reports & SLA",    active:false },
            { icon:"🔒", label:"Audit Log",         active:false },
            { icon:"⚙️",  label:"Settings",          active:false },
          ].map((item,i) => (
            <a key={i} href={i===1 ? "/admin/cases" : "#"} style={{
              display:"flex", alignItems:"center", gap:"10px",
              padding:"10px 20px", fontSize:"13px", fontWeight: item.active ? "600" : "400",
              color: item.active ? "#C8A45A" : "rgba(255,255,255,0.55)",
              background: item.active ? "rgba(200,164,90,0.1)" : "transparent",
              borderLeft: item.active ? "3px solid #C8A45A" : "3px solid transparent",
              textDecoration:"none", transition:"all 0.15s"
            }}>
              <span>{item.icon}</span>
              <span style={{ flex:1 }}>{item.label}</span>
              {item.badge && (
                <span style={{ background:"#B84040", color:"#fff", fontSize:"10px", fontWeight:"700", padding:"1px 7px", borderRadius:"10px" }}>{item.badge}</span>
              )}
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
      <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"auto" }}>

        {/* TOP BAR */}
        <header style={{ background:"#fff", borderBottom:"1px solid #EEF3F8", padding:"0 32px", height:"60px", display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 }}>
          <div>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"20px", fontWeight:"700", color:"#1E3A5F" }}>Admin Dashboard</h1>
            <p style={{ fontSize:"11px", color:"#8899AA" }}>Wednesday, 23 April 2025</p>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
            <div style={{ position:"relative" }}>
              <div style={{ width:"38px", height:"38px", background:"#EEF3F8", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
                <span style={{ fontSize:"16px" }}>🔔</span>
              </div>
              <div style={{ position:"absolute", top:"4px", right:"4px", width:"8px", height:"8px", background:"#B84040", borderRadius:"50%", border:"2px solid #fff" }}/>
            </div>
            <button style={{ background:"#1E3A5F", color:"#C8A45A", border:"none", borderRadius:"8px", padding:"8px 16px", fontSize:"12px", fontWeight:"600", cursor:"pointer" }}>
              + Create Case
            </button>
          </div>
        </header>

        <div style={{ padding:"28px 32px", background:"#F0F4F8", flex:1 }}>

          {/* STATS */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"18px", marginBottom:"28px" }}>
            {stats.map((s,i) => (
              <div key={i} style={{ background:"#fff", borderRadius:"12px", padding:"22px", border:"1px solid #D6E4F0", boxShadow:"0 2px 8px rgba(30,58,95,0.04)" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"12px" }}>
                  <span style={{ fontSize:"22px" }}>{s.icon}</span>
                  <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:s.color }}/>
                </div>
                <div style={{ fontSize:"30px", fontWeight:"700", color:s.color, fontFamily:"'Playfair Display',serif", marginBottom:"2px" }}>{s.value}</div>
                <div style={{ fontSize:"12px", fontWeight:"600", color:"#1A2535" }}>{s.label}</div>
                <div style={{ fontSize:"11px", color:"#8899AA", marginTop:"2px" }}>{s.delta}</div>
              </div>
            ))}
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:"22px", alignItems:"start" }}>

            {/* RECENT CASES */}
            <div style={{ background:"#fff", borderRadius:"12px", border:"1px solid #D6E4F0", overflow:"hidden" }}>
              <div style={{ padding:"18px 24px", borderBottom:"1px solid #EEF3F8", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div>
                  <div style={{ fontSize:"14px", fontWeight:"600", color:"#1E3A5F" }}>Recent Cases</div>
                  <div style={{ fontSize:"11px", color:"#8899AA" }}>Latest submissions requiring review</div>
                </div>
                <a href="/admin/cases" style={{ fontSize:"12px", color:"#C8A45A", fontWeight:"600", textDecoration:"none" }}>View All →</a>
              </div>
              <table style={{ width:"100%", borderCollapse:"collapse" }}>
                <thead>
                  <tr style={{ background:"#F8FAFB" }}>
                    {["Case No.","Applicant","Service","Status","SLA","Action"].map(h => (
                      <th key={h} style={{ padding:"9px 14px", textAlign:"left", fontSize:"10px", fontWeight:"600", color:"#8899AA", letterSpacing:"0.5px", textTransform:"uppercase", borderBottom:"1px solid #EEF3F8" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cases.map((c,i) => {
                    const s = statusConfig[c.status];
                    return (
                      <tr key={i} style={{ borderBottom:"1px solid #F4F7FB", cursor:"pointer" }}>
                        <td style={{ padding:"12px 14px" }}>
                          <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                            {c.flag && <span title="SLA at risk" style={{ color:"#B84040", fontSize:"11px" }}>🚨</span>}
                            <span style={{ fontSize:"12px", fontWeight:"600", color:"#1E3A5F", fontFamily:"monospace" }}>{c.id}</span>
                          </div>
                        </td>
                        <td style={{ padding:"12px 14px", fontSize:"12px", color:"#1A2535", fontWeight:"500" }}>{c.name}</td>
                        <td style={{ padding:"12px 14px", fontSize:"12px", color:"#5A6A7E" }}>{c.service}</td>
                        <td style={{ padding:"12px 14px" }}>
                          <span className={`badge ${s.cls}`}>
                            <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:s.dot, display:"inline-block" }}/>
                            {s.label}
                          </span>
                        </td>
                        <td style={{ padding:"12px 14px", fontSize:"12px", color: c.flag ? "#B84040" : "#8899AA", fontWeight: c.flag ? "600" : "400" }}>{c.sla}</td>
                        <td style={{ padding:"12px 14px" }}>
                          <a href="/admin/cases/detail" style={{ fontSize:"12px", color:"#1E3A5F", fontWeight:"600", textDecoration:"none", padding:"4px 10px", background:"#EEF3F8", borderRadius:"6px" }}>Open →</a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* SIDEBAR WIDGETS */}
            <div style={{ display:"flex", flexDirection:"column", gap:"18px" }}>

              {/* SLA Monitor */}
              <div style={{ background:"#fff", borderRadius:"12px", padding:"20px", border:"1px solid #D6E4F0" }}>
                <div style={{ fontSize:"13px", fontWeight:"600", color:"#1E3A5F", marginBottom:"4px" }}>SLA Monitor</div>
                <div style={{ fontSize:"11px", color:"#8899AA", marginBottom:"16px" }}>Cases by time remaining</div>
                {[
                  { label:"Overdue",      count:2, color:"#B84040", bg:"#FEF0F0", pct:5  },
                  { label:"Due Today",    count:4, color:"#C8810A", bg:"#FFF3DC", pct:10 },
                  { label:"Due This Week",count:12, color:"#1E5BAF", bg:"#E8F0FE", pct:32 },
                  { label:"On Track",     count:20, color:"#2E7A5B", bg:"#EAF5EE", pct:53 },
                ].map((row,i) => (
                  <div key={i} style={{ marginBottom:"10px" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"4px" }}>
                      <span style={{ fontSize:"12px", color:"#5A6A7E" }}>{row.label}</span>
                      <span style={{ fontSize:"12px", fontWeight:"600", color:row.color }}>{row.count} cases</span>
                    </div>
                    <div style={{ height:"6px", background:"#EEF3F8", borderRadius:"3px", overflow:"hidden" }}>
                      <div style={{ width:`${row.pct}%`, height:"100%", background:row.color, borderRadius:"3px" }}/>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div style={{ background:"#1E3A5F", borderRadius:"12px", padding:"20px", border:"1px solid #2A4F7C" }}>
                <div style={{ fontSize:"13px", fontWeight:"600", color:"#C8A45A", marginBottom:"14px" }}>Quick Actions</div>
                {[
                  { label:"Review Pending Cases", count:"5 new" },
                  { label:"Send Re-upload Requests", count:"3 pending" },
                  { label:"Generate Reports", count:"2 ready" },
                ].map((action,i) => (
                  <button key={i} style={{
                    width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center",
                    background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.08)",
                    borderRadius:"8px", padding:"10px 14px", marginBottom: i<2 ? "8px" : "0",
                    cursor:"pointer"
                  }}>
                    <span style={{ fontSize:"12px", color:"rgba(255,255,255,0.75)", fontWeight:"500" }}>{action.label}</span>
                    <span style={{ fontSize:"11px", color:"#C8A45A", fontWeight:"600" }}>{action.count}</span>
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
