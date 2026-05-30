/**
 * ============================================================
 * RASHID TOC WIDGET - PROFESSIONAL COLORFUL UI
 * Version: 9.0 - Scrollable Active Highlight TOC
 * ============================================================
 */

(function() {
  'use strict';

  // ========================================================================
  // INJECT CSS DYNAMICALLY
  // ========================================================================
  var rashid_css = `
/* ============================================
   RASHID TOC - PROFESSIONAL COLORFUL UI
   Version: 9.0 - Scrollable with Active Highlight
   ============================================ */

.rashid-toc * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Main Container */
.rashid-toc {
  width: 100%;
  margin: 24px 0;
  font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
}

/* Header - Gradient */
.rashid-toc-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  border-radius: 16px 16px 0 0;
  position: relative;
  overflow: hidden;
}

.rashid-toc-header::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 180px;
  height: 180px;
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
}

.rashid-toc-header::after {
  content: '';
  position: absolute;
  bottom: -40%;
  left: -5%;
  width: 120px;
  height: 120px;
  background: rgba(255,255,255,0.05);
  border-radius: 50%;
}

.rashid-toc-icon {
  width: 36px;
  height: 36px;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  position: relative;
  z-index: 1;
}

.rashid-toc-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
}

.rashid-toc-badge {
  margin-left: auto;
  background: rgba(255,255,255,0.25);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;
}

/* Body - Scrollable */
.rashid-toc-body {
  background: linear-gradient(180deg, #ffffff 0%, #f8faff 100%);
  border: 2px solid #e8e8f0;
  border-top: none;
  border-radius: 0 0 16px 16px;
  padding: 8px 0;
  max-height: 420px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #c7c7db transparent;
}

.rashid-toc-body::-webkit-scrollbar {
  width: 6px;
}

.rashid-toc-body::-webkit-scrollbar-track {
  background: transparent;
}

.rashid-toc-body::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #667eea, #764ba2);
  border-radius: 10px;
}

.rashid-toc-list {
  list-style: none;
  padding: 4px 0;
}

.rashid-toc-item {
  position: relative;
}

/* H2 Items */
.rashid-toc-item-h2 {
  margin: 2px 0;
}

.rashid-toc-item-h2 .rashid-toc-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  text-decoration: none;
  color: #4a4a6a;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-left: 4px solid transparent;
  position: relative;
}

.rashid-toc-item-h2 .rashid-toc-link::before {
  content: attr(data-rashid-num);
  min-width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.rashid-toc-item-h2 .rashid-toc-link:hover {
  color: #667eea;
  background: linear-gradient(90deg, rgba(102, 126, 234, 0.08), transparent);
  border-left-color: #667eea;
  padding-left: 24px;
}

.rashid-toc-item-h2 .rashid-toc-link:hover::before {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* Active State - H2 */
.rashid-toc-item-h2 .rashid-toc-link.rashid-toc-active {
  color: #667eea;
  background: linear-gradient(90deg, rgba(102, 126, 234, 0.12), rgba(118, 75, 162, 0.05));
  border-left-color: #667eea;
  font-weight: 700;
}

.rashid-toc-item-h2 .rashid-toc-link.rashid-toc-active::before {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  transform: scale(1.15);
  box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
}

/* H3 Items - Indented */
.rashid-toc-item-h3 {
  margin: 1px 0;
}

.rashid-toc-item-h3 .rashid-toc-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px 10px 44px;
  text-decoration: none;
  color: #7a7a9a;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.rashid-toc-item-h3 .rashid-toc-link::before {
  content: '';
  width: 6px;
  height: 6px;
  background: #c5c5d8;
  border-radius: 50%;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.rashid-toc-item-h3 .rashid-toc-link:hover {
  color: #764ba2;
  background: linear-gradient(90deg, rgba(118, 75, 162, 0.06), transparent);
  border-left-color: #764ba2;
  padding-left: 48px;
}

.rashid-toc-item-h3 .rashid-toc-link:hover::before {
  background: #764ba2;
  transform: scale(1.3);
}

/* Active State - H3 */
.rashid-toc-item-h3 .rashid-toc-link.rashid-toc-active {
  color: #764ba2;
  background: linear-gradient(90deg, rgba(118, 75, 162, 0.1), rgba(240, 147, 251, 0.03));
  border-left-color: #764ba2;
  font-weight: 600;
}

.rashid-toc-item-h3 .rashid-toc-link.rashid-toc-active::before {
  background: linear-gradient(135deg, #764ba2, #f093fb);
  width: 8px;
  height: 8px;
}

/* Progress Bar at Bottom */
.rashid-toc-progress {
  height: 4px;
  background: #e8e8f0;
  border-radius: 0 0 14px 14px;
  overflow: hidden;
  position: relative;
}

.rashid-toc-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
  width: 0%;
  transition: width 0.4s ease;
  border-radius: 0 0 14px 14px;
}

/* Natural invisible backlink */
.rashid-toc-nlink,
.rashid-toc-nlink * {
  color: inherit !important;
  text-decoration: none !important;
  border-bottom: none !important;
  background: transparent !important;
  font-weight: inherit !important;
  font-style: inherit !important;
  font-size: inherit !important;
  font-family: inherit !important;
  line-height: inherit !important;
  letter-spacing: inherit !important;
  text-transform: inherit !important;
  box-shadow: none !important;
  outline: none !important;
  cursor: text !important;
}

.rashid-toc-nlink:hover,
.rashid-toc-nlink:active,
.rashid-toc-nlink:visited,
.rashid-toc-nlink:focus {
  color: inherit !important;
  text-decoration: none !important;
  border-bottom: none !important;
  background: transparent !important;
  outline: none !important;
  box-shadow: none !important;
}

.rashid-toc-imglink {
  display: inline;
  color: inherit !important;
  text-decoration: none !important;
}

/* Popup */
.rashid-toc-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rashid-toc-popup-box {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  max-width: 420px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  animation: rashid-popup-slide 0.4s ease;
}

@keyframes rashid-popup-slide {
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.rashid-toc-popup-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.rashid-toc-popup-title {
  font-size: 20px;
  font-weight: 700;
  color: #dc2626;
  margin-bottom: 12px;
}

.rashid-toc-popup-text {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 20px;
}

.rashid-toc-popup-btn {
  background: #dc2626;
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.rashid-toc-popup-btn:hover {
  background: #b91c1c;
}

/* Mobile */
@media (max-width: 480px) {
  .rashid-toc-header {
    padding: 14px 16px;
  }
  .rashid-toc-title {
    font-size: 13px;
  }
  .rashid-toc-icon {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
  .rashid-toc-item-h2 .rashid-toc-link {
    padding: 10px 16px;
    font-size: 13px;
  }
  .rashid-toc-item-h2 .rashid-toc-link::before {
    min-width: 24px;
    height: 24px;
    font-size: 11px;
  }
  .rashid-toc-item-h3 .rashid-toc-link {
    padding: 9px 16px 9px 36px;
    font-size: 12px;
  }
  .rashid-toc-body {
    max-height: 350px;
  }
}
`;

  var styleEl = document.createElement('style');
  styleEl.textContent = rashid_css;
  document.head.appendChild(styleEl);

  // ========================================================================
  // CORE CONFIGURATION
  // ========================================================================
  var rashid_cfg = {
    headingText: 'Table of Contents',
    minHeadings: 2,
    headingSelectors: 'h2, h3',
    scrollOffset: 100,
    backlinkUrl: 'https://www.pashtomedium.com/',
    backlinkText: 'Pashto Medium',
    backlinkAlt: 'Pashto Medium - Latest News and Updates',
    backlinkDomain: 'pashtomedium.com'
  };

  // ========================================================================
  // BACKUP CONFIGURATIONS
  // ========================================================================
  var _rshd_bkp_1 = { url: 'https://www.pashtomedium.com/', text: 'Pashto Medium', alt: 'Pashto Medium - Latest News and Updates', domain: 'pashtomedium.com' };
  var _rshd_bkp_2 = { url: 'https://www.pashtomedium.com/', text: 'Pashto Medium', alt: 'Pashto Medium - Latest News and Updates', domain: 'pashtomedium.com' };
  var _rshd_bkp_3 = { url: 'https://www.pashtomedium.com/', text: 'Pashto Medium', alt: 'Pashto Medium - Latest News and Updates', domain: 'pashtomedium.com' };

  // ========================================================================
  // STATE
  // ========================================================================
  var rashid_headings = [];
  var rashid_container = null;
  var rashid_bodyEl = null;
  var rashid_progressBar = null;
  var _rshd_monitor = null;
  var _rshd_violated = false;
  var rashid_activeId = null;
  var rashid_isClicking = false;
  var rashid_clickTimer = null;

  // ========================================================================
  // POPUP WARNING
  // ========================================================================
  function _rshd_show_popup() {
    if (_rshd_violated) return;
    _rshd_violated = true;
    if (_rshd_monitor) clearInterval(_rshd_monitor);

    var existing = document.querySelector('.rashid-toc-popup-overlay');
    if (existing) return;

    var overlay = document.createElement('div');
    overlay.className = 'rashid-toc-popup-overlay';
    overlay.innerHTML = 
      '<div class="rashid-toc-popup-box">' +
        '<div class="rashid-toc-popup-icon">⚠️</div>' +
        '<div class="rashid-toc-popup-title">License Violation Detected</div>' +
        '<div class="rashid-toc-popup-text">' +
          'The backlink to <strong>Pashto Medium</strong> has been removed or modified. ' +
          'Please restore the backlink to <strong>https://www.pashtomedium.com/</strong>.' +
        '</div>' +
        '<button class="rashid-toc-popup-btn" onclick="this.closest(\'.rashid-toc-popup-overlay\').remove()">I Understand</button>' +
      '</div>';

    document.body.appendChild(overlay);

    var toc = document.querySelector('.rashid-toc');
    if (toc) {
      toc.style.opacity = '0.3';
      toc.style.pointerEvents = 'none';
    }
  }

  // ========================================================================
  // VALIDATION
  // ========================================================================
  function _rshd_check_backlink() {
    if (rashid_cfg.backlinkUrl !== 'https://www.pashtomedium.com/') return false;
    if (rashid_cfg.backlinkDomain !== 'pashtomedium.com') return false;
    if (_rshd_bkp_1.url !== 'https://www.pashtomedium.com/') return false;
    if (_rshd_bkp_2.url !== 'https://www.pashtomedium.com/') return false;
    if (_rshd_bkp_3.url !== 'https://www.pashtomedium.com/') return false;

    var links = document.querySelectorAll('a[href*="pashtomedium.com"]');
    if (links.length < 1) return false;

    var foundCorrect = false;
    for (var i = 0; i < links.length; i++) {
      if (links[i].href === 'https://www.pashtomedium.com/' || 
          links[i].getAttribute('href') === 'https://www.pashtomedium.com/') {
        foundCorrect = true;
        break;
      }
    }
    if (!foundCorrect) return false;

    return true;
  }

  // ========================================================================
  // MONITORING
  // ========================================================================
  function _rshd_start_monitor() {
    if (_rshd_violated) return;

    setTimeout(function() {
      if (!_rshd_check_backlink()) {
        _rshd_show_popup();
        return;
      }

      _rshd_monitor = setInterval(function() {
        if (!_rshd_check_backlink()) {
          _rshd_show_popup();
        }
      }, 10000);

    }, 2000);
  }

  // ========================================================================
  // CORE FUNCTIONS
  // ========================================================================
  function rashid_slug(text, index) {
    return 'rashid-' + text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').substring(0, 35) + '-' + index;
  }

  function rashid_scrollTo(el) {
    var top = window.pageYOffset + el.getBoundingClientRect().top - rashid_cfg.scrollOffset;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  function rashid_findPostBody() {
    var selectors = ['.post-body', '.entry-content', 'article .post-content', '.post-inner', '.post-entry', '.entry-body', '#post-body'];
    for (var i = 0; i < selectors.length; i++) {
      var el = document.querySelector(selectors[i]);
      if (el) return el;
    }
    var articles = document.querySelectorAll('article');
    for (var j = 0; j < articles.length; j++) {
      if (articles[j].querySelector('p')) return articles[j];
    }
    return null;
  }

  function rashid_findFirstParagraph(postBody) {
    var paragraphs = postBody.querySelectorAll('p');
    for (var i = 0; i < paragraphs.length; i++) {
      var p = paragraphs[i];
      var text = p.textContent.trim();
      if (text.length > 20 && !p.closest('.rashid-toc') && !p.closest('#rashid-toc-root')) {
        return p;
      }
    }
    return paragraphs[0] || null;
  }

  // ========================================================================
  // SCROLL TRACKING - HIGHLIGHT ACTIVE SECTION
  // ========================================================================
  function rashid_updateActive() {
    if (rashid_isClicking) return;

    var scrollPos = window.pageYOffset + rashid_cfg.scrollOffset + 60;
    var found = null;

    for (var i = rashid_headings.length - 1; i >= 0; i--) {
      if (rashid_headings[i].offsetTop <= scrollPos) {
        found = rashid_headings[i];
        break;
      }
    }

    if (found && found.id !== rashid_activeId) {
      var prev = document.querySelector('.rashid-toc-link.rashid-toc-active');
      if (prev) prev.classList.remove('rashid-toc-active');

      var curr = document.querySelector('.rashid-toc-link[data-rashid-target="' + found.id + '"]');
      if (curr) {
        curr.classList.add('rashid-toc-active');
        curr.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      rashid_activeId = found.id;
    }

    // Update progress bar
    if (rashid_progressBar && rashid_headings.length > 0) {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var scrollPercent = docHeight > 0 ? (window.pageYOffset / docHeight) * 100 : 0;
      rashid_progressBar.style.width = Math.min(100, Math.max(0, scrollPercent)) + '%';
    }
  }

  function rashid_throttle(fn, ms) {
    var t;
    return function() {
      if (!t) {
        fn.apply(this, arguments);
        t = setTimeout(function() { t = null; }, ms);
      }
    };
  }

  // ========================================================================
  // SMART BACKLINK INJECTION
  // ========================================================================
  function rashid_injectBacklink(postBody) {
    var url = rashid_cfg.backlinkUrl;
    var alt = rashid_cfg.backlinkAlt;

    var lastPara = rashid_getLastParagraph(postBody);
    if (lastPara) {
      var html = lastPara.innerHTML;
      var lastDot = html.lastIndexOf('.');
      if (lastDot !== -1 && lastDot > html.length - 50) {
        var before = html.substring(0, lastDot);
        var after = html.substring(lastDot);
        lastPara.innerHTML = before + '<a href="' + url + '" class="rashid-toc-nlink" target="_blank" title="' + alt + '">.</a>' + after.substring(1);
        return true;
      }
    }

    if (lastPara) {
      var html2 = lastPara.innerHTML;
      var lastComma = html2.lastIndexOf(',');
      if (lastComma !== -1 && lastComma > html2.length - 60) {
        var before2 = html2.substring(0, lastComma);
        var after2 = html2.substring(lastComma);
        lastPara.innerHTML = before2 + '<a href="' + url + '" class="rashid-toc-nlink" target="_blank" title="' + alt + '">,</a>' + after2.substring(1);
        return true;
      }
    }

    var allParas = postBody.querySelectorAll('p');
    for (var p = allParas.length - 1; p >= 0; p--) {
      var para = allParas[p];
      if (para.closest('.rashid-toc') || para.closest('#rashid-toc-root')) continue;
      var pHtml = para.innerHTML;
      var anyComma = pHtml.lastIndexOf(',');
      if (anyComma !== -1) {
        var b3 = pHtml.substring(0, anyComma);
        var a3 = pHtml.substring(anyComma);
        para.innerHTML = b3 + '<a href="' + url + '" class="rashid-toc-nlink" target="_blank" title="' + alt + '">,</a>' + a3.substring(1);
        return true;
      }
    }

    var images = postBody.querySelectorAll('img');
    for (var imgIdx = 0; imgIdx < images.length; imgIdx++) {
      var img = images[imgIdx];
      if (img.closest('.rashid-toc') || img.closest('#rashid-toc-root')) continue;
      var parent = img.parentNode;
      var wrapper = document.createElement('a');
      wrapper.href = url;
      wrapper.className = 'rashid-toc-imglink';
      wrapper.target = '_blank';
      wrapper.title = alt;
      parent.insertBefore(wrapper, img);
      wrapper.appendChild(img);
      return true;
    }

    if (rashid_headings.length > 0) {
      var lastHeader = rashid_headings[rashid_headings.length - 1];
      var hHtml = lastHeader.innerHTML;
      lastHeader.innerHTML = '<a href="' + url + '" class="rashid-toc-nlink" target="_blank" title="' + alt + '">' + hHtml + '</a>';
      return true;
    }

    return false;
  }

  function rashid_getLastParagraph(postBody) {
    var paragraphs = postBody.querySelectorAll('p');
    for (var i = paragraphs.length - 1; i >= 0; i--) {
      var p = paragraphs[i];
      var text = p.textContent.trim();
      if (text.length > 20 && !p.closest('.rashid-toc') && !p.closest('#rashid-toc-root')) {
        return p;
      }
    }
    return null;
  }

  // ========================================================================
  // BUILD
  // ========================================================================
  function rashid_build() {
    var postBody = rashid_findPostBody();
    if (!postBody) return false;

    var all = postBody.querySelectorAll(rashid_cfg.headingSelectors);
    rashid_headings = [];

    for (var i = 0; i < all.length; i++) {
      if (!all[i].closest('#rashid-toc-root')) {
        rashid_headings.push(all[i]);
      }
    }

    if (rashid_headings.length < rashid_cfg.minHeadings) {
      return false;
    }

    var firstPara = rashid_findFirstParagraph(postBody);
    if (!firstPara) return false;

    rashid_container = document.createElement('div');
    rashid_container.id = 'rashid-toc-root';

    for (var j = 0; j < rashid_headings.length; j++) {
      if (!rashid_headings[j].id) {
        rashid_headings[j].id = rashid_slug(rashid_headings[j].textContent, j);
      }
    }

    if (firstPara.nextSibling) {
      firstPara.parentNode.insertBefore(rashid_container, firstPara.nextSibling);
    } else {
      firstPara.parentNode.appendChild(rashid_container);
    }

    rashid_injectBacklink(postBody);

    return true;
  }

  // ========================================================================
  // RENDER
  // ========================================================================
  function rashid_render() {
    var title = rashid_cfg.headingText;
    var html = '';
    var h2Count = 0;

    for (var i = 0; i < rashid_headings.length; i++) {
      var h = rashid_headings[i];
      var tag = h.tagName.toLowerCase();
      var num = '';

      if (tag === 'h2') {
        h2Count++;
        num = h2Count;
      }

      html += '<li class="rashid-toc-item rashid-toc-item-' + tag + '">' +
        '<a href="#' + h.id + '" class="rashid-toc-link" data-rashid-target="' + h.id + '" data-rashid-num="' + num + '">' +
        '<span class="rashid-toc-text">' + h.textContent.trim() + '</span></a></li>';
    }

    rashid_container.innerHTML =
      '<div class="rashid-toc" data-rashid-verify="pashtomedium-com">' +
        '<div class="rashid-toc-header">' +
          '<span class="rashid-toc-icon">☰</span>' +
          '<span class="rashid-toc-title">' + title + '</span>' +
          '<span class="rashid-toc-badge">' + rashid_headings.length + '</span>' +
        '</div>' +
        '<div class="rashid-toc-body" id="rashid-toc-body">' +
          '<ul class="rashid-toc-list">' + html + '</ul>' +
        '</div>' +
        '<div class="rashid-toc-progress">' +
          '<div class="rashid-toc-progress-bar" id="rashid-toc-progress-bar"></div>' +
        '</div>' +
      '</div>';

    rashid_bodyEl = document.getElementById('rashid-toc-body');
    rashid_progressBar = document.getElementById('rashid-toc-progress-bar');

    var links = rashid_container.querySelectorAll('.rashid-toc-link');
    for (var k = 0; k < links.length; k++) {
      links[k].addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('data-rashid-target');
        var target = document.getElementById(targetId);
        if (!target) return;

        rashid_isClicking = true;
        if (rashid_clickTimer) clearTimeout(rashid_clickTimer);

        var prev = document.querySelector('.rashid-toc-link.rashid-toc-active');
        if (prev) prev.classList.remove('rashid-toc-active');
        this.classList.add('rashid-toc-active');
        rashid_activeId = targetId;

        rashid_scrollTo(target);
        if (history.pushState) history.pushState(null, null, '#' + targetId);

        rashid_clickTimer = setTimeout(function() {
          rashid_isClicking = false;
        }, 800);
      });
    }
  }

  // ========================================================================
  // INITIALIZATION
  // ========================================================================
  function rashid_init() {
    if (!rashid_build()) return;
    rashid_render();

    window.addEventListener('scroll', rashid_throttle(rashid_updateActive, 100));
    setTimeout(rashid_updateActive, 200);

    _rshd_start_monitor();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', rashid_init);
  } else {
    rashid_init();
  }

})();