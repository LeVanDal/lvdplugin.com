/* ============================================
   LVD Plugin AutoCAD - Landing Page Scripts
   ============================================ */

// ============================================
// COMMANDS DATA
// ============================================
const commandsData = [
  // Ốp Lát (Tiling)
  { cmd: 'TAO_PATTERN_LVD', vi: 'Tạo pattern gạch trên boundary sàn', en: 'Create tile pattern on slab boundary', group: 'tiling', groupVi: 'Ốp Lát', groupEn: 'Tiling', color: '#3b82f6' },
  { cmd: 'CHIA_GACH_LVD', vi: 'Chia gạch trong boundary', en: 'Subdivide tiles within boundary', group: 'tiling', groupVi: 'Ốp Lát', groupEn: 'Tiling', color: '#3b82f6' },
  { cmd: 'DIM_GACH_LVD', vi: 'Auto dimension gạch', en: 'Auto tile dimensioning', group: 'tiling', groupVi: 'Ốp Lát', groupEn: 'Tiling', color: '#3b82f6' },
  { cmd: 'TK_GACH_LVD', vi: 'Thống kê số lượng gạch', en: 'Tile quantity statistics/BOM', group: 'tiling', groupVi: 'Ốp Lát', groupEn: 'Tiling', color: '#3b82f6' },
  { cmd: 'TIMGACH_LVD', vi: 'Tìm kiếm / xác định vị trí gạch', en: 'Search/locate tiles', group: 'tiling', groupVi: 'Ốp Lát', groupEn: 'Tiling', color: '#3b82f6' },
  { cmd: 'C2L_LVD', vi: 'Chuyển đổi layout gạch 2 lớp', en: 'Convert 2-layer tile layout', group: 'tiling', groupVi: 'Ốp Lát', groupEn: 'Tiling', color: '#3b82f6' },

  // QS
  { cmd: 'QS_PLINE_LVD', vi: 'Đo khối lượng theo polyline', en: 'Measure polyline-based quantities', group: 'qs', groupVi: 'Bóc tách KL', groupEn: 'QS', color: '#10b981' },
  { cmd: 'QS_AREA_LVD', vi: 'Đo khối lượng theo diện tích', en: 'Measure area quantities', group: 'qs', groupVi: 'Bóc tách KL', groupEn: 'QS', color: '#10b981' },
  { cmd: 'QS_XUATEXCEL_LVD', vi: 'Xuất dữ liệu QS ra Excel', en: 'Export QS data to Excel', group: 'qs', groupVi: 'Bóc tách KL', groupEn: 'QS', color: '#10b981' },
  { cmd: 'QS_SHOW_CAD_LVD', vi: 'Hiển thị kết quả QS trên CAD', en: 'Display QS results in CAD table', group: 'qs', groupVi: 'Bóc tách KL', groupEn: 'QS', color: '#10b981' },
  { cmd: 'QS_SHOW_EXCEL_LVD', vi: 'Hiển thị kết quả QS trên Excel', en: 'Display QS results in Excel', group: 'qs', groupVi: 'Bóc tách KL', groupEn: 'QS', color: '#10b981' },

  // Giáo chống (Scaffolding)
  { cmd: 'RGDB_LVD', vi: 'Rải giáo dầm giữa (Ringlock/Nêm/H-Frame)', en: 'Distribute scaffolding for interior beams', group: 'scaffolding', groupVi: 'Giáo chống', groupEn: 'Scaffolding', color: '#f97316' },
  { cmd: 'DEL_RGDB', vi: 'Xóa giáo dầm giữa', en: 'Delete interior beam scaffolding', group: 'scaffolding', groupVi: 'Giáo chống', groupEn: 'Scaffolding', color: '#f97316' },
  { cmd: 'RGD_LVD', vi: 'Rải giáo dầm biên', en: 'Distribute scaffolding for edge beams', group: 'scaffolding', groupVi: 'Giáo chống', groupEn: 'Scaffolding', color: '#f97316' },
  { cmd: 'DEL_RGD', vi: 'Xóa giáo dầm biên', en: 'Delete edge beam scaffolding', group: 'scaffolding', groupVi: 'Giáo chống', groupEn: 'Scaffolding', color: '#f97316' },
  { cmd: 'RGS_LVD', vi: 'Rải giáo sàn', en: 'Distribute scaffolding for slabs', group: 'scaffolding', groupVi: 'Giáo chống', groupEn: 'Scaffolding', color: '#f97316' },
  { cmd: 'DEL_RGS', vi: 'Xóa giáo sàn', en: 'Delete slab scaffolding', group: 'scaffolding', groupVi: 'Giáo chống', groupEn: 'Scaffolding', color: '#f97316' },

  // Xà gồ (Purlins)
  { cmd: 'HD50X100_LVD', vi: 'Rải xà gồ 50×100 cho dầm', en: 'Distribute 50×100mm purlins for beams', group: 'purlins', groupVi: 'Xà gồ', groupEn: 'Purlins', color: '#06b6d4' },
  { cmd: 'HD50X50_LVD', vi: 'Rải xà gồ 50×50 cho dầm', en: 'Distribute 50×50mm purlins for beams', group: 'purlins', groupVi: 'Xà gồ', groupEn: 'Purlins', color: '#06b6d4' },
  { cmd: 'HS50X100_LVD', vi: 'Rải xà gồ 50×100 cho sàn', en: 'Distribute 50×100mm purlins for slabs', group: 'purlins', groupVi: 'Xà gồ', groupEn: 'Purlins', color: '#06b6d4' },
  { cmd: 'HS50X50_LVD', vi: 'Rải xà gồ 50×50 cho sàn', en: 'Distribute 50×50mm purlins for slabs', group: 'purlins', groupVi: 'Xà gồ', groupEn: 'Purlins', color: '#06b6d4' },

  // Tiện ích (Utilities)
  { cmd: 'TBD_LVD', vi: 'Tạo boundary bằng chọn đối tượng', en: 'Create boundary by selection', group: 'utilities', groupVi: 'Tiện ích', groupEn: 'Utilities', color: '#8b5cf6' },
  { cmd: 'TBP_LVD', vi: 'Tạo boundary bằng chọn điểm', en: 'Create boundary by point-pick', group: 'utilities', groupVi: 'Tiện ích', groupEn: 'Utilities', color: '#8b5cf6' },
  { cmd: 'CBL_LVD', vi: 'Tìm tim dầm ảo thông minh', en: 'Generate virtual beam centerlines', group: 'utilities', groupVi: 'Tiện ích', groupEn: 'Utilities', color: '#8b5cf6' },
  { cmd: 'DEL_DAMAO', vi: 'Xóa tất cả đường tim dầm ảo', en: 'Delete all virtual beam lines', group: 'utilities', groupVi: 'Tiện ích', groupEn: 'Utilities', color: '#8b5cf6' },
  { cmd: 'TKBLOCK_LVD', vi: 'Thống kê block (đếm và lập bảng)', en: 'Block statistics — count and tabulate', group: 'utilities', groupVi: 'Tiện ích', groupEn: 'Utilities', color: '#8b5cf6' },
  { cmd: 'VPP_LVD', vi: 'Layout ván khuôn ply sàn/dầm tự động', en: 'Auto plywood formwork layout (slab/beam)', group: 'utilities', groupVi: 'Tiện ích', groupEn: 'Utilities', color: '#8b5cf6' },
  { cmd: 'VPP_BOM', vi: 'BOM ván khuôn ply từ text chú thích', en: 'Local plywood BOM from annotations', group: 'utilities', groupVi: 'Tiện ích', groupEn: 'Utilities', color: '#8b5cf6' },
  { cmd: 'VCF_LVD', vi: 'Vẽ mặt cắt ván khuôn tự động', en: 'Auto formwork cross-section drawing', group: 'utilities', groupVi: 'Tiện ích', groupEn: 'Utilities', color: '#8b5cf6' },

  // Thép sàn (Slab Rebar)
  { cmd: 'LVD_VETHepSan', vi: 'Vẽ thép sàn (auto/thủ công, 6 kiểu móc)', en: 'Draw slab rebar (auto/manual, 6 hook types)', group: 'rebar', groupVi: 'Thép sàn', groupEn: 'Rebar', color: '#f43f5e' },
  { cmd: 'LVD_ThongKeThep', vi: 'Thống kê thép — bảng tổng hợp', en: 'Rebar statistics — summary table', group: 'rebar', groupVi: 'Thép sàn', groupEn: 'Rebar', color: '#f43f5e' },
  { cmd: 'LVD_XuatExcel', vi: 'Xuất BOM thép ra Excel với hình dạng', en: 'Export rebar BOM to Excel with shapes', group: 'rebar', groupVi: 'Thép sàn', groupEn: 'Rebar', color: '#f43f5e' },
  { cmd: 'LVD_Shopthepsan', vi: 'Tạo shop drawing thép sàn tự động', en: 'Auto slab rebar shop drawing', group: 'rebar', groupVi: 'Thép sàn', groupEn: 'Rebar', color: '#f43f5e' },

  // Thép tăng cường (Reinforcement)
  { cmd: 'LVD_Vetheptangcuong', vi: 'Rải thép tăng cường hàng loạt', en: 'Batch reinforcement rebar distribution', group: 'reinforcement', groupVi: 'Thép TC', groupEn: 'Reinforcement', color: '#f59e0b' },
];

