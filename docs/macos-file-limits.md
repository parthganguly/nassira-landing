## macOS: fix EMFILE (too many open files) for Node/Next

Raise file descriptor limits so the watcher can open enough files after reboot.

### 1) Persistent system limits (requires admin)

Create `/Library/LaunchDaemons/limit.maxfiles.plist` with:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>limit.maxfiles</string>
  <key>ProgramArguments</key>
  <array>
    <string>launchctl</string>
    <string>limit</string>
    <string>maxfiles</string>
    <string>65536</string>
    <string>200000</string>
  </array>
  <key>RunAtLoad</key><true/>
  <key>ServiceIPC</key><false/>
</dict>
</plist>
```

Create `/Library/LaunchDaemons/limit.maxproc.plist` with:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>limit.maxproc</string>
  <key>ProgramArguments</key>
  <array>
    <string>launchctl</string>
    <string>limit</string>
    <string>maxproc</string>
    <string>2048</string>
    <string>4096</string>
  </array>
  <key>RunAtLoad</key><true/>
  <key>ServiceIPC</key><false/>
  <key>AbandonProcessGroup</key><true/>
  <key>Keepalive</key><false/>
</dict>
</plist>
```

Then run:

```bash
sudo chown root:wheel /Library/LaunchDaemons/limit.maxfiles.plist /Library/LaunchDaemons/limit.maxproc.plist
sudo chmod 644 /Library/LaunchDaemons/limit.maxfiles.plist /Library/LaunchDaemons/limit.maxproc.plist
sudo launchctl load -w /Library/LaunchDaemons/limit.maxfiles.plist
sudo launchctl load -w /Library/LaunchDaemons/limit.maxproc.plist
```

Reboot to apply system-wide.

### 2) Shell-level default (applies to Terminal sessions)

Add to `~/.zshrc`:

```bash
ulimit -n 65536
```

Restart Terminal (or `source ~/.zshrc`).

### Verify

Run `ulimit -n` and `launchctl limit` — you should see higher values.












