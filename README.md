# JavaScript Library for Social Sharing

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
 var options = {
      root:null,   // default: document.body , or add id or class (#share-options) to wrap
      position:'top-right', // top-right , top-left, bottom-right, bottom-left, center-left , center-right
      windowWidth:'window' , //  window or px (553)
      margin:16,  // top,left,right,bottom margin
      svgPadding:'8px',  // set svg padding if need svg in background color
      svgForgroundColor:'#fff',  // defalt #000,
      svgBackgroundColor:'#0760dd',  // default color is transparent
      svgWidth:50, // default is 50px
      border:'3px solid #fff',  // defaut is none
      borderRadius:'100%'  // default is none 
  }
```
## initialize library

```
new shareLib(options).render();
```
The default root is document.body. If you want to share an element wrapped in a custom element, pass the element's ID or class.

## options {}
```
root:'#share-options'
position:'top-right' default is top-right or you can set: top-right , top-left, bottom-right, bottom-left, center-left , center-right
windowWidth:'window'  defalut is window width, or you can set px value
margin:16  set upper element margin, defalut is 16px
svgPadding:'8px'  set inner svg padding
svgForgroundColor:'#fff'  set svf color defalut color is #000
svgBackgroundColor:'#0760dd' defalut color is transperent
svgWidth:50  defalut is 50px (Number)
border:'3px solid #fff'  defalut is none
borderRadius:'100%' defalt is none
```
