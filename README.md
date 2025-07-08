# 📱 FinFlow

**FinFlow** is my very first mobile application built with **React Native** for managing personal expenses. It empowers users to easily **track**, **add**, **edit**, and **delete** expenses—making budgeting seamless across Android and iOS.

---

## 🚀 Features

- **📊 Dashboard Overview**:  
  View recent and all-time expenditures at a glance.

- **➕ Add Expense**:  
  Input details like description, amount, and date.

- **✏️ Edit Expense**:  
  Tap any entry to update its information.

- **🗑️ Delete Expense**:  
  Swipe or tap to remove outdated or wrong entries.

- **🔄 Cross‑Platform**:  
  Works on **Android** and **iOS** using a single React Native codebase.

- **🧩 Context + Reducer State Management**:  
  Clean and predictable state handling for CRUD operations.

---

## 📷 Screenshots

![Dashboard](/assets/dashboard.jpg)
*Overview of expenses*

---

## 📝 Tech Stack

| Layer              | Technologies used                |
|--------------------|----------------------------------|
| Framework          | React Native                     |
| State Management   | React Context + `useReducer`     |
| Styling            | React Native `StyleSheet`        |
| Date Handling      | JavaScript `Date` + Helpers      |
| Navigation         | React Navigation (stack)         |

---

## 🔌 Backend

Connected to Firebase Realtime Database for data persistence using REST API (via Axios).
Works with secure rules and supports both offline and online syncing.
---

## 🔧 Installation

1. Clone the repo  
   `git clone https://github.com/your-username/FinFlow.git`  
2. Navigate to project directory  
   `cd FinFlow`  
3. Install dependencies  
   `npm install`  
4. Run on Android or iOS  
   `npx react-native run-android`  
   `npx react-native run-ios` (macOS + Xcode only)

