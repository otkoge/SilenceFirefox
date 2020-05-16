
// Disable Autoupdate
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);
user_pref("app.update.checkInstallTime", false);
user_pref("app.update.doorhanger", false);
// Shield
user_pref("app.shield.optoutstudies.enabled", false);
// telemetry
user_pref("browser.ping-centre.telemetry", false);
user_pref("security.ssl.errorReporting.url", "https://localhost");
user_pref("browser.chrome.errorReporter.infoURL", "https://localhost");
// Accessibility
user_pref("accessibility.force_disabled", 1);
user_pref("accessibility.typeaheadfind.flashBar", 0);
// Web Push
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
// Disable snippets and new tabpage activity
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.prerender", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "https://localhost");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.aboutHomeSnippets.updateUrl", "");
// Disable Captive Portal Detection
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.maxRetryCount", 0);
user_pref("network.connectivity-service.enabled", false);
// Disable Safebrowsing Checks
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "https://localhost");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "https://localhost");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.reportPhishURL", "https://localhost");
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "https://localhost");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "https://localhost'");
user_pref("browser.safebrowsing.provider.google.lists", "https://localhost");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google.reportURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.reportURL", "https://localhost");
user_pref("browser.safebrowsing.provider.google4.updateURL", "https://localhost");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "https://localhost");
user_pref("browser.safebrowsing.provider.mozilla.nextupdatetime", "995795774646");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "https://localhost");
user_pref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.passwords.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", false);
// Disable search suggestions
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.geoSpecificDefaults.url", "https://localhost");
user_pref("browser.search.searchEnginesURL", "https://localhost");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.search.update.interval", 99579446);
user_pref("browser.startup.homepage_override.mstone","ignore");
// Disable DNS prefetch
user_pref("network.dns.disablePrefetch", true);
// Disable Sync
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.addons", false);
user_pref("services.sync.engine.tabs", false);
user_pref("services.sync.nextSync", 0);
user_pref("services.sync.engine.bookmarks", false);
user_pref("services.sync.autoconnect", false);
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.passwords", false);
// Remove extension check url
user_pref("extensions.webservice.discoverURL", "https://localhost");
// No heartbeat
user_pref("browser.selfsupport.url","https://localhost");
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
user_pref("browser.feeds.showFirstRunUI", false);
// Services
user_pref("services.settings.server", "https://localhost");
// aus5.mozilla.org
user_pref("media.gmp-manager.url", "https://localhost");
user_pref("extensions.systemAddon.update.url", "https://localhost");
// Normandy and app feedback
user_pref("app.normandy.api_url", "https://localhost");
user_pref("app.normandy.first_run", false);
user_pref("app.feedback.baseURL", "https://localhost");
// Toolkit telemetry
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
// Experiments
user_pref("experiments.manifest.uri", "https://localhost");
