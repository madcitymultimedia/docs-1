(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{597:function(t,s,e){"use strict";e.r(s);var a=e(11),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"using-the-output-variables-argument"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-output-variables-argument"}},[t._v("#")]),t._v(" Using the "),e("code",[t._v("output_variables")]),t._v(" Argument")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Requires Redux v4.0.3+")])]),t._v(" "),e("p",[t._v("The argument is related to the "),e("RouterLink",{attrs:{to:"/configuration/fields/output.html"}},[t._v("output")]),t._v(" argument, but has a slightly different focus. The purpose is to\nprovide dynamic variables in a way that can be used by standard CSS as well as LESS/SCSS compilers.")],1),t._v(" "),e("p",[t._v("All generated variables will use the following naming strategy:")]),t._v(" "),e("ul",[e("li",[t._v("If field produces an array: "),e("code",[t._v("{prefix}{field_id}-{key}")])]),t._v(" "),e("li",[t._v("If field produces a string: "),e("code",[t._v("{prefix}{field_id}")])])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("{prefix}")]),t._v(" will vary depending on the method you are using "),e("code",[t._v("output_variables")]),t._v(" as. Namely, as "),e("a",{attrs:{href:"#using-with-css-variables"}},[t._v("CSS variables")]),t._v(" or "),e("a",{attrs:{href:"#using-with-the-compiler-hook"}},[t._v("using\nthe compiler hook")]),t._v(" with a SCSS/LESS compiler.")]),t._v(" "),e("p",[t._v("To enable, add this code "),e("code",[t._v("'output_variables' => true")]),t._v(" to the "),e("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("section")]),t._v(" or\n"),e("RouterLink",{attrs:{to:"/configuration/objects/field.html"}},[t._v("field")]),t._v(" object you want. If set to the "),e("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("section")]),t._v(" level, all fields that\ncan be used will have the value applied.")],1),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#supported-arguments"}},[t._v("Supported Arguments")])]),e("li",[e("a",{attrs:{href:"#using-with-css-variables"}},[t._v("Using with CSS Variables")])]),e("li",[e("a",{attrs:{href:"#using-with-the-compiler-hook"}},[t._v("Using with the Compiler Hook")]),e("ul",[e("li",[e("a",{attrs:{href:"#changing-the-compiler-variables-prefix"}},[t._v("Changing the Compiler Variables Prefix")])])])]),e("li",[e("a",{attrs:{href:"#example-config"}},[t._v("Example Config")]),e("ul",[e("li",[e("a",{attrs:{href:"#example-generated-css-variables"}},[t._v("Example Generated CSS Variables")])]),e("li",[e("a",{attrs:{href:"#example-generated-compiler-variables"}},[t._v("Example Generated Compiler Variables")])])])]),e("li",[e("a",{attrs:{href:"#using-output-variables-with-the-required-required-argument"}},[t._v("Using output_variables with the required Argument")])])])]),e("p")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Supported Field Types")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/core-fields/background.html"}},[t._v("background")]),t._v(" | "),e("RouterLink",{attrs:{to:"/core-fields/border.html"}},[t._v("border")]),t._v(" | "),e("RouterLink",{attrs:{to:"/core-fields/color.html"}},[t._v("color")]),t._v(" | "),e("RouterLink",{attrs:{to:"/core-fields/color-gradient.html"}},[t._v("color_gradient")]),t._v(" | "),e("RouterLink",{attrs:{to:"/core-fields/color-rgba.html"}},[t._v("color_rgba")]),t._v(" | "),e("RouterLink",{attrs:{to:"/core-fields/dimensions.html"}},[t._v("dimensions")]),t._v(" | "),e("RouterLink",{attrs:{to:"/core-fields/link-color.html"}},[t._v("link_color")]),t._v(" | "),e("RouterLink",{attrs:{to:"/core-fields/slider.html"}},[t._v("slider")]),t._v(" | "),e("RouterLink",{attrs:{to:"/core-fields/spacing.html"}},[t._v("spacing")]),t._v(" | "),e("RouterLink",{attrs:{to:"/core-fields/spinner.html"}},[t._v("spinner")]),t._v(" | "),e("RouterLink",{attrs:{to:"/core-fields/text.html"}},[t._v("text")]),t._v(" | "),e("RouterLink",{attrs:{to:"/core-fields/typography.html"}},[t._v("typography")])],1)]),t._v(" "),e("h2",{attrs:{id:"supported-arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-arguments"}},[t._v("#")]),t._v(" Supported Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("div",{staticStyle:{width:"280px"}},[t._v("Name")])]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("output_variables")])]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Can be set at the section or field object levels. When set to true, values will be appended to generated CSS.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ouput_variables_prefix")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("--")])]),t._v(" "),e("td",[t._v("Can be set at the global args, section, or field object levels.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("compiler_ouput_variables_prefix")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("$")])]),t._v(" "),e("td",[t._v("For use with the compiler hook. An array of output variables is passed to the compiler hook.")])])])]),t._v(" "),e("h2",{attrs:{id:"using-with-css-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-with-css-variables"}},[t._v("#")]),t._v(" Using with CSS Variables")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.w3schools.com/css/css3_variables.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Variables"),e("OutboundLink")],1),t._v(" are a powerful way to use modern design practices and\nCSS. By using them, your CSS line count can be greatly reduced. Redux can auto-generate these variables and append them\nto the "),e("code",[t._v(":root{}")]),t._v(" selector of your page dynamically.")]),t._v(" "),e("p",[t._v("See the below "),e("a",{attrs:{href:"#example-generated-css-variables"}},[t._v("Example Generated CSS Variables")]),t._v(" for example use.")]),t._v(" "),e("h2",{attrs:{id:"using-with-the-compiler-hook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-with-the-compiler-hook"}},[t._v("#")]),t._v(" Using with the Compiler Hook")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("This is a dangerous approach since PHP based SCSS/LESS compilers are quite memory intensive. Users on shared hosting\nenvironments will have issues. It is STRONGLY advised to use CSS variables for greater stability.")])]),t._v(" "),e("p",[t._v("If you prefer to use a LESS/SCSS compiler you may want to use generated variables to prepend to your SCSS files. To\nenable this option, the Redux compiler hook will return an array of prepared variables. You may need to alter the prefix\nto match your compiler of choice.")]),t._v(" "),e("h3",{attrs:{id:"changing-the-compiler-variables-prefix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-compiler-variables-prefix"}},[t._v("#")]),t._v(" Changing the Compiler Variables Prefix")]),t._v(" "),e("p",[t._v("By default, the global argument "),e("code",[t._v("compiler_ouput_variables_prefix")]),t._v(" is set to "),e("code",[t._v("$")]),t._v(" which works for SCSS. If you are using\nLESS, you will need to run the following to properly generate your variables in a way that can be used by your compiler.\nBy so doing, your variables will be properly prefixed with the "),e("code",[t._v("@")]),t._v(" symbol which is what LESS requires.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setArgs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'YOUR_OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'compiler_ouput_variables_prefix'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'@'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"example-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-config"}},[t._v("#")]),t._v(" Example Config")]),t._v(" "),e("p",[t._v("For this example, we'll use the border field, found in the\n"),e("a",{attrs:{href:"https://github.com/ReduxFramework/redux-framework/blob/master/sample/sample-config.php"}},[t._v("sample-config.php")]),t._v(".\nTo pass only a CSS selector and have Redux generate the CSS, use the "),e("RouterLink",{attrs:{to:"/configuration/fields/output.html"}},[t._v("output")]),t._v(" argument instead.")],1),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-header-border'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'border'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Header Border Option'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'subtitle'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Subtitle goes here'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'output_variables'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'desc'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'This is the description field.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'border-color'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'#1e73be'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'border-style'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'solid'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'border-top'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'3px'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'border-right'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'3px'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'border-bottom'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'3px'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'border-left'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'3px'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("h3",{attrs:{id:"example-generated-css-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-generated-css-variables"}},[t._v("#")]),t._v(" Example Generated CSS Variables")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Redux will generate these variables on a single line. The example below is expanded for display purposes only.")])]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("--site-header-border-top")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3px solid #1e73be"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("--site-header-border-right")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3px solid #1e73be"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("--site-header-border-bottom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3px solid #1e73be"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("--site-header-border-left")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3px solid #1e73be"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("To use a generated variable for a field with ID "),e("code",[t._v("header_color")]),t._v(" of field type "),e("code",[t._v("color")]),t._v(", you would use the following in your\nCSS files:")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".header_selector")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" --header_color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#fff"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The second value is CSS "),e("code",[t._v("val()")]),t._v(" function is the fallback value and is not required.")])]),t._v(" "),e("h3",{attrs:{id:"example-generated-compiler-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-generated-compiler-variables"}},[t._v("#")]),t._v(" Example Generated Compiler Variables")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("This is a dangerous approach since PHP based SCSS/LESS compilers are quite memory intensive. Users on shared hosting\nenvironments will have issues. It is STRONGLY advised to use CSS variables for greater stability.")])]),t._v(" "),e("p",[t._v("Below is a full example of a compiler hook to generate your SCSS/LESS on save. The content of $output_variables will be\npopulated with the following provided the above Example Config is used.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'$opt-typography-body-color'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'#dd9933'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'$opt-typography-body-font-size'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'30px'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'$opt-typography-body-font-family'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Arial, Helvetica, sans-serif'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'$opt-typography-body-font-weight'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Normal'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("By default the global argument "),e("code",[t._v("compiler_ouput_variables_prefix")]),t._v(" is set to work with SCSS. See\n"),e("a",{attrs:{href:"#changing-the-compiler-variables-prefix"}},[t._v("Changing the Compiler Variables Prefix")]),t._v(" to change the prefix to your\ncompiler's requirements.")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("your_css_compiler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$options")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$css")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$changed_values")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$output_variables")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$variables")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('";\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$output_variables")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO: Append $variables to your SCSS/LESS and compile then write out.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'redux/options/YOUR_OPT_NAME/compiler'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your_css_compiler'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The integer 4 is important to get the extra variables.")]),t._v("\n")])])]),e("h2",{attrs:{id:"using-output-variables-with-the-required-argument"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-output-variables-with-the-required-argument"}},[t._v("#")]),t._v(" Using "),e("code",[t._v("output_variables")]),t._v(" with the "),e("a",{attrs:{href:"./required"}},[t._v("required")]),t._v(" Argument")]),t._v(" "),e("p",[t._v('If a field is not "visible" due to an unmet '),e("a",{attrs:{href:"./required"}},[t._v("required")]),t._v(" statement, the generated CSS variables for fields in\nthis state will not be appended to the page. By so doing the output is easier to manage. Be mindful of this when using\nthese two arguments together.")])])}),[],!1,null,null,null);s.default=r.exports}}]);