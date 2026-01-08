/* ===============================
    GLOBAL RESET & BASE
================================ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #000;
    color: #a7a7a7;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.6;
    letter-spacing: 0.3px;
    animation: pageFade 1.2s ease forwards;
}

/* ===============================
    AMBIENT BACKGROUND SYSTEM
================================ */
body::before {
    content: "";
    position: fixed;
    inset: 0;
    background:
        radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05), transparent 45%);
    animation: ambientDrift 25s linear infinite;
    z-index: -2;
}

body::after {
    content: "";
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90vw;
    height: 90vw;
    max-width: 700px;
    max-height: 700px;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(120,120,120,0.18), transparent 70%);
    filter: blur(120px);
    animation: glowPulse 10s ease-in-out infinite;
    z-index: -3;
}

/* ===============================
    HEADER / NAV (Mobile First)
================================ */
header {
    width: 90%;
    max-width: 1200px;
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    text-align: center;
}

.h1 h1 {
    font-size: 2.2rem;
    font-weight: 300;
    color: #fff;
    letter-spacing: 1px;
    line-height: 1.05;
}

nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
}

/* ===============================
    MAIN CONTENT
================================ */
main {
    width: 100%;
    max-width: 900px;
    padding: 3rem 1.5rem;
    text-align: center;
}

h2 {
    color: #fff;
    font-weight: 400;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
}

.text-glow {
    text-shadow: 0 0 20px rgba(255,255,255,0.15);
}

.tagline { padding-bottom: 10px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    max-width: 720px;
    margin: auto;
    font-size: 1rem;
    line-height: 1.7;
    color: #888;
}

/* ===============================
    TAG BOX & CONTACT CARD
================================ */
.tag-box {
    padding: 0.6rem 1.8rem;
    border-radius: 50px;
    text-decoration: none;
    color: #fff;
    background: linear-gradient(120deg, #5300a0, #757575, #6600c5);
    background-size: 300% 300%;
    animation: gradientShift 4s linear infinite;
    transition: transform .3s ease, box-shadow .3s ease;
    display: inline-flex;
    align-items: center;
}

.contact-card {
    position: relative;
    padding: 0.7rem 2.2rem;
    border-radius: 999px;
    text-decoration: none;
    color: #fff;
    background: #000;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    isolation: isolate;
    transition: transform .35s cubic-bezier(.2,.8,.2,1);
    animation: breathe 4s ease-in-out infinite;
}

.contact-card::before {
    content: "";
    position: absolute;
    inset: -250%;
    background: conic-gradient(transparent, #9fa6ad, #ffffff, #9fa6ad, transparent 55%);
    animation: energySpin 4s linear infinite;
    z-index: -2;
}

.contact-card::after {
    content: "";
    position: absolute;
    inset: 2px;
    background: #000;
    border-radius: inherit;
    z-index: -1;
}

.contact-card.gold::before {
    background: conic-gradient(transparent, #b8860b, #ffd700, #fff8dc, #b8860b, transparent 55%);
}

/* ===============================
    NEURAL CARD
================================ */
.neural-card {
    position: relative;
    border-radius: 18px;
    background: #0b0b0b;
    overflow: hidden;
    transform: translateZ(0);
}

.neural-card::before {
    content: "";
    position: absolute;
    inset: -40%;
    background: radial-gradient(circle at 30% 30%, rgba(63,224,197,0.25), transparent 35%),
                radial-gradient(circle at 70% 70%, rgba(120,180,255,0.2), transparent 40%);
    animation: neuralDrift 18s linear infinite;
    filter: blur(30px);
    z-index: -1;
}

.neural-card::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(120deg, transparent 45%, rgba(63,224,197,0.6), transparent 55%);
    opacity: 0;
    animation: edgeScan 4.5s ease-in-out infinite;
    z-index: -1;
}

/* ===============================
    ION CARD
================================ */
.ion-card {
    position: relative;
    background: #0e0e0e;
    border-radius: 16px;
    transition: transform .35s ease, box-shadow .35s ease;
    animation: ionBreath 6s ease-in-out infinite;
}

/* ===============================
    SIGNAL CARD
================================ */
.signal-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 28px 22px;
    border-radius: 14px;
    background: rgba(18, 18, 18, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.12);
    text-align: center;
    overflow: hidden;
}

.signal-card::before {
    content: "";
    position: absolute;
    left: 0;
    top: -40%;
    width: 100%;
    height: 40%;
    background: linear-gradient(to bottom, transparent, rgba(255, 170, 60, 0.35), transparent);
    animation: signalScan 4s ease-in-out infinite;
    opacity: 0.6;
}

/* ===============================
    STARFIELD CARD
================================ */
.starfield-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    padding: 30px 24px;
    border-radius: 16px;
    background: rgba(14, 14, 18, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.12);
    text-align: center;
    overflow: hidden;
}

.starfield-card::before {
    content: "";
    position: absolute;
    inset: -50%;
    background-image:
        radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,.8), transparent),
        radial-gradient(1px 1px at 80% 40%, rgba(255,255,255,.6), transparent);
    background-repeat: repeat;
    animation: starsDrift 22s linear infinite;
    opacity: 0.6;
}

