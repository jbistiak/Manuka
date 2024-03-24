// Site Infomation
const siteData = {
    root: 'src',
    locale: 'cs',
    siteName: 'manukacesko.cz',
    shortName: 'Manuka',
    description:
        'Mānuka med je vyhledávaným medem pro svou chuť i zdravotně prospěšné látky. Skutečný mānukový med pochází pouze z Nového Zélandu. Doprava zdarma od 2000 Kč',
    url: 'https://www.manukacesko.cz/',
    ogpImage: 'ogp.jpg',
    ogType: 'website',
    fbAppId: '',
    fbAdmins: '',
    twitterCard: 'summary_large_image',
    twitterSite: '@SiteAccount',
    themeColor: '#FFA800',
    backgroundColor: '#fff',
};
// Page Infomation
const pagesData = {
    '/index.html': {
        locale: siteData.locale,
        title: `Manukový Med z Nového Zélandu | ${siteData.siteName}`,
        description: `${siteData.description}`,
        url: `${siteData.url}`,
        ogpImage: siteData.ogpImage,
        ogType: siteData.ogType,
        fbAppId: siteData.fbAppId,
        fbAdmins: siteData.fbAdmins,
        twitterCard: siteData.twitterCard,
        twitterSite: siteData.twitterSite,
    },
    '/pages/manuka-medy.html': {
        locale: siteData.locale,
        title: `Manuka medy | ${siteData.siteName}`,
        description: `${siteData.description}`,
        url: `${siteData.url}/pages/`,
        ogpImage: siteData.ogpImage,
        ogType: 'article',
        fbAppId: siteData.fbAppId,
        fbAdmins: siteData.fbAdmins,
        twitterCard: siteData.twitterCard,
        twitterSite: siteData.twitterSite,
    },
};

export { siteData, pagesData };
