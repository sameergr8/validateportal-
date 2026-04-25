const cases = [
  { id:"VG-2025-00047", service:"Degree &amp; Certificate Verification", status:"issued",    date:"Apr 18, 2025", updated:"Apr 22, 2025" },
  { id:"VG-2025-00051", service:"Employment History Verification", status:"progress",  date:"Apr 20, 2025", updated:"Apr 24, 2025" },
  { id:"VG-2025-00055", service:"Professional Licence Verification", status:"action",    date:"Apr 22, 2025", updated:"Apr 23, 2025" },
  { id:"VG-2025-00058", service:"Identity Document Verification",  status:"review",    date:"Apr 24, 2025", updated:"Apr 24, 2025" },
];

const statusConfig: Record<string, { label:string; cls:string; dot:string }> = {
  issued:   { label:"Report Issued",         cls:"badge-issued",   dot:"#C8A45A" },
  progress: { label:"Verification In Progress", cls:"badge-progress", dot:"#1E5BAF" },
  action:   { label:"Action Required",       cls:"badge-action",   dot:"#B84040" },
  review:   { label:"Under Review",          cls:"badge-review",   dot:"#C8810A" },
  submitted:{ label:"Submitted",             cls:"badge-submitted", dot:"#5A6A7E" },
};

const stats = [
  { label:"Total Applications", value:"4",  sub:"All time", icon:"📋", color:"#1E3A5F" },
  { label:"Active Cases",       value:"3",  sub:"In progress", icon:"⚡", color:"#2A4F7C" },
  { label:"Reports Ready",      value:"1",  sub:"Available to download", icon:"✅", color:"#2E7A5B" },
  { label:"Action Required",    value:"1",  sub:"Needs your attention", icon:"⚠️", color:"#B84040" },
];

