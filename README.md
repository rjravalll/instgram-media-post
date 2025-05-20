# 📸 Instagram Auto Poster

A simple Node.js utility to post images to Instagram Business Accounts using the Facebook Graph API.

> This package allows you to automate the process of posting images with captions to Instagram Business accounts connected to Facebook Pages.

---

## 🚀 Features

- Create Instagram media containers
- Publish images with captions to Instagram
- Uses Facebook Graph API (v19.0)
- Lightweight and easy to use

---

## 📦 Installation

```bash
npm install instagram-auto-poster
```

## 🔧 Prerequisites
You’ll need:

- A Facebook Developer account

- A Facebook Page connected to your Instagram Business Account

#### Required Permissions:

- instagram_basic

- pages_show_list

- pages_read_engagement

- pages_manage_posts

- ads_management (optional, for extended use)

### 🔑 How to Get Facebook Access Token
Step 1: Create a Facebook App
Go to https://developers.facebook.com

- Click "Create App"

- Choose "Business" type

- Fill out the details and click "Create App"

Step 2: Add Instagram Graph API and Facebook Login
Inside the app dashboard, click "Add Product"

- Select "Instagram Graph API"

- Also add "Facebook Login" if required

Step 3: Generate a User Access Token
- Go to Tools > Graph API Explorer
- https://developers.facebook.com/tools/explorer

- Select your app and a user access token

- Under "Permissions", select:
- instagram_basic, pages_show_list, pages_read_engagement, pages_manage_posts

#### Click "Generate Access Token"

#### 💡 Make sure your Instagram account is a Business account and is linked to a Facebook Page

# Uses:
```bash

const { postToInstagram } = require('instagram-auto-poster');

(async () => {
    try {
        const result = await postToInstagram({
            accessToken: 'YOUR_ACCESS_TOKEN_HERE',
            imageUrl: 'https://example.com/image.jpg',
            caption: 'Auto-posted from Node.js!',
        });

        console.log('Post Success:', result);
    } catch (err) {
        console.error('Post Failed:', err.message);
    }
})();

```
