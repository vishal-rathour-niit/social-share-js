# social-share-js

## HTML

```
<div class='share-wrapper' id='share-options'></div>
```

## JS 

```
<script src="share-lib.js"></script>
```

## JS Code

```
<script>
  var options = {
      root:null,   // default: document.body , or add id or class (#share-options) to wrap
      position:'top-right', // top-right , top-left, bottom-right, bottom-left, center-left , center-right
      windowWidth:'window' , //  window or px (553)
      margin:16,  // top,left,right,bottom margin
    //  svgPadding:'8px',  // set svg padding if need svg in background color
    //  svgForgroundColor:'#fff',  // defalt #000,
    //  svgBackgroundColor:'#0760dd',  // default color is transparent
    //  svgWidth:50, // default is 50px
   //   border:'3px solid #fff',  // defaut is none
   //   borderRadius:'100%'  // default is none 
  }
```
## initialize library

```
new shareLib(options).render();
```

## options {}

```
root   default is document.body if you want to share element wrape into custom element. pass element
root:document.querySelector('#share-options')

position:'top-right' default is top-right or you can set: top-right , top-left, bottom-right, bottom-left, center-left , center-right

windowWidth:'window'  defalut is default, or you can set px value

margin:16  set upper element margin, defalut is 16px

svgPadding:'8px'  set inner svg padding

svgForgroundColor:'#fff'  set svf color defalut color is #000

svgBackgroundColor:'#0760dd' defalut color is transperent

svgWidth:50  defalut is 50px (Number)

border:'3px solid #fff'  defalut is none

borderRadius:'100%' defalt is none
```
