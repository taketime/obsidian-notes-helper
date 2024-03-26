Build a new daily note, linking the last day and copying in the agenda from that day. This is just for me, but it's nice to sync between machines.

# setup and use

- assumes use of the [Daily Notes](https://help.obsidian.md/Plugins/Daily+notes) built-in plugin
- daily notes settings to update:
  - template file location should be `templates/simple template`
  - a date format of `YYYY-MM-DD`
- install [Templater](https://github.com/SilentVoid13/Templater) plugin
- Templater settings to update:
  - template folder location should be `templates`
  - Trigger Templater on new file creation should be on
  - Script files folder location should be `templates/scripts`
- `mkdir path/to/obsidian/vault/templates && cd path/to/obsidian/vault/templates`
- git clone this repo in there
- click the 'Open today's daily note' button in obsidian
