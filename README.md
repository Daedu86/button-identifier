# Button Identifier Project ![Badge](https://img.shields.io/badge/status-active-brightgreen)

This project is designed to **identify all button elements on a webpage** and **highlight `div` elements in blue**.  
It provides a simple utility function that scans the DOM and allows easy visualization.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

To get started with the Button Identifier project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd button-identifier
npm install
```

---

## Usage

After installation, you can use the `findButtons` function from the `buttonFinder.js` utility to identify and highlight elements on a webpage.

### Example:

```javascript
import { findButtons } from './utils/buttonFinder';

const buttons = findButtons();
console.log(buttons);
```

✅ **Additional feature:**  
When you load the script in a browser, it will **automatically highlight all `<div>` elements in blue**, making them easier to spot visually.

---

## Screenshot

Here’s an example of the result when running the tool:

![Button Identifier Example](https://github.com/Daedu86/button-identifier/blob/main/Bluegoogle.png)

---

## Contributing

Contributions are welcome!  
Please open an issue or submit a pull request for any improvements, ideas, or bug fixes.

---

## License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for more details.
