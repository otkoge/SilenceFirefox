
// Disable Autoupdate
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);
user_pref("app.update.checkInstallTime", false);
user_pref("app.update.doorhanger", false);
// Shield
user_pref("app.shield.optoutstudies.enabled", false);
// telemetry
user_pref("browser.ping-centre.telemetry", false);
user_pref("security.ssl.errorReporting.url", "https://0.0.0.0");
user_pref("browser.chrome.errorReporter.infoURL", "https://0.0.0.0");
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "https://0.0.0.0");
user_pref("toolkit.telemetry.server", "https://0.0.0.0");
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
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "https://0.0.0.0");
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
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.reportPhishURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "https://0.0.0.0'");
user_pref("browser.safebrowsing.provider.google.lists", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.google.reportURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.google4.reportURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.google4.updateURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "https://0.0.0.0");
user_pref("browser.safebrowsing.provider.mozilla.nextupdatetime", "995795774646");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "https://0.0.0.0");
user_pref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.passwords.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", false);
// Disable search suggestions
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.geoSpecificDefaults.url", "https://0.0.0.0");
user_pref("browser.search.searchEnginesURL", "https://0.0.0.0");
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
user_pref("webextensions.storage.sync.serverURL", "https://0.0.0.0");
// Remove extension check url
user_pref("extensions.webservice.discoverURL", "https://0.0.0.0");
// No heartbeat
user_pref("browser.selfsupport.url","https://0.0.0.0");
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
user_pref("services.settings.server", "https://0.0.0.0");
// aus5.mozilla.org
user_pref("media.gmp-manager.url", "https://0.0.0.0");
user_pref("extensions.systemAddon.update.url", "https://0.0.0.0");
// Normandy and app feedback
user_pref("app.normandy.api_url", "https://0.0.0.0");
user_pref("app.normandy.first_run", false);
user_pref("app.feedback.baseURL", "https://0.0.0.0");
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
user_pref("experiments.manifest.uri", "https://0.0.0.0");
