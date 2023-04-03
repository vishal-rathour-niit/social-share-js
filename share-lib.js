function shareLib(options){
    let _this = this;
    this.options = options;
    let re_render = 0;
    return {
       render:function(){
           console.log('share render...')
           if(re_render === 0){
             _this.init(options);
           }
       }
    }
 }
 
 
 
 shareLib.prototype.renderTag = function(color){
         let div_share = document.createElement('div');
         div_share.className = 'share-icon';
         let svg_data = ` <svg version="1.1"   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 784.2 696.2" style="enable-background:new 0 0 784.2 696.2;" xml:space="preserve">
         <rect y="0"  width="784.1" height="696"></rect>
         <g>
             <path  style='fill:${color}' d="M600.8,178.2c0,38.1-30.9,69-69,69s-69-30.9-69-69c0-38.1,30.9-69,69-69S600.8,140.1,600.8,178.2z"></path>
             <path  style='fill:${color}' d="M531.7,263.2c-46.8,0-84.9-38.1-84.9-84.9c0-46.8,38.1-84.9,84.9-84.9s84.9,38.1,84.9,84.9
                 C616.7,225.1,578.6,263.2,531.7,263.2z M531.7,125.1c-29.3,0-53.1,23.8-53.1,53.1c0,29.3,23.8,53.1,53.1,53.1
                 c29.3,0,53.1-23.8,53.1-53.1C584.8,149,561,125.1,531.7,125.1z"></path>
             <path style='fill:${color}' d="M600.8,518c0,38.1-30.9,69-69,69s-69-30.9-69-69c0-38.1,30.9-69,69-69S600.8,479.9,600.8,518z"></path>
             <path style='fill:${color}' d="M531.7,602.9c-46.8,0-84.9-38.1-84.9-84.9c0-46.8,38.1-84.9,84.9-84.9s84.9,38.1,84.9,84.9
                 C616.7,564.8,578.6,602.9,531.7,602.9z M531.7,464.9c-29.3,0-53.1,23.8-53.1,53.1c0,29.3,23.8,53.1,53.1,53.1
                 c29.3,0,53.1-23.8,53.1-53.1C584.8,488.7,561,464.9,531.7,464.9z"></path>
             <path style='fill:${color}' d="M303.5,348.1c0,38.1-30.9,69-69,69c-38.1,0-69-30.9-69-69s30.9-69,69-69C272.6,279.1,303.5,310,303.5,348.1z"></path>
             <path style='fill:${color}' d="M234.5,433c-46.8,0-84.9-38.1-84.9-84.9s38.1-84.9,84.9-84.9c46.8,0,84.9,38.1,84.9,84.9S281.3,433,234.5,433z
                 M234.5,295c-29.3,0-53.1,23.8-53.1,53.1s23.8,53.1,53.1,53.1c29.3,0,53.1-23.8,53.1-53.1S263.7,295,234.5,295z"></path>
             <path style='fill:${color}' d="M284.6,337.9c-7.4,0-14.6-3.8-18.5-10.7c-5.8-10.2-2.2-23.1,7.9-29l197-112.3c10.2-5.8,23.1-2.3,29,7.9
                 c5.8,10.2,2.2,23.1-7.9,29l-197,112.3C291.8,337,288.2,337.9,284.6,337.9z"></path>
             <path style='fill:${color}' d="M481.6,513.1c-3.6,0-7.2-0.9-10.5-2.8L274.1,398c-10.2-5.8-13.7-18.8-7.9-29c5.8-10.2,18.8-13.8,29-7.9
                 l197,112.3c10.2,5.8,13.7,18.8,7.9,29C496.2,509.3,489,513.1,481.6,513.1z"></path>
         </g>
     </svg>`;
     div_share.innerHTML = svg_data;
     return div_share;
 
 }
 
 shareLib.prototype.renderShareWrapper = function(){
     let wrapper = document.createElement('div');
     wrapper.className = 'social-wrapper';
     let inner_data =`
     <ul>
         <li><img target="facebook" src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/smog-capital/assest/img/FB.png"></li>
         <li><img target="whatsup" src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/smog-capital/assest/img/wh.png"></li>
         <li><img target="twitter" src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/smog-capital/assest/img/Twitter.png"></li>
     </ul>`;
     wrapper.innerHTML = inner_data;
     return wrapper;
 
 }
 
 shareLib.prototype.cssManage = function(){
 
     let userWidth = undefined;
     let settelPos = this.options.position || 'top-right';
     let managePos = undefined;
     let margin = this.options.margin || 16;
     let wrapperMargin = this.options.margin || 16;
     let svgWidth = this.options.svgWidth || 50;
     let _this = this;
     if(!this.options.windowWidth){
         userWidth = _this.getWidth();
     } else if(this.options.windowWidth === 'window'){
         userWidth = _this.getWidth();
     }else {
         userWidth = this.options.windowWidth;
         managePos = `calc(50% - calc(${userWidth}px / 2) - 5px) `
     }
 
     let _margin = margin + 'px';
     let css = `
     .social-wrapper {
         position: fixed;
         z-index: 999;
         border-radius: 4px;
         display: none;
         ${
             settelPos === 'top-right' ? 
             `right:${managePos === undefined ? _margin:managePos};
              top:${wrapperMargin + 50}px;` : settelPos === 'top-left' ? `left:${managePos === undefined ? _margin:managePos};
              top:${wrapperMargin + 50}px;`: settelPos === 'bottom-right' ? `right:${managePos === undefined ? _margin:managePos};
              bottom:${wrapperMargin + 50}px`: settelPos === 'bottom-left' ? `left:${managePos === undefined ? _margin:managePos};
              bottom:${wrapperMargin + 50}px` : settelPos === 'center-left' ? `left:${managePos === undefined ? _margin:managePos};
              transform: translate(0%,-50%);top: calc(50% + 110px);` : settelPos === 'center-right' && `right:${managePos === undefined ? _margin:managePos};
              transform: translate(0%,-50%);top: calc(50% + 110px);`
             
         
         }
     }
     .social-wrapper.active {
         display: block;
     }
     .social-wrapper ul {
         width: 60px;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         padding: 10px 0;
         margin: 0;
     }
     li {
         list-style-type: none;
     }
     .social-wrapper ul li img {
         width: ${svgWidth - 5}px;
         cursor: pointer;
         max-width: 100%;
     }
     .social-wrapper ul li:nth-of-type(2) img {
         width: ${svgWidth + 15}px;
     }
     .share-icon {
         position: fixed;
         z-index: 999;
         box-sizing: border-box;
         ${
             settelPos === 'top-right' ? 
                 `right:${managePos === undefined ? _margin:managePos};
                  top:${wrapperMargin }px;` : settelPos === 'top-left' ? `left:${managePos === undefined ? _margin:managePos};
                  top:${wrapperMargin }px;`: settelPos === 'bottom-right' ? `right:${managePos === undefined ? _margin:managePos};
                  bottom:${wrapperMargin }px`: settelPos === 'bottom-left' ? `left:${managePos === undefined ? _margin:managePos};
                  bottom:${wrapperMargin }px;` : settelPos === 'center-left' ? `left:${managePos === undefined ? _margin:managePos};
                  transform: translate(0%,-50%);top: 50%;` : settelPos === 'center-right' && `right:${managePos === undefined ? _margin:managePos};
                  transform: translate(0%,-50%);top: 50%;`
          
         }
        ; width:${svgWidth}px;
         height:${svgWidth}px;
         ${this.options.svgBackgroundColor != undefined ? `background-color:${this.options.svgBackgroundColor};`:''}
         ${this.options.border != undefined ? `border:${this.options.border};`:''}
         ${this.options.borderRadius != undefined ? `border-radius:${this.options.borderRadius};`:''}
         ${this.options.svgPadding != undefined ? `padding:${this.options.svgPadding};`:''}
     }
     .share-icon svg {
         width: 100%;
         height: 100%;
         fill: transparent;
         cursor: pointer;
     }
     @media screen and (max-width: 767px)
     {
        .share-icon {
            width: ${svgWidth - 10}px;
            height: ${svgWidth - 10}px;
        }
        .social-wrapper {
           ${
            settelPos === 'top-right' ? 
             `right:6px;
              top:${wrapperMargin + 45}px;` : settelPos === 'top-left' ? `left:4px;
              top:${wrapperMargin + 45}px;`: settelPos === 'bottom-right' ? `right:6px;
              bottom:${wrapperMargin + 45}px`: settelPos === 'bottom-left' ? `left:4px;
              bottom:${wrapperMargin + 45}px` : settelPos === 'center-left' ? `left:4px;
              transform: translate(0%,-50%);top: calc(50% + 100px);` : settelPos === 'center-right' && `right:6px;
              transform: translate(0%,-50%);top: calc(50% + 100px);`
           }
        }
        .social-wrapper ul li img {
            width: ${svgWidth - 15}px;
        }
        .social-wrapper ul li:nth-of-type(2) img {
            width: ${svgWidth - 5}px;
        }
     }
     
     `;
     let style = document.createElement('style');
     style.innerHTML = css;
     return style;
 }
 
 shareLib.prototype.getWidth = function(){
     return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
 }
 
 
 shareLib.prototype.shareMapping = function(){
    return {
        'facebook':'https://www.facebook.com/sharer.php?u=',
        'twitter':'https://twitter.com/share?url=',
        'whatsup':'https://api.whatsapp.com/send?text='
    }
 }
 
 shareLib.prototype.whatsupMobile = function(current_url,title){
     let width = this.getWidth();
     let soc = null
     if(width < 767){
         let url = 'whatsapp://send?text='
         soc = url + title  +" "+ current_url
     }
     else{
         let url = 'https://web.whatsapp.com/send?text='
         soc = url + title  +" "+ current_url
     }
 
     
     return soc
 }
 
 shareLib.prototype.shareManage = function(e){
         const _title = document.title
         const _current_url = window.location.href.split('#')[0]
         if(e !== null){
             const _url = this.shareMapping[e]
             switch(e){
                 case 'facebook':
                     {
                         let soc = _url + _current_url
                         window.open(soc,'_blank')
                         return 
                     }
                 case 'twitter':
                     {
                         let soc = _url + encodeURIComponent(_current_url)  +"&text="+ encodeURIComponent(_title)
                         window.open(soc,'_blank')
                         return
                     }
                 case 'whatsup':{
                     
                         let  soc = this.whatsupMobile(_current_url,_title)
                         window.open(soc,'_blank')
                         return
                 }
                 
     
             }
     
             
         }
     
 }
 
 shareLib.prototype.init = function(){
     let _this = this;
     this.color = this.options.svgForgroundColor || '#000';
     let _parent_div = document.createElement('div');
     _parent_div.className = 'share-pre-wrapper';
     let rt = this.renderTag(this.color)
     let rsw = this.renderShareWrapper()
     let css = this.cssManage()
     _parent_div.appendChild(rt);
     _parent_div.appendChild(rsw);
     _parent_div.appendChild(css);
 
 
     rt.addEventListener('click',function(e){
         e.stopPropagation();
         rsw.classList.contains('active') ? rsw.classList.remove('active'):rsw.classList.add('active')
     });
 
     let images_child = rsw.querySelectorAll('img');
     images_child.forEach(function(img){
         img.addEventListener('click',function(e){
             e.stopPropagation();
             let t = img.getAttribute('target');
             _this.shareManage(t)
         });
     });
 
     if(this.options.root === null){
         document.body.appendChild(_parent_div)
     }
     else
     {
         let _el = document.querySelector(this.options.root);
         _el &&  _el.appendChild(_parent_div)
     }
 
     document.addEventListener('click',function(e){
             rsw && rsw.classList.remove('active')
     });
     
 
 }
 
 
 
 