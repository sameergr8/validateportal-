export default function LoginPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── LEFT PANEL ── */}
      <div style={{
        width: "45%", background: "#1E3A5F", display: "flex", flexDirection: "column",
        padding: "0", position: "relative", overflow: "hidden"
      }}>
        {/* Decorative circles */}
        <div style={{ position:"absolute", top:"-100px", right:"-100px", width:"400px", height:"400px", borderRadius:"50%", background:"rgba(200,164,90,0.06)" }}/>
        <div style={{ position:"absolute", bottom:"-60px", left:"-60px", width:"280px", height:"280px", borderRadius:"50%", background:"rgba(200,164,90,0.04)" }}/>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"600px", height:"600px", borderRadius:"50%", background:"rgba(255,255,255,0.015)" }}/>

        <div style={{ padding: "48px 52px", display:"flex", flexDirection:"column", height:"100%", position:"relative", zIndex:1 }}>
          {/* Logo */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"8px" }}>
              <div style={{ width:"40px", height:"40px", background:"#C8A45A", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#1E3A5F"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"20px", fontWeight:"700", color:"#fff", letterSpacing:"0.3px" }}>Validate Group</div>
                <div style={{ fontSize:"11px", color:"rgba(255,255,255,0.45)", letterSpacing:"1.5px", textTransform:"uppercase" }}>TrueValidate Portal</div>
              </div>
            </div>
          </div>

          {/* Middle content */}
          <div style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", paddingBottom:"40px" }}>
            <div style={{ width:"48px", height:"3px", background:"#C8A45A", borderRadius:"2px", marginBottom:"32px" }}/>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"38px", fontWeight:"700", color:"#fff", lineHeight:"1.2", marginBottom:"20px" }}>
              Credential<br/>Verification<br/><span style={{ color:"#C8A45A" }}>You Can Trust.</span>
            </div>
            <p style={{ fontSize:"14px", color:"rgba(255,255,255,0.55)", lineHeight:"1.8", maxWidth:"340px", fontWeight:"300" }}>
              Submit and track your verification requests, upload documents, and receive certified reports — all in one secure platform.
            </p>

            {/* Feature list */}
            <div style={{ marginTop:"40px", display:"flex", flexDirection:"column", gap:"14px" }}>
              {["Certificate & Degree Verification","Background Screening","Due Diligence Services","Real-time Case Tracking"].map((f,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                  <div style={{ width:"6px", height:"6px", background:"#C8A45A", borderRadius:"50%", flexShrink:0 }}/>
                  <span style={{ fontSize:"13px", color:"rgba(255,255,255,0.65)", fontWeight:"400" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:"24px" }}>
            <p style={{ fontSize:"11px", color:"rgba(255,255,255,0.3)", lineHeight:"1.6" }}>
              Accredited by Dubai Chamber · ASIS Member<br/>
              ISO Certified · 10+ Years of Experience
            </p>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", padding:"40px", background:"#F0F4F8" }}>
        <div style={{ width:"100%", maxWidth:"420px" }}>

          <div style={{ marginBottom:"36px" }}>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"28px", fontWeight:"700", color:"#1E3A5F", marginBottom:"6px" }}>Welcome Back</h2>
            <p style={{ fontSize:"14px", color:"#5A6A7E", fontWeight:"300" }}>Sign in to your TrueValidate account</p>
          </div>

          {/* UAE Pass button */}
          <button style={{
            width:"100%", padding:"14px 20px", borderRadius:"10px",
            background:"#1E3A5F", border:"none", cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center", gap:"12px",
            marginBottom:"20px", transition:"all 0.2s"
          }}>
            <div style={{ width:"28px", height:"28px", background:"#C8A45A", borderRadius:"6px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#1E3A5F"/>
              </svg>
            </div>
            <div style={{ textAlign:"left" }}>
              <div style={{ fontSize:"13px", fontWeight:"600", color:"#C8A45A", letterSpacing:"0.3px" }}>Continue with UAE Pass</div>
              <div style={{ fontSize:"11px", color:"rgba(255,255,255,0.5)" }}>UAE Government Digital Identity</div>
            </div>
          </button>

          {/* Divider */}
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"20px" }}>
            <div style={{ flex:1, height:"1px", background:"#D6E4F0" }}/>
            <span style={{ fontSize:"12px", color:"#8899AA", fontWeight:"500" }}>or sign in with email</span>
            <div style={{ flex:1, height:"1px", background:"#D6E4F0" }}/>
          </div>

          {/* Form */}
          <div style={{ display:"flex", flexDirection:"column", gap:"16px", marginBottom:"24px" }}>
            <div>
              <label style={{ display:"block", fontSize:"12px", fontWeight:"600", color:"#1E3A5F", marginBottom:"6px", letterSpacing:"0.3px" }}>EMAIL ADDRESS</label>
              <input type="email" placeholder="you@example.com" style={{
                width:"100%", padding:"12px 16px", borderRadius:"8px",
                border:"1.5px solid #D6E4F0", background:"#fff", fontSize:"14px",
                color:"#1A2535", outline:"none"
              }}/>
            </div>
            <div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"6px" }}>
                <label style={{ fontSize:"12px", fontWeight:"600", color:"#1E3A5F", letterSpacing:"0.3px" }}>PASSWORD</label>
                <a href="#" style={{ fontSize:"12px", color:"#C8A45A", fontWeight:"500", textDecoration:"none" }}>Forgot password?</a>
              </div>
              <input type="password" placeholder="••••••••" style={{
                width:"100%", padding:"12px 16px", borderRadius:"8px",
                border:"1.5px solid #D6E4F0", background:"#fff", fontSize:"14px",
                color:"#1A2535", outline:"none"
              }}/>
            </div>
          </div>

          <button style={{
            width:"100%", padding:"14px", borderRadius:"10px",
            background:"#C8A45A", border:"none", cursor:"pointer",
            fontSize:"14px", fontWeight:"600", color:"#1E3A5F",
            letterSpacing:"0.5px"
          }}>
            Sign In to Portal
          </button>

          <p style={{ textAlign:"center", fontSize:"13px", color:"#5A6A7E", marginTop:"20px" }}>
            Don&apos;t have an account?{" "}
            <a href="#" style={{ color:"#1E3A5F", fontWeight:"600", textDecoration:"none" }}>Register here</a>
          </p>

          {/* Register as employer */}
          <div style={{ marginTop:"24px", padding:"16px 20px", background:"#EEF3F8", borderRadius:"10px", border:"1px solid #D6E4F0" }}>
            <p style={{ fontSize:"12px", color:"#5A6A7E", lineHeight:"1.6" }}>
              <strong style={{ color:"#1E3A5F" }}>Employer / Company?</strong>{" "}
              Register a corporate account to manage employee verifications in bulk.{" "}
              <a href="#" style={{ color:"#C8A45A", fontWeight:"600", textDecoration:"none" }}>Create company account →</a>
            </p>
          </div>

          <p style={{ textAlign:"center", fontSize:"11px", color:"#8899AA", marginTop:"28px" }}>
            © 2025 Validate Group · Dubai, UAE · <a href="#" style={{ color:"#8899AA" }}>Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
