# Gatsby Plugin SharpSpring
Easily add SharpSpring Marketing Automation to your GastbyJS website. Enables 
- Tracking
- Chatbots
- And every other feature that comes out of the box with the SharpSpring Tracking Code

## How to install
```npm
npm install gatsby-plugin-sharpspring
```

## How to use
```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      trackingId: `YOUR_SITE_TRACKING_ID`,
      domainId: `YOUR_SITE_DOMAIN_ID`
      // You can get your domain id from the following line in your Tracking Code Script 
      // _ss.push(['_setDomain', 'https://DOMAIN_ID.marketingautomation.services/net']);
      // Your domain ID is all the characters after https:// before you get to .marketingautomation.services/net
    }
  }
]

```

#### Side Notes
Considering that [SharpSpring](https://sharpspring.com) is a high-end marketing tool, I am curious if anybody would use this plugin at all. If you found it useful, please feel to give me a shout out on [Twitter](https://twitter.com/aremu_smog) | [Youtube](https://youtube.com/webboss) | [Instagram](https://instagram.com/aremu_smog)
