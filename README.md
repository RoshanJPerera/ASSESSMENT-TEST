```md
# 🎭 ASESSMENT-TEST - Playwright API Test Project  

**ASESSMENT-TEST** is an automated API testing project using **Playwright**.  
This repository includes test scripts for validating API endpoints with structured **logging, debugging, and reporting**.

---

## 🔹 Project Overview  

✅ **Automated API Tests** - Covers GET, POST, PUT, DELETE operations.  
✅ **Playwright-Based Framework** - Uses `@playwright/test` for automation.  
✅ **HTML & JSON Reports** - Generates structured reports for test execution.  
✅ **Logging & Debugging** - API responses are stored in `logs/api-results.json`.  
✅ **Error Handling** - Ensures smooth execution with proper validations.  

---

## 🛠️ Getting Started  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/<your-username>/ASESSMENT-TEST.git
cd ASESSMENT-TEST
```

### 2️⃣ Install Dependencies  
Ensure **Node.js 18+** is installed, then run:  
```sh
npm install
```

### 3️⃣ Configure Environment Variables  
Create a `.env` file in the root directory and add:  
```
BaseUrl=https://api.restful-api.dev/objects
```

---

## ▶️ Running the Tests  

### **Run All Tests**  
```sh
npx playwright test
```

### **Run a Specific Test File**  
```sh
npx playwright test tests/api-test.spec.js
```

### **Run Tests in Debug Mode**  
```sh
npx playwright test --debug
```

---

## 📊 Viewing Reports  

### **Generate and Open HTML Report**  
```sh
npx playwright test --reporter=html
npx playwright show-report
```
This will open an interactive **HTML report** in the browser.

---

## 📂 Project Structure  

```
📂 ASESSMENT-TEST
 ├── 📂 tests
 │    ├── api-test.spec.js   # API test scripts
 │
 ├── 📂 logs
 │    ├── api-results.json   # Stores API logs
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

## ❓ Need Help?  
For any issues, raise a GitHub issue or contact the repository maintainer.

---
