# **Collaboration Guidelines**

To ensure smooth collaboration and maintain code quality, follow these instructions strictly:

---

### **1️⃣ Never commit directly to `main`**

- Your local `main` branch **must always stay in sync** with the remote repository (`origin/main`).
- Before starting work, update your local `main`:

```bash
git checkout main
git fetch origin
git rebase origin/main
# OR
git merge orgin/main
```

---

### **2️⃣ Create a feature branch**

- Each task or resource should have its own branch:

```bash
git checkout -b feature/yourname-booking-api
```

- Use descriptive branch names: `feature/<task>` or `bugfix/<task>`.

---

### **3️⃣ Work on your feature**

- Implement **only what is described in the guided TODO instructions**.
- Avoid over-engineering; **excessive complexity may result in returning the work for revisions**.
- Provide **concise, meaningful comments only**. Detailed inline comments are discouraged; commit messages should be the primary documentation.

---

### **4️⃣ Commit your changes**

- Make **meaningful commits** with clear messages that explain what and why:

```bash
git add .
git commit -m "Implement createBooking controller with user & room references, basic validation"
```

- **Detailed commit messages are encouraged**, but avoid heavy inline comments in code.
- If your implementation deviates from the TODO without proper documentation in commits, your work may be returned for revision.

---

### **5️⃣ Sync with remote before submitting PR**

- Regularly update your feature branch with the latest `main` to avoid conflicts:

```bash
git fetch origin
git rebase origin/main
```

- Resolve any conflicts **locally** before submitting a PR.

---

### **6️⃣ Push feature branch & submit PR**

```bash
git push origin feature/your-name-booking-api
```

- On GitHub, create a **Pull Request (PR)** targeting `main`.
- Clearly indicate the resource/task your PR addresses.
- Attach **2–3 screenshots of successful API calls** (Postman, REST Client, curl, etc.).
- Failure to include testing evidence may result in PR being returned for revisions.
- Failure to address first your development environment issues (if you have) result in PR being returned for revisions.

---

### **7️⃣ Post-merge responsibilities**

- After your PR is merged, update your local main branch before starting a new task:

```bash
git checkout main
git fetch origin
git rebase origin/main
```

- Always stay in sync with `main` to prevent conflicts in future tasks.

---

### **8️⃣ Code Quality Reminders**

- **Follow the guided TODO instructions strictly.** Deviations must be documented in commits.
- **Do not over-engineer** solutions; simplicity and correctness are prioritized.
- **Use comments sparingly**: only where clarity is needed.
- **Detailed commit messages are your main documentation tool.**
- Work that ignores the TODO, lacks meaningful commits, no screenshots of API calls or is unnecessarily complex may be **returned for revision**.
