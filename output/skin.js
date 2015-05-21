// Garden Gnome Software - Skin
// Pano2VR pro 4.5.1/10655
// Filename: simplex_notooltip1_res.ggsk
// Generated Пн 13. апр 19:46:47 2015

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container';
		this._controller.ggType='container';
		this._controller.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-142 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-65 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -142px;';
		hs+='top:  -65px;';
		hs+='width: 286px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._controller.setAttribute('style',hs);
		this._up=document.createElement('div');
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_svg';
		this._up.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  -5px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_svg';
		this._up__img.setAttribute('src',basePath + 'images/up.svg');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._up__img['ondragstart']=function() { return false; };
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'images/up__o.svg';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'images/up.svg';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._controller.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_svg';
		this._down.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_svg';
		this._down__img.setAttribute('src',basePath + 'images/down.svg');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._down__img['ondragstart']=function() { return false; };
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'images/down__o.svg';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'images/down.svg';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._controller.appendChild(this._down);
		this._left=document.createElement('div');
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_svg';
		this._left.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_svg';
		this._left__img.setAttribute('src',basePath + 'images/left.svg');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._left__img['ondragstart']=function() { return false; };
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'images/left__o.svg';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'images/left.svg';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._controller.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_svg';
		this._right.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_svg';
		this._right__img.setAttribute('src',basePath + 'images/right.svg');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._right__img['ondragstart']=function() { return false; };
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'images/right__o.svg';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'images/right.svg';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._controller.appendChild(this._right);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg';
		this._zoomin.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 90px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._zoomin__img.src=basePath + 'images/zoomin__o.svg';
		}
		this._zoomin.onmouseout=function () {
			me._zoomin__img.src=basePath + 'images/zoomin.svg';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg';
		this._zoomout.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 120px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._zoomout__img.src=basePath + 'images/zoomout__o.svg';
		}
		this._zoomout.onmouseout=function () {
			me._zoomout__img.src=basePath + 'images/zoomout.svg';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._controller.appendChild(this._zoomout);
		this._autorotate=document.createElement('div');
		this._autorotate.ggId="autorotate";
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		this._autorotate.className='ggskin ggskin_svg';
		this._autorotate.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 160px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.className='ggskin ggskin_svg';
		this._autorotate__img.setAttribute('src',basePath + 'images/autorotate.svg');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._autorotate__img['ondragstart']=function() { return false; };
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function () {
			me._autorotate__img.src=basePath + 'images/autorotate__o.svg';
		}
		this._autorotate.onmouseout=function () {
			me._autorotate__img.src=basePath + 'images/autorotate.svg';
		}
		this._controller.appendChild(this._autorotate);
		this._info=document.createElement('div');
		this._info.ggId="info";
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_svg';
		this._info.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 190px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._info.setAttribute('style',hs);
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_svg';
		this._info__img.setAttribute('src',basePath + 'images/info.svg');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._info__img['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__img);
		this._info.onclick=function () {
			flag=(me._userdata.style.visibility=='hidden');
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility=flag?'inherit':'hidden';
			me._userdata.ggVisible=flag;
		}
		this._info.onmouseover=function () {
			me._info__img.src=basePath + 'images/info__o.svg';
		}
		this._info.onmouseout=function () {
			me._info__img.src=basePath + 'images/info.svg';
		}
		this._controller.appendChild(this._info);
		this._movemode=document.createElement('div');
		this._movemode.ggId="movemode";
		this._movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode.ggVisible=true;
		this._movemode.className='ggskin ggskin_svg';
		this._movemode.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 220px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._movemode.setAttribute('style',hs);
		this._movemode__img=document.createElement('img');
		this._movemode__img.className='ggskin ggskin_svg';
		this._movemode__img.setAttribute('src',basePath + 'images/movemode.svg');
		this._movemode__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._movemode__img['ondragstart']=function() { return false; };
		this._movemode.appendChild(this._movemode__img);
		this._movemode.onclick=function () {
			me.player.changeViewMode(2);
		}
		this._movemode.onmouseover=function () {
			me._movemode__img.src=basePath + 'images/movemode__o.svg';
		}
		this._movemode.onmouseout=function () {
			me._movemode__img.src=basePath + 'images/movemode.svg';
		}
		this._controller.appendChild(this._movemode);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg';
		this._fullscreen.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 250px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.svg';
		}
		this._fullscreen.onmouseout=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen.svg';
		}
		this._controller.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._controller);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container';
		this._loading.ggType='container';
		this._loading.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-105 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-30 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -105px;';
		hs+='top:  -30px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading.setAttribute('style',hs);
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle';
		this._loadingbg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId="loadingbrd";
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		this._loadingbrd.className='ggskin ggskin_rectangle';
		this._loadingbrd.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text';
		this._loadingtext.ggType='text';
		this._loadingtext.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (176-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  12px;';
		hs+='width: 176px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		this._loadingtext.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle';
		this._loadingbar.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  35px;';
		hs+='width: 181px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #808080;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._userdata=document.createElement('div');
		this._userdata.ggId="userdata";
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.className='ggskin ggskin_container';
		this._userdata.ggType='container';
		this._userdata.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-120 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-80 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -120px;';
		hs+='top:  -80px;';
		hs+='width: 240px;';
		hs+='height: 134px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._userdata.setAttribute('style',hs);
		this._userdata.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId="userdatabg";
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		this._userdatabg.className='ggskin ggskin_rectangle';
		this._userdatabg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 240px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabg.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabg);
		this._userdatabrd=document.createElement('div');
		this._userdatabrd.ggId="userdatabrd";
		this._userdatabrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabrd.ggVisible=true;
		this._userdatabrd.className='ggskin ggskin_rectangle';
		this._userdatabrd.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 238px;';
		hs+='height: 77px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabrd.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabrd);
		this._title=document.createElement('div');
		this._title__text=document.createElement('div');
		this._title.className='ggskin ggskin_textdiv';
		this._title.ggTextDiv=this._title__text;
		this._title.ggId="title";
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		this._title.className='ggskin ggskin_text';
		this._title.ggType='text';
		this._title.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-60 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  -60px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._title__text.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			var hs="<b>"+me.player.userdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._title.ggUpdateText();
		this._title.appendChild(this._title__text);
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description__text=document.createElement('div');
		this._description.className='ggskin ggskin_textdiv';
		this._description.ggTextDiv=this._description__text;
		this._description.ggId="description";
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		this._description.className='ggskin ggskin_text';
		this._description.ggType='text';
		this._description.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-40 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  -40px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._description.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._description__text.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			var hs=me.player.userdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._description.ggUpdateText();
		this._description.appendChild(this._description__text);
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author__text=document.createElement('div');
		this._author.className='ggskin ggskin_textdiv';
		this._author.ggTextDiv=this._author__text;
		this._author.ggId="author";
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		this._author.className='ggskin ggskin_text';
		this._author.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  49px;';
		hs+='width: 218px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._author.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 21px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._author__text.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			var hs=me.player.userdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._author.ggUpdateText();
		this._author.appendChild(this._author__text);
		this._userdata.appendChild(this._author);
		this.divSkin.appendChild(this._userdata);
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_1.ggVisible=true;
		this._container_1.className='ggskin ggskin_container';
		this._container_1.ggType='container';
		this._container_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-480 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -480px;';
		hs+='top:  -7px;';
		hs+='width: 960px;';
		hs+='height: 171px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._container_1.setAttribute('style',hs);
		this._image_1=document.createElement('div');
		this._image_1.ggId="Image 1";
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1.ggVisible=true;
		this._image_1.className='ggskin ggskin_image';
		this._image_1.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 960px;';
		hs+='height: 171px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		this._image_1.setAttribute('style',hs);
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._container_1.appendChild(this._image_1);
		this._btn_open=document.createElement('div');
		this._btn_open__text=document.createElement('div');
		this._btn_open.className='ggskin ggskin_textdiv';
		this._btn_open.ggTextDiv=this._btn_open__text;
		this._btn_open.ggId="btn_open";
		this._btn_open.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		this._btn_open.ggVisible=false;
		this._btn_open.className='ggskin ggskin_text';
		this._btn_open.ggType='text';
		hs ='position:absolute;';
		hs+='left: 380px;';
		hs+='top:  142px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._btn_open.ggParameter) + ';';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._btn_open.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._btn_open__text.setAttribute('style',hs);
		this._btn_open__text.innerHTML="\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c";
		this._btn_open.appendChild(this._btn_open__text);
		this._btn_open.onclick=function () {
			me._container_1.style[domTransition]='none';
			me._container_1.ggParameter.rx=0;me._container_1.ggParameter.ry=0;
			me._container_1.style[domTransform]=parameterToTransform(me._container_1.ggParameter);
			me._btn_cls.style[domTransition]='none';
			me._btn_cls.style.visibility='inherit';
			me._btn_cls.ggVisible=true;
			me._btn_open.style[domTransition]='none';
			me._btn_open.style.visibility='hidden';
			me._btn_open.ggVisible=false;
		}
		this._btn_open.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._btn_open.style[domTransition]='none';
			} else {
				me._btn_open.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._btn_open.ggParameter.sx=1.5;me._btn_open.ggParameter.sy=1.5;
			me._btn_open.style[domTransform]=parameterToTransform(me._btn_open.ggParameter);
		}
		this._btn_open.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._btn_open.style[domTransition]='none';
			} else {
				me._btn_open.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._btn_open.ggParameter.sx=1.2;me._btn_open.ggParameter.sy=1.2;
			me._btn_open.style[domTransform]=parameterToTransform(me._btn_open.ggParameter);
		}
		this._container_1.appendChild(this._btn_open);
		this._btn_cls=document.createElement('div');
		this._btn_cls__text=document.createElement('div');
		this._btn_cls.className='ggskin ggskin_textdiv';
		this._btn_cls.ggTextDiv=this._btn_cls__text;
		this._btn_cls.ggId="btn_cls";
		this._btn_cls.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		this._btn_cls.ggVisible=true;
		this._btn_cls.className='ggskin ggskin_text';
		this._btn_cls.ggType='text';
		hs ='position:absolute;';
		hs+='left: 380px;';
		hs+='top:  142px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._btn_cls.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._btn_cls.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._btn_cls__text.setAttribute('style',hs);
		this._btn_cls__text.innerHTML="\u0421\u043a\u0440\u044b\u0442\u044c";
		this._btn_cls.appendChild(this._btn_cls__text);
		this._btn_cls.onclick=function () {
			me._container_1.style[domTransition]='none';
			me._container_1.ggParameter.rx=0;me._container_1.ggParameter.ry=-120;
			me._container_1.style[domTransform]=parameterToTransform(me._container_1.ggParameter);
			me._btn_open.style[domTransition]='none';
			me._btn_open.style.visibility='inherit';
			me._btn_open.ggVisible=true;
			me._btn_cls.style[domTransition]='none';
			me._btn_cls.style.visibility='hidden';
			me._btn_cls.ggVisible=false;
		}
		this._btn_cls.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._btn_cls.style[domTransition]='none';
			} else {
				me._btn_cls.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._btn_cls.ggParameter.sx=1.5;me._btn_cls.ggParameter.sy=1.5;
			me._btn_cls.style[domTransform]=parameterToTransform(me._btn_cls.ggParameter);
		}
		this._btn_cls.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._btn_cls.style[domTransition]='none';
			} else {
				me._btn_cls.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._btn_cls.ggParameter.sx=1.2;me._btn_cls.ggParameter.sy=1.2;
			me._btn_cls.style[domTransform]=parameterToTransform(me._btn_cls.ggParameter);
		}
		this._container_1.appendChild(this._btn_cls);
		this._ban=document.createElement('div');
		this._ban.ggId="ban";
		this._ban.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ban.ggVisible=true;
		this._ban.className='ggskin ggskin_container';
		this._ban.ggType='container';
		hs ='position:absolute;';
		hs+='left: 340px;';
		hs+='top:  19px;';
		hs+='width: 120px;';
		hs+='height: 110px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._ban.setAttribute('style',hs);
		this._ban.onclick=function () {
			me.player.openUrl("ban.php","");
		}
		this._ban.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._ban_i.style[domTransition]='none';
			} else {
				me._ban_i.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._ban_i.style.opacity='1';
			me._ban_i.style.visibility=me._ban_i.ggVisible?'inherit':'hidden';
		}
		this._ban.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._ban_i.style[domTransition]='none';
			} else {
				me._ban_i.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._ban_i.style.opacity='0.7';
			me._ban_i.style.visibility=me._ban_i.ggVisible?'inherit':'hidden';
		}
		this._ban_t=document.createElement('div');
		this._ban_t__text=document.createElement('div');
		this._ban_t.className='ggskin ggskin_textdiv';
		this._ban_t.ggTextDiv=this._ban_t__text;
		this._ban_t.ggId="ban_t";
		this._ban_t.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ban_t.ggVisible=true;
		this._ban_t.className='ggskin ggskin_text';
		this._ban_t.ggType='text';
		this._ban_t.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-60 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-18 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  -18px;';
		hs+='width: 118px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._ban_t.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 118px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._ban_t__text.setAttribute('style',hs);
		this._ban_t__text.innerHTML="\u0411\u0430\u043d\u043a\u0435\u0442\u043d\u044b\u0439 \u0437\u0430\u043b";
		this._ban_t.appendChild(this._ban_t__text);
		this._ban.appendChild(this._ban_t);
		this._ban_i=document.createElement('div');
		this._ban_i.ggId="ban_i";
		this._ban_i.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ban_i.ggVisible=true;
		this._ban_i.className='ggskin ggskin_image';
		this._ban_i.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.7;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._ban_i.setAttribute('style',hs);
		this._ban_i__img=document.createElement('img');
		this._ban_i__img.className='ggskin ggskin_image';
		this._ban_i__img.setAttribute('src',basePath + 'images/ban_i.png');
		this._ban_i__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._ban_i__img.className='ggskin ggskin_image';
		this._ban_i__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._ban_i__img);
		this._ban_i.appendChild(this._ban_i__img);
		this._ban.appendChild(this._ban_i);
		this._container_1.appendChild(this._ban);
		this._myas=document.createElement('div');
		this._myas.ggId="myas";
		this._myas.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._myas.ggVisible=true;
		this._myas.className='ggskin ggskin_container';
		this._myas.ggType='container';
		hs ='position:absolute;';
		hs+='left: 510px;';
		hs+='top:  19px;';
		hs+='width: 120px;';
		hs+='height: 110px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._myas.setAttribute('style',hs);
		this._myas.onclick=function () {
			me.player.openUrl("myas.php","");
		}
		this._myas.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._myas_i.style[domTransition]='none';
			} else {
				me._myas_i.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._myas_i.style.opacity='1';
			me._myas_i.style.visibility=me._myas_i.ggVisible?'inherit':'hidden';
		}
		this._myas.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._myas_i.style[domTransition]='none';
			} else {
				me._myas_i.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._myas_i.style.opacity='0.7';
			me._myas_i.style.visibility=me._myas_i.ggVisible?'inherit':'hidden';
		}
		this._myas_t=document.createElement('div');
		this._myas_t__text=document.createElement('div');
		this._myas_t.className='ggskin ggskin_textdiv';
		this._myas_t.ggTextDiv=this._myas_t__text;
		this._myas_t.ggId="myas_t";
		this._myas_t.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._myas_t.ggVisible=true;
		this._myas_t.className='ggskin ggskin_text';
		this._myas_t.ggType='text';
		this._myas_t.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-60 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-18 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  -18px;';
		hs+='width: 118px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._myas_t.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 118px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._myas_t__text.setAttribute('style',hs);
		this._myas_t__text.innerHTML="\u0421\u0442\u0435\u0439\u043a-\u0445\u0430\u0443\u0441";
		this._myas_t.appendChild(this._myas_t__text);
		this._myas.appendChild(this._myas_t);
		this._myas_i=document.createElement('div');
		this._myas_i.ggId="myas_i";
		this._myas_i.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._myas_i.ggVisible=true;
		this._myas_i.className='ggskin ggskin_image';
		this._myas_i.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.7;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._myas_i.setAttribute('style',hs);
		this._myas_i__img=document.createElement('img');
		this._myas_i__img.className='ggskin ggskin_image';
		this._myas_i__img.setAttribute('src',basePath + 'images/myas_i.png');
		this._myas_i__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._myas_i__img.className='ggskin ggskin_image';
		this._myas_i__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._myas_i__img);
		this._myas_i.appendChild(this._myas_i__img);
		this._myas.appendChild(this._myas_i);
		this._container_1.appendChild(this._myas);
		this._rest=document.createElement('div');
		this._rest.ggId="rest";
		this._rest.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rest.ggVisible=true;
		this._rest.className='ggskin ggskin_container';
		this._rest.ggType='container';
		hs ='position:absolute;';
		hs+='left: 680px;';
		hs+='top:  19px;';
		hs+='width: 120px;';
		hs+='height: 110px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._rest.setAttribute('style',hs);
		this._rest.onclick=function () {
			me.player.openUrl("rest.php","");
		}
		this._rest.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._rest_i.style[domTransition]='none';
			} else {
				me._rest_i.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._rest_i.style.opacity='1';
			me._rest_i.style.visibility=me._rest_i.ggVisible?'inherit':'hidden';
		}
		this._rest.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._rest_i.style[domTransition]='none';
			} else {
				me._rest_i.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._rest_i.style.opacity='0.7';
			me._rest_i.style.visibility=me._rest_i.ggVisible?'inherit':'hidden';
		}
		this._rest_t=document.createElement('div');
		this._rest_t__text=document.createElement('div');
		this._rest_t.className='ggskin ggskin_textdiv';
		this._rest_t.ggTextDiv=this._rest_t__text;
		this._rest_t.ggId="rest_t";
		this._rest_t.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rest_t.ggVisible=true;
		this._rest_t.className='ggskin ggskin_text';
		this._rest_t.ggType='text';
		this._rest_t.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-60 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-18 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  -18px;';
		hs+='width: 118px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._rest_t.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 118px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._rest_t__text.setAttribute('style',hs);
		this._rest_t__text.innerHTML="\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d";
		this._rest_t.appendChild(this._rest_t__text);
		this._rest.appendChild(this._rest_t);
		this._rest_i=document.createElement('div');
		this._rest_i.ggId="rest_i";
		this._rest_i.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rest_i.ggVisible=true;
		this._rest_i.className='ggskin ggskin_image';
		this._rest_i.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.7;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._rest_i.setAttribute('style',hs);
		this._rest_i__img=document.createElement('img');
		this._rest_i__img.className='ggskin ggskin_image';
		this._rest_i__img.setAttribute('src',basePath + 'images/rest_i.png');
		this._rest_i__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._rest_i__img.className='ggskin ggskin_image';
		this._rest_i__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._rest_i__img);
		this._rest_i.appendChild(this._rest_i__img);
		this._rest.appendChild(this._rest_i);
		this._container_1.appendChild(this._rest);
		this._kof=document.createElement('div');
		this._kof.ggId="kof";
		this._kof.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._kof.ggVisible=true;
		this._kof.className='ggskin ggskin_container';
		this._kof.ggType='container';
		hs ='position:absolute;';
		hs+='left: 170px;';
		hs+='top:  19px;';
		hs+='width: 120px;';
		hs+='height: 110px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._kof.setAttribute('style',hs);
		this._kof.onclick=function () {
			me.player.openUrl("kof.php","");
		}
		this._kof.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._kof_i.style[domTransition]='none';
			} else {
				me._kof_i.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._kof_i.style.opacity='1';
			me._kof_i.style.visibility=me._kof_i.ggVisible?'inherit':'hidden';
		}
		this._kof.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._kof_i.style[domTransition]='none';
			} else {
				me._kof_i.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._kof_i.style.opacity='0.7';
			me._kof_i.style.visibility=me._kof_i.ggVisible?'inherit':'hidden';
		}
		this._kof_t=document.createElement('div');
		this._kof_t__text=document.createElement('div');
		this._kof_t.className='ggskin ggskin_textdiv';
		this._kof_t.ggTextDiv=this._kof_t__text;
		this._kof_t.ggId="kof_t";
		this._kof_t.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._kof_t.ggVisible=true;
		this._kof_t.className='ggskin ggskin_text';
		this._kof_t.ggType='text';
		this._kof_t.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-60 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-18 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  -18px;';
		hs+='width: 118px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._kof_t.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 118px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._kof_t__text.setAttribute('style',hs);
		this._kof_t__text.innerHTML="\u041a\u043e\u0444\u0435\u0439\u043d\u044f";
		this._kof_t.appendChild(this._kof_t__text);
		this._kof.appendChild(this._kof_t);
		this._kof_i=document.createElement('div');
		this._kof_i.ggId="kof_i";
		this._kof_i.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._kof_i.ggVisible=true;
		this._kof_i.className='ggskin ggskin_image';
		this._kof_i.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.7;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._kof_i.setAttribute('style',hs);
		this._kof_i__img=document.createElement('img');
		this._kof_i__img.className='ggskin ggskin_image';
		this._kof_i__img.setAttribute('src',basePath + 'images/kof_i.png');
		this._kof_i__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._kof_i__img.className='ggskin ggskin_image';
		this._kof_i__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._kof_i__img);
		this._kof_i.appendChild(this._kof_i__img);
		this._kof.appendChild(this._kof_i);
		this._container_1.appendChild(this._kof);
		this.divSkin.appendChild(this._container_1);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		this._title.ggUpdateText();
		this._description.ggUpdateText();
		this._author.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='exit') {
			this.__div=document.createElement('div');
			this.__div.ggId="exit";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 186px;';
			hs+='top:  115px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext7.style[domTransition]='none';
				me._hstext7.style.visibility='inherit';
				me._hstext7.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext7.style[domTransition]='none';
				me._hstext7.style.visibility='hidden';
				me._hstext7.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage10=document.createElement('div');
			this._hsimage10.ggId="hsimage";
			this._hsimage10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage10.ggVisible=true;
			this._hsimage10.className='ggskin ggskin_image';
			this._hsimage10.ggType='image';
			hs ='position:absolute;';
			hs+='left: -85px;';
			hs+='top:  -77px;';
			hs+='width: 170px;';
			hs+='height: 170px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage10.setAttribute('style',hs);
			this._hsimage10__img=document.createElement('img');
			this._hsimage10__img.className='ggskin ggskin_image';
			this._hsimage10__img.setAttribute('src',basePath + 'images/hsimage10.png');
			this._hsimage10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage10__img.className='ggskin ggskin_image';
			this._hsimage10__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage10__img);
			this._hsimage10.appendChild(this._hsimage10__img);
			this.__div.appendChild(this._hsimage10);
			this._hstext7=document.createElement('div');
			this._hstext7__text=document.createElement('div');
			this._hstext7.className='ggskin ggskin_textdiv';
			this._hstext7.ggTextDiv=this._hstext7__text;
			this._hstext7.ggId="hstext";
			this._hstext7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext7.ggVisible=false;
			this._hstext7.className='ggskin ggskin_text';
			this._hstext7.ggType='text';
			this._hstext7.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -41px;';
			hs+='top:  96px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext7.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext7__text.setAttribute('style',hs);
			this._hstext7__text.innerHTML=me.hotspot.title;
			this._hstext7.appendChild(this._hstext7__text);
			this.__div.appendChild(this._hstext7);
		} else
		if (hotspot.skinid=='10') {
			this.__div=document.createElement('div');
			this.__div.ggId="10";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  110px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._infobg.style[domTransition]='none';
				me._infobg.style.visibility='inherit';
				me._infobg.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._infobg.style[domTransition]='none';
				me._infobg.style.visibility='hidden';
				me._infobg.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage9=document.createElement('div');
			this._hsimage9.ggId="hsimage";
			this._hsimage9.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
			this._hsimage9.ggVisible=true;
			this._hsimage9.className='ggskin ggskin_image';
			this._hsimage9.ggType='image';
			hs ='position:absolute;';
			hs+='left: -84px;';
			hs+='top:  -70px;';
			hs+='width: 170px;';
			hs+='height: 170px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._hsimage9.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._hsimage9.setAttribute('style',hs);
			this._hsimage9__img=document.createElement('img');
			this._hsimage9__img.className='ggskin ggskin_image';
			this._hsimage9__img.setAttribute('src',basePath + 'images/hsimage9.png');
			this._hsimage9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage9__img.className='ggskin ggskin_image';
			this._hsimage9__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage9__img);
			this._hsimage9.appendChild(this._hsimage9__img);
			this.__div.appendChild(this._hsimage9);
			this._hstext6=document.createElement('div');
			this._hstext6__text=document.createElement('div');
			this._hstext6.className='ggskin ggskin_textdiv';
			this._hstext6.ggTextDiv=this._hstext6__text;
			this._hstext6.ggId="hstext";
			this._hstext6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext6.ggVisible=false;
			this._hstext6.className='ggskin ggskin_text';
			this._hstext6.ggType='text';
			this._hstext6.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -47px;';
			hs+='top:  58px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext6.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext6__text.setAttribute('style',hs);
			this._hstext6__text.innerHTML=me.hotspot.title;
			this._hstext6.appendChild(this._hstext6__text);
			this.__div.appendChild(this._hstext6);
			this._infobg=document.createElement('div');
			this._infobg.ggId="infobg";
			this._infobg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._infobg.ggVisible=false;
			this._infobg.className='ggskin ggskin_rectangle';
			this._infobg.ggType='rectangle';
			hs ='position:absolute;';
			hs+='left: -112px;';
			hs+='top:  56px;';
			hs+='width: 240px;';
			hs+='height: 57px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.5;';
			hs+='visibility: hidden;';
			hs+='background: #000000;';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 10px;';
			hs+=cssPrefix + 'border-radius: 10px;';
			this._infobg.setAttribute('style',hs);
			this._infobrd=document.createElement('div');
			this._infobrd.ggId="infobrd";
			this._infobrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._infobrd.ggVisible=true;
			this._infobrd.className='ggskin ggskin_rectangle';
			this._infobrd.ggType='rectangle';
			hs ='position:absolute;';
			hs+='left: -1px;';
			hs+='top:  -1px;';
			hs+='width: 238px;';
			hs+='height: 55px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.5;';
			hs+='visibility: inherit;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 10px;';
			hs+=cssPrefix + 'border-radius: 10px;';
			this._infobrd.setAttribute('style',hs);
			this._infobg.appendChild(this._infobrd);
			this._author0=document.createElement('div');
			this._author0__text=document.createElement('div');
			this._author0.className='ggskin ggskin_textdiv';
			this._author0.ggTextDiv=this._author0__text;
			this._author0.ggId="author";
			this._author0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._author0.ggVisible=true;
			this._author0.className='ggskin ggskin_text';
			this._author0.ggType='text';
			hs ='position:absolute;';
			hs+='left: 10px;';
			hs+='top:  9px;';
			hs+='width: 218px;';
			hs+='height: 59px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._author0.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 218px;';
			hs+='height: 59px;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._author0__text.setAttribute('style',hs);
			this._author0__text.innerHTML=me.hotspot.title;
			this._author0.appendChild(this._author0__text);
			this._infobg.appendChild(this._author0);
			this.__div.appendChild(this._infobg);
		} else
		if (hotspot.skinid=='09') {
			this.__div=document.createElement('div');
			this.__div.ggId="09";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 203px;';
			hs+='top:  132px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext5.style[domTransition]='none';
				me._hstext5.style.visibility='inherit';
				me._hstext5.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext5.style[domTransition]='none';
				me._hstext5.style.visibility='hidden';
				me._hstext5.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage8=document.createElement('div');
			this._hsimage8.ggId="hsimage";
			this._hsimage8.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
			this._hsimage8.ggVisible=true;
			this._hsimage8.className='ggskin ggskin_image';
			this._hsimage8.ggType='image';
			hs ='position:absolute;';
			hs+='left: -47px;';
			hs+='top:  -25px;';
			hs+='width: 170px;';
			hs+='height: 145px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._hsimage8.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage8.setAttribute('style',hs);
			this._hsimage8__img=document.createElement('img');
			this._hsimage8__img.className='ggskin ggskin_image';
			this._hsimage8__img.setAttribute('src',basePath + 'images/hsimage8.png');
			this._hsimage8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage8__img.className='ggskin ggskin_image';
			this._hsimage8__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage8__img);
			this._hsimage8.appendChild(this._hsimage8__img);
			this.__div.appendChild(this._hsimage8);
			this._hstext5=document.createElement('div');
			this._hstext5__text=document.createElement('div');
			this._hstext5.className='ggskin ggskin_textdiv';
			this._hstext5.ggTextDiv=this._hstext5__text;
			this._hstext5.ggId="hstext";
			this._hstext5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext5.ggVisible=false;
			this._hstext5.className='ggskin ggskin_text';
			this._hstext5.ggType='text';
			this._hstext5.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -52px;';
			hs+='top:  -31px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext5.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext5__text.setAttribute('style',hs);
			this._hstext5__text.innerHTML=me.hotspot.title;
			this._hstext5.appendChild(this._hstext5__text);
			this.__div.appendChild(this._hstext5);
		} else
		if (hotspot.skinid=='08') {
			this.__div=document.createElement('div');
			this.__div.ggId="08";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 203px;';
			hs+='top:  132px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext4.style[domTransition]='none';
				me._hstext4.style.visibility='inherit';
				me._hstext4.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext4.style[domTransition]='none';
				me._hstext4.style.visibility='hidden';
				me._hstext4.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage7=document.createElement('div');
			this._hsimage7.ggId="hsimage";
			this._hsimage7.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
			this._hsimage7.ggVisible=true;
			this._hsimage7.className='ggskin ggskin_image';
			this._hsimage7.ggType='image';
			hs ='position:absolute;';
			hs+='left: -127px;';
			hs+='top:  -26px;';
			hs+='width: 170px;';
			hs+='height: 145px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._hsimage7.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage7.setAttribute('style',hs);
			this._hsimage7__img=document.createElement('img');
			this._hsimage7__img.className='ggskin ggskin_image';
			this._hsimage7__img.setAttribute('src',basePath + 'images/hsimage7.png');
			this._hsimage7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage7__img.className='ggskin ggskin_image';
			this._hsimage7__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage7__img);
			this._hsimage7.appendChild(this._hsimage7__img);
			this.__div.appendChild(this._hsimage7);
			this._hstext4=document.createElement('div');
			this._hstext4__text=document.createElement('div');
			this._hstext4.className='ggskin ggskin_textdiv';
			this._hstext4.ggTextDiv=this._hstext4__text;
			this._hstext4.ggId="hstext";
			this._hstext4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext4.ggVisible=false;
			this._hstext4.className='ggskin ggskin_text';
			this._hstext4.ggType='text';
			this._hstext4.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -50px;';
			hs+='top:  -35px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext4.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext4__text.setAttribute('style',hs);
			this._hstext4__text.innerHTML=me.hotspot.title;
			this._hstext4.appendChild(this._hstext4__text);
			this.__div.appendChild(this._hstext4);
		} else
		if (hotspot.skinid=='07') {
			this.__div=document.createElement('div');
			this.__div.ggId="07";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 203px;';
			hs+='top:  132px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext3.style[domTransition]='none';
				me._hstext3.style.visibility='inherit';
				me._hstext3.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext3.style[domTransition]='none';
				me._hstext3.style.visibility='hidden';
				me._hstext3.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage6=document.createElement('div');
			this._hsimage6.ggId="hsimage";
			this._hsimage6.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
			this._hsimage6.ggVisible=true;
			this._hsimage6.className='ggskin ggskin_image';
			this._hsimage6.ggType='image';
			hs ='position:absolute;';
			hs+='left: -139px;';
			hs+='top:  -118px;';
			hs+='width: 170px;';
			hs+='height: 170px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._hsimage6.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage6.setAttribute('style',hs);
			this._hsimage6__img=document.createElement('img');
			this._hsimage6__img.className='ggskin ggskin_image';
			this._hsimage6__img.setAttribute('src',basePath + 'images/hsimage6.png');
			this._hsimage6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage6__img.className='ggskin ggskin_image';
			this._hsimage6__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage6__img);
			this._hsimage6.appendChild(this._hsimage6__img);
			this.__div.appendChild(this._hsimage6);
			this._hstext3=document.createElement('div');
			this._hstext3__text=document.createElement('div');
			this._hstext3.className='ggskin ggskin_textdiv';
			this._hstext3.ggTextDiv=this._hstext3__text;
			this._hstext3.ggId="hstext";
			this._hstext3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext3.ggVisible=false;
			this._hstext3.className='ggskin ggskin_text';
			this._hstext3.ggType='text';
			this._hstext3.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -51px;';
			hs+='top:  -113px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext3.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext3__text.setAttribute('style',hs);
			this._hstext3__text.innerHTML=me.hotspot.title;
			this._hstext3.appendChild(this._hstext3__text);
			this.__div.appendChild(this._hstext3);
		} else
		if (hotspot.skinid=='06') {
			this.__div=document.createElement('div');
			this.__div.ggId="06";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 185px;';
			hs+='top:  134px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext2.style[domTransition]='none';
				me._hstext2.style.visibility='inherit';
				me._hstext2.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext2.style[domTransition]='none';
				me._hstext2.style.visibility='hidden';
				me._hstext2.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage5=document.createElement('div');
			this._hsimage5.ggId="hsimage";
			this._hsimage5.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
			this._hsimage5.ggVisible=true;
			this._hsimage5.className='ggskin ggskin_image';
			this._hsimage5.ggType='image';
			hs ='position:absolute;';
			hs+='left: -30px;';
			hs+='top:  -114px;';
			hs+='width: 170px;';
			hs+='height: 170px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._hsimage5.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage5.setAttribute('style',hs);
			this._hsimage5__img=document.createElement('img');
			this._hsimage5__img.className='ggskin ggskin_image';
			this._hsimage5__img.setAttribute('src',basePath + 'images/hsimage5.png');
			this._hsimage5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage5__img.className='ggskin ggskin_image';
			this._hsimage5__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage5__img);
			this._hsimage5.appendChild(this._hsimage5__img);
			this.__div.appendChild(this._hsimage5);
			this._hstext2=document.createElement('div');
			this._hstext2__text=document.createElement('div');
			this._hstext2.className='ggskin ggskin_textdiv';
			this._hstext2.ggTextDiv=this._hstext2__text;
			this._hstext2.ggId="hstext";
			this._hstext2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext2.ggVisible=false;
			this._hstext2.className='ggskin ggskin_text';
			this._hstext2.ggType='text';
			this._hstext2.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -49px;';
			hs+='top:  -107px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext2.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext2__text.setAttribute('style',hs);
			this._hstext2__text.innerHTML=me.hotspot.title;
			this._hstext2.appendChild(this._hstext2__text);
			this.__div.appendChild(this._hstext2);
		} else
		if (hotspot.skinid=='05') {
			this.__div=document.createElement('div');
			this.__div.ggId="05";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 194px;';
			hs+='top:  102px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext1.style[domTransition]='none';
				me._hstext1.style.visibility='inherit';
				me._hstext1.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext1.style[domTransition]='none';
				me._hstext1.style.visibility='hidden';
				me._hstext1.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage4=document.createElement('div');
			this._hsimage4.ggId="hsimage";
			this._hsimage4.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
			this._hsimage4.ggVisible=true;
			this._hsimage4.className='ggskin ggskin_image';
			this._hsimage4.ggType='image';
			hs ='position:absolute;';
			hs+='left: -132px;';
			hs+='top:  -48px;';
			hs+='width: 170px;';
			hs+='height: 170px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._hsimage4.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage4.setAttribute('style',hs);
			this._hsimage4__img=document.createElement('img');
			this._hsimage4__img.className='ggskin ggskin_image';
			this._hsimage4__img.setAttribute('src',basePath + 'images/hsimage4.png');
			this._hsimage4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage4__img.className='ggskin ggskin_image';
			this._hsimage4__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage4__img);
			this._hsimage4.appendChild(this._hsimage4__img);
			this.__div.appendChild(this._hsimage4);
			this._hstext1=document.createElement('div');
			this._hstext1__text=document.createElement('div');
			this._hstext1.className='ggskin ggskin_textdiv';
			this._hstext1.ggTextDiv=this._hstext1__text;
			this._hstext1.ggId="hstext";
			this._hstext1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext1.ggVisible=false;
			this._hstext1.className='ggskin ggskin_text';
			this._hstext1.ggType='text';
			this._hstext1.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -54px;';
			hs+='top:  -48px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext1.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext1__text.setAttribute('style',hs);
			this._hstext1__text.innerHTML=me.hotspot.title;
			this._hstext1.appendChild(this._hstext1__text);
			this.__div.appendChild(this._hstext1);
		} else
		if (hotspot.skinid=='04') {
			this.__div=document.createElement('div');
			this.__div.ggId="04";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 181px;';
			hs+='top:  107px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext0.style[domTransition]='none';
				me._hstext0.style.visibility='inherit';
				me._hstext0.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext0.style[domTransition]='none';
				me._hstext0.style.visibility='hidden';
				me._hstext0.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage3=document.createElement('div');
			this._hsimage3.ggId="hsimage";
			this._hsimage3.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
			this._hsimage3.ggVisible=true;
			this._hsimage3.className='ggskin ggskin_image';
			this._hsimage3.ggType='image';
			hs ='position:absolute;';
			hs+='left: -31px;';
			hs+='top:  -51px;';
			hs+='width: 170px;';
			hs+='height: 170px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._hsimage3.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage3.setAttribute('style',hs);
			this._hsimage3__img=document.createElement('img');
			this._hsimage3__img.className='ggskin ggskin_image';
			this._hsimage3__img.setAttribute('src',basePath + 'images/hsimage3.png');
			this._hsimage3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage3__img.className='ggskin ggskin_image';
			this._hsimage3__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage3__img);
			this._hsimage3.appendChild(this._hsimage3__img);
			this.__div.appendChild(this._hsimage3);
			this._hstext0=document.createElement('div');
			this._hstext0__text=document.createElement('div');
			this._hstext0.className='ggskin ggskin_textdiv';
			this._hstext0.ggTextDiv=this._hstext0__text;
			this._hstext0.ggId="hstext";
			this._hstext0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext0.ggVisible=false;
			this._hstext0.className='ggskin ggskin_text';
			this._hstext0.ggType='text';
			this._hstext0.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -49px;';
			hs+='top:  -50px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext0.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext0__text.setAttribute('style',hs);
			this._hstext0__text.innerHTML=me.hotspot.title;
			this._hstext0.appendChild(this._hstext0__text);
			this.__div.appendChild(this._hstext0);
		} else
		if (hotspot.skinid=='03') {
			this.__div=document.createElement('div');
			this.__div.ggId="03";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 183px;';
			hs+='top:  113px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin._hstext7.style[domTransition]='none';
				me.skin._hstext7.style.visibility='inherit';
				me.skin._hstext7.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin._hstext7.style[domTransition]='none';
				me.skin._hstext7.style.visibility='hidden';
				me.skin._hstext7.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage2=document.createElement('div');
			this._hsimage2.ggId="hsimage";
			this._hsimage2.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
			this._hsimage2.ggVisible=true;
			this._hsimage2.className='ggskin ggskin_image';
			this._hsimage2.ggType='image';
			hs ='position:absolute;';
			hs+='left: -135px;';
			hs+='top:  -83px;';
			hs+='width: 170px;';
			hs+='height: 170px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._hsimage2.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage2.setAttribute('style',hs);
			this._hsimage2__img=document.createElement('img');
			this._hsimage2__img.className='ggskin ggskin_image';
			this._hsimage2__img.setAttribute('src',basePath + 'images/hsimage2.png');
			this._hsimage2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage2__img.className='ggskin ggskin_image';
			this._hsimage2__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage2__img);
			this._hsimage2.appendChild(this._hsimage2__img);
			this.__div.appendChild(this._hsimage2);
		} else
		if (hotspot.skinid=='02') {
			this.__div=document.createElement('div');
			this.__div.ggId="02";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 182px;';
			hs+='top:  117px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin._hstext7.style[domTransition]='none';
				me.skin._hstext7.style.visibility='inherit';
				me.skin._hstext7.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin._hstext7.style[domTransition]='none';
				me.skin._hstext7.style.visibility='hidden';
				me.skin._hstext7.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage1=document.createElement('div');
			this._hsimage1.ggId="hsimage";
			this._hsimage1.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
			this._hsimage1.ggVisible=true;
			this._hsimage1.className='ggskin ggskin_image';
			this._hsimage1.ggType='image';
			hs ='position:absolute;';
			hs+='left: -34px;';
			hs+='top:  -82px;';
			hs+='width: 170px;';
			hs+='height: 170px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._hsimage1.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage1.setAttribute('style',hs);
			this._hsimage1__img=document.createElement('img');
			this._hsimage1__img.className='ggskin ggskin_image';
			this._hsimage1__img.setAttribute('src',basePath + 'images/hsimage1.png');
			this._hsimage1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage1__img.className='ggskin ggskin_image';
			this._hsimage1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage1__img);
			this._hsimage1.appendChild(this._hsimage1__img);
			this.__div.appendChild(this._hsimage1);
		} else
		if (hotspot.skinid=='022') {
			this.__div=document.createElement('div');
			this.__div.ggId="022";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 181px;';
			hs+='top:  55px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin._hstext7.style[domTransition]='none';
				me.skin._hstext7.style.visibility='inherit';
				me.skin._hstext7.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin._hstext7.style[domTransition]='none';
				me.skin._hstext7.style.visibility='hidden';
				me.skin._hstext7.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_4=document.createElement('div');
			this._image_4.ggId="Image 4";
			this._image_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_4.ggVisible=true;
			this._image_4.className='ggskin ggskin_image';
			this._image_4.ggType='image';
			hs ='position:absolute;';
			hs+='left: -48px;';
			hs+='top:  -25px;';
			hs+='width: 170px;';
			hs+='height: 145px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._image_4.setAttribute('style',hs);
			this._image_4__img=document.createElement('img');
			this._image_4__img.className='ggskin ggskin_image';
			this._image_4__img.setAttribute('src',basePath + 'images/image_4.png');
			this._image_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_4__img.className='ggskin ggskin_image';
			this._image_4__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_4__img);
			this._image_4.appendChild(this._image_4__img);
			this.__div.appendChild(this._image_4);
		} else
		if (hotspot.skinid=='011') {
			this.__div=document.createElement('div');
			this.__div.ggId="011";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 181px;';
			hs+='top:  55px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin._hstext7.style[domTransition]='none';
				me.skin._hstext7.style.visibility='inherit';
				me.skin._hstext7.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin._hstext7.style[domTransition]='none';
				me.skin._hstext7.style.visibility='hidden';
				me.skin._hstext7.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_3=document.createElement('div');
			this._image_3.ggId="Image 3";
			this._image_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_3.ggVisible=true;
			this._image_3.className='ggskin ggskin_image';
			this._image_3.ggType='image';
			hs ='position:absolute;';
			hs+='left: -126px;';
			hs+='top:  -26px;';
			hs+='width: 170px;';
			hs+='height: 145px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._image_3.setAttribute('style',hs);
			this._image_3__img=document.createElement('img');
			this._image_3__img.className='ggskin ggskin_image';
			this._image_3__img.setAttribute('src',basePath + 'images/image_3.png');
			this._image_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_3__img.className='ggskin ggskin_image';
			this._image_3__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_3__img);
			this._image_3.appendChild(this._image_3__img);
			this.__div.appendChild(this._image_3);
		} else
		if (hotspot.skinid=='01') {
			this.__div=document.createElement('div');
			this.__div.ggId="01";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 181px;';
			hs+='top:  55px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin._hstext7.style[domTransition]='none';
				me.skin._hstext7.style.visibility='inherit';
				me.skin._hstext7.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin._hstext7.style[domTransition]='none';
				me.skin._hstext7.style.visibility='hidden';
				me.skin._hstext7.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage0=document.createElement('div');
			this._hsimage0.ggId="hsimage";
			this._hsimage0.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
			this._hsimage0.ggVisible=true;
			this._hsimage0.className='ggskin ggskin_image';
			this._hsimage0.ggType='image';
			hs ='position:absolute;';
			hs+='left: -86px;';
			hs+='top:  -14px;';
			hs+='width: 170px;';
			hs+='height: 145px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._hsimage0.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage0.setAttribute('style',hs);
			this._hsimage0__img=document.createElement('img');
			this._hsimage0__img.className='ggskin ggskin_image';
			this._hsimage0__img.setAttribute('src',basePath + 'images/hsimage0.png');
			this._hsimage0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage0__img.className='ggskin ggskin_image';
			this._hsimage0__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage0__img);
			this._hsimage0.appendChild(this._hsimage0__img);
			this.__div.appendChild(this._hsimage0);
		} else
		if (hotspot.skinid=='010') {
			this.__div=document.createElement('div');
			this.__div.ggId="010";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 181px;';
			hs+='top:  55px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage=document.createElement('div');
			this._hsimage.ggId="hsimage";
			this._hsimage.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
			this._hsimage.ggVisible=true;
			this._hsimage.className='ggskin ggskin_image';
			this._hsimage.ggType='image';
			hs ='position:absolute;';
			hs+='left: -86px;';
			hs+='top:  -14px;';
			hs+='width: 170px;';
			hs+='height: 145px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._hsimage.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.className='ggskin ggskin_image';
			this._hsimage__img.setAttribute('src',basePath + 'images/hsimage.png');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage__img.className='ggskin ggskin_image';
			this._hsimage__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage__img);
			this._hsimage.appendChild(this._hsimage__img);
			this.__div.appendChild(this._hsimage);
			this._hstext=document.createElement('div');
			this._hstext__text=document.createElement('div');
			this._hstext.className='ggskin ggskin_textdiv';
			this._hstext.ggTextDiv=this._hstext__text;
			this._hstext.ggId="hstext";
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.className='ggskin ggskin_text';
			this._hstext.ggType='text';
			this._hstext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -50px;';
			hs+='top:  -24px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext__text.setAttribute('style',hs);
			this._hstext__text.innerHTML=me.hotspot.title;
			this._hstext.appendChild(this._hstext__text);
			this.__div.appendChild(this._hstext);
		} else
		if (hotspot.skinid=='n1') {
			this.__div=document.createElement('div');
			this.__div.ggId="n1";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_156=document.createElement('div');
			this._text_156__text=document.createElement('div');
			this._text_156.className='ggskin ggskin_textdiv';
			this._text_156.ggTextDiv=this._text_156__text;
			this._text_156.ggId="Text 1";
			this._text_156.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_156.ggVisible=true;
			this._text_156.className='ggskin ggskin_text';
			this._text_156.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_156.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_156.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_156__text.setAttribute('style',hs);
			this._text_156__text.innerHTML="1";
			this._text_156.appendChild(this._text_156__text);
			this.__div.appendChild(this._text_156);
		} else
		if (hotspot.skinid=='n1.1') {
			this.__div=document.createElement('div');
			this.__div.ggId="n1.1";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_155=document.createElement('div');
			this._text_155__text=document.createElement('div');
			this._text_155.className='ggskin ggskin_textdiv';
			this._text_155.ggTextDiv=this._text_155__text;
			this._text_155.ggId="Text 1";
			this._text_155.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_155.ggVisible=true;
			this._text_155.className='ggskin ggskin_text';
			this._text_155.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_155.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_155.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_155__text.setAttribute('style',hs);
			this._text_155__text.innerHTML="1.1";
			this._text_155.appendChild(this._text_155__text);
			this.__div.appendChild(this._text_155);
		} else
		if (hotspot.skinid=='n1.2') {
			this.__div=document.createElement('div');
			this.__div.ggId="n1.2";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_154=document.createElement('div');
			this._text_154__text=document.createElement('div');
			this._text_154.className='ggskin ggskin_textdiv';
			this._text_154.ggTextDiv=this._text_154__text;
			this._text_154.ggId="Text 1";
			this._text_154.ggParameter={ rx:0,ry:0,a:0,sx:2,sy:2 };
			this._text_154.ggVisible=true;
			this._text_154.className='ggskin ggskin_text';
			this._text_154.ggType='text';
			hs ='position:absolute;';
			hs+='left: -23px;';
			hs+='top:  -27px;';
			hs+='width: 37px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_154.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_154.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 37px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_154__text.setAttribute('style',hs);
			this._text_154__text.innerHTML="1.2";
			this._text_154.appendChild(this._text_154__text);
			this.__div.appendChild(this._text_154);
		} else
		if (hotspot.skinid=='n1.3') {
			this.__div=document.createElement('div');
			this.__div.ggId="n1.3";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_153=document.createElement('div');
			this._text_153__text=document.createElement('div');
			this._text_153.className='ggskin ggskin_textdiv';
			this._text_153.ggTextDiv=this._text_153__text;
			this._text_153.ggId="Text 1";
			this._text_153.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_153.ggVisible=true;
			this._text_153.className='ggskin ggskin_text';
			this._text_153.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_153.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_153.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_153__text.setAttribute('style',hs);
			this._text_153__text.innerHTML="1.3";
			this._text_153.appendChild(this._text_153__text);
			this.__div.appendChild(this._text_153);
		} else
		if (hotspot.skinid=='n2') {
			this.__div=document.createElement('div');
			this.__div.ggId="n2";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_152=document.createElement('div');
			this._text_152__text=document.createElement('div');
			this._text_152.className='ggskin ggskin_textdiv';
			this._text_152.ggTextDiv=this._text_152__text;
			this._text_152.ggId="Text 1";
			this._text_152.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_152.ggVisible=true;
			this._text_152.className='ggskin ggskin_text';
			this._text_152.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_152.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_152.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_152__text.setAttribute('style',hs);
			this._text_152__text.innerHTML="2";
			this._text_152.appendChild(this._text_152__text);
			this.__div.appendChild(this._text_152);
		} else
		if (hotspot.skinid=='n3') {
			this.__div=document.createElement('div');
			this.__div.ggId="n3";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_151=document.createElement('div');
			this._text_151__text=document.createElement('div');
			this._text_151.className='ggskin ggskin_textdiv';
			this._text_151.ggTextDiv=this._text_151__text;
			this._text_151.ggId="Text 1";
			this._text_151.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_151.ggVisible=true;
			this._text_151.className='ggskin ggskin_text';
			this._text_151.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_151.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_151.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_151__text.setAttribute('style',hs);
			this._text_151__text.innerHTML="3";
			this._text_151.appendChild(this._text_151__text);
			this.__div.appendChild(this._text_151);
		} else
		if (hotspot.skinid=='n4') {
			this.__div=document.createElement('div');
			this.__div.ggId="n4";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_150=document.createElement('div');
			this._text_150__text=document.createElement('div');
			this._text_150.className='ggskin ggskin_textdiv';
			this._text_150.ggTextDiv=this._text_150__text;
			this._text_150.ggId="Text 1";
			this._text_150.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_150.ggVisible=true;
			this._text_150.className='ggskin ggskin_text';
			this._text_150.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_150.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_150.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_150__text.setAttribute('style',hs);
			this._text_150__text.innerHTML="4";
			this._text_150.appendChild(this._text_150__text);
			this.__div.appendChild(this._text_150);
		} else
		if (hotspot.skinid=='n5') {
			this.__div=document.createElement('div');
			this.__div.ggId="n5";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_149=document.createElement('div');
			this._text_149__text=document.createElement('div');
			this._text_149.className='ggskin ggskin_textdiv';
			this._text_149.ggTextDiv=this._text_149__text;
			this._text_149.ggId="Text 1";
			this._text_149.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_149.ggVisible=true;
			this._text_149.className='ggskin ggskin_text';
			this._text_149.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_149.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_149.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_149__text.setAttribute('style',hs);
			this._text_149__text.innerHTML="5";
			this._text_149.appendChild(this._text_149__text);
			this.__div.appendChild(this._text_149);
		} else
		if (hotspot.skinid=='n6') {
			this.__div=document.createElement('div');
			this.__div.ggId="n6";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_148=document.createElement('div');
			this._text_148__text=document.createElement('div');
			this._text_148.className='ggskin ggskin_textdiv';
			this._text_148.ggTextDiv=this._text_148__text;
			this._text_148.ggId="Text 1";
			this._text_148.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_148.ggVisible=true;
			this._text_148.className='ggskin ggskin_text';
			this._text_148.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_148.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_148.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_148__text.setAttribute('style',hs);
			this._text_148__text.innerHTML="6";
			this._text_148.appendChild(this._text_148__text);
			this.__div.appendChild(this._text_148);
		} else
		if (hotspot.skinid=='n7') {
			this.__div=document.createElement('div');
			this.__div.ggId="n7";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_147=document.createElement('div');
			this._text_147__text=document.createElement('div');
			this._text_147.className='ggskin ggskin_textdiv';
			this._text_147.ggTextDiv=this._text_147__text;
			this._text_147.ggId="Text 1";
			this._text_147.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_147.ggVisible=true;
			this._text_147.className='ggskin ggskin_text';
			this._text_147.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_147.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_147.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_147__text.setAttribute('style',hs);
			this._text_147__text.innerHTML="7";
			this._text_147.appendChild(this._text_147__text);
			this.__div.appendChild(this._text_147);
		} else
		if (hotspot.skinid=='n8') {
			this.__div=document.createElement('div');
			this.__div.ggId="n8";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_146=document.createElement('div');
			this._text_146__text=document.createElement('div');
			this._text_146.className='ggskin ggskin_textdiv';
			this._text_146.ggTextDiv=this._text_146__text;
			this._text_146.ggId="Text 1";
			this._text_146.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_146.ggVisible=true;
			this._text_146.className='ggskin ggskin_text';
			this._text_146.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_146.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_146.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_146__text.setAttribute('style',hs);
			this._text_146__text.innerHTML="8";
			this._text_146.appendChild(this._text_146__text);
			this.__div.appendChild(this._text_146);
		} else
		if (hotspot.skinid=='n9') {
			this.__div=document.createElement('div');
			this.__div.ggId="n9";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_145=document.createElement('div');
			this._text_145__text=document.createElement('div');
			this._text_145.className='ggskin ggskin_textdiv';
			this._text_145.ggTextDiv=this._text_145__text;
			this._text_145.ggId="Text 1";
			this._text_145.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_145.ggVisible=true;
			this._text_145.className='ggskin ggskin_text';
			this._text_145.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_145.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_145.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_145__text.setAttribute('style',hs);
			this._text_145__text.innerHTML="9";
			this._text_145.appendChild(this._text_145__text);
			this.__div.appendChild(this._text_145);
		} else
		if (hotspot.skinid=='n10') {
			this.__div=document.createElement('div');
			this.__div.ggId="n10";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_144=document.createElement('div');
			this._text_144__text=document.createElement('div');
			this._text_144.className='ggskin ggskin_textdiv';
			this._text_144.ggTextDiv=this._text_144__text;
			this._text_144.ggId="Text 1";
			this._text_144.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_144.ggVisible=true;
			this._text_144.className='ggskin ggskin_text';
			this._text_144.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_144.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_144.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_144__text.setAttribute('style',hs);
			this._text_144__text.innerHTML="10";
			this._text_144.appendChild(this._text_144__text);
			this.__div.appendChild(this._text_144);
		} else
		if (hotspot.skinid=='n11') {
			this.__div=document.createElement('div');
			this.__div.ggId="n11";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_143=document.createElement('div');
			this._text_143__text=document.createElement('div');
			this._text_143.className='ggskin ggskin_textdiv';
			this._text_143.ggTextDiv=this._text_143__text;
			this._text_143.ggId="Text 1";
			this._text_143.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_143.ggVisible=true;
			this._text_143.className='ggskin ggskin_text';
			this._text_143.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_143.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_143.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_143__text.setAttribute('style',hs);
			this._text_143__text.innerHTML="11";
			this._text_143.appendChild(this._text_143__text);
			this.__div.appendChild(this._text_143);
		} else
		if (hotspot.skinid=='n12') {
			this.__div=document.createElement('div');
			this.__div.ggId="n12";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_142=document.createElement('div');
			this._text_142__text=document.createElement('div');
			this._text_142.className='ggskin ggskin_textdiv';
			this._text_142.ggTextDiv=this._text_142__text;
			this._text_142.ggId="Text 1";
			this._text_142.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_142.ggVisible=true;
			this._text_142.className='ggskin ggskin_text';
			this._text_142.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_142.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_142.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_142__text.setAttribute('style',hs);
			this._text_142__text.innerHTML="12";
			this._text_142.appendChild(this._text_142__text);
			this.__div.appendChild(this._text_142);
		} else
		if (hotspot.skinid=='n13') {
			this.__div=document.createElement('div');
			this.__div.ggId="n13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_141=document.createElement('div');
			this._text_141__text=document.createElement('div');
			this._text_141.className='ggskin ggskin_textdiv';
			this._text_141.ggTextDiv=this._text_141__text;
			this._text_141.ggId="Text 1";
			this._text_141.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_141.ggVisible=true;
			this._text_141.className='ggskin ggskin_text';
			this._text_141.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_141.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_141.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_141__text.setAttribute('style',hs);
			this._text_141__text.innerHTML="13";
			this._text_141.appendChild(this._text_141__text);
			this.__div.appendChild(this._text_141);
		} else
		if (hotspot.skinid=='n14') {
			this.__div=document.createElement('div');
			this.__div.ggId="n14";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_140=document.createElement('div');
			this._text_140__text=document.createElement('div');
			this._text_140.className='ggskin ggskin_textdiv';
			this._text_140.ggTextDiv=this._text_140__text;
			this._text_140.ggId="Text 1";
			this._text_140.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_140.ggVisible=true;
			this._text_140.className='ggskin ggskin_text';
			this._text_140.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_140.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_140.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_140__text.setAttribute('style',hs);
			this._text_140__text.innerHTML="14";
			this._text_140.appendChild(this._text_140__text);
			this.__div.appendChild(this._text_140);
		} else
		if (hotspot.skinid=='n15') {
			this.__div=document.createElement('div');
			this.__div.ggId="n15";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_139=document.createElement('div');
			this._text_139__text=document.createElement('div');
			this._text_139.className='ggskin ggskin_textdiv';
			this._text_139.ggTextDiv=this._text_139__text;
			this._text_139.ggId="Text 1";
			this._text_139.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_139.ggVisible=true;
			this._text_139.className='ggskin ggskin_text';
			this._text_139.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_139.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_139.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_139__text.setAttribute('style',hs);
			this._text_139__text.innerHTML="15";
			this._text_139.appendChild(this._text_139__text);
			this.__div.appendChild(this._text_139);
		} else
		if (hotspot.skinid=='n16') {
			this.__div=document.createElement('div');
			this.__div.ggId="n16";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_138=document.createElement('div');
			this._text_138__text=document.createElement('div');
			this._text_138.className='ggskin ggskin_textdiv';
			this._text_138.ggTextDiv=this._text_138__text;
			this._text_138.ggId="Text 1";
			this._text_138.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_138.ggVisible=true;
			this._text_138.className='ggskin ggskin_text';
			this._text_138.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_138.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_138.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_138__text.setAttribute('style',hs);
			this._text_138__text.innerHTML="16";
			this._text_138.appendChild(this._text_138__text);
			this.__div.appendChild(this._text_138);
		} else
		if (hotspot.skinid=='n17') {
			this.__div=document.createElement('div');
			this.__div.ggId="n17";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_137=document.createElement('div');
			this._text_137__text=document.createElement('div');
			this._text_137.className='ggskin ggskin_textdiv';
			this._text_137.ggTextDiv=this._text_137__text;
			this._text_137.ggId="Text 1";
			this._text_137.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_137.ggVisible=true;
			this._text_137.className='ggskin ggskin_text';
			this._text_137.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_137.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_137.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_137__text.setAttribute('style',hs);
			this._text_137__text.innerHTML="17";
			this._text_137.appendChild(this._text_137__text);
			this.__div.appendChild(this._text_137);
		} else
		if (hotspot.skinid=='n18') {
			this.__div=document.createElement('div');
			this.__div.ggId="n18";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_136=document.createElement('div');
			this._text_136__text=document.createElement('div');
			this._text_136.className='ggskin ggskin_textdiv';
			this._text_136.ggTextDiv=this._text_136__text;
			this._text_136.ggId="Text 1";
			this._text_136.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_136.ggVisible=true;
			this._text_136.className='ggskin ggskin_text';
			this._text_136.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_136.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_136.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_136__text.setAttribute('style',hs);
			this._text_136__text.innerHTML="18";
			this._text_136.appendChild(this._text_136__text);
			this.__div.appendChild(this._text_136);
		} else
		if (hotspot.skinid=='n19') {
			this.__div=document.createElement('div');
			this.__div.ggId="n19";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_135=document.createElement('div');
			this._text_135__text=document.createElement('div');
			this._text_135.className='ggskin ggskin_textdiv';
			this._text_135.ggTextDiv=this._text_135__text;
			this._text_135.ggId="Text 1";
			this._text_135.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_135.ggVisible=true;
			this._text_135.className='ggskin ggskin_text';
			this._text_135.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_135.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_135.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_135__text.setAttribute('style',hs);
			this._text_135__text.innerHTML="19";
			this._text_135.appendChild(this._text_135__text);
			this.__div.appendChild(this._text_135);
		} else
		if (hotspot.skinid=='n20') {
			this.__div=document.createElement('div');
			this.__div.ggId="n20";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_134=document.createElement('div');
			this._text_134__text=document.createElement('div');
			this._text_134.className='ggskin ggskin_textdiv';
			this._text_134.ggTextDiv=this._text_134__text;
			this._text_134.ggId="Text 1";
			this._text_134.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_134.ggVisible=true;
			this._text_134.className='ggskin ggskin_text';
			this._text_134.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_134.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_134.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_134__text.setAttribute('style',hs);
			this._text_134__text.innerHTML="20";
			this._text_134.appendChild(this._text_134__text);
			this.__div.appendChild(this._text_134);
		} else
		if (hotspot.skinid=='n21') {
			this.__div=document.createElement('div');
			this.__div.ggId="n21";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_133=document.createElement('div');
			this._text_133__text=document.createElement('div');
			this._text_133.className='ggskin ggskin_textdiv';
			this._text_133.ggTextDiv=this._text_133__text;
			this._text_133.ggId="Text 1";
			this._text_133.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_133.ggVisible=true;
			this._text_133.className='ggskin ggskin_text';
			this._text_133.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_133.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_133.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_133__text.setAttribute('style',hs);
			this._text_133__text.innerHTML="21";
			this._text_133.appendChild(this._text_133__text);
			this.__div.appendChild(this._text_133);
		} else
		if (hotspot.skinid=='n22') {
			this.__div=document.createElement('div');
			this.__div.ggId="n22";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_132=document.createElement('div');
			this._text_132__text=document.createElement('div');
			this._text_132.className='ggskin ggskin_textdiv';
			this._text_132.ggTextDiv=this._text_132__text;
			this._text_132.ggId="Text 1";
			this._text_132.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_132.ggVisible=true;
			this._text_132.className='ggskin ggskin_text';
			this._text_132.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_132.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_132.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_132__text.setAttribute('style',hs);
			this._text_132__text.innerHTML="22";
			this._text_132.appendChild(this._text_132__text);
			this.__div.appendChild(this._text_132);
		} else
		if (hotspot.skinid=='n23') {
			this.__div=document.createElement('div');
			this.__div.ggId="n23";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_131=document.createElement('div');
			this._text_131__text=document.createElement('div');
			this._text_131.className='ggskin ggskin_textdiv';
			this._text_131.ggTextDiv=this._text_131__text;
			this._text_131.ggId="Text 1";
			this._text_131.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_131.ggVisible=true;
			this._text_131.className='ggskin ggskin_text';
			this._text_131.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_131.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_131.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_131__text.setAttribute('style',hs);
			this._text_131__text.innerHTML="23";
			this._text_131.appendChild(this._text_131__text);
			this.__div.appendChild(this._text_131);
		} else
		if (hotspot.skinid=='n24') {
			this.__div=document.createElement('div');
			this.__div.ggId="n24";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_130=document.createElement('div');
			this._text_130__text=document.createElement('div');
			this._text_130.className='ggskin ggskin_textdiv';
			this._text_130.ggTextDiv=this._text_130__text;
			this._text_130.ggId="Text 1";
			this._text_130.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_130.ggVisible=true;
			this._text_130.className='ggskin ggskin_text';
			this._text_130.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_130.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_130.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_130__text.setAttribute('style',hs);
			this._text_130__text.innerHTML="24";
			this._text_130.appendChild(this._text_130__text);
			this.__div.appendChild(this._text_130);
		} else
		if (hotspot.skinid=='n25') {
			this.__div=document.createElement('div');
			this.__div.ggId="n25";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_129=document.createElement('div');
			this._text_129__text=document.createElement('div');
			this._text_129.className='ggskin ggskin_textdiv';
			this._text_129.ggTextDiv=this._text_129__text;
			this._text_129.ggId="Text 1";
			this._text_129.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_129.ggVisible=true;
			this._text_129.className='ggskin ggskin_text';
			this._text_129.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_129.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_129.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_129__text.setAttribute('style',hs);
			this._text_129__text.innerHTML="25";
			this._text_129.appendChild(this._text_129__text);
			this.__div.appendChild(this._text_129);
		} else
		if (hotspot.skinid=='n26') {
			this.__div=document.createElement('div');
			this.__div.ggId="n26";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_128=document.createElement('div');
			this._text_128__text=document.createElement('div');
			this._text_128.className='ggskin ggskin_textdiv';
			this._text_128.ggTextDiv=this._text_128__text;
			this._text_128.ggId="Text 1";
			this._text_128.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_128.ggVisible=true;
			this._text_128.className='ggskin ggskin_text';
			this._text_128.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_128.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_128.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_128__text.setAttribute('style',hs);
			this._text_128__text.innerHTML="26";
			this._text_128.appendChild(this._text_128__text);
			this.__div.appendChild(this._text_128);
		} else
		if (hotspot.skinid=='n27') {
			this.__div=document.createElement('div');
			this.__div.ggId="n27";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_127=document.createElement('div');
			this._text_127__text=document.createElement('div');
			this._text_127.className='ggskin ggskin_textdiv';
			this._text_127.ggTextDiv=this._text_127__text;
			this._text_127.ggId="Text 1";
			this._text_127.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_127.ggVisible=true;
			this._text_127.className='ggskin ggskin_text';
			this._text_127.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_127.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_127.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_127__text.setAttribute('style',hs);
			this._text_127__text.innerHTML="27";
			this._text_127.appendChild(this._text_127__text);
			this.__div.appendChild(this._text_127);
		} else
		if (hotspot.skinid=='n28') {
			this.__div=document.createElement('div');
			this.__div.ggId="n28";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_126=document.createElement('div');
			this._text_126__text=document.createElement('div');
			this._text_126.className='ggskin ggskin_textdiv';
			this._text_126.ggTextDiv=this._text_126__text;
			this._text_126.ggId="Text 1";
			this._text_126.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_126.ggVisible=true;
			this._text_126.className='ggskin ggskin_text';
			this._text_126.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_126.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_126.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_126__text.setAttribute('style',hs);
			this._text_126__text.innerHTML="28";
			this._text_126.appendChild(this._text_126__text);
			this.__div.appendChild(this._text_126);
		} else
		if (hotspot.skinid=='n29') {
			this.__div=document.createElement('div');
			this.__div.ggId="n29";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_125=document.createElement('div');
			this._text_125__text=document.createElement('div');
			this._text_125.className='ggskin ggskin_textdiv';
			this._text_125.ggTextDiv=this._text_125__text;
			this._text_125.ggId="Text 1";
			this._text_125.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_125.ggVisible=true;
			this._text_125.className='ggskin ggskin_text';
			this._text_125.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_125.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_125.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_125__text.setAttribute('style',hs);
			this._text_125__text.innerHTML="29";
			this._text_125.appendChild(this._text_125__text);
			this.__div.appendChild(this._text_125);
		} else
		if (hotspot.skinid=='n30') {
			this.__div=document.createElement('div');
			this.__div.ggId="n30";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_124=document.createElement('div');
			this._text_124__text=document.createElement('div');
			this._text_124.className='ggskin ggskin_textdiv';
			this._text_124.ggTextDiv=this._text_124__text;
			this._text_124.ggId="Text 1";
			this._text_124.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_124.ggVisible=true;
			this._text_124.className='ggskin ggskin_text';
			this._text_124.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_124.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_124.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_124__text.setAttribute('style',hs);
			this._text_124__text.innerHTML="30";
			this._text_124.appendChild(this._text_124__text);
			this.__div.appendChild(this._text_124);
		} else
		if (hotspot.skinid=='n31') {
			this.__div=document.createElement('div');
			this.__div.ggId="n31";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_123=document.createElement('div');
			this._text_123__text=document.createElement('div');
			this._text_123.className='ggskin ggskin_textdiv';
			this._text_123.ggTextDiv=this._text_123__text;
			this._text_123.ggId="Text 1";
			this._text_123.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_123.ggVisible=true;
			this._text_123.className='ggskin ggskin_text';
			this._text_123.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_123.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_123.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_123__text.setAttribute('style',hs);
			this._text_123__text.innerHTML="31";
			this._text_123.appendChild(this._text_123__text);
			this.__div.appendChild(this._text_123);
		} else
		if (hotspot.skinid=='n32') {
			this.__div=document.createElement('div');
			this.__div.ggId="n32";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_122=document.createElement('div');
			this._text_122__text=document.createElement('div');
			this._text_122.className='ggskin ggskin_textdiv';
			this._text_122.ggTextDiv=this._text_122__text;
			this._text_122.ggId="Text 1";
			this._text_122.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_122.ggVisible=true;
			this._text_122.className='ggskin ggskin_text';
			this._text_122.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_122.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_122.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_122__text.setAttribute('style',hs);
			this._text_122__text.innerHTML="32";
			this._text_122.appendChild(this._text_122__text);
			this.__div.appendChild(this._text_122);
		} else
		if (hotspot.skinid=='n33') {
			this.__div=document.createElement('div');
			this.__div.ggId="n33";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_121=document.createElement('div');
			this._text_121__text=document.createElement('div');
			this._text_121.className='ggskin ggskin_textdiv';
			this._text_121.ggTextDiv=this._text_121__text;
			this._text_121.ggId="Text 1";
			this._text_121.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_121.ggVisible=true;
			this._text_121.className='ggskin ggskin_text';
			this._text_121.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_121.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_121.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_121__text.setAttribute('style',hs);
			this._text_121__text.innerHTML="33";
			this._text_121.appendChild(this._text_121__text);
			this.__div.appendChild(this._text_121);
		} else
		if (hotspot.skinid=='n34') {
			this.__div=document.createElement('div');
			this.__div.ggId="n34";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_120=document.createElement('div');
			this._text_120__text=document.createElement('div');
			this._text_120.className='ggskin ggskin_textdiv';
			this._text_120.ggTextDiv=this._text_120__text;
			this._text_120.ggId="Text 1";
			this._text_120.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_120.ggVisible=true;
			this._text_120.className='ggskin ggskin_text';
			this._text_120.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_120.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_120.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_120__text.setAttribute('style',hs);
			this._text_120__text.innerHTML="34";
			this._text_120.appendChild(this._text_120__text);
			this.__div.appendChild(this._text_120);
		} else
		if (hotspot.skinid=='n35') {
			this.__div=document.createElement('div');
			this.__div.ggId="n35";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_119=document.createElement('div');
			this._text_119__text=document.createElement('div');
			this._text_119.className='ggskin ggskin_textdiv';
			this._text_119.ggTextDiv=this._text_119__text;
			this._text_119.ggId="Text 1";
			this._text_119.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_119.ggVisible=true;
			this._text_119.className='ggskin ggskin_text';
			this._text_119.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_119.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_119.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_119__text.setAttribute('style',hs);
			this._text_119__text.innerHTML="35";
			this._text_119.appendChild(this._text_119__text);
			this.__div.appendChild(this._text_119);
		} else
		if (hotspot.skinid=='n36') {
			this.__div=document.createElement('div');
			this.__div.ggId="n36";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_118=document.createElement('div');
			this._text_118__text=document.createElement('div');
			this._text_118.className='ggskin ggskin_textdiv';
			this._text_118.ggTextDiv=this._text_118__text;
			this._text_118.ggId="Text 1";
			this._text_118.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_118.ggVisible=true;
			this._text_118.className='ggskin ggskin_text';
			this._text_118.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_118.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_118.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_118__text.setAttribute('style',hs);
			this._text_118__text.innerHTML="36";
			this._text_118.appendChild(this._text_118__text);
			this.__div.appendChild(this._text_118);
		} else
		if (hotspot.skinid=='n37') {
			this.__div=document.createElement('div');
			this.__div.ggId="n37";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_117=document.createElement('div');
			this._text_117__text=document.createElement('div');
			this._text_117.className='ggskin ggskin_textdiv';
			this._text_117.ggTextDiv=this._text_117__text;
			this._text_117.ggId="Text 1";
			this._text_117.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_117.ggVisible=true;
			this._text_117.className='ggskin ggskin_text';
			this._text_117.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_117.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_117.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_117__text.setAttribute('style',hs);
			this._text_117__text.innerHTML="37";
			this._text_117.appendChild(this._text_117__text);
			this.__div.appendChild(this._text_117);
		} else
		if (hotspot.skinid=='n38') {
			this.__div=document.createElement('div');
			this.__div.ggId="n38";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_116=document.createElement('div');
			this._text_116__text=document.createElement('div');
			this._text_116.className='ggskin ggskin_textdiv';
			this._text_116.ggTextDiv=this._text_116__text;
			this._text_116.ggId="Text 1";
			this._text_116.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_116.ggVisible=true;
			this._text_116.className='ggskin ggskin_text';
			this._text_116.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_116.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_116.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_116__text.setAttribute('style',hs);
			this._text_116__text.innerHTML="38";
			this._text_116.appendChild(this._text_116__text);
			this.__div.appendChild(this._text_116);
		} else
		if (hotspot.skinid=='n39') {
			this.__div=document.createElement('div');
			this.__div.ggId="n39";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_115=document.createElement('div');
			this._text_115__text=document.createElement('div');
			this._text_115.className='ggskin ggskin_textdiv';
			this._text_115.ggTextDiv=this._text_115__text;
			this._text_115.ggId="Text 1";
			this._text_115.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_115.ggVisible=true;
			this._text_115.className='ggskin ggskin_text';
			this._text_115.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_115.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_115.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_115__text.setAttribute('style',hs);
			this._text_115__text.innerHTML="39";
			this._text_115.appendChild(this._text_115__text);
			this.__div.appendChild(this._text_115);
		} else
		if (hotspot.skinid=='n40') {
			this.__div=document.createElement('div');
			this.__div.ggId="n40";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_114=document.createElement('div');
			this._text_114__text=document.createElement('div');
			this._text_114.className='ggskin ggskin_textdiv';
			this._text_114.ggTextDiv=this._text_114__text;
			this._text_114.ggId="Text 1";
			this._text_114.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_114.ggVisible=true;
			this._text_114.className='ggskin ggskin_text';
			this._text_114.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_114.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_114.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_114__text.setAttribute('style',hs);
			this._text_114__text.innerHTML="40";
			this._text_114.appendChild(this._text_114__text);
			this.__div.appendChild(this._text_114);
		} else
		if (hotspot.skinid=='n41') {
			this.__div=document.createElement('div');
			this.__div.ggId="n41";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_113=document.createElement('div');
			this._text_113__text=document.createElement('div');
			this._text_113.className='ggskin ggskin_textdiv';
			this._text_113.ggTextDiv=this._text_113__text;
			this._text_113.ggId="Text 1";
			this._text_113.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_113.ggVisible=true;
			this._text_113.className='ggskin ggskin_text';
			this._text_113.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_113.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_113.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_113__text.setAttribute('style',hs);
			this._text_113__text.innerHTML="41";
			this._text_113.appendChild(this._text_113__text);
			this.__div.appendChild(this._text_113);
		} else
		if (hotspot.skinid=='n42') {
			this.__div=document.createElement('div');
			this.__div.ggId="n42";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_112=document.createElement('div');
			this._text_112__text=document.createElement('div');
			this._text_112.className='ggskin ggskin_textdiv';
			this._text_112.ggTextDiv=this._text_112__text;
			this._text_112.ggId="Text 1";
			this._text_112.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_112.ggVisible=true;
			this._text_112.className='ggskin ggskin_text';
			this._text_112.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_112.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_112.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_112__text.setAttribute('style',hs);
			this._text_112__text.innerHTML="42";
			this._text_112.appendChild(this._text_112__text);
			this.__div.appendChild(this._text_112);
		} else
		if (hotspot.skinid=='n43') {
			this.__div=document.createElement('div');
			this.__div.ggId="n43";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_111=document.createElement('div');
			this._text_111__text=document.createElement('div');
			this._text_111.className='ggskin ggskin_textdiv';
			this._text_111.ggTextDiv=this._text_111__text;
			this._text_111.ggId="Text 1";
			this._text_111.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_111.ggVisible=true;
			this._text_111.className='ggskin ggskin_text';
			this._text_111.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_111.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_111.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_111__text.setAttribute('style',hs);
			this._text_111__text.innerHTML="43";
			this._text_111.appendChild(this._text_111__text);
			this.__div.appendChild(this._text_111);
		} else
		if (hotspot.skinid=='n44') {
			this.__div=document.createElement('div');
			this.__div.ggId="n44";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_110=document.createElement('div');
			this._text_110__text=document.createElement('div');
			this._text_110.className='ggskin ggskin_textdiv';
			this._text_110.ggTextDiv=this._text_110__text;
			this._text_110.ggId="Text 1";
			this._text_110.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_110.ggVisible=true;
			this._text_110.className='ggskin ggskin_text';
			this._text_110.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_110.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_110.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_110__text.setAttribute('style',hs);
			this._text_110__text.innerHTML="44";
			this._text_110.appendChild(this._text_110__text);
			this.__div.appendChild(this._text_110);
		} else
		if (hotspot.skinid=='n45') {
			this.__div=document.createElement('div');
			this.__div.ggId="n45";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_19=document.createElement('div');
			this._text_19__text=document.createElement('div');
			this._text_19.className='ggskin ggskin_textdiv';
			this._text_19.ggTextDiv=this._text_19__text;
			this._text_19.ggId="Text 1";
			this._text_19.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_19.ggVisible=true;
			this._text_19.className='ggskin ggskin_text';
			this._text_19.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_19.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_19.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_19__text.setAttribute('style',hs);
			this._text_19__text.innerHTML="45";
			this._text_19.appendChild(this._text_19__text);
			this.__div.appendChild(this._text_19);
		} else
		if (hotspot.skinid=='n46') {
			this.__div=document.createElement('div');
			this.__div.ggId="n46";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_18=document.createElement('div');
			this._text_18__text=document.createElement('div');
			this._text_18.className='ggskin ggskin_textdiv';
			this._text_18.ggTextDiv=this._text_18__text;
			this._text_18.ggId="Text 1";
			this._text_18.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_18.ggVisible=true;
			this._text_18.className='ggskin ggskin_text';
			this._text_18.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_18.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_18.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_18__text.setAttribute('style',hs);
			this._text_18__text.innerHTML="46";
			this._text_18.appendChild(this._text_18__text);
			this.__div.appendChild(this._text_18);
		} else
		if (hotspot.skinid=='n47') {
			this.__div=document.createElement('div');
			this.__div.ggId="n47";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_17=document.createElement('div');
			this._text_17__text=document.createElement('div');
			this._text_17.className='ggskin ggskin_textdiv';
			this._text_17.ggTextDiv=this._text_17__text;
			this._text_17.ggId="Text 1";
			this._text_17.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_17.ggVisible=true;
			this._text_17.className='ggskin ggskin_text';
			this._text_17.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_17.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_17.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_17__text.setAttribute('style',hs);
			this._text_17__text.innerHTML="47";
			this._text_17.appendChild(this._text_17__text);
			this.__div.appendChild(this._text_17);
		} else
		if (hotspot.skinid=='n48') {
			this.__div=document.createElement('div');
			this.__div.ggId="n48";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_16=document.createElement('div');
			this._text_16__text=document.createElement('div');
			this._text_16.className='ggskin ggskin_textdiv';
			this._text_16.ggTextDiv=this._text_16__text;
			this._text_16.ggId="Text 1";
			this._text_16.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_16.ggVisible=true;
			this._text_16.className='ggskin ggskin_text';
			this._text_16.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_16.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_16.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_16__text.setAttribute('style',hs);
			this._text_16__text.innerHTML="48";
			this._text_16.appendChild(this._text_16__text);
			this.__div.appendChild(this._text_16);
		} else
		if (hotspot.skinid=='n49') {
			this.__div=document.createElement('div');
			this.__div.ggId="n49";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_15=document.createElement('div');
			this._text_15__text=document.createElement('div');
			this._text_15.className='ggskin ggskin_textdiv';
			this._text_15.ggTextDiv=this._text_15__text;
			this._text_15.ggId="Text 1";
			this._text_15.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_15.ggVisible=true;
			this._text_15.className='ggskin ggskin_text';
			this._text_15.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_15.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_15.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_15__text.setAttribute('style',hs);
			this._text_15__text.innerHTML="49";
			this._text_15.appendChild(this._text_15__text);
			this.__div.appendChild(this._text_15);
		} else
		if (hotspot.skinid=='n50') {
			this.__div=document.createElement('div');
			this.__div.ggId="n50";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_14=document.createElement('div');
			this._text_14__text=document.createElement('div');
			this._text_14.className='ggskin ggskin_textdiv';
			this._text_14.ggTextDiv=this._text_14__text;
			this._text_14.ggId="Text 1";
			this._text_14.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_14.ggVisible=true;
			this._text_14.className='ggskin ggskin_text';
			this._text_14.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_14.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_14.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_14__text.setAttribute('style',hs);
			this._text_14__text.innerHTML="50";
			this._text_14.appendChild(this._text_14__text);
			this.__div.appendChild(this._text_14);
		} else
		if (hotspot.skinid=='n51') {
			this.__div=document.createElement('div');
			this.__div.ggId="n51";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_13=document.createElement('div');
			this._text_13__text=document.createElement('div');
			this._text_13.className='ggskin ggskin_textdiv';
			this._text_13.ggTextDiv=this._text_13__text;
			this._text_13.ggId="Text 1";
			this._text_13.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_13.ggVisible=true;
			this._text_13.className='ggskin ggskin_text';
			this._text_13.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_13.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_13.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_13__text.setAttribute('style',hs);
			this._text_13__text.innerHTML="51";
			this._text_13.appendChild(this._text_13__text);
			this.__div.appendChild(this._text_13);
		} else
		if (hotspot.skinid=='n52') {
			this.__div=document.createElement('div');
			this.__div.ggId="n52";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_12=document.createElement('div');
			this._text_12__text=document.createElement('div');
			this._text_12.className='ggskin ggskin_textdiv';
			this._text_12.ggTextDiv=this._text_12__text;
			this._text_12.ggId="Text 1";
			this._text_12.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_12.ggVisible=true;
			this._text_12.className='ggskin ggskin_text';
			this._text_12.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_12.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_12.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_12__text.setAttribute('style',hs);
			this._text_12__text.innerHTML="52";
			this._text_12.appendChild(this._text_12__text);
			this.__div.appendChild(this._text_12);
		} else
		if (hotspot.skinid=='n53') {
			this.__div=document.createElement('div');
			this.__div.ggId="n53";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_11=document.createElement('div');
			this._text_11__text=document.createElement('div');
			this._text_11.className='ggskin ggskin_textdiv';
			this._text_11.ggTextDiv=this._text_11__text;
			this._text_11.ggId="Text 1";
			this._text_11.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_11.ggVisible=true;
			this._text_11.className='ggskin ggskin_text';
			this._text_11.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_11.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_11.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_11__text.setAttribute('style',hs);
			this._text_11__text.innerHTML="53";
			this._text_11.appendChild(this._text_11__text);
			this.__div.appendChild(this._text_11);
		} else
		if (hotspot.skinid=='n54') {
			this.__div=document.createElement('div');
			this.__div.ggId="n54";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_10=document.createElement('div');
			this._text_10__text=document.createElement('div');
			this._text_10.className='ggskin ggskin_textdiv';
			this._text_10.ggTextDiv=this._text_10__text;
			this._text_10.ggId="Text 1";
			this._text_10.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_10.ggVisible=true;
			this._text_10.className='ggskin ggskin_text';
			this._text_10.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_10.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_10.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_10__text.setAttribute('style',hs);
			this._text_10__text.innerHTML="54";
			this._text_10.appendChild(this._text_10__text);
			this.__div.appendChild(this._text_10);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="n55";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 187px;';
			hs+='top:  128px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_1=document.createElement('div');
			this._text_1__text=document.createElement('div');
			this._text_1.className='ggskin ggskin_textdiv';
			this._text_1.ggTextDiv=this._text_1__text;
			this._text_1.ggId="Text 1";
			this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._text_1.ggVisible=true;
			this._text_1.className='ggskin ggskin_text';
			this._text_1.ggType='text';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -29px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text_1.ggParameter) + ';';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			this._text_1.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 28px;';
			hs+='height: 19px;';
			hs+='background: #000000;';
			hs+='border: 2px solid #ffffff;';
			hs+='border-radius: 9px;';
			hs+=cssPrefix + 'border-radius: 9px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_1__text.setAttribute('style',hs);
			this._text_1__text.innerHTML="55";
			this._text_1.appendChild(this._text_1__text);
			this.__div.appendChild(this._text_1);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};