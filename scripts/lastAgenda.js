const fs = require("fs");

async function lastAgenda(app) {
  const folder =
    app.internalPlugins.plugins["daily-notes"].instance.options.folder;
  const fileData = await app.vault.adapter.list(folder);

  // Last file (-1) is current day
  // Second-to-last (-2) is the last day obsidian templates ran
  if (fileData.files.length > 2) {
    const lastFile = fileData.files[fileData.files.length - 2];
    const lastNoteContent = await fs.readFileSync(
      `${app.vault.adapter.basePath}/${lastFile}`,
      "utf8"
    );
    const lastNoteLines = lastNoteContent.split("\n");
    const agendaIndex = lastNoteLines.findIndex((line) =>
      line.includes("# Agenda")
    );
    const nextHeaderIndex = lastNoteLines.findIndex(
      (line, index) => index > agendaIndex && line.startsWith("#")
    );
    const lastNoteAgenda = lastNoteLines
      .slice(agendaIndex + 1, nextHeaderIndex)
      .join("\n");
    return lastNoteAgenda;
  } else {
    return "# Agenda\n- [ ] item 1";
  }
}

module.exports = lastAgenda;
