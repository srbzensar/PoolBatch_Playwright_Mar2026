// utils/frameUtils.js
async function listFrameNames(page, domainFilter = '') {
    const frames = page.frames();
    const frameNames = frames
        .filter(f => f.name() && f.name().trim() !== '' && f.url().includes(domainFilter))
        .map(f => f.name());
    console.log('Filtered Frame Names:', frameNames);
    return frameNames;
}

module.exports = { listFrameNames };
