---

### **📌 README.md - Playwright API Test Automation**

```
# 📌 Playwright API Test Automation

This repository contains automated API tests using **Playwright**. The tests cover CRUD operations, and Playwright's built-in HTML reporting. 

---

## 📂 Project Structure

```
📂 playwright-api-test
 ├── 📂 tests
 │    ├── api-test.spec.js   # Main test file
 │    ├── utils.js           # Utility functions (logging, setup)
 │
 ├── 📂 reports
 │    ├── index.html         # Playwright HTML report
 │
 ├── .gitignore
 ├── package.json
 ├── README.md               # Documentation
 ├── playwright.config.js     # Playwright Configuration
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone <your-repo-url>
cd playwright-api-test
```

### 2️⃣ Install Dependencies
Make sure you have **Node.js 18+** installed, then run:
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```
BaseUrl=https://api.restful-api.dev/objects
```

---

## ▶️ Running Tests

### **Run All Tests**
```
npx playwright test
```

### **Run a Specific Test File**
```
npx playwright test tests/api-test.spec.js
-- or --
npx playwright test tests/api.test.js
```

### **Run Tests with Detailed Logs**
```
npx playwright test --debug
```

---

## 📊 Viewing Reports

### **Generate Playwright Report**
```
npx playwright test --reporter=html
```

### **Open the Report**
```
npx playwright show-report
```
This will open an interactive **HTML report** in the browser.

---

## 📖 Logging API Responses

API requests & responses are logged in `logs/api-results.json`. You can check the logs for debugging.

---

## ❓ Need Help?
For issues, please raise a GitHub issue or contact the repository maintainer.

---
   
Now your repository is **well-documented**, and anyone can **clone, set up, and run the tests easily**. 🎯 🚀