export default function DashboardPage() {
  return (
    <div style={{ minHeight:"100vh", background:"#F0F4F8", fontFamily:"'DM Sans',sans-serif" }}>

      {/* NAV */}
      <nav style={{ background:"#1E3A5F", borderBottom:"3px solid #C8A45A", padding:"0 40px" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:"64px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
            <div style={{ width:"32px", height:"32px", background:"#C8A45A", borderRadius:"6px", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#1E3A5F"/></svg>
            </div>
            <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"17px", fontWeight:"700", color:"#fff" }}>TrueValidate</span>
            <span style={{ fontSize:"11px", color:"rgba(255,255,255,0.35)", letterSpacing:"1px", textTransform:"uppercase", marginLeft:"4px" }}>Portal</span>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
            {["Dashboard","My Cases","New Application","Documents"].map((item, i) => (
              <a key={item} href="#" style={{
                padding:"8px 14px", borderRadius:"6px", fontSize:"13px", fontWeight:"500",
                color: i===0 ? "#C8A45A" : "rgba(255,255,255,0.6)",
                background: i===0 ? "rgba(200,164,90,0.12)" : "transparent",
                textDecoration:"none"
              }}>{item}</a>
            ))}
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
            <div style={{ width:"36px", height:"36px", background:"rgba(255,255,255,0.1)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:"14px" }}>🔔</span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
              <div style={{ width:"34px", height:"34px", background:"#C8A45A", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:"13px", fontWeight:"700", color:"#1E3A5F" }}>AK</span>
              </div>
              <div>
                <div style={{ fontSize:"12px", fontWeight:"600", color:"#fff" }}>Ahmed K.</div>
                <div style={{ fontSize:"10px", color:"rgba(255,255,255,0.4)" }}>Individual Account</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* HEADER STRIP */}
      <div style={{ background:"#162E4D", padding:"24px 40px" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"26px", fontWeight:"700", color:"#fff", marginBottom:"4px" }}>
                My Dashboard
              </h1>
              <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.45)", fontWeight:"300" }}>
                Welcome back, Ahmed. Here&apos;s the status of your verification requests.
              </p>
            </div>
            <a href="/apply" style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              background:"#C8A45A", color:"#1E3A5F", padding:"12px 24px",
              borderRadius:"8px", fontSize:"13px", fontWeight:"700",
              textDecoration:"none", letterSpacing:"0.3px"
            }}>
              <span style={{ fontSize:"16px" }}>+</span> New Verification Request
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"32px 40px" }}>

        {/* STATS */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"20px", marginBottom:"32px" }}>
          {stats.map((s,i) => (
            <div key={i} style={{ background:"#fff", borderRadius:"12px", padding:"24px", border:"1px solid #D6E4F0", boxShadow:"0 2px 12px rgba(30,58,95,0.05)" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"14px" }}>
                <div style={{ fontSize:"22px" }}>{s.icon}</div>
                <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:s.color, marginTop:"4px" }}/>
              </div>
              <div style={{ fontSize:"32px", fontWeight:"700", color:s.color, fontFamily:"'Playfair Display',serif", marginBottom:"4px" }}>{s.value}</div>
              <div style={{ fontSize:"13px", fontWeight:"600", color:"#1A2535", marginBottom:"2px" }}>{s.label}</div>
              <div style={{ fontSize:"11px", color:"#8899AA" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* ACTION REQUIRED ALERT */}
        <div style={{ background:"#FEF0F0", border:"1.5px solid #F0C4C4", borderRadius:"10px", padding:"16px 20px", marginBottom:"28px", display:"flex", alignItems:"center", gap:"14px" }}>
          <div style={{ width:"36px", height:"36px", background:"#B84040", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <span style={{ fontSize:"16px" }}>⚠️</span>
          </div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:"13px", fontWeight:"600", color:"#B84040", marginBottom:"2px" }}>Action Required — Case VG-2025-00055</div>
            <div style={{ fontSize:"12px", color:"#B84040", opacity:0.8 }}>Validate Group has requested additional documents for your Due Diligence case. Please upload the missing items to avoid delays.</div>
          </div>
          <button style={{ background:"#B84040", color:"#fff", border:"none", borderRadius:"6px", padding:"8px 16px", fontSize:"12px", fontWeight:"600", cursor:"pointer", flexShrink:0 }}>
            Upload Now
          </button>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:"24px" }}>

          {/* CASES TABLE */}
          <div style={{ background:"#fff", borderRadius:"12px", border:"1px solid #D6E4F0", boxShadow:"0 2px 12px rgba(30,58,95,0.05)", overflow:"hidden" }}>
            <div style={{ padding:"20px 24px", borderBottom:"1px solid #EEF3F8", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div>
                <div style={{ fontSize:"15px", fontWeight:"600", color:"#1E3A5F" }}>My Verification Cases</div>
                <div style={{ fontSize:"12px", color:"#8899AA" }}>All active and completed applications</div>
              </div>
              <a href="#" style={{ fontSize:"12px", color:"#C8A45A", fontWeight:"600", textDecoration:"none" }}>View All →</a>
            </div>
            <table style={{ width:"100%", borderCollapse:"collapse" }}>
              <thead>
                <tr style={{ background:"#F8FAFB" }}>
                  {["Case Number","Service","Status","Submitted","Last Update"].map(h => (
                    <th key={h} style={{ padding:"10px 16px", textAlign:"left", fontSize:"11px", fontWeight:"600", color:"#8899AA", letterSpacing:"0.5px", textTransform:"uppercase", borderBottom:"1px solid #EEF3F8" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cases.map((c,i) => {
                  const s = statusConfig[c.status];
                  return (
                    <tr key={i} style={{ borderBottom:"1px solid #F4F7FB", cursor:"pointer" }}>
                      <td style={{ padding:"14px 16px" }}>
                        <span style={{ fontSize:"13px", fontWeight:"600", color:"#1E3A5F", fontFamily:"monospace" }}>{c.id}</span>
                      </td>
                      <td style={{ padding:"14px 16px", fontSize:"13px", color:"#1A2535" }}>{c.service}</td>
                      <td style={{ padding:"14px 16px" }}>
                        <span className={`badge ${s.cls}`}>
                          <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:s.dot, display:"inline-block" }}/>
                          {s.label}
                        </span>
                      </td>
                      <td style={{ padding:"14px 16px", fontSize:"12px", color:"#8899AA" }}>{c.date}</td>
                      <td style={{ padding:"14px 16px", fontSize:"12px", color:"#8899AA" }}>{c.updated}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* SIDEBAR */}
          <div style={{ display:"flex", flexDirection:"column", gap:"20px" }}>

            {/* Download report */}
            <div style={{ background:"#1E3A5F", borderRadius:"12px", padding:"24px", border:"1px solid #2A4F7C" }}>
              <div style={{ width:"42px", height:"42px", background:"rgba(200,164,90,0.15)", border:"1px solid rgba(200,164,90,0.3)", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"14px" }}>
                <span style={{ fontSize:"18px" }}>📄</span>
              </div>
              <div style={{ fontSize:"14px", fontWeight:"600", color:"#fff", marginBottom:"6px" }}>Report Ready</div>
              <div style={{ fontSize:"12px", color:"rgba(255,255,255,0.5)", marginBottom:"16px", lineHeight:"1.6" }}>
                Your Degree &amp; Certificate Verification report (VG-2025-00047) is available for download.
              </div>
              <button style={{ width:"100%", padding:"10px", background:"#C8A45A", border:"none", borderRadius:"8px", fontSize:"12px", fontWeight:"700", color:"#1E3A5F", cursor:"pointer" }}>
                Download PDF Report
              </button>
            </div>

            {/* Help card */}
            <div style={{ background:"#fff", borderRadius:"12px", padding:"20px", border:"1px solid #D6E4F0" }}>
              <div style={{ fontSize:"13px", fontWeight:"600", color:"#1E3A5F", marginBottom:"12px" }}>Need Assistance?</div>
              {[
                { icon:"📧", label:"Email Support", sub:"sales@validategroup.com" },
                { icon:"📞", label:"Call Us", sub:"+971 55 460 1791" },
                { icon:"📍", label:"Dubai Office", sub:"Sheikh Zayed Road" },
              ].map((item,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom: i < 2 ? "12px" : "0", paddingBottom: i < 2 ? "12px" : "0", borderBottom: i < 2 ? "1px solid #EEF3F8" : "none" }}>
                  <span style={{ fontSize:"16px" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize:"12px", fontWeight:"600", color:"#1E3A5F" }}>{item.label}</div>
                    <div style={{ fontSize:"11px", color:"#8899AA" }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
