(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{21:function(e,t,a){e.exports={Button:"Button_Button__34pNe"}},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(18),i=a.n(r),s=a(9),o=a(4),u=a(5),l=a(7),h=a(6),m=a(19),g=a.n(m),b=a(20),d=a.n(b),j=function(e){var t=e.searchValue,a=void 0===t?"":t,n=e.currentPage,c=void 0===n?1:n,r=e.pageSize,i=void 0===r?12:r;return d.a.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(a,"&page=").concat(c,"&per_page=").concat(i,"&key=20405936-6e55c763eecf497ab63d5a834")).then((function(e){return e.data.hits}))},p=a(0),f=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{value:this.state.inputValue,onChange:this.handleChange,className:"SearchForm-input",type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),O=function(e){var t=e.children;return Object(p.jsx)("ul",{className:"ImageGallery",children:t})},v=function(e){var t=e.images;return Object(p.jsx)(p.Fragment,{children:t.map((function(e){var t=e.id,a=e.webformatURL;return Object(p.jsx)("li",{className:"ImageGalleryItem",children:Object(p.jsx)("img",{src:a,alt:"",className:"ImageGalleryItem-image"})},t)}))})},x=a(21),S=a.n(x),y=function(e){var t=e.fetchImages;return Object(p.jsx)("button",{className:S.a.Button,type:"button",onClick:t,children:"Load more"})},V=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={images:[],currentPage:1,searchValue:"",isLoading:!1},e.onChangeValue=function(t){e.setState({searchValue:t,currentPage:1,images:[]})},e.fetchImages=function(){var t=e.state,a={currentPage:t.currentPage,searchValue:t.searchValue};e.setState({isLoading:!0}),j(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),currentPage:e.currentPage+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchValue!==this.state.searchValue&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading;return Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{onSubmit:this.onChangeValue}),Object(p.jsx)(O,{children:Object(p.jsx)(v,{images:t})}),a&&Object(p.jsx)("div",{className:"Loader",children:Object(p.jsx)(g.a,{type:"Circles",color:"#3f51b5",height:50,width:50,timeout:5e3})}),t.length>0&&!a&&Object(p.jsx)(y,{fetchImages:this.fetchImages})]})}}]),a}(n.Component);a(65),a(66);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(V,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.c0cb604c.chunk.js.map