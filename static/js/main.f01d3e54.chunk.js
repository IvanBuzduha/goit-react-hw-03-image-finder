(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{68:function(t,e,a){},69:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),s=a(11),i=a(4),l=a(5),u=a(7),h=a(6),g=a(20),m=a.n(g),d=function(t,e){return m.a.get("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(e,"&key=").concat("21124678-0d24ae1c4ddebba156f36dfb4","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){if(200===t.status)return t;throw Error("".concat(t.status," ").concat(t.statusText))}))},j=a(21),b=a.n(j),f=(a(65),a(1)),p=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)(b.a,{type:"Bars",color:"#3f51b5",height:80,width:80})}}]),a}(n.Component),y=function(t){var e=t.image,a=t.toggleModal;return Object(f.jsx)("li",{className:"ImageGalleryItem",children:Object(f.jsx)("img",{src:e.webformatURL,alt:e.tags,className:"ImageGalleryItem-image",onClick:function(){a({status:!0,src:e.largeImageURL,alt:e.tags})}})})},v=function(t){var e=t.images,a=t.toggleModal;return Object(f.jsx)("ul",{className:"ImageGallery",children:e.map((function(t){return Object(f.jsx)(y,{image:t,toggleModal:a},t.id)}))})},O=document.querySelector("#modal-root"),S=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).handleKeyDown=function(e){"Escape"!==e.key&&e.target!==e.currentTarget||t.props.toggleModal({status:!1})},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var t=this.props,e=t.src,a=t.alt;return Object(c.createPortal)(Object(f.jsx)("div",{className:"Overlay",onClick:this.handleKeyDown,children:Object(f.jsx)("div",{className:"Modal",children:Object(f.jsx)("img",{src:e,alt:a})})}),O)}}]),a}(n.Component),x=function(t){var e=t.onClick;return Object(f.jsx)("button",{type:"button",className:"Button",onClick:e,children:"Load More"})},w=a(22),k=a(9),M=(a(67),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={imageName:""},t.changeInput=function(e){t.setState({imageName:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.imageName.trim()?(t.props.onSubmit(t.state.imageName),t.setState({imageName:""})):Object(k.b)("Enter your query")},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)(w.a,{})}),Object(f.jsx)("input",{value:this.state.imageName,onChange:this.changeInput,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component)),I=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={images:[],totalHits:0,searchQuery:"",page:1,isLoading:!1,showModal:!1,activeButton:!1,targetImage:null},t.onSubmit=function(e){t.setState({searchQuery:e})},t.onClickLoadMore=function(){t.setState((function(t){return{page:t.page+1}}))},t.checkLoadMore=function(){var e=t.state,a=e.totalHits;a>e.images.length?t.setState({activeButton:!0}):t.setState({activeButton:!1}),a?t.setState({notify:!1}):t.setState({message:"Nothing was found. Try again.",notify:!0})},t.toggleModal=function(e){var a=e.status,n=e.src,o=e.alt;a?t.setState({targetImage:{src:n,alt:o},showModal:!0}):t.setState({targetImage:null,showModal:!1})},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.searchImages()}},{key:"componentDidUpdate",value:function(t,e){var a=this.state,n=a.searchQuery,o=a.page;e.searchQuery!==n&&(this.searchImages(n,1),this.setState({page:1})),e.page!==o&&this.searchImages(n,o)}},{key:"searchImages",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;""!==e?(this.setState({isLoading:!0,notify:!1}),d(e,a).then((function(e){var n=e.data;1===a?t.setState({totalHits:n.totalHits,images:n.hits}):(t.setState((function(t){return{images:[].concat(Object(s.a)(t.images),Object(s.a)(n.hits))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})),t.checkLoadMore()})).catch((function(e){return t.setState({error:e})})).finally((function(){return t.setState({isLoading:!1})}))):this.setState({images:[],activeButton:!1,message:"Please input search request",notify:!0})}},{key:"render",value:function(){var t=this.state,e=t.images,a=t.isLoading,n=t.showModal,o=t.targetImage,c=t.activeButton;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(M,{onSubmit:this.onSubmit}),Object(f.jsx)(k.a,{autoClose:2e3}),a&&Object(f.jsx)(p,{}),e.length>0&&Object(f.jsx)(v,{images:e,toggleModal:this.toggleModal}),n&&Object(f.jsx)(S,{src:o.src,alt:o.alt,toggleModal:this.toggleModal}),c&&Object(f.jsx)(x,{onClick:this.onClickLoadMore})]})}}]),a}(n.Component),N=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(I,{})})};a(68);r.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.f01d3e54.chunk.js.map