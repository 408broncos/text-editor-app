# text-editor-app

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Javascript| [https://www.smashingmagazine.com/2021/06/getting-started-webpack/](https://www.smashingmagazine.com/2021/06/getting-started-webpack/) 



## Description 
In this project I was tasked with creating a functional text editor only using Back-end technology. I was asked to create this application only using node.js and other given starter codes. After the application is made I also needed to deploy it through heroku so that users can see and you the app freely.

[Visit the Deployed Site](https://sleepy-dawn-60768.herokuapp.com/)

## Code Examples

Here I will be showing an example of a section I was stuck on but eventually discovered the solution to:


```js
registerRoute(
  ({ request }) => request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'font' ||
    request.destination === 'image',
  new CacheFirst({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

```
In this code snippet we were asked to implement asset caching for our src-sw.js file. For someone that didn't know how to achieve it I ran into a lot of problems. However, after looking through previous cache activities and trial and errors I found the solutions you see above.

## Usage 
For usages there was a lot of installs I had to make for this app to function properly which you can see in my rooted package.json file.As far as things I found to be extremely helpful were asking for support on questions I needed help with and previous class activities to look at for guidance.


## Learning Points
As far as learning points go I was extremely frustrated using heroku, I received error after error and could not find any solutions but after reaching out to classmates and askBCS I was able to find my resolutions. So I would say using heroku is a but easier now.


## Author Info

### Jordan Cardenas 
* [LinkedIn](https://www.linkedin.com/in/jordan-cardenas-87a58520b/)
* [Github](https://github.com/408broncos)

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
