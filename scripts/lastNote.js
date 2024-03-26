async function lastNote(app) {
    const folder = app.internalPlugins.plugins["daily-notes"].instance.options.folder;
    const fileData = await app.vault.adapter.list(folder);

    // Last file (-1) is current day
    // Second-to-last (-2) is the last day obsidian templates ran
    if (fileData.files.length > 2) {
        const lastFile = fileData.files[fileData.files.length - 2];
        const fileName = lastFile.split('/')[1];
        return `last note: [[${fileName}]]`;
    }
}


module.exports = lastNote;