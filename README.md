<p align="center">
  <img width="200" src="https://i.ibb.co/y41wRL5/logo-week.png"/>
</p>
<p align="center">
  Built with React Native.
</p>

## Table of Contents

- [Features](#features)
- [Screenshot](#screenshot)
- [Release](#release-apk)
- [Requirements](#requirements)
- [Usage](#usage-for-development)
- [Contributors](#contributors)

## Features
* Displays the current day and the next 7 weeks in a scrollable tabview
* Displays the current time in the time list
* Display Polyline map with static data

## Screenshot
<p align="center">
  <img width="200" src="https://i.ibb.co/HV04dHD/Screenshot-20200721-132835.png" border=1/>
  <img width="200" src="https://i.ibb.co/LvmXfSV/Screenshot-20200721-132808.png" border=1/>
  <img width="200" src="https://i.ibb.co/vYjbxYR/Screenshot-20200721-132903.png" border=1/>
</p>

## Release APK
<a href="https://drive.google.com/file/d/1oucJnVXVOkvc5qXSrfd1baz0F6iosgR2/view?usp=sharing">
  <img src="https://img.shields.io/badge/Download%20on%20the-Google%20Drive-blue.svg?style=popout&logo=google-drive"/>
</a>

## Requirements
* [`yarn`](https://yarnpkg.com/getting-started/install)
* [`react-native`](https://facebook.github.io/react-native/docs/getting-started)
* `Google maps API Key` you can get it [here](https://developers.google.com/maps/documentation/javascript/get-api-key)

## Usage for development
1. Open your terminal or command prompt
2. Type `git clone https://github.com/rediramdan/Weekly-calendar.git`
3. Open the folder and type `yarn install` for install dependencies
5. Add your goole maps API Key on `AndroidManifest.xml`
##### Example
  ```
  <meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="YOUR_API_KEY"/>
  ```
6. Type `yarn run-android` for run this app

## Contributors
  <center>
  <table border=0>
    <tr>
      <td align="center">
        <a href="https://github.com/rediramdan/">
          <img width="80" style="border-radius:50%" src="https://assets.codepen.io/4083995/internal/avatars/users/default.png?format=auto&height=80&version=1593313228&width=80">
        </a>
      </td>
    </tr>
  </table>
</center>

