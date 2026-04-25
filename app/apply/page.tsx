const services = [
  {
    id:"degree", icon:"🎓",
    title:"Academic Degree & Certificate",
    desc:"Verification of university degrees, diplomas, and academic certificates directly with the awarding institution.",
    docs:["Degree / Certificate (clear scan)", "Official transcript", "Passport copy"],
    time:"15–25 days"
  },
  {
    id:"employment", icon:"🏢",
    title:"Employment History Verification",
    desc:"Confirmation of job titles, dates of employment, and work history directly with previous employers.",
    docs:["Experience letters", "Employment contracts (if available)", "Passport copy", "Updated CV"],
    time:"10–20 days"
  },
  {
    id:"license", icon:"📜",
    title:"Professional License Verification",
    desc:"Authentication of professional practice licences, trade licences, and regulatory certifications with the issuing authority.",
    docs:["Professional licence copy", "Issuing authority details", "Passport copy"],
    time:"12–22 days"
  },
  {
    id:"identity", icon:"🪪",
    title:"Identity Document Verification",
    desc:"Verification of passports, national ID cards, and government-issued identity documents with issuing authorities.",
    docs:["Passport / National ID (clear scan)", "Supporting identity documents"],
    time:"5–10 days"
  },
  {
    id:"goodstanding", icon:"✅",
    title:"Good Standing Certificate",
    desc:"Confirmation that a professional is in good standing with their licensing board or regulatory body in their home country.",
    docs:["Good standing certificate", "Licensing body details", "Passport copy"],
    time:"15–30 days"
  },
  {
    id:"experience", icon:"📋",
    title:"Reference & Experience Letter",
    desc:"Direct verification of reference letters and experience certificates with the issuing employer or institution.",
    docs:["Reference / experience letter", "Employer contact details", "Passport copy"],
    time:"10–18 days"
  },
];

