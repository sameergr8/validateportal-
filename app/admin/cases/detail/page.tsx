const timeline = [
  { date:"Apr 24, 2025, 09:14", event:"Case submitted by applicant", type:"system", user:"System" },
  { date:"Apr 24, 2025, 09:15", event:"Payment confirmed (AED 450.00)", type:"system", user:"Payment Gateway" },
  { date:"Apr 24, 2025, 10:30", event:"Case opened for review", type:"admin", user:"Admin" },
  { date:"Apr 24, 2025, 11:45", event:"Additional documents requested — Passport copy (clear scan) and Original degree certificate", type:"request", user:"Admin" },
  { date:"Apr 24, 2025, 14:22", event:"Re-upload link sent to applicant via email", type:"system", user:"System" },
];

export default function CaseDetailPage() {
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
            { icon:"📊", label:"Dashboard", href:"/admin" },
            { icon:"📋", label:"All Cases", href:"/admin/cases", active:true },
            { icon:"⚠️",  label:"Requires Action", href:"#", badge:"9" },
            { icon:"👥", label:"User Accounts", href:"#" },
            { icon:"📈", label:"Reports & SLA", href:"#" },
            { icon:"🔒", label:"Audit Log", href:"#" },
            { icon:"⚙️",  label:"Settings", href:"#" },
          ].map((item,i) => (
            <a key={i} href={item.href || "#"} style={{
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

        {/* TOP BAR */}
        <header style={{ background:"#fff", borderBottom:"1px solid #EEF3F8", padding:"0 32px", height:"60px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <a href="/admin/cases" style={{ fontSize:"12px", color:"#8899AA", textDecoration:"none" }}>← All Cases</a>
            <span style={{ color:"#D6E4F0" }}>›</span>
            <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"16px", fontWeight:"700", color:"#1E3A5F" }}>Case VG-2025-00057</span>
            <span className="badge badge-action" style={{ marginLeft:"8px" }}>
              <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#B84040", display:"inline-block" }}/>
              Action Required
            </span>
            <span style={{ background:"#FEF0F0", color:"#B84040", fontSize:"10px", fontWeight:"700", padding:"2px 8px", borderRadius:"4px", marginLeft:"4px" }}>🚨 SLA AT RISK — 1 day</span>
          </div>
          <div style={{ display:"flex", gap:"8px" }}>
            <button style={{ padding:"8px 14px", background:"#EEF3F8", border:"1px solid #D6E4F0", borderRadius:"8px", fontSize:"12px", fontWeight:"600", color:"#1E3A5F", cursor:"pointer" }}>
              Add Note
            </button>
            <button style={{ padding:"8px 14px", background:"#1E3A5F", border:"none", borderRadius:"8px", fontSize:"12px", fontWeight:"600", color:"#C8A45A", cursor:"pointer" }}>
              Update Status
            </button>
          </div>
        </header>

        <div style={{ padding:"24px 32px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:"22px", alignItems:"start" }}>

            {/* LEFT COLUMN */}
            <div style={{ display:"flex", flexDirection:"column", gap:"20px" }}>

              {/* APPLICANT INFO */}
              <div style={{ background:"#fff", borderRadius:"12px", border:"1px solid #D6E4F0", overflow:"hidden" }}>
                <div style={{ background:"#1E3A5F", padding:"14px 20px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div style={{ fontSize:"13px", fontWeight:"600", color:"#C8A45A" }}>Applicant Information</div>
                  <div style={{ fontSize:"11px", color:"rgba(255,255,255,0.4)" }}>Individual Account</div>
                </div>
                <div style={{ padding:"20px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"16px" }}>
                  {[
                    { label:"Full Name",     value:"Sarah Johnson" },
                    { label:"Email",         value:"sarah.j@email.com" },
                    { label:"Phone",         value:"+44 7700 900123" },
                    { label:"Nationality",   value:"British" },
                    { label:"Passport No.",  value:"GB1234567" },
                    { label:"Account Since", value:"Mar 2025" },
                  ].map((f,i) => (
                    <div key={i}>
                      <div style={{ fontSize:"10px", fontWeight:"600", color:"#8899AA", letterSpacing:"0.8px", textTransform:"uppercase", marginBottom:"3px" }}>{f.label}</div>
                      <div style={{ fontSize:"13px", fontWeight:"500", color:"#1A2535" }}>{f.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CASE DETAILS */}
              <div style={{ background:"#fff", borderRadius:"12px", border:"1px solid #D6E4F0", overflow:"hidden" }}>
                <div style={{ padding:"14px 20px", borderBottom:"1px solid #EEF3F8", display:"flex", justifyContent:"space-between" }}>
                  <div style={{ fontSize:"13px", fontWeight:"600", color:"#1E3A5F" }}>Case Details</div>
                  <div style={{ fontSize:"11px", color:"#8899AA" }}>Submitted Apr 23, 2025</div>
                </div>
                <div style={{ padding:"20px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>
                  {[
                    { label:"Service Type",    value:"Degree & Certificate Verification" },
                    { label:"Case Number",     value:"VG-2025-00057" },
                    { label:"Payment Status",  value:"Paid — AED 450.00" },
                    { label:"Payment Method",  value:"Telr (Visa ****4521)" },
                    { label:"Institution",     value:"University of Edinburgh" },
                    { label:"Document Type",   value:"Bachelor's Degree — Computer Science (2019)" },
                    { label:"Graduation Year", value:"2019" },
                    { label:"LOA Signed",      value:"Yes — Apr 23, 2025, 11:02" },
                  ].map((f,i) => (
                    <div key={i}>
                      <div style={{ fontSize:"10px", fontWeight:"600", color:"#8899AA", letterSpacing:"0.8px", textTransform:"uppercase", marginBottom:"3px" }}>{f.label}</div>
                      <div style={{ fontSize:"13px", fontWeight:"500", color:"#1A2535" }}>{f.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DOCUMENTS */}
              <div style={{ background:"#fff", borderRadius:"12px", border:"1px solid #D6E4F0", overflow:"hidden" }}>
                <div style={{ padding:"14px 20px", borderBottom:"1px solid #EEF3F8", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div style={{ fontSize:"13px", fontWeight:"600", color:"#1E3A5F" }}>Uploaded Documents</div>
                  <button style={{ background:"#FEF0F0", color:"#B84040", border:"1px solid #F0C4C4", borderRadius:"6px", padding:"6px 12px", fontSize:"11px", fontWeight:"600", cursor:"pointer" }}>
                    + Request Missing Docs
                  </button>
                </div>
                <div style={{ padding:"16px 20px" }}>
                  {[
                    { name:"Passport Copy",           status:"ok",      size:"1.2 MB", date:"Apr 23" },
                    { name:"Degree Certificate",       status:"missing", size:"—",      date:"—" },
                    { name:"Transcript",               status:"ok",      size:"843 KB", date:"Apr 23" },
                    { name:"University Contact Info",  status:"ok",      size:"122 KB", date:"Apr 23" },
                  ].map((doc,i) => (
                    <div key={i} style={{
                      display:"flex", alignItems:"center", gap:"12px",
                      padding:"12px 14px", borderRadius:"8px", marginBottom:"8px",
                      background: doc.status==="missing" ? "#FEF0F0" : "#F8FAFB",
                      border: `1px solid ${doc.status==="missing" ? "#F0C4C4" : "#EEF3F8"}`
                    }}>
                      <div style={{ width:"34px", height:"38px", background: doc.status==="missing" ? "#FDDCDC" : "#EEF3F8", borderRadius:"6px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                        <span style={{ fontSize:"16px" }}>{doc.status==="missing" ? "❌" : "📄"}</span>
                      </div>
                      <div style={{ flex:1 }}>
                        <div style={{ fontSize:"13px", fontWeight:"500", color: doc.status==="missing" ? "#B84040" : "#1A2535" }}>{doc.name}</div>
                        <div style={{ fontSize:"11px", color:"#8899AA" }}>
                          {doc.status==="missing" ? "Not yet uploaded — re-upload request sent" : `${doc.size} · Uploaded ${doc.date}`}
                        </div>
                      </div>
                      {doc.status !== "missing" && (
                        <button style={{ background:"transparent", border:"1px solid #D6E4F0", borderRadius:"6px", padding:"5px 10px", fontSize:"11px", color:"#1E3A5F", fontWeight:"600", cursor:"pointer" }}>View</button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* TIMELINE */}
              <div style={{ background:"#fff", borderRadius:"12px", border:"1px solid #D6E4F0", overflow:"hidden" }}>
                <div style={{ padding:"14px 20px", borderBottom:"1px solid #EEF3F8" }}>
                  <div style={{ fontSize:"13px", fontWeight:"600", color:"#1E3A5F" }}>Case Timeline</div>
                </div>
                <div style={{ padding:"20px" }}>
                  {timeline.map((t,i) => (
                    <div key={i} style={{ display:"flex", gap:"14px", paddingBottom: i < timeline.length-1 ? "18px" : "0", marginBottom: i < timeline.length-1 ? "0" : "0", position:"relative" }}>
                      {i < timeline.length-1 && (
                        <div style={{ position:"absolute", left:"11px", top:"26px", bottom:"0", width:"1px", background:"#EEF3F8" }}/>
                      )}
                      <div style={{
                        width:"22px", height:"22px", borderRadius:"50%", flexShrink:0,
                        background: t.type==="request" ? "#FEF0F0" : t.type==="admin" ? "#EEF3F8" : "#1E3A5F",
                        border: `2px solid ${t.type==="request" ? "#F0C4C4" : t.type==="admin" ? "#1E3A5F" : "#C8A45A"}`,
                        display:"flex", alignItems:"center", justifyContent:"center", zIndex:1
                      }}>
                        <span style={{ fontSize:"9px" }}>{t.type==="request" ? "⚠" : t.type==="admin" ? "👤" : "⚡"}</span>
                      </div>
                      <div>
                        <div style={{ fontSize:"12px", fontWeight:"500", color:"#1A2535", marginBottom:"2px" }}>{t.event}</div>
                        <div style={{ fontSize:"11px", color:"#8899AA" }}>{t.date} · {t.user}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div style={{ display:"flex", flexDirection:"column", gap:"18px", position:"sticky", top:"24px" }}>

              {/* Status Update */}
              <div style={{ background:"#fff", borderRadius:"12px", border:"1px solid #D6E4F0", overflow:"hidden" }}>
                <div style={{ background:"#1E3A5F", padding:"14px 20px" }}>
                  <div style={{ fontSize:"13px", fontWeight:"600", color:"#C8A45A" }}>Update Case Status</div>
                </div>
                <div style={{ padding:"16px 20px" }}>
                  <div style={{ marginBottom:"12px" }}>
                    <div style={{ fontSize:"11px", fontWeight:"600", color:"#8899AA", letterSpacing:"0.5px", textTransform:"uppercase", marginBottom:"6px" }}>Current Status</div>
                    <span className="badge badge-action">
                      <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#B84040", display:"inline-block" }}/>
                      Action Required
                    </span>
                  </div>
                  <div style={{ marginBottom:"12px" }}>
                    <div style={{ fontSize:"11px", fontWeight:"600", color:"#8899AA", letterSpacing:"0.5px", textTransform:"uppercase", marginBottom:"6px" }}>Set New Status</div>
                    <select style={{ width:"100%", padding:"9px 12px", borderRadius:"8px", border:"1.5px solid #D6E4F0", fontSize:"13px", color:"#1A2535", background:"#fff", cursor:"pointer", outline:"none" }}>
                      <option>Under Review</option>
                      <option>Verification In Progress</option>
                      <option>Completed</option>
                      <option>Report Issued</option>
                    </select>
                  </div>
                  <div style={{ marginBottom:"14px" }}>
                    <div style={{ fontSize:"11px", fontWeight:"600", color:"#8899AA", letterSpacing:"0.5px", textTransform:"uppercase", marginBottom:"6px" }}>Internal Note (optional)</div>
                    <textarea placeholder="Add a note for this status change..." style={{ width:"100%", padding:"9px 12px", borderRadius:"8px", border:"1.5px solid #D6E4F0", fontSize:"12px", color:"#1A2535", resize:"none", height:"72px", outline:"none", fontFamily:"'DM Sans',sans-serif" }}/>
                  </div>
                  <button style={{ width:"100%", padding:"10px", background:"#1E3A5F", border:"none", borderRadius:"8px", fontSize:"13px", fontWeight:"600", color:"#C8A45A", cursor:"pointer" }}>
                    Save Status Update
                  </button>
                </div>
              </div>

              {/* Generate Report */}
              <div style={{ background:"#EAF5EE", borderRadius:"12px", border:"1.5px solid #B4DEC4", padding:"18px 20px" }}>
                <div style={{ fontSize:"13px", fontWeight:"600", color:"#2E7A5B", marginBottom:"6px" }}>📄 Generate Report</div>
                <div style={{ fontSize:"12px", color:"#2E7A5B", opacity:0.8, lineHeight:"1.6", marginBottom:"14px" }}>
                  Once verification is complete, generate and issue the final PDF report with QR code to the applicant.
                </div>
                <button disabled style={{ width:"100%", padding:"10px", background:"rgba(46,122,91,0.3)", border:"none", borderRadius:"8px", fontSize:"12px", fontWeight:"600", color:"#2E7A5B", cursor:"not-allowed" }}>
                  Available After Completion
                </button>
              </div>

              {/* Request Re-upload */}
              <div style={{ background:"#fff", borderRadius:"12px", border:"1px solid #D6E4F0", padding:"18px 20px" }}>
                <div style={{ fontSize:"13px", fontWeight:"600", color:"#1E3A5F", marginBottom:"6px" }}>📧 Request Re-upload</div>
                <div style={{ fontSize:"12px", color:"#5A6A7E", lineHeight:"1.6", marginBottom:"12px" }}>
                  Re-upload request already sent on Apr 24. Awaiting response from applicant.
                </div>
                <div style={{ background:"#FFF8EC", borderRadius:"6px", padding:"8px 12px", display:"flex", gap:"6px", alignItems:"center" }}>
                  <span style={{ fontSize:"12px" }}>⏳</span>
                  <span style={{ fontSize:"11px", color:"#C8810A", fontWeight:"500" }}>Link expires in 47 hours</span>
                </div>
              </div>

              {/* Case Meta */}
              <div style={{ background:"#fff", borderRadius:"12px", border:"1px solid #D6E4F0", padding:"18px 20px" }}>
                <div style={{ fontSize:"12px", fontWeight:"600", color:"#1E3A5F", marginBottom:"12px" }}>Case Meta</div>
                {[
                  { label:"Opened",      value:"Apr 24, 2025" },
                  { label:"SLA Due",     value:"Apr 25, 2025", alert:true },
                  { label:"Days Active", value:"1 day" },
                  { label:"Assigned To", value:"Unassigned" },
                ].map((m,i) => (
                  <div key={i} style={{ display:"flex", justifyContent:"space-between", paddingBottom: i<3 ? "8px" : "0", marginBottom: i<3 ? "8px" : "0", borderBottom: i<3 ? "1px solid #EEF3F8" : "none" }}>
                    <span style={{ fontSize:"12px", color:"#8899AA" }}>{m.label}</span>
                    <span style={{ fontSize:"12px", fontWeight:"600", color: m.alert ? "#B84040" : "#1A2535" }}>{m.value}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
