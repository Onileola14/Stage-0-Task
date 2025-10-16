# 🧙 Stage 0 Task

# Dependencies

express
axios
cors

## 🚀 Description

This is my submission for the **Backend Wizards Stage 0 Task**.  
It’s a simple RESTful API that returns my profile information and a **dynamic cat fact** fetched from the [Cat Facts API](https://catfact.ninja/fact).

Each time you make a GET request to `/me`, the endpoint responds with:
- My personal information (email, name, stack)
- The current UTC time in ISO 8601 format
- A random cat fact 

---

## 🌐 Live API Link

> 🔗 https://your-live-api-url/me 

---

## 📡 Endpoint

**GET** `/me`

Example using `curl`:
```bash
curl https://your-live-api-url/me
