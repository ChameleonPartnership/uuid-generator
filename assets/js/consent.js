(function () {
    const storageKey = 'uuidGeneratorCookieConsent';

    function createConsentBanner() {
        if (localStorage.getItem(storageKey)) {
            return;
        }

        const banner = document.createElement('div');
        banner.setAttribute('role', 'region');
        banner.setAttribute('aria-label', 'Cookie notice');
        banner.style.position = 'fixed';
        banner.style.left = '16px';
        banner.style.right = '16px';
        banner.style.bottom = '16px';
        banner.style.zIndex = '3000';
        banner.style.maxWidth = '760px';
        banner.style.margin = '0 auto';
        banner.style.padding = '14px 16px';
        banner.style.border = '1px solid #cbd5e1';
        banner.style.borderRadius = '8px';
        banner.style.background = '#ffffff';
        banner.style.color = '#1f2937';
        banner.style.boxShadow = '0 12px 28px rgba(15, 23, 42, 0.18)';
        banner.style.display = 'flex';
        banner.style.gap = '12px';
        banner.style.alignItems = 'center';
        banner.style.justifyContent = 'space-between';
        banner.style.flexWrap = 'wrap';

        const text = document.createElement('p');
        text.style.margin = '0';
        text.style.fontSize = '0.92rem';
        text.style.lineHeight = '1.5';
        text.innerHTML = 'UUID Generator Pro may use cookies for preferences and Google AdSense advertising. Read the <a href="/privacy.html">Privacy Policy</a>.';

        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = 'OK';
        button.style.border = '0';
        button.style.borderRadius = '8px';
        button.style.padding = '9px 16px';
        button.style.background = '#3b82f6';
        button.style.color = '#ffffff';
        button.style.fontWeight = '600';
        button.style.cursor = 'pointer';
        button.addEventListener('click', function () {
            localStorage.setItem(storageKey, 'acknowledged');
            banner.remove();
        });

        banner.appendChild(text);
        banner.appendChild(button);
        document.body.appendChild(banner);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createConsentBanner);
    } else {
        createConsentBanner();
    }
})();
