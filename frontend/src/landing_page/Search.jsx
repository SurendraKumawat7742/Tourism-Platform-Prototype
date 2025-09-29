import React, { useState, useEffect, useRef } from 'react';

const initialCards = [
  { id: 1, title: 'Amber Palace', category: 'heritage', img: 'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/125.jpg', meta: '11 km from city', desc: 'Amber Palace - detailed text...' },
  { id: 2, title: 'City Palace', category: 'heritage', img: 'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/103.jpg', meta: 'Historic', desc: 'City Palace - detailed text...' },
  { id: 3, title: 'Jaigarh Fort', category: 'heritage', img: 'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/124.jpg', meta: 'Photo spot', desc: 'Jaigarh Fort - detailed text...' },
  { id: 4, title: 'Local Cuisine', category: 'food', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/09/14/d0/the-cuisine-that-originated.jpg?w=800&h=800&s=1', meta: 'Cuisine', desc: 'Food - detailed text...' },
  { id: 5, title: 'Local Handicrafts', category: 'shopping', img: 'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/experience/shopping-in-rajasthan/Jewellery.jpg', meta: 'Souvenirs', desc: 'Handicrafts - detailed text...' },
  { id: 6, title: 'Jal Mahal', category: 'heritage', img: 'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/105.jpg', meta: 'Iconic', desc: 'Jal Mahal - detailed text...' },
];

export default function JaipurApp() {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [cards, setCards] = useState(initialCards);
  const [modal, setModal] = useState({ open: false, title: '', img: '', desc: '' });
  const [chatOpen, setChatOpen] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    // basic keyboard handlers
    function onKey(e) {
      if (e.key === 'Escape') closeModal();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function closeModal() {
    setModal({ open: false, title: '', img: '', desc: '' });
  }
  function openModal(title, img, desc) {
    setModal({ open: true, title, img, desc });
  }

  function handleSearch() {
    const q = query.trim().toLowerCase();
    if (!q) { setCards(initialCards); return; }
    setCards(initialCards.filter(c => c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)));
  }

  function filteredCards() {
    const byFilter = filter === 'all' ? cards : cards.filter(c => c.category === filter);
    return byFilter;
  }

  function sendChat() {
    const input = document.getElementById('chat-input');
    const v = input?.value?.trim();
    if (!v) return;
    const el = document.createElement('div');
    el.style.margin = '8px 0'; el.style.padding = '8px'; el.style.background = '#eef2ff'; el.style.borderRadius = '8px'; el.textContent = 'You: ' + v;
    chatBodyRef.current?.appendChild(el);
    input.value = '';
    setTimeout(() => {
      const bot = document.createElement('div');
      bot.style.margin = '8px 0'; bot.style.padding = '8px'; bot.style.background = '#f1f5f9'; bot.style.borderRadius = '8px';
      bot.textContent = 'Agent: Thanks! For that I recommend checking "Places" or ask for recommendations like "best sunset spot".';
      chatBodyRef.current?.appendChild(bot);
      chatBodyRef.current && (chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight);
    }, 600);
  }

  // CSS taken from original HTML, embedded so this is a single-file component.
  const css = `
:root{ --accent:#ff6b35; --accent-2:#0d6efd; --muted:#6b7280; --bg:#f8fafc; --card:#ffffff; --glass: rgba(255,255,255,0.7); --radius:14px; --shadow: 0 10px 30px rgba(15,23,42,0.08); --max-width:1200px; --gap:18px; color-scheme: light; }
*{box-sizing:border-box}
html,body{height:100%;margin:0;font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; background:linear-gradient(180deg,#fff 0%, #fbfcfe 100%); color:#07203a}
a{color:inherit}img{display:block;max-width:100%}
.container{max-width:var(--max-width);margin:0 auto;padding:28px}
.nav{position:sticky;top:0;z-index:40;background:rgba(255,255,255,0.7);backdrop-filter: blur(6px);border-bottom:1px solid rgba(15,23,42,0.04)}
.nav-inner{display:flex;align-items:center;gap:16px;padding:10px 22px;max-width:var(--max-width);margin:0 auto}
.brand{display:flex;align-items:center;gap:12px}
.brand img{height:46px;width:46px;border-radius:10px;object-fit:cover}
.brand h1{font-family:'Playfair Display',serif;font-size:18px;margin:0}
.nav-left{display:flex;align-items:center;gap:14px}
.nav-right{margin-left:auto;display:flex;gap:10px;align-items:center}
.nav a.button{background:var(--accent);color:white;padding:10px 14px;border-radius:10px;text-decoration:none;font-weight:600;box-shadow:0 6px 18px rgba(255,107,53,0.18)}
.nav a.ghost{padding:8px 12px;border-radius:8px;border:1px solid rgba(7,32,58,0.06);background:transparent}
.hero{display:grid;grid-template-columns:1fr 420px;gap:28px;align-items:center;padding:40px 0}
.hero-card{padding:36px;background:linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.95));border-radius:18px;box-shadow:var(--shadow)}
.kicker{display:inline-block;padding:6px 10px;border-radius:999px;background:linear-gradient(90deg,var(--accent),#ff9a6a);color:white;font-weight:700;font-size:12px}
.hero h2{font-family:'Playfair Display',serif;font-size:36px;margin:14px 0 8px}
.hero p.lead{margin:0;color:var(--muted);line-height:1.6}
.search-row{display:flex;gap:10px;margin-top:20px}
.search-row input[type="search"]{flex:1;padding:12px 14px;border-radius:12px;border:1px solid rgba(7,32,58,0.06);font-size:15px}
.search-row button{padding:12px 16px;border-radius:12px;border:none;background:var(--accent-2);color:white;font-weight:700;cursor:pointer}
.hero-cta{margin-top:18px;display:flex;gap:12px}.cta-primary{background:var(--accent);color:white;padding:12px 16px;border-radius:12px;border:none;font-weight:700}.cta-ghost{background:transparent;border:1px solid rgba(7,32,58,0.06);padding:10px 14px;border-radius:12px}
.filters{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin:22px 0}
.chip{padding:8px 12px;border-radius:999px;border:1px solid rgba(7,32,58,0.06);background:var(--card);cursor:pointer;font-weight:600}
.chip.active{background:linear-gradient(90deg,var(--accent),#ff9a6a);color:white;border:none}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--gap)}
.card{background:var(--card);border-radius:14px;overflow:hidden;box-shadow:var(--shadow);display:flex;flex-direction:column}
.card .imgwrap{height:200px;overflow:hidden}
.card .imgwrap img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease}
.card:hover .imgwrap img{transform:scale(1.06)}
.card-body{padding:16px;display:flex;flex-direction:column;gap:10px}
.card h3{margin:0;font-size:16px}.card p{margin:0;color:var(--muted);font-size:14px}.card .meta{display:flex;justify-content:space-between;align-items:center;margin-top:auto}
.pill{padding:6px 10px;border-radius:999px;font-weight:700;background:rgba(13,110,253,0.08);color:var(--accent-2);font-size:13px}
.modal{position:fixed;inset:0;background:rgba(2,6,23,0.5);display:none;align-items:center;justify-content:center;z-index:60}
.modal.open{display:flex}
.modal .sheet{background:white;border-radius:16px;max-width:880px;width:96%;box-shadow:0 30px 60px rgba(2,6,23,0.4);overflow:hidden}
.sheet .left{width:45%;float:left}.sheet .right{width:55%;float:right;padding:22px}.sheet img{height:100%;width:100%;object-fit:cover}
.hero-gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;border-radius:12px;overflow:hidden}
.hero-gallery img{height:130px;object-fit:cover}
.chat-btn{position:fixed;right:20px;bottom:20px;background:linear-gradient(180deg,var(--accent),#ff8a5a);color:white;border:none;padding:14px;border-radius:999px;box-shadow:0 10px 30px rgba(255,107,53,0.2);cursor:pointer;font-weight:800;z-index:80}
.chat-panel{position:fixed;right:20px;bottom:90px;width:360px;max-width:calc(100% - 40px);border-radius:12px;background:white;box-shadow:0 20px 60px rgba(2,6,23,0.25);overflow:hidden;display:none;flex-direction:column;z-index:80}
.chat-panel.open{display:flex}
.chat-panel .head{padding:12px 14px;background:linear-gradient(90deg,var(--accent),#ff9a6a);color:white;font-weight:700}
.chat-panel .body{padding:12px;height:260px;overflow:auto}
.chat-panel .input{display:flex;padding:10px;border-top:1px solid rgba(2,6,23,0.04)}
.chat-panel input{flex:1;padding:10px;border-radius:8px;border:1px solid rgba(2,6,23,0.06)}
.chat-panel button{margin-left:8px;padding:10px 12px;border-radius:8px;border:none;background:var(--accent-2);color:white}
footer{margin-top:40px;padding:28px;background:#02203a;color:white;border-radius:16px}footer .cols{display:flex;gap:24px;max-width:var(--max-width);margin:0 auto}footer a{color:rgba(255,255,255,0.9)}
@media (max-width:1000px){ .hero{grid-template-columns:1fr 320px} .grid{grid-template-columns:repeat(2,1fr)} }
@media (max-width:720px){ .nav-inner{padding:12px} .hero{grid-template-columns:1fr;} .hero-card{order:2} .grid{grid-template-columns:1fr} .sheet .left,.sheet .right{width:100%;float:none} }
.muted{color:var(--muted)}
`;

  return (
    <div>
      <style>{css}</style>

      <nav className="nav" aria-label="Main navigation">
        <div className="nav-inner container">
          <div className="brand nav-left">
            <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b3df5d3b6f4b0d0e6f0b8a4e7e4e1d9" alt="Jaipur logo" />
            <div>
              <h1>Jaipur Travel</h1>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>Explore the Pink City</div>
            </div>
          </div>

          <div className="nav-right">
            <a className="ghost" href="#places">Places</a>
            <a className="ghost" href="#foods">Foods</a>
            <a className="ghost" href="#handicrafts">Handicrafts</a>
            <a className="ghost" href="#cafes">Cafes</a>
            <a className="button" href="#book">Book Trip</a>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-card">
              <span className="kicker">Featured</span>
              <h2 id="hero-title">Discover the Pink City — Jaipur</h2>
              <p className="lead">Palaces, colourful bazaars, majestic forts and unforgettable food. Plan a trip that mixes royal history with warm Rajasthani hospitality.</p>

              <div className="search-row" role="search" aria-label="Search for places">
                <input type="search" id="main-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search places, food, experiences..." aria-label="Search" />
                <button id="search-btn" onClick={handleSearch}>Search</button>
              </div>

              <div className="hero-cta">
                <button className="cta-primary" id="plan-trip">Plan Your Trip</button>
                <button className="cta-ghost" id="explore-map">View Map</button>
              </div>

              <div style={{ marginTop: 18 }}>
                <small className="muted">Popular:</small>
                <div className="filters" id="filter-row">
                  {['all', 'heritage', 'food', 'shopping', 'nature'].map((f) => (
                    <button key={f} className={`chip ${filter === f ? 'active' : ''}`} onClick={() => { setFilter(f); setCards(initialCards); }}>{f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}</button>
                  ))}
                </div>
              </div>
            </div>

            <aside>
              <div style={{ borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                <div className="hero-gallery">
                  <img src="https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/14.jpg" alt="Hawa Mahal" />
                  <img src="https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/105.jpg" alt="Jal Mahal" />
                  <img src="https://media.gettyimages.com/id/1394553603/photo/hawa-mahal.jpg?s=612x612&w=0&k=20&c=aG3m2UaQcuGijvR8MJs54W3c6gr5x_KAboedtslHsvQ=" alt="Hawa Mahal 2" />
                  <img src="https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/experience/shopping-in-rajasthan/Jewellery.jpg" alt="Local crafts" />
                </div>
              </div>
              <div style={{ marginTop: 12, fontSize: 13, color: 'var(--muted)' }}>Pro tip: Early mornings are best for monuments — fewer crowds and softer light for photos.</div>
            </aside>
          </section>

          <section id="places">
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Famous Places</h2>
            <p className="muted">Tap any card to read more about the place, timings, ticket info and nearby eats.</p>

            <div className="grid" id="cards-grid" aria-live="polite">
              {filteredCards().map((card) => (
                <article key={card.id} className="card" data-category={card.category} style={{ display: 'flex' }}>
                  <div className="imgwrap"><img src={card.img} alt={card.title} /></div>
                  <div className="card-body">
                    <h3>{card.title}</h3>
                    <p className="muted">{card.desc.replace(' - detailed text...', '')}</p>
                    <div className="meta">
                      <span className="pill">{card.meta}</span>
                      <button className="chip" onClick={() => openModal(card.title, card.img, card.desc)}>Explore</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="foods" style={{ marginTop: 30 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Popular Eats</h2>
            <p className="muted">Top-rated restaurants & where to try local dishes.</p>
            <div className="grid" style={{ marginTop: 14 }}>
              {initialCards.filter(c => c.category === 'food').map(card => (
                <article key={card.id} className="card" data-category={card.category} style={{ display: 'flex' }}>
                  <div className="imgwrap"><img src={card.img} alt={card.title} /></div>
                  <div className="card-body">
                    <h3>{card.title === 'Local Cuisine' ? 'Local Cuisine' : card.title}</h3>
                    <p className="muted">Try Dal Baati Churma, Laal Maas & pyaaz kachori at authentic local eateries.</p>
                    <div className="meta"><span className="pill">Cuisine</span><button className="chip" onClick={() => openModal(card.title, card.img, card.desc)}>Explore</button></div>
                  </div>
                </article>
              ))}
            </div>
          </section>

        </div>
      </main>

      <div className={`modal ${modal.open ? 'open' : ''}`} id="modal" role="dialog" aria-modal="true" aria-hidden={!modal.open} onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
        <div className="sheet">
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="left"><img id="modal-img" src={modal.img} alt={modal.title} /></div>
            <div className="right">
              <h3 id="modal-title">{modal.title}</h3>
              <p id="modal-desc" className="muted">{modal.desc}</p>
              <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
                <button className="cta-primary" onClick={closeModal}>Close</button>
                <a href="#" className="chip">Get Tickets</a>
                <a href="#" className="chip">Nearby Cafes</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="chat-btn" id="chat-btn" aria-haspopup="dialog" aria-expanded={chatOpen} onClick={() => setChatOpen(open => !open)}>💬 Help</button>
      <div className={`chat-panel ${chatOpen ? 'open' : ''}`} id="chat-panel" role="dialog" aria-hidden={!chatOpen}>
        <div className="head">Ask Jaipur Travel</div>
        <div className="body" id="chat-body" ref={chatBodyRef}>
          <div style={{ padding: 8, background: '#f1f5f9', borderRadius: 8, marginBottom: 8 }}>Hi 👋 I can help with places, food or itinerary. Try: "Best view at sunset"</div>
        </div>
        <div className="input">
          <input id="chat-input" placeholder="Type a question..." aria-label="Chat input" onKeyDown={(e) => { if (e.key === 'Enter') sendChat(); }} />
          <button id="chat-send" onClick={sendChat}>Send</button>
        </div>
      </div>

      <footer>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', gap: 20, alignItems: 'flex-start' }}>
          <div style={{ maxWidth: 520 }}>
            <h3 style={{ margin: '0 0 8px', fontFamily: "'Playfair Display', serif" }}>Jaipur Travel</h3>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)' }}>Plan your royal escape: curated experiences, trusted guides and local stories.</p>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <div>
              <h4 style={{ margin: '0 0 6px' }}>Explore</h4>
              <a href="#places">Places</a><br />
              <a href="#foods">Foods</a><br />
              <a href="#handicrafts">Handicrafts</a>
            </div>
            <div>
              <h4 style={{ margin: '0 0 6px' }}>Contact</h4>
              <div style={{ color: 'rgba(255,255,255,0.8)' }}>support@jaipurtravel.example</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', marginTop: 6 }}>+91 98765 43210</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
