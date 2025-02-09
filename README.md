```md
# 🎭 ASESSMENT-TEST - Playwright API Test Project  

**ASESSMENT-TEST** is an automated API testing project using **Playwright**.  
This repository includes test scripts for validating API endpoints.

```

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
or
```sh
npx playwright test test/api.test.js
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

