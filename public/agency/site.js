'use strict';
/* EDIT BUSINESS SETTINGS HERE. All campaign dates, prices and contact details
   are configured together. The fixed UAE timestamps must never reset per visit. */
const SITE_CONFIG = Object.freeze({
  campaignStart: '2026-09-16T00:00:00+04:00',
  campaignEnd: '2026-10-01T00:00:00+04:00',
  timeZone: 'Asia/Dubai',
  whatsapp: '971567654647',
  displayPhone: '056 765 4647',
  prices: { starter: 600, starterRegular: 2400, business: 1500, system: 2000 }
});
const price = number => number.toLocaleString('en-US');
const contactUrl = message => `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
const setText = (id, text) => { document.getElementById(id).textContent = text; };
const formatDate = timestamp => new Intl.DateTimeFormat('en-US', {
  timeZone: SITE_CONFIG.timeZone, year: 'numeric', month: 'long', day: 'numeric'
}).format(new Date(timestamp));
const getCampaignState = (now = Date.now()) => now < Date.parse(SITE_CONFIG.campaignStart) ? 'scheduled' : now >= Date.parse(SITE_CONFIG.campaignEnd) ? 'ended' : 'active';
const p = SITE_CONFIG.prices;
const genericMessage = 'Hi Oneclick Digital Solution, I’d like to discuss a website or digital services for my business.';
document.querySelectorAll('[data-contact]').forEach(link => { link.href = contactUrl(genericMessage); });
document.getElementById('phone').href = `tel:+${SITE_CONFIG.whatsapp}`;
setText('phone', SITE_CONFIG.displayPhone);
document.getElementById('business-price').innerHTML = `<span class="currency">AED</span><strong>${price(p.business)}</strong>`;
document.getElementById('system-price').innerHTML = `<span class="from">From</span><span class="currency">AED</span><strong>${price(p.system)}</strong>`;
document.getElementById('business-link').href = contactUrl(`Hi Oneclick Digital Solution, I’m interested in the AED ${price(p.business)} Business website package. Can we discuss the details?`);
document.getElementById('system-link').href = contactUrl(`Hi Oneclick Digital Solution, I need a website with an admin dashboard. Can we discuss the Business System package starting from AED ${price(p.system)}?`);
let previousState;
let clock;
function updateCampaign() {
  const now = Date.now();
  const state = getCampaignState(now);
  const active = state === 'active';
  if (state !== previousState) {
    const campaignDays = Math.round((Date.parse(SITE_CONFIG.campaignEnd) - Date.parse(SITE_CONFIG.campaignStart)) / 86400000);
    setText('packages-title', active ? `${campaignDays}-Day Website Offer` : 'Your next move, made simple.');
    setText('campaign-sub', active ? `Save ${Math.round((1-p.starter/p.starterRegular)*100)}% on your Starter website.` : 'Choose the right starting point for your business.');
    setText('hero-offer', active ? `Websites from AED ${price(p.starter)}` : 'Websites built around your business.');
    setText('starter-badge', active ? `${Math.round((1-p.starter/p.starterRegular)*100)}% OFF` : 'STARTER');
    document.getElementById('starter-price').innerHTML = active ? `<span class="currency">AED</span><strong>${price(p.starter)}</strong><del aria-label="Regular price AED ${price(p.starterRegular)}">AED ${price(p.starterRegular)}</del>` : '<p class="current-price">Contact us for current pricing.</p>';
    document.getElementById('starter-link').href = contactUrl(active ? `Hi Oneclick Digital Solution, I’m interested in the AED ${price(p.starter)} Starter website offer. Can we discuss my business?` : 'Hi Oneclick Digital Solution, I’m interested in a Starter website. What is your current pricing?');
    setText('starter-question', active ? `What is included in the AED ${price(p.starter)} offer?` : 'What is included in the Starter package?');
    setText('starter-answer', 'A mobile-responsive public website with up to five pages, business and services information, WhatsApp contact, social links and basic on-page SEO. It does not include an admin dashboard. ' + (active ? 'Promotional pricing applies only during the stated campaign.' : 'Contact us for current pricing.'));
    setText('campaign-status', active ? 'A fresh start. A limited-time offer.' : state === 'ended' ? 'Offer ended.' : `Offer starts ${formatDate(SITE_CONFIG.campaignStart)}.`);
    setText('deadline', active ? `Offer ends ${formatDate(Date.parse(SITE_CONFIG.campaignEnd)-60000)} at 11:59 PM UAE time.` : state === 'scheduled' ? 'Scheduled start: 12:00 AM UAE time.' : 'Contact us for current Starter pricing.');
    document.querySelector('.countdown').hidden = state === 'scheduled';
    document.querySelector('.countdown').setAttribute('aria-label', state === 'ended' ? 'Offer ended. No time remaining.' : 'Time remaining in the website offer');
    previousState = state;
  }
  const remaining = active ? Math.max(0, Math.floor((Date.parse(SITE_CONFIG.campaignEnd)-now)/1000)) : 0;
  [Math.floor(remaining/86400),Math.floor(remaining/3600)%24,Math.floor(remaining/60)%60,remaining%60].forEach((value,index)=>setText(['days','hours','minutes','seconds'][index], String(value).padStart(2,'0')));
  if (state === 'ended' && clock) { clearInterval(clock); clock = null; }
}
updateCampaign();
if (getCampaignState() !== 'ended') clock = setInterval(updateCampaign,1000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)updateCampaign();});
window.addEventListener('pageshow',updateCampaign);
const menu = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu(returnFocus=false){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');navigation.classList.remove('is-open');if(returnFocus)menu.focus();}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');navigation.classList.toggle('is-open',open);});
navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true')closeMenu(true);});
document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
window.matchMedia('(min-width: 761px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
// Keep the floating contact control off text, prices and other interactive controls.
const floatingContact = document.querySelector('.floating-contact');
const collisionTargets = [...document.querySelectorAll('main p, main h1, main h2, main h3, main li, main a, main summary, .countdown, .price-block, footer a, footer p')];
let collisionFrame;
function keepContactClear() {
  collisionFrame = null;
  const b = floatingContact.getBoundingClientRect();
  const blocked = collisionTargets.some(element => {
    const r = element.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.left < b.right + 6 && r.right > b.left - 6 && r.top < b.bottom + 6 && r.bottom > b.top - 6;
  });
  floatingContact.classList.toggle('is-obstructing', blocked);
}
function scheduleContactCheck(){if(!collisionFrame)collisionFrame=requestAnimationFrame(keepContactClear);}
window.addEventListener('scroll',scheduleContactCheck,{passive:true});
window.addEventListener('resize',scheduleContactCheck);
window.addEventListener('load',scheduleContactCheck);
document.querySelectorAll('details').forEach(item=>item.addEventListener('toggle',scheduleContactCheck));
scheduleContactCheck();