export default function ApplyPage() {
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
          </div>
          <div style={{ display:"flex", gap:"8px" }}>
            {["Dashboard","My Cases","New Application","Documents"].map((item, i) => (
              <a key={item} href="#" style={{
                padding:"8px 14px", borderRadius:"6px", fontSize:"13px", fontWeight:"500",
                color: i===2 ? "#C8A45A" : "rgba(255,255,255,0.6)",
                background: i===2 ? "rgba(200,164,90,0.12)" : "transparent",
                textDecoration:"none"
              }}>{item}</a>
            ))}
          </div>
          <div style={{ width:"34px", height:"34px", background:"#C8A45A", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontSize:"13px", fontWeight:"700", color:"#1E3A5F" }}>AK</span>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <div style={{ background:"#162E4D", padding:"28px 40px" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"8px" }}>
            <a href="/dashboard" style={{ fontSize:"12px", color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Dashboard</a>
            <span style={{ color:"rgba(255,255,255,0.25)" }}>›</span>
            <span style={{ fontSize:"12px", color:"#C8A45A" }}>New Verification Request</span>
          </div>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"26px", fontWeight:"700", color:"#fff", marginBottom:"6px" }}>
            Select Document Type for Verification
          </h1>
          <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.45)", fontWeight:"300" }}>
            Choose the type of document you need verified. You can select multiple types — each will generate a separate case with a unique reference number.
          </p>
        </div>
      </div>

      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"32px 40px" }}>

        {/* Progress steps */}
        <div style={{ background:"#fff", borderRadius:"12px", padding:"20px 32px", border:"1px solid #D6E4F0", marginBottom:"32px", display:"flex", alignItems:"center" }}>
          {[
            { num:"1", label:"Select Document Type", active:true },
            { num:"2", label:"Fill Details", active:false },
            { num:"3", label:"Upload Documents", active:false },
            { num:"4", label:"Sign LOA", active:false },
            { num:"5", label:"Payment & Submit", active:false },
          ].map((step, i) => (
            <div key={i} style={{ flex:1, display:"flex", alignItems:"center" }}>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"6px" }}>
                <div style={{
                  width:"32px", height:"32px", borderRadius:"50%",
                  background: step.active ? "#1E3A5F" : "#EEF3F8",
                  border: `2px solid ${step.active ? "#C8A45A" : "#D6E4F0"}`,
                  display:"flex", alignItems:"center", justifyContent:"center"
                }}>
                  <span style={{ fontSize:"12px", fontWeight:"700", color: step.active ? "#C8A45A" : "#8899AA" }}>{step.num}</span>
                </div>
                <span style={{ fontSize:"11px", fontWeight: step.active ? "600" : "400", color: step.active ? "#1E3A5F" : "#8899AA", whiteSpace:"nowrap" }}>{step.label}</span>
              </div>
              {i < 4 && <div style={{ flex:1, height:"2px", background: step.active ? "#C8A45A" : "#EEF3F8", marginBottom:"18px" }}/>}
            </div>
          ))}
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:"28px", alignItems:"start" }}>

          {/* SERVICE CARDS */}
          <div>
            <div style={{ marginBottom:"20px" }}>
              <div style={{ fontSize:"13px", fontWeight:"600", color:"#1E3A5F", marginBottom:"4px" }}>Available Verification Types</div>
              <div style={{ fontSize:"12px", color:"#8899AA" }}>
                Select the document types you need verified. Validate Group will contact the issuing authority directly to confirm authenticity.
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>
              {services.map((svc, i) => (
                <div key={i} style={{
                  background:"#fff", borderRadius:"12px", padding:"22px",
                  border: i===0 ? "2px solid #1E3A5F" : "1.5px solid #D6E4F0",
                  cursor:"pointer", position:"relative",
                  boxShadow: i===0 ? "0 4px 20px rgba(30,58,95,0.12)" : "0 2px 8px rgba(30,58,95,0.04)"
                }}>
                  {i===0 && (
                    <div style={{ position:"absolute", top:"12px", right:"12px", width:"20px", height:"20px", background:"#1E3A5F", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <span style={{ fontSize:"11px", color:"#C8A45A" }}>✓</span>
                    </div>
                  )}
                  <div style={{ fontSize:"26px", marginBottom:"12px" }}>{svc.icon}</div>
                  <div style={{ fontSize:"14px", fontWeight:"600", color:"#1E3A5F", marginBottom:"6px" }}>{svc.title}</div>
                  <div style={{ fontSize:"12px", color:"#5A6A7E", lineHeight:"1.6", marginBottom:"14px" }}>{svc.desc}</div>
                  <div style={{ marginBottom:"14px" }}>
                    <div style={{ fontSize:"10px", fontWeight:"600", color:"#8899AA", letterSpacing:"0.8px", textTransform:"uppercase", marginBottom:"6px" }}>Documents Required</div>
                    {svc.docs.map((d, j) => (
                      <div key={j} style={{ fontSize:"11px", color:"#5A6A7E", marginBottom:"3px", display:"flex", gap:"6px" }}>
                        <span style={{ color:"#C8A45A", flexShrink:0 }}>•</span>{d}
                      </div>
                    ))}
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:"12px", borderTop:"1px solid #EEF3F8" }}>
                    <div style={{ fontSize:"11px", color:"#8899AA" }}>⏱ Est. {svc.time}</div>
                    <div style={{ fontSize:"11px", fontWeight:"600", color: i===0 ? "#1E3A5F" : "#8899AA" }}>
                      {i===0 ? "✓ Selected" : "Click to select"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUMMARY SIDEBAR */}
          <div style={{ position:"sticky", top:"24px" }}>
            <div style={{ background:"#fff", borderRadius:"12px", border:"1.5px solid #D6E4F0", overflow:"hidden", marginBottom:"16px" }}>
              <div style={{ background:"#1E3A5F", padding:"16px 20px" }}>
                <div style={{ fontSize:"13px", fontWeight:"600", color:"#C8A45A" }}>Selected Verification Types</div>
                <div style={{ fontSize:"11px", color:"rgba(255,255,255,0.45)", marginTop:"2px" }}>1 type selected</div>
              </div>
              <div style={{ padding:"20px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"12px" }}>
                  <div>
                    <div style={{ fontSize:"13px", fontWeight:"600", color:"#1E3A5F" }}>Academic Degree & Certificate</div>
                    <div style={{ fontSize:"11px", color:"#8899AA", marginTop:"2px" }}>Est. 15–25 working days</div>
                  </div>
                  <button style={{ background:"transparent", border:"none", color:"#B84040", cursor:"pointer", fontSize:"18px", lineHeight:1 }}>×</button>
                </div>
                <div style={{ background:"#EEF3F8", borderRadius:"6px", padding:"10px 12px" }}>
                  <div style={{ fontSize:"11px", fontWeight:"600", color:"#1E3A5F", marginBottom:"6px" }}>Required Documents:</div>
                  {["Degree / Certificate (clear scan)", "Official transcript", "Passport copy"].map((d, i) => (
                    <div key={i} style={{ fontSize:"11px", color:"#5A6A7E", marginBottom:"3px" }}>• {d}</div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background:"#EEF3F8", borderRadius:"10px", padding:"14px 16px", border:"1px solid #D6E4F0", marginBottom:"16px" }}>
              <div style={{ fontSize:"11px", fontWeight:"600", color:"#1E3A5F", marginBottom:"4px" }}>📋 How it works</div>
              <div style={{ fontSize:"12px", color:"#5A6A7E", lineHeight:"1.6" }}>
                Validate Group will contact the issuing authority directly to confirm the authenticity of your document. No attestation or physical copies required.
              </div>
            </div>

            <button style={{ width:"100%", padding:"14px", background:"#C8A45A", border:"none", borderRadius:"10px", fontSize:"14px", fontWeight:"700", color:"#1E3A5F", cursor:"pointer", marginBottom:"10px" }}>
              Continue to Application →
            </button>
            <a href="/dashboard" style={{ display:"block", textAlign:"center", fontSize:"13px", color:"#8899AA", textDecoration:"none" }}>← Back to Dashboard</a>
          </div>

        </div>
      </div>
    </div>
  );
}
