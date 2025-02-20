# Motivational Ad Blocker

## Description
Motivational Ad Blocker is a Chrome extension that removes ads from web pages and replaces them with inspirational quotes from famous tech gurus like Steve Jobs, Bill Gates, and Linus Torvalds.

## Features
- 🛑 Blocks intrusive ads on webpages.
- 💡 Replaces ads with motivational tech quotes.
- 🔄 Includes a popup UI for getting new quotes manually.
- 🎨 Uses a minimalistic design for a distraction-free experience.

## Installation
1. **Download or clone** this repository.
2. Open **Google Chrome** and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the extension folder.
5. 🎉 The extension will be installed and ready to use!

## Folder Structure
```
Motivational-AdBlocker/
│── manifest.json
│── background.js
│── content.js
│── popup.html
│── popup.js
│── styles.css
│── icons/
│── quotes.json
```

## How It Works
1. The **content script (`content.js`)** scans webpages for ads.
2. If ads are detected, they are removed and replaced with a motivational quote.
3. The **popup UI** allows users to generate a new quote manually.
4. The extension runs in the background, continuously scanning for new ads.

## Future Enhancements
- 🚀 Add user-uploaded quotes.
- 🌐 Fetch quotes dynamically from an API.
- 📈 Improve ad detection using `MutationObserver`.

## License
📜 This project is open-source and available under the **MIT License**.

## Contributing
🤝 Contributions are welcome! Feel free to submit a pull request or report issues.

## Contact
📩 For feedback or questions, reach out via **GitHub** or email.

