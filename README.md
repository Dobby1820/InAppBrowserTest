# InAppBrowser Minimal Example for Bug Report

This repository contains a **minimal Ionic Angular project** to demonstrate an issue with the **InAppBrowser plugin** of **Capacitor** on android devices. The project was created to assist the InAppBrowser developers in diagnosing a specific bug.

## ⚡ Project Overview

The purpose of this project is to provide a simple example that demonstrates the use of the **InAppBrowser plugin** in an Ionic Angular app, while also reproducing the bug that occurs in the real project.

### ⚙️ Dependencies

- **Capacitor**: 6.x
- **Ionic**: 8.x
- **Angular**: 19.x
- **InAppBrowser Plugin**: 1.0.3

## 🛠️ Bug Description

The bug occurs when the **InAppBrowser** is opened after clicking a button. The app is configured to open the target URL in the **InAppBrowser** , with the android view style **Bottom-Sheet** mode enabled, and the modal height should be set to **70%**.

### Actual Behavior:
- The **InAppBrowser** opens the modal with a **height of 50%**, even though the configuration for 70% height is specified.

### Expected Behavior:
- The modal should open with a height of **70%** and in **Bottom-Sheet mode**.

## 📄 License
This project is licensed under the MIT License.
