# E-Commerce Website Automation Project

This project provides end-to-end (E2E) automated tests for the [Demoblaze E-Commerce website](https://www.demoblaze.com/) using [Playwright](https://playwright.dev/). It follows industry best practices, including Page Object Model (POM), Allure reporting, and organized test structure.

## Features

- Automated signup, login, logout, cart, and order placement flows
- Page Object Model for maintainability and scalability
- Allure reporting integration for rich test reports
- Cross-browser support (Chromium by default, easily extendable)
- Test data and credentials managed via JSON files
- `.gitignore` for clean version control

## Project Structure

```
.
├── pages/                # Page Object Model classes
├── tests/                # Test specs
├── playwright.config.js  # Playwright configuration
├── .gitignore
├── package.json
├── README.md
└── allure-results/       # Allure report output (gitignored)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd E-Commerce_Website_Automation_Project2
   ```

2. Install dependencies:
   ```bash
   npm install
   npx playwright install
   ```

### Running Tests

- Run all tests (headless, default):
  ```bash
  npx playwright test
  ```
- Run tests in headed mode:
  ```bash
  npx playwright test --headed
  ```
- Generate and open Allure report:
  ```bash
  npx allure generate allure-results --clean -o allure-report
  npx allure open allure-report
  ```

### Project Configuration

- **playwright.config.js**: Configure browsers, reporters, timeouts, and base settings.
- **Allure Reporting**: Configured via Playwright reporter option.

### Best Practices

- Use Page Object Model for all page interactions.
- Keep test data (like credentials) in separate JSON files.
- Do not commit sensitive data or test artifacts (see `.gitignore`).
- Review Allure reports for test results and debugging.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

MIT

---

Mahesh Gachale
