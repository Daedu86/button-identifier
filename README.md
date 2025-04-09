# Button Identifier Project

This project is designed to identify all button elements on a webpage. It provides a simple utility function that scans the DOM and returns an array of button elements.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the Button Identifier project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd button-identifier
npm install
```

## Usage

After installation, you can use the `findButtons` function from the `buttonFinder.js` utility to identify buttons on a webpage. Here’s a simple example:

```javascript
import { findButtons } from './utils/buttonFinder';

const buttons = findButtons();
console.log(buttons);
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
