(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{403:function(t,e,a){},438:function(t,e,a){"use strict";a(403)},591:function(t,e,a){"use strict";a.r(e);a(438);var s=a(11),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"the-redux-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-redux-api"}},[t._v("#")]),t._v(" The Redux API")]),t._v(" "),a("p",[t._v("The Redux API serves as a singular interface into Redux. You can do virtually anything within Redux via the API with\nsimplicity in mind.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("API Method Names Have Changed")]),t._v(" "),a("p",[t._v("A number of API methods have changed name in Redux 4.x to match PHP naming conventions. There are still shims for the old\nnames, but they will give you a deprecation notice. For a full list of method changes for the API look below at\n"),a("a",{attrs:{href:"#deprecated-methods"}},[t._v("Deprecated Methods")]),t._v(" or the "),a("RouterLink",{attrs:{to:"/guides/other/migration-guide.html"}},[t._v("Redux 4.x Migration & Compatibility")]),t._v(".")],1)]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#history"}},[t._v("History")])]),a("li",[a("a",{attrs:{href:"#usage-and-examples"}},[t._v("Usage and Examples")]),a("ul",[a("li",[a("a",{attrs:{href:"#redux-set-args"}},[t._v("Redux::set_args()")])]),a("li",[a("a",{attrs:{href:"#redux-get-args"}},[t._v("Redux::get_args()")])]),a("li",[a("a",{attrs:{href:"#redux-set-help-tab"}},[t._v("Redux::sethelptab()")])]),a("li",[a("a",{attrs:{href:"#redux-set-help-sidebar"}},[t._v("Redux::sethelpsidebar()")])]),a("li",[a("a",{attrs:{href:"#setting-altering-sections"}},[t._v("Setting & Altering Sections")])]),a("li",[a("a",{attrs:{href:"#setting-altering-fields"}},[t._v("Setting & Altering Fields")])]),a("li",[a("a",{attrs:{href:"#setting-and-fetching-extensions"}},[t._v("Setting and Fetching Extensions")])]),a("li",[a("a",{attrs:{href:"#redux-init"}},[t._v("Redux::init()")])]),a("li",[a("a",{attrs:{href:"#disable-demo-mode-notice"}},[t._v("Disable Demo Mode Notice")])])])]),a("li",[a("a",{attrs:{href:"#available-methods"}},[t._v("Available Methods")]),a("ul",[a("li",[a("a",{attrs:{href:"#deprecated-methods"}},[t._v("Deprecated Methods")])])])])])]),a("p")]),t._v(" "),a("h2",{attrs:{id:"history"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history"}},[t._v("#")]),t._v(" History")]),t._v(" "),a("p",[t._v("Working with Redux in the past was much more cumbersome. Filters, extension loaders, separate arrays, fallback checks.\nNone of these were had in the past. In Redux 3.5+ the API was created to remedy this. It has further been enhanced in\nRedux 4.x+. It is advised to use the new API methods when possible.")]),t._v(" "),a("h2",{attrs:{id:"usage-and-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-and-examples"}},[t._v("#")]),t._v(" Usage and Examples")]),t._v(" "),a("p",[t._v("Redux can have an unlimited number of sessions running at once. Hence, the "),a("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")]),t._v("\nis so crucial. It must be unique, and it is the first variable for the methods within the Redux API.")],1),t._v(" "),a("p",[t._v("For safety reasons, and to ensure Redux has loaded properly, it is advised to put a if statement before you use the API\nin case Redux has not been loaded yet.\ncode.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("class_exists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Redux'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"redux-set-args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-set-args"}},[t._v("#")]),t._v(" Redux::set_args()")]),t._v(" "),a("p",[t._v("This method allows you set set "),a("RouterLink",{attrs:{to:"/configuration/global_arguments.html"}},[t._v("global args")]),t._v(" for your instance of Redux. It's use is required for\nvirtually any Redux instance. An example of how to use it is below.")],1),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$opt_name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'YOUR_OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$args")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt_name'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$opt_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'customizer'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$opt_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$args")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"redux-get-args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-get-args"}},[t._v("#")]),t._v(" Redux::get_args()")]),t._v(" "),a("p",[t._v("This method can take one or two parameters depending on the desired output.")]),t._v(" "),a("h4",{attrs:{id:"fetch-all-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-all-arguments"}},[t._v("#")]),t._v(" Fetch All Arguments")]),t._v(" "),a("p",[t._v("The return value is an array of all global arguments for the "),a("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")]),t._v(" instance.")],1),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$args")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$opt_name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"fetch-a-single-argument"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-a-single-argument"}},[t._v("#")]),t._v(" Fetch a Single Argument")]),t._v(" "),a("p",[t._v("If a key is provided, and that value is set, the single value will be returned, otherwise null is returned.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_arg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$opt_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt_name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The above value will return a text value that will equal the "),a("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")]),t._v(" string value.")],1),t._v(" "),a("h3",{attrs:{id:"redux-set-help-tab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-set-help-tab"}},[t._v("#")]),t._v(" Redux::set_help_tab()")]),t._v(" "),a("p",[t._v("This method requires two parameters, the "),a("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")]),t._v(" string value, followed by an array value of tab data.")],1),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$opt_name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'YOUR_OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tabs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'redux-help-tab-1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Theme Information 1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'content'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'<br />This is the tab content, HTML is allowed.<br />'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'redux-help-tab-2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Theme Information 2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'content'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'<br />This is the tab content, HTML is allowed.<br />'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_help_tab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$opt_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tabs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"redux-set-help-sidebar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-set-help-sidebar"}},[t._v("#")]),t._v(" Redux::set_help_sidebar()")]),t._v(" "),a("p",[t._v("This method requires two parameters. First, the "),a("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("$opt_name")]),t._v(" string value, the second, the\n"),a("code",[t._v("$content")]),t._v(" string value.")],1),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$opt_name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'YOUR_OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'<br />This is the sidebar content, HTML is allowed.<br />'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_help_sidebar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$opt_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"setting-altering-sections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-altering-sections"}},[t._v("#")]),t._v(" Setting & Altering Sections")]),t._v(" "),a("p",[t._v("For full examples of how to use the Redux API with sections, see the "),a("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("sections documentation")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"setting-altering-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-altering-fields"}},[t._v("#")]),t._v(" Setting & Altering Fields")]),t._v(" "),a("p",[t._v("For full examples of how to use the Redux API with fields, see the "),a("RouterLink",{attrs:{to:"/configuration/objects/field.html"}},[t._v("fields documentation")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"setting-and-fetching-extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-and-fetching-extensions"}},[t._v("#")]),t._v(" Setting and Fetching Extensions")]),t._v(" "),a("p",[t._v("For full examples of how to use the Redux API with extensions, see the "),a("RouterLink",{attrs:{to:"/guides/basics/using-extensions.html"}},[t._v("using extensions documentation")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"redux-init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-init"}},[t._v("#")]),t._v(" Redux::init()")]),t._v(" "),a("p",[t._v("This method forces Redux to load at that instance instead of waiting for the init hook as is default with Redux. This is\nuseful if you want to be able to use your Redux values instantly. Beware, doing so too early can cause issues especially\nwith extensions like metaboxes.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$opt_name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'YOUR_OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$opt_name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"disable-demo-mode-notice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable-demo-mode-notice"}},[t._v("#")]),t._v(" Disable Demo Mode Notice")]),t._v(" "),a("p",[t._v("When the Redux "),a("strong",[t._v("plugin")]),t._v(" is activated a "),a("code",[t._v("Activate Demo Mode")]),t._v(" admin notice is displayed allowing users to try the Redux sample\nconfig file. Calling this method will disable that from happening.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disable_demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"available-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-methods"}},[t._v("#")]),t._v(" Available Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Redux::all_instances()")]),t._v(" "),a("td",[t._v("Retrieve all ReduxFramework Instances.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::check_opt_name( $opt_name )")]),t._v(" "),a("td",[t._v("Check opt_name integrity.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::construct_args( $opt_name )")]),t._v(" "),a("td",[t._v("Construct global arguments.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::construct_fields( $opt_name, $section_id )")]),t._v(" "),a("td",[t._v("Construct option panel fields.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::construct_sections( $opt_name )")]),t._v(" "),a("td",[t._v("Construct option panel sections.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::create_redux()")]),t._v(" "),a("td",[t._v("Create Redux instance.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::disable_demo()")]),t._v(" "),a("td",[t._v("Method to disables Redux demo mode popup.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::extension_path( $extension, $folder )")]),t._v(" "),a("td",[t._v("Sets a path to an extension.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::get_arg( $opt_name, $key )")]),t._v(" "),a("td",[t._v("Retrieves a single global argument.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::get_args( $opt_name )")]),t._v(" "),a("td",[t._v("Retrieves option panel global argument array.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::get_extensions( $opt_name, $key )")]),t._v(" "),a("td",[t._v("Gets loaded extensions.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::get_field( $opt_name, $id )")]),t._v(" "),a("td",[t._v("Retrieves an option panel field.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::get_file_version( $file )")]),t._v(" "),a("td",[t._v("Retrieve metadata from a file. Based on WP Core's get_file_data function")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::get_instance_extension( $opt_name, $instance )")]),t._v(" "),a("td",[t._v("Gets all loaded extension for the passed ReduxFramework instance.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::get_option( $opt_name, $key, $default )")]),t._v(" "),a("td",[t._v("Retrieves single option from the database.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::get_post_meta( $opt_name, $the_post, $key, $default )")]),t._v(" "),a("td",[t._v("Retrieves meta for a given post page, IE WordPress meta values")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::get_priority( $opt_name, $type )")]),t._v(" "),a("td",[t._v("Get next availability priority for field/section.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::get_section( $opt_name, $id )")]),t._v(" "),a("td",[t._v("Retrieve panel section.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::get_sections( $opt_name )")]),t._v(" "),a("td",[t._v("Retrieve all sections from the option panel.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::hide_field( $opt_name, $id, $hide )")]),t._v(" "),a("td",[t._v("Hides an option panel field.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::hide_section( $opt_name, $id, $hide )")]),t._v(" "),a("td",[t._v("Hides an option panel section.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::init( $opt_name )")]),t._v(" "),a("td",[t._v("Init Redux object")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::instance( $opt_name )")]),t._v(" "),a("td",[t._v("Retrieve ReduxFramework object.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::load()")]),t._v(" "),a("td",[t._v("Code to run at creation in instance.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::loadExtensions( $redux_framework )")]),t._v(" "),a("td",[t._v("Load external extensions.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::load_extensions( $redux_framework )")]),t._v(" "),a("td",[t._v("Load external extensions.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::load_redux( $opt_name )")]),t._v(" "),a("td",[t._v("Load Redux Framework.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::remove_demo()")]),t._v(" "),a("td",[t._v("Callback used by Redux::disable_demo() to remove the demo mode notice from Redux.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::remove_field( $opt_name, $id )")]),t._v(" "),a("td",[t._v("Removes an option panel field.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::remove_section( $opt_name, $id, $fields )")]),t._v(" "),a("td",[t._v("Remove option panel by ID.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::set_args( $opt_name, $args )")]),t._v(" "),a("td",[t._v("Sets option panel global arguments.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::set_developer( $opt_name, $arg )")]),t._v(" "),a("td",[t._v("Set's developer key for premium services.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::set_extensions( $opt_name, $path, $force )")]),t._v(" "),a("td",[t._v("Sets all extensions in path.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::set_field( $opt_name, $section_id, $field )")]),t._v(" "),a("td",[t._v("Creates an option panel field and adds to a section.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::set_fields( $opt_name, $section_id, $fields )")]),t._v(" "),a("td",[t._v("Create multiple fields of the option panel and apply to a section.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::set_help_sidebar( $opt_name, $content )")]),t._v(" "),a("td",[t._v("Sets the help sidebar content.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::set_help_tab( $opt_name, $tab )")]),t._v(" "),a("td",[t._v("Sets help tabs on option panel admin page.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::set_option( $opt_name, $key, $option )")]),t._v(" "),a("td",[t._v("Sets an option into the database.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::set_section( $opt_name, $section, $replace )")]),t._v(" "),a("td",[t._v("Sets a single option panel section.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::set_sections( $opt_name, $sections )")]),t._v(" "),a("td",[t._v("Create multiple sections of the option panel.")])])])]),t._v(" "),a("h3",{attrs:{id:"deprecated-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-methods"}},[t._v("#")]),t._v(" Deprecated Methods")]),t._v(" "),a("p",[t._v("A number of these methods were deprecated with Redux 4.x due to naming standards. Shims still exist for all of them, but\na deprecation notice will be provided if used and in "),a("RouterLink",{attrs:{to:"/configuration/global_arguments.html#dev_mode"}},[t._v("dev_mode")]),t._v(".")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Redux::createRedux()")]),t._v(" "),a("td",[t._v("Deprecated Create Redux instance.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::extensionPath( $extension, $folder )")]),t._v(" "),a("td",[t._v("Deprecated function to set extension path.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::getArg( $opt_name, $key )")]),t._v(" "),a("td",[t._v("Deprecated Retrieves a single global argument.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::getArgs( $opt_name )")]),t._v(" "),a("td",[t._v("Deprecated Retrieves option panel global argument array.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::getExtensions( $opt_name, $key )")]),t._v(" "),a("td",[t._v("Deprecated Gets loaded extensions.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::getField( $opt_name, $id )")]),t._v(" "),a("td",[t._v("Deprecated Retrieves an option panel field.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::getOption( $opt_name, $key, $default )")]),t._v(" "),a("td",[t._v("Deprecated Retrieves single option from the database.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::getSection( $opt_name, $id )")]),t._v(" "),a("td",[t._v("Deprecated Retrieve panel section.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::getSections( $opt_name )")]),t._v(" "),a("td",[t._v("Deprecated Retrieve all sections from the option panel.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::hideField( $opt_name, $id, $hide )")]),t._v(" "),a("td",[t._v("Deprecated Hides an option panel field.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::hideSection( $opt_name, $id, $hide )")]),t._v(" "),a("td",[t._v("Deprecated Hides an option panel section.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::loadRedux( $opt_name )")]),t._v(" "),a("td",[t._v("Deprecated function of Load Redux Framework.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::removeField( $opt_name, $id )")]),t._v(" "),a("td",[t._v("Deprecated Removes an option panel field.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::removeSection( $opt_name, $id, $fields )")]),t._v(" "),a("td",[t._v("Deprecated Remove option panel by ID.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::setArgs( $opt_name, $args )")]),t._v(" "),a("td",[t._v("Deprecated Sets option panel global arguments.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::setExtensions( $opt_name, $path )")]),t._v(" "),a("td",[t._v("Deprecated Sets all extensions in path.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::setField( $opt_name, $section_id, $field )")]),t._v(" "),a("td",[t._v("Deprecated Creates an option panel field.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::setHelpSidebar( $opt_name, $content )")]),t._v(" "),a("td",[t._v("Deprecated Sets the help sidebar content.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::setHelpTab( $opt_name, $tab )")]),t._v(" "),a("td",[t._v("Deprecated Sets help tabs on option panel admin page.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::setOption( $opt_name, $key, $option )")]),t._v(" "),a("td",[t._v("Deprecated Sets an option into the database.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::setSection( $opt_name, $section )")]),t._v(" "),a("td",[t._v("Deprecated Sets a single option panel section.")])]),t._v(" "),a("tr",[a("td",[t._v("Redux::setSections( $opt_name, $sections )")]),t._v(" "),a("td",[t._v("Deprecated Create a section of the option panel.")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);