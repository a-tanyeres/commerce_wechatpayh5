# Commerce wechat pay h5

Commerce wechat pay H5 is a drupal module who allow you to pay with wechat on third party browser (ex: _chrome, safari, firefox..._)

## Requirement

This module use [**Commerce wechat module**](https://www.drupal.org/project/commerce), you need to install it first to make it working.

This module have been made for the version **7.x** of drupal.

## Getting started
#### Installation

First you need to [download](https://github.com/a-tanyeres/commerce_wechatpayh5/archive/master.zip) this module then go to the **module** page on your Drupal website and click on `Install new module`.

Once installed, you have to active it. On you **module** page find the your list of modules the one called `Commerce Wechat Pay H5`, check him and **save**.

You have then to active the **H5** payement method. In order to, go to **Strore > configuration > payement method** and find the method named: `Wechat H5` then **enable** it.

#### Setup

On the module page, click **configure** on the `Commerce Wechat Pay H5` line.

To make your H5 peyment working you have to fill these 4 informations (_APPID, MCHID, KEY, APPSECRET_) about your professionnal wechat account.

You can find these informations on your [wechat backend](https://pay.weixin.qq.com/) account

## About

The module react like an offsite payment, but he it's not really the case, the payement open the **wechat app** above the mobile browser, the **wechat app** is so needed to pay with it.

_Modify the logo by putting your image in the folder `/commerce_wechatpayh5/assets` and call it `logo.png` (replace the older one)_

_At your first use you can testing the module by checking the **dev mode** in the `configure` page, this option put the fee to **00,01 yuan**, who is the minimum fee that wechat accept._

## Credits

commerce_wechatpayh5 was created and is maintained by <strong>[Alexandre Tanyeres](https://www.linkedin.com/in/alexandretanyeres/)</strong>, you can contact me for any questions.