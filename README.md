# hotstar-ipl

So Hotstar lets a guest watch IPL Live only for X mins.
After which it asks for signup to premium.

This extension resets the session after every X mins.
In cycle of X mins it keeps doing these things:
- reset cookies
- refreshes the page as soon as time is gonna end.
- trying to go fullscreen (works only when any user-gesture is captured).

To use other parts of Hotstar, Kindly disable the extension.
PS: When developed, X was 3mins. It may vary as economy varies :D

### How to load this extension:
1) Download this repo:[all 3 files in one folder-say EXTENSIONFOLDER]
2) Now go to chrome's extension setting page: [chrome://extensions](chrome://extensions)
3) And drop this EXTENSIONFOLDER folder here directly
4) Now this will be listed as `HotstarIPLHack` in ur extensions. Enable it and Enjoy.


Note: This is AS-IS. Developed for learning purposes only :)