/* ===============================
    SKILLS & BLOCKS
================================ */
.skill-block h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 22px;
    color: #ff8c00;
}
.signature {
  font-family: 'Pacifico', cursive;
  font-size: 32px;
  font-weight: 400;
  color: #eeebeb;
  letter-spacing: 1px;
}


.skill-category {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 22px;
}
.skills-list{

    padding: 2px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

/* ===============================
    FOOTER
================================ */
footer {
    margin-top: auto;
    padding: 2rem;
    font-size: 0.85rem;
    color: #666;
}

/* ===============================
    DESKTOP ENHANCEMENTS (768px+)
================================ */
@media (min-width: 768px) {
    header {
        flex-direction: row;
        justify-content: space-between;
        padding: 2.5rem 0;
    }

    .h1 h1 { font-size: 2.8rem; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }

    main { padding: 5rem 2rem; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}

    h2 { font-size: 2.2rem; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}

    .tag-box:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(255,255,255,0.25); }
    .contact-card:hover { transform: scale(1.08); }
    .neural-card:hover { transform: translateY(-6px); box-shadow: 0 25px 60px rgba(63,224,197,0.25); }
    .ion-card:hover { transform: translateY(-8px) scale(1.015); }
    .signal-card:hover { transform: translateY(-6px); border-color: rgba(255, 170, 60, 0.45); }
    .starfield-card:hover { transform: translateY(-6px); }
}

/* ===============================
    ANIMATIONS KEYFRAMES
================================ */
@keyframes pageFade { from { opacity: 0; } to { opacity: 1; } }
@keyframes gradientShift { 0% { background-position: 0% 50%; } 100% { background-position: 300% 50%; } }
@keyframes energySpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes breathe { 0%,100% { box-shadow: 0 0 10px rgba(255,255,255,0.12); } 50% { box-shadow: 0 0 28px rgba(255,255,255,0.35); } }
@keyframes glowPulse { 0%,100% { transform: translate(-50%,-50%) scale(1); } 50% { transform: translate(-50%,-50%) scale(1.08); } }
@keyframes ambientDrift { from { background-position: 0 0; } to { background-position: 1000px 1000px; } }
@keyframes neuralDrift { 0% { transform: translate(-8%,-8%) scale(1); } 50% { transform: translate(8%,8%) scale(1.15); } 100% { transform: translate(-8%,-8%) scale(1); } }
@keyframes edgeScan { 0%,100% { opacity: 0; } 50% { opacity: .55; } }
@keyframes ionBreath { 0%, 100% { box-shadow: 0 0 0 rgba(0,0,0,0); } 50% { box-shadow: 0 20px 45px rgba(63,224,197,.25); } }
@keyframes signalScan { 0% { top: -40%; } 50%, 100% { top: 100%; } }
@keyframes starsDrift { from { transform: translateY(0); } to { transform: translateY(-200px); } }






/* ===============================
    FIXED STAR EFFECT
================================ */
.star-effect {
    position: relative;
    background-color: #000; /* Ensures stars are visible */
    background-image: 
        radial-gradient(1px 1px at 10% 10%, #fff, transparent),
        radial-gradient(1px 1px at 20% 50%, #fff, transparent),
        radial-gradient(1.5px 1.5px at 30% 90%, #fff, transparent),
        radial-gradient(1px 1px at 50% 20%, #fff, transparent),
        radial-gradient(1.5px 1.5px at 60% 70%, #fff, transparent),
        radial-gradient(1px 1px at 80% 30%, #fff, transparent),
        radial-gradient(1px 1px at 90% 80%, #fff, transparent);
    background-size: 250px 250px; /* How dense the stars are */
    animation: starPulse 4s ease-in-out infinite;
    
    /* Center the content inside */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: 20px;
    overflow: hidden;
}

@keyframes starPulse {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 0.4; }
}
           









/* ===============================
   /* ===============================
    MINIMAL APPLE-STYLE LOGO
================================ */
.logo-apple {
    /* Font Styling: Clean & Small */
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
    font-size: 1.1rem; /* Small, like a navigation brand */
    font-weight: 500;
    letter-spacing: -0.02em; /* Tight kerning like Apple */
    text-decoration: none;
    display: inline-block;
    color: #f5f5f7; /* Apple's off-white */
    
    /* The Shimmer Mask */
    background: linear-gradient(
        75deg, 
        rgba(255, 255, 255, 0.4) 30%, 
        rgba(255, 255, 255, 1) 50%, 
        rgba(255, 255, 255, 0.4) 70%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    
    /* Interaction & Animation */
    animation: appleShimmer 8s infinite linear;
    transition: opacity 0.3s ease;
}

.logo-apple:hover {
    opacity: 0.7; /* Subtile dim on hover, Apple style */
}

@keyframes appleShimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

/* Container to ensure it stays in place */
.h1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.h3{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

.p {
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}




.fade-down {
  animation: fadeDown 1s ease;
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.fade-up {
    animation: fadeUp 2s ease;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}


.fade-right{
    animation: fadeRight 2s ease; 
}

@keyframes fadeRight{
    from{
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}