// ============================================
// LANGUAGE SYSTEM
// ============================================
let currentLang = 'vi';

function switchLang(lang) {
  currentLang = lang;

  // Update buttons
  document.getElementById('langVi').classList.toggle('active', lang === 'vi');
  document.getElementById('langEn').classList.toggle('active', lang === 'en');

  // Update all translatable elements
  document.querySelectorAll('[data-vi][data-en]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text !== null) {
      el.textContent = text;
    }
  });

  // Update html lang
  document.documentElement.lang = lang;

  // Re-render commands table
  renderCommands(currentFilter);
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================================
// MOBILE MENU
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ============================================
// PARTICLES ANIMATION
// ============================================
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 122, 0, ${this.opacity})`;
      ctx.fill();
    }
  }

  // Create particles
  const particleCount = Math.min(80, Math.floor(canvas.width * canvas.height / 15000));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const opacity = (1 - distance / 150) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(157, 78, 221, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    connectParticles();
    animationId = requestAnimationFrame(animate);
  }

  animate();
}

// ============================================
// COUNTER ANIMATION
// ============================================
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (target - start) * eased);

      counter.textContent = current + '+';

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

// ============================================
// COMMAND TABLE
// ============================================
let currentFilter = 'all';

function renderCommands(filter = 'all') {
  currentFilter = filter;
  const tbody = document.getElementById('commandsBody');
  if (!tbody) return;

  const filtered = filter === 'all'
    ? commandsData
    : commandsData.filter(c => c.group === filter);

  tbody.innerHTML = filtered.map(cmd => `
    <tr data-group="${cmd.group}">
      <td><span class="cmd-name">${cmd.cmd}</span></td>
      <td>${currentLang === 'vi' ? cmd.vi : cmd.en}</td>
      <td>
        <span class="cmd-group-badge" style="background: ${cmd.color}15; color: ${cmd.color};">
          ${currentLang === 'vi' ? cmd.groupVi : cmd.groupEn}
        </span>
      </td>
    </tr>
  `).join('');
}

// Tab click handler
document.getElementById('commandTabs')?.addEventListener('click', (e) => {
  if (e.target.classList.contains('cmd-tab')) {
    document.querySelectorAll('.cmd-tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    renderCommands(e.target.getAttribute('data-filter'));
  }
});

// ============================================
// FAQ ACCORDION
// ============================================
document.getElementById('faqList')?.addEventListener('click', (e) => {
  const question = e.target.closest('.faq-question');
  if (!question) return;

  const item = question.closest('.faq-item');

  // Close others
  document.querySelectorAll('.faq-item.active').forEach(other => {
    if (other !== item) other.classList.remove('active');
  });

  item.classList.toggle('active');
});

// ============================================
// SCROLL REVEAL
// ============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children').forEach(el => {
    observer.observe(el);
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  });
});

// ============================================
// ACTIVE NAV HIGHLIGHT
// ============================================
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${id}`) {
          link.style.color = 'var(--accent-indigo)';
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ============================================
// REGISTRATION MODAL
// ============================================
const API_BASE = 'https://lvd-license-servers.sepbilu.workers.dev';

function openRegModal(plan) {
  const overlay = document.getElementById('regModalOverlay');
  const title = document.getElementById('regTitle');
  const desc = document.getElementById('regPlanDesc');
  const planInput = document.getElementById('regPlan');

  // Reset to form view
  document.getElementById('regFormView').style.display = 'block';
  document.getElementById('regSuccessView').style.display = 'none';
  document.getElementById('regForm').reset();

  planInput.value = plan;

  if (plan === 'monthly') {
    desc.setAttribute('data-vi', 'Gói 1 Tháng — 200K VNĐ');
    desc.setAttribute('data-en', 'Monthly Plan — 200K VND');
    desc.textContent = currentLang === 'vi' ? 'Gói 1 Tháng — 200K VNĐ' : 'Monthly Plan — 200K VND';
  } else {
    desc.setAttribute('data-vi', 'Gói 1 Năm — 800K VNĐ (Tiết kiệm 67%)');
    desc.setAttribute('data-en', 'Yearly Plan — 800K VND (Save 67%)');
    desc.textContent = currentLang === 'vi' ? 'Gói 1 Năm — 800K VNĐ (Tiết kiệm 67%)' : 'Yearly Plan — 800K VND (Save 67%)';
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRegModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const overlay = document.getElementById('regModalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

async function submitRegistration(event) {
  event.preventDefault();

  const btn = document.getElementById('regSubmitBtn');
  const name = document.getElementById('regName').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const note = document.getElementById('regNote').value.trim();
  const plan = document.getElementById('regPlan').value;

  btn.disabled = true;
  btn.innerHTML = '<span>⏳ Đang gửi...</span>';

  try {
    const res = await fetch(`${API_BASE}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerName: name, customerPhone: phone, customerEmail: email, plan, note })
    });

    const data = await res.json();

    if (data.success) {
      // Show success view
      document.getElementById('regFormView').style.display = 'none';
      document.getElementById('regSuccessView').style.display = 'block';

      // Update payment amount
      const amount = plan === 'yearly' ? 800000 : 200000;
      const amountText = plan === 'yearly' ? '800,000 VNĐ' : '200,000 VNĐ';
      const planDuration = plan === 'yearly' ? '12T' : '1T';
      document.getElementById('regPaymentAmount').textContent = amountText;

      // Set transfer content: LVD + SĐT + số tháng
      const transferContent = `LVD ${phone} ${planDuration}`;
      document.getElementById('regTransferContent').textContent = transferContent;

      // Generate VietQR code
      const qrUrl = `https://img.vietqr.io/image/ACB-30890807-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(transferContent)}&accountName=${encodeURIComponent('LE VAN DAI')}`;
      document.getElementById('regQRCode').src = qrUrl;
    } else {
      alert(data.error || 'Có lỗi xảy ra. Vui lòng thử lại.');
    }
  } catch (err) {
    alert('Không thể kết nối server. Vui lòng liên hệ Zalo: 0326.823.376');
  }

  btn.disabled = false;
  const btnText = currentLang === 'vi' ? '✅ Xác nhận đăng ký' : '✅ Confirm Registration';
  btn.innerHTML = `<span>${btnText}</span>`;
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeRegModal();
});

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  renderCommands('all');
  initScrollReveal();
  animateCounters();
});
