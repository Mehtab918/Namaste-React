# Namaste React 

A bundler in react.js is a tool which allows to package code into a single file or bundle. Due to this size of code will reduce and so performance of application will improve. Common bundlers used with React are Webpack and Parcel.

In package.json, the tilde (~) and caret (^) symbols are used to specify the version range for dependencies, controlling how updates are handled when we run npm install.

What is the meaning of caret and tilde in package json?
Tilde allows only the patch version upgrades avoiding the minor updates while caret allows updates to patch as well as minor versions.



we can bring React into our project by using two ways:

a) using npm install react - is used to install react.  --> Recomended
b) using CDN links: <!-- <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>  -->

b option is not a good way to bring react to our project. 

# Parcel

- Dev build
- Creating local server
- HMR ( Hot Module Replacement) - ( automatically refresh or reload the page after save )
- File Watching Algorithm- written in C++
- Cache- Faster build (Parcel-cache)
- Image Optimization
- Minification 
- Compressing file
- Bundling(bundle the file )
- Content Hashing 
- Code splitting
- Differential Bundling( support order version - browserList)
- Error handling
- Diagnostic
- Hosting app in Https Env
- Tree Shaking Algorithm - remove unused code from App.

# JSX
JSX and HTML both are like same on syntax base but both are differemt.
JSX is not the part of React.
We can build projects without JSX also , but we should not do that. Good way is to use it.

Facebook developer introduce JSX to resolve nested issue of creating elements in react.

JSX(transpiled before it reaches to JS )-> Parcel is giving responsibilty to Babel library.


JSX => React.createElement=> ReactElement- Js Object => HtmlElement(render)
Summary => At the end of the JSX is React.creatElement and it is Js object until it is not get rendered and become html element.

NOTE: we can also create React Element using JSX - no longer use of React.createElement

//Below code is JSX not HTML.
/* const head=<h1 className="head">Hello React js </h1> */

// JSX => Babel transpiled above code to React.createElement in background.
 const head = React.createElement("h1",{"className"="head"},"Hello React Js")  
 
 

# Babel
Babel is a beautiful library which converts JSX code to React code.
Babel library converts the JSX code to React code .
Babel transpiled it to React.createElement .
IT is perfect compiler that makes Javascript backward compatible.
Use new feature in our development mode and convert stable old version which supports everywhere.

Babel can do many things: 
--------------------------
-transforms syntax
-source code transformation
- convert JSX syntax.