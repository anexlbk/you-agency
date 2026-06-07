// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      if (entry.target.classList.contains('stagger')) {
        const kids = entry.target.children;
        for (let i = 0; i < kids.length; i++) {
          kids[i].style.transitionDelay = (i * 0.12) + 's';
        }
      }
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .stagger').forEach(el => observer.observe(el));

// Nav scroll
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 70);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Contact form handling (submits to Google Apps Script + local fallback)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const endpointUrl = 'https://script.google.com/macros/s/AKfycbySysvGbcb5kTkIbVqXP4c8FUqCYorX8pOwSYV_V-eMiRycL0i2DTrfnQRtrUb94nlN/exec';
  const deploymentId = 'AKfycbySysvGbcb5kTkIbVqXP4c8FUqCYorX8pOwSYV_V-eMiRycL0i2DTrfnQRtrUb94nlN';

  contactForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const company = document.getElementById('company').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const subscribe = document.getElementById('subscribe').checked;
    const success = document.getElementById('contact-success');
    const error = document.getElementById('contact-error');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    if (success) success.style.display = 'none';
    if (error) error.style.display = 'none';

    if (!name || !email || !company || !message) {
      if (error) {
        error.textContent = 'Please complete all required fields before submitting.';
        error.style.display = 'block';
      }
      return;
    }

    const lead = {
      deploymentId,
      source: 'website-contact-form',
      page: window.location.href,
      name,
      email,
      company,
      phone,
      message,
      subscribe,
      date: new Date().toISOString()
    };

    const originalButtonText = submitButton ? submitButton.textContent : '';
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
    }

    try {
      const formBody = new URLSearchParams();
      Object.keys(lead).forEach((key) => formBody.append(key, String(lead[key])));

      const response = await fetch(endpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      });

      if (!response.ok) {
        throw new Error('Submit failed with status ' + response.status);
      }

      if (success) {
        success.textContent = 'Thanks — your message was submitted successfully.';
        success.style.display = 'block';
      }
      contactForm.reset();
      console.log('Lead submitted to Google Sheets:', lead);
      // window.dataLayer?.push({ event: 'leadCaptured', lead });
      // fbq?.('track', 'Lead');
    } catch (submitError) {
      console.warn('Remote submit failed, saving local backup.', submitError);
      try {
        const existing = JSON.parse(localStorage.getItem('youAgencyLeadsBackup') || '[]');
        existing.push(lead);
        localStorage.setItem('youAgencyLeadsBackup', JSON.stringify(existing));
      } catch (storageError) {
        console.warn('Could not save fallback lead locally', storageError);
      }

      if (error) {
        error.textContent = 'We could not submit automatically. Please retry or use Email Us. Your message was saved locally as backup.';
        error.style.display = 'block';
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText || 'Book Free Call';
      }
    }
  });
}

// Pixel / Analytics placeholder notes
// Add your Meta Pixel and Google Analytics snippets in the <head> when accounts are available.
