(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{159:function(e,a,t){"use strict";t.r(a);var n=t(8),l=t.n(n),r=t(0),s=t.n(r),i=(t(162),function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,l=this.props.data.social.map(function(e){return s.a.createElement("li",{key:e.name},s.a.createElement("a",{href:e.url},s.a.createElement("i",{className:e.className})))});return s.a.createElement("header",{id:"home"},s.a.createElement("nav",{id:"nav-wrap"},s.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),s.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),s.a.createElement("ul",{id:"nav",className:"nav"},s.a.createElement("li",{className:"current"},s.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),s.a.createElement("div",{className:"row banner"},s.a.createElement("div",{className:"banner-text"},s.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),s.a.createElement("h3",null,"I'm a ",n," based ",s.a.createElement("span",null,a),". ",t,"."),s.a.createElement("hr",null),s.a.createElement("ul",{className:"social"},l))),s.a.createElement("p",{className:"scrolldown"},s.a.createElement("a",{className:"smoothscroll",href:"#about"},s.a.createElement("i",{className:"icon-down-circle"}))))},a}(r.Component)),o=function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){if(this.props.data)var e=this.props.data.social.map(function(e){return s.a.createElement("li",{key:e.name},s.a.createElement("a",{href:e.url},s.a.createElement("i",{className:e.className})))});return s.a.createElement("footer",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("ul",{className:"social-links"},e),s.a.createElement("ul",{className:"copyright"},s.a.createElement("li",null,"© Copyright 2017 Tim Baker"),s.a.createElement("li",null,"Design by ",s.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),s.a.createElement("div",{id:"go-top"},s.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},s.a.createElement("i",{className:"icon-up-open"})))))},a}(r.Component),c=function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,l=this.props.data.address.city,r=this.props.data.address.state,i=this.props.data.address.zip,o=this.props.data.phone,c=this.props.data.email,m=this.props.data.resumedownload;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"three columns"},s.a.createElement("img",{className:"profile-pic",src:a,alt:"Tim Baker Profile Pic"})),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("h2",null,"About Me"),s.a.createElement("p",null,t),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"columns contact-details"},s.a.createElement("h2",null,"Contact Details"),s.a.createElement("p",{className:"address"},s.a.createElement("span",null,e),s.a.createElement("br",null),s.a.createElement("span",null,n,s.a.createElement("br",null),l," ",r,", ",i),s.a.createElement("br",null),s.a.createElement("span",null,o),s.a.createElement("br",null),s.a.createElement("span",null,c))),s.a.createElement("div",{className:"columns download"},s.a.createElement("p",null,s.a.createElement("a",{href:m,className:"button"},s.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))},a}(r.Component),m=function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map(function(e){return s.a.createElement("div",{key:e.school},s.a.createElement("h3",null,e.school),s.a.createElement("p",{className:"info"},e.degree," ",s.a.createElement("span",null,"•"),s.a.createElement("em",{className:"date"},e.graduated)),s.a.createElement("p",null,e.description))}),t=this.props.data.work.map(function(e){return s.a.createElement("div",{key:e.company},s.a.createElement("h3",null,e.company),s.a.createElement("p",{className:"info"},e.title,s.a.createElement("span",null,"•")," ",s.a.createElement("em",{className:"date"},e.years)),s.a.createElement("p",null,e.description))}),n=this.props.data.skills.map(function(e){var a="bar-expand "+e.name.toLowerCase();return s.a.createElement("li",{key:e.name},s.a.createElement("span",{style:{width:e.level},className:a}),s.a.createElement("em",null,e.name))});return s.a.createElement("section",{id:"resume"},s.a.createElement("div",{className:"row education"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Education"))),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("div",{className:"row item"},s.a.createElement("div",{className:"twelve columns"},a)))),s.a.createElement("div",{className:"row work"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Work"))),s.a.createElement("div",{className:"nine columns main-col"},t)),s.a.createElement("div",{className:"row skill"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Skills"))),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("p",null,e),s.a.createElement("div",{className:"bars"},s.a.createElement("ul",{className:"skills"},n)))))},a}(r.Component),u=function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.address.street,t=this.props.data.address.city,n=this.props.data.address.state,l=this.props.data.address.zip,r=this.props.data.phone,i=this.props.data.email,o=this.props.data.contactmessage;return s.a.createElement("section",{id:"contact"},s.a.createElement("div",{className:"row section-head"},s.a.createElement("div",{className:"two columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Get In Touch."))),s.a.createElement("div",{className:"ten columns"},s.a.createElement("p",{className:"lead"},o))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"eight columns"},s.a.createElement("form",{action:"",method:"post",id:"contactForm",name:"contactForm"},s.a.createElement("fieldset",null,s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"contactName"},"Name ",s.a.createElement("span",{className:"required"},"*")),s.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"contactEmail"},"Email ",s.a.createElement("span",{className:"required"},"*")),s.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange}),"/>"),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),s.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange}),"/>"),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"contactMessage"},"Message ",s.a.createElement("span",{className:"required"},"*")),s.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),s.a.createElement("div",null,s.a.createElement("button",{className:"submit"},"Submit"),s.a.createElement("span",{id:"image-loader"},s.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),s.a.createElement("div",{id:"message-warning"}," Error boy"),s.a.createElement("div",{id:"message-success"},s.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",s.a.createElement("br",null))),s.a.createElement("aside",{className:"four columns footer-widgets"},s.a.createElement("div",{className:"widget widget_contact"},s.a.createElement("h4",null,"Address and Phone"),s.a.createElement("p",{className:"address"},e,s.a.createElement("br",null),a," ",s.a.createElement("br",null),t,", ",n," ",l,s.a.createElement("br",null),s.a.createElement("span",null,r),s.a.createElement("span",null,i))),s.a.createElement("div",{className:"widget widget_tweets"},s.a.createElement("h4",{className:"widget-title"},"Latest Tweets"),s.a.createElement("ul",{id:"twitter"},s.a.createElement("li",null,s.a.createElement("span",null,"This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum",s.a.createElement("a",{href:"#"},"http://t.co/CGIrdxIlI3")),s.a.createElement("b",null,s.a.createElement("a",{href:"#"},"2 Days Ago"))),s.a.createElement("li",null,s.a.createElement("span",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",s.a.createElement("a",{href:"#"},"http://t.co/CGIrdxIlI3")),s.a.createElement("b",null,s.a.createElement("a",{href:"#"},"3 Days Ago"))))))))},a}(r.Component),d=function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){if(this.props.data)var e=this.props.data.testimonials.map(function(e){return s.a.createElement("li",{key:e.user},s.a.createElement("blockquote",null,s.a.createElement("p",null,e.text),s.a.createElement("cite",null,e.user)))});return s.a.createElement("section",{id:"testimonials"},s.a.createElement("div",{className:"text-container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"two columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Client Testimonials"))),s.a.createElement("div",{className:"ten columns flex-container"},s.a.createElement("ul",{className:"slides"},e)))))},a}(r.Component),p=function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){if(this.props.data)var e=this.props.data.projects.map(function(e){var a="images/portfolio/"+e.image;return s.a.createElement("div",{key:e.title,className:"columns portfolio-item"},s.a.createElement("div",{className:"item-wrap"},s.a.createElement("a",{href:e.url,title:e.title},s.a.createElement("img",{alt:e.title,src:a}),s.a.createElement("div",{className:"overlay"},s.a.createElement("div",{className:"portfolio-item-meta"},s.a.createElement("h5",null,e.title),s.a.createElement("p",null,e.category))),s.a.createElement("div",{className:"link-icon"},s.a.createElement("i",{className:"fa fa-link"})))))});return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns collapsed"},s.a.createElement("h1",null,"Check Out Some of My Works."),s.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))},a}(r.Component),h=t(172);t.d(a,"Home",function(){return E});var E=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={foo:"bar",resumeData:{}},t}l()(a,e);var t=a.prototype;return t.getResumeData=function(){this.setState({resumeData:h})},t.componentDidMount=function(){this.getResumeData()},t.render=function(){return s.a.createElement("div",null,s.a.createElement(i,{data:this.state.resumeData.main}),s.a.createElement(c,{data:this.state.resumeData.main}),s.a.createElement(m,{data:this.state.resumeData.resume}),s.a.createElement(p,{data:this.state.resumeData.portfolio}),s.a.createElement(d,{data:this.state.resumeData.testimonials}),s.a.createElement(u,{data:this.state.resumeData.main}),s.a.createElement(o,{data:this.state.resumeData.main}))},a}(r.Component);a.default=E},162:function(e,a,t){var n=t(12).f,l=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in l||t(10)&&n(l,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},172:function(e){e.exports={main:{name:"Xu Yang",occupation:"Master Student at University of Melbourne",description:"Passion for learning, Passion for coding, Passion for music",image:"profilepic.jpg",bio:"Student and music fan who is professional in coding.",contactmessage:"Looking foward to hear from you.",email:"danliangchen@gmail.com",phone:"+61-0406139018",address:{street:"CBD",city:"Melbourne",state:"VIC",zip:"3000"},website:"https://eggtronic.github.io.",resumedownload:"https://eggtronic.github.io.",social:[{name:"facebook",url:"https://www.facebook.com/profile.php?id=100027517839124",className:"fa fa-facebook"},{name:"twitter",url:"https://twitter.com/TronicEgg",className:"fa fa-twitter"},{name:"linkedin",url:"https://www.linkedin.com/in/%E6%B4%8B-%E8%AE%B8-78a411148/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/EggTronic",className:"fa fa-github"}]},resume:{skillmessage:"Here you can create a short write-up of your skills to show off to employers",education:[{school:"University of Melbourne",degree:"Masters of Software Engineering",graduated:"July 2020",description:"Main on software engineering, software development and cloud computing."},{school:"University of Liverpool",degree:"Bachelor - First Class Honours Degree of Software Development",graduated:"July 2017",description:"Main on software development and machine learning."}],work:[{company:"Nvidia",title:"Intern",years:"Jan 2018 - May 2018",description:"Data analysis."},{company:"pending",title:"pending",years:"pending",description:"pending."}],skills:[{name:"Git",level:"80%"},{name:"Illustrator",level:"55%"},{name:"ReactJs",level:"70%"},{name:"CSS",level:"90%"},{name:"HTML5",level:"80%"},{name:"VueJs",level:"80%"},{name:"MongoDB",level:"80%"}]},portfolio:{projects:[{title:"Canadian Wanderlust",category:"My Travel Blog for my post-university travels",image:"canadian-wanderlust.jpg",url:"https://www.canadianwanderlust.com"},{title:"Fury Fighting Gear",category:"(offline now) A fighting gear company I started",image:"fury-fighting-gear.jpg",url:"http://www.timbakerdev.com"},{title:"Original Thai Food",category:"Website I built for a restaurant I like in Thailand",image:"original-thai-food.jpg",url:"http://www.timbakerdev.com/originalthaifood.github.io"},{title:"Resume Website",category:"A React based resume website template",image:"resume-website.jpg",url:"http://www.timbakerdev.com"},{title:"Smirkspace",category:"(MVP Only) A React and Meteor based chat University project.",image:"smirkspace.jpg",url:"http://www.smirkspace.com"}]},testimonials:{testimonials:[{text:"Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",user:"Kareem Abdul Jabbar"},{text:"That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",user:"Steve Wozniak... impersonator"}]}}}}]);
//# sourceMappingURL=component---src-pages-home-js-fa9e938a62ed4e5e7605.js.map