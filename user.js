
// Disable Autoupdate
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);
// Web Push
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
// Disable snippets
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.aboutHomeSnippets.updateUrl", "");
// Disable Captive Portal Detection
user_pref("network.captive-portal-service.enabled", false)
user_pref("network.connectivity-service.enabled", false);
// Disable Safebrowsing Checks
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
// Disable search suggestions
user_pref("browser.search.suggest.enabled", false);

user_pref("browser.startup.homepage_override.mstone","ignore");
// Disable DNS prefetch
user_pref("network.dns.disablePrefetch", true);
// Disable Sync
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.addons", false);
user_pref("services.sync.engine.tabs", false);
user_pref("services.sync.engine.bookmarks", false);
user_pref("services.sync.autoconnect", false);
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.passwords", false);
// Remove extension check url
user_pref("extensions.webservice.discoverURL", "");
// No heartbeat
user_pref("browser.selfsupport.url","");
//Disable SSDP
user_pref("browser.casting.enabled", false);    // disable SSDP 
// No extension checks and reporting
user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("extensions.update.enabled", false);
// Disable health report
user_pref("datareporting.healthreport.uploadEnabled", false);
// Disable prefetch
user_pref("network.prefetch-next", false);
user_pref("network.http.speculative-parallel-limit", 0);
// No tracking portection 
user_pref("privacy.trackingprotection.pbmode.enabled", false);
// Empty startup page
user_pref("browser.startup.page", 0);
user_pref("browser.newtabbage.enabled", false);
// Services
user_pref("services.settings.server", "");
// aus5.mozilla.org
user_pref("media.gmp-manager.url", "");
user_pref("extensions.systemAddon.update.url", "")
// Normandy and app feedback
user_pref("app.normandy.api_url", "")
user_pref("app.feedback.baseURL", "")
