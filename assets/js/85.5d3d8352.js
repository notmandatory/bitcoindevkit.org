(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{443:function(e,t,i){"use strict";i.r(t);var a=i(7),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("This article explores the reasons why the Bitcoin Dev Kit Foundation supports a number of language bindings libraries as part of its core offering, and the challenges and decision tradeoffs we face along the way.")]),e._v(" "),t("p",[e._v('We build language bindings for a number of use cases. One of the most common of those rests on a belief that as time goes on, applications of all kinds will need to interact with the bitcoin protocol. Many of those will be applications that are not "bitcoin-first" like wallets, but rather other kinds of applications that simply wish to integrate payments for their users (games, chat applications, content creation, etc.). These applications already have well-developed codebases and teams, seldom built entirely in Rust (BDK\'s first and core language). Our goal is to offer these teams and applications an all-inclusive dependency they can add to whatever technology stack they are using in production, and allow the integration of bitcoin-related capabilities without the need to completely change their tech stack or require the hire of full-time bitcoin experts.')]),e._v(" "),t("p",[e._v("Why not simply use libraries that are available in the specific languages? We think the bitcoin development kit is special (of course we do!) for a few reasons:")]),e._v(" "),t("ol",[t("li",[e._v("The level of review and number of in-production applications in bitcoin that use the Rust bitcoin ecosystem of libraries is unparalleled (rust-bitcoin, rust-miniscript, and bdk).")]),e._v(" "),t("li",[e._v("For the reason above, it is most often the case that new features and BIPs are available in Rust first (taproot, miniscript, etc.) and take years to appear on other tech stacks.")])]),e._v(" "),t("h2",{attrs:{id:"awesome-producing-bindings-must-be-easy-right"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#awesome-producing-bindings-must-be-easy-right"}},[e._v("#")]),e._v(" Awesome! Producing Bindings Must Be Easy Right?")]),e._v(" "),t("p",[e._v("Along the way, "),t("em",[e._v("actually")]),e._v(" producing language bindings for a variety of languages is no easy feat. Here are some of the challenges we face:")]),e._v(" "),t("ol",[t("li",[e._v("We create bindings for many languages in one fell swoop with a Rust tool called "),t("a",{attrs:{href:"https://github.com/mozilla/uniffi-rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("uniffi"),t("OutboundLink")],1),e._v(". The result is that for the work of 1 language, we actually get a few: Swift, Kotlin (works for JVM server-side and on Android), Java, Python. The Kotlin and Swift languages can in turn be combined to create React Native and Flutter libraries.")]),e._v(" "),t("li",[e._v("The goal of the bindings is not to provide all the complexity available in the Rust libraries (this would simply be out-of-scope for us). We basically need to strike a balance and generate a unified API that contains and combines 8 Rust libraries: rust-bitcoin, rust-miniscript, bdk_wallet, bdk_chain, bdk_file_store, and the electrum-client, esplora-client, and rpc-client libraries). This is required because it is impractical to produce bindings libraries for all of the above individually. The final bindings libraries are centered around the bdk_wallet API, and supporting its most common use cases for mobile clients.")]),e._v(" "),t("li",[e._v("Point 2 above has interesting implications: while developers using Rust can simply import any number of those libraries in their projects, we must expose as much (and as little) as is required.")]),e._v(" "),t("li",[e._v("A few caveats give us interesting puzzles we need to juggle with as we design and develop the language bindings libraries:\n"),t("ul",[t("li",[e._v('We cannot expose Rust generics using uniffi. This means that in practice, we need to remove all generics from the Rust API (either by not exposing the underlying construct or by exposing all—or the most important—of its variants as concrete structs). In this process, some of the complexity and beauty of the Rust language and Rust-based codebases is "erased".')]),e._v(" "),t("li",[e._v("Because the Rust code must be exposed in a variety of languages, some of the most Rust-specific constructs cannot be expressed in the bindings libraries. Things like functions that return tuples and tuple structs do not have Kotlin/Swift/Python equivalents, and must therefore be wrapped in some way, changing the shape of the Rust API slightly.")])])])]),e._v(" "),t("p",[t("em",[e._v("Note:")]),e._v(" The "),t("a",{attrs:{href:"https://github.com/LtbLightning/bdk-rn",target:"_blank",rel:"noopener noreferrer"}},[e._v("bdk-rn"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/LtbLightning/bdk-flutter",target:"_blank",rel:"noopener noreferrer"}},[e._v("bdk-flutter"),t("OutboundLink")],1),e._v(" are closely related projects. The React Native library uses the bdk-swift and bdk-android libraries and simply wraps them in a way that allows React Native users to leverage them, while the bdk-flutter library is build using a separate tool called "),t("a",{attrs:{href:""}},[e._v("rust-flutter-bridge")]),e._v(", and is not a direct descendant of the uniffi-based libraries, although it follows a similar API.")])])}),[],!1,null,null,null);t.default=s.exports}}]);